// ////////////////////////
// MODULE/LIBRARY IMPORT
// ////////////////////////

const models = require('./../models');
const { User } = models.User;

// ////////////////////////
// HELPERS
// ////////////////////////

// Store the session account as the authenticated user.
const assignSessionUser = (req, user) => {
    req.session.account = User.toAPI(user);
    return user;
};

// Redirect to specified the path.
const redirect = (res, path) => {
    return res.json({ redirect: path });
};

// Check if user exists.
const userExists = (username, callback) => {
    return User.findByUsername(username, (err, user) => {
        return callback(!(err || !user), user);
    }); 
};

// Hash the user data.
const hashUserData = (username, rawPassword) => {
    return new Promise((resolve, reject) => {

        const data = {
            username: username,
            salt: undefined,
            password: undefined,            
        }

        return User.generateSalt(rawPassword, (err, salt, hash) => {
            if(err) { return reject(err); }
            data.salt = salt;
            data.hash = hash;
            return resolve(data);
        });

    });
};

// Save new user instance.
const createUser = (hashData) => {
    return new Promise((resolve, reject) => {

        // If the hash data is missing anything, reject.
        if(!hashData || !hashData.username || !hashData.salt || !hashData.hash) {
            return reject(new Error("Missing data for user instance."));
        }

        // Create the instance.
        const user = new User(hashData);

        // Return the save promise.
        return user.save();

    });
};

// ////////////////////////
// ACTIONS
// ////////////////////////

// Authenticate as existing user.
const login = (req, res) => {
    
    // Request should have username and password.
    if(!req.body.username || !req.body.password) {
        return res.status(400).json({ error: "Missing fields." });
    }

    // Sanitize inputs.
    const input = {
        username: `${req.body.username}`,
        rawPassword: `${req.body.password}`
    };

    console.dir(User);

    // Attempt to authenticate.
    return User.authenticate(input.username, input.rawPassword, (err, user) => {
        
        // If err is truthy, or user falsey, we did not authenticate.
        if(err || !user) {  
            // Check if user of that username exists.
            return userExists(input.username, (exists) => {
                return res.status(401).json({ error: `${(exists) ? "Wrong password." : "Wrong username or password." }` });
            });         
        }

        assignSessionUser(req, user);
        return redirect(res, '/dashboard');
    });

};

// Create new user.
const signup = (req, res) => {

    // Request should have username, password, and verified password.
    if(!req.body.username || !req.body.password || !req.body.verifyPassword) {
        return res.status(400).json({ error: "Missing fields." });
    }

    // Sanitize inputs.
    const input = {
        username: `${req.body.username}`,
        rawPassword: `${req.body.password}`,
        verifyPassword: `${req.body.verifyPassword}`,
    };

    // Validate input.
    if(input.rawPassword !== input.verifyPassword){
        return res.status(400).json({ error: "Passwords do not match." });
    }

    // Success on save.
    const onSuccess = (user) => {
        assignSessionUser(req, user);
        return redirect(res, '/dashboard');
    };

    // Error on save.
    const onError = (err) => {
        // Error from MongoDB.
        if (err.code === 11000) {
            return res.status(400).json({ error: 'Username already in use.' });
        }

        // Unknown error.
        return res.status(400).json({ error: 'An error occured.' });
    };

    return hashUserData(input.username, input.rawPassword).then((hashData) => {
        return createUser(hashData);
    }).then((user) => { 
        onSuccess(user)
    }).catch((err) => {
        onError(err)
    });

};

// Sign out of the session.
const logout = (req, res) => {
    req.session.destroy();
    redirect(res, "/home");
};

// ////////////////////////
// MODULE EXPORTS
// ////////////////////////
module.exports = {
    login,
    signup,
    logout
}