// ////////////////////////
// MODULE/LIBRARY IMPORT
// ////////////////////////

const models = require('../server/models');

// ////////////////////////
// MEMBER INIT
// ////////////////////////

// Aliases for the models.
const User = models.User.UserModel;
const Poll = models.Poll.PollModel;
const Vote = models.Vote.VoteModel;
const Choice = models.Choice.ChoiceModel;

// Test seed data for the different models.
const seed = {
    user: {
        username: 'test',
        rawPassword: 'password',
    },
    poll: {
        title: "Where should I get lunch today?",
        description: "I'm thinking of something spicy.",
    },
    options: [ 
        { body: "Olive Garden" }, 
        { body: "Applebees" }, 
        { body: "I'm Socially Distant Right Now."}
    ],
};

// ////////////////////////
// UTILITY FUNCTIONS
// ////////////////////////

// Helper functions for the test suites.

// (Promise). Generate a hash and salt.
const generateHashSalt = ({ rawPassword }) => {

    // Ensure a password was passed in.
    if(!rawPassword.length) { return Promise.reject(new Error("No password supplied.")); }

    // If password valid input, generate the salt and hash. 
    return new Promise((resolve, reject) => {
        // Generate the salt and hash.
        User.generateSalt(rawPassword, (err, salt, hash) => {
            if(err) { return reject(err); }
            resolve({salt, hash});
        });
    });

};

// (Promise). Create and return a user.
const createUser = ({ username, rawPassword }) => {    

    // Validate input data.
    if(!username || !rawPassword) {
        return Promise.reject(new Error("No username or password provided."));
    }

    // Pair the data.
    const data = {
        username,
        rawPassword,
        salt: undefined,
        password: undefined,
    }

    // Return the promise.
    return generateHash(data).then((err, {salt, hash}) => {
        if(err) { throw err; }
        data.salt = salt;
        data.hash = hash;
        return data;
    }).then((userData) => {
        return new User(userData);
    }).catch((reason) => { throw reason; });

    /* return new Promise((resolve, reject) => {
        generateSalt(data).then((err, {salt, hash}) => {
            if(err) { return reject(err); }
            data.salt = salt;
            data.hash = hash;
            resolve(null, new User(data));
        }).catch((reason) => reject(reason));
    }); */

};

// (Promise). Create a series of users.
const createUsers = (users) => {

    // Validate the input.
    if(!users || users.constructor !== Array) {
        return Promise.reject(new Error("Array of user data not provided."))
    }

    // No users to seed, so return empty array in return.
    if(users.length === 0) {
        return Promise.resolve([]);
    }

    // Remember, each Promise.then() returns a promise!
    return Promise.all(users.map((partialData) => {
        // Each element is data but without the salt and hash.
        // We'll need to populate each of the elements with the salt and hash.
        // For a map -> Promise.all, we just need to return what the map usually would.
        // In this case, it should return a single populated element if possible.
        // BUT, since we need to call an async function to get the salt,
        // we can just return the promise, expecting that we'll appropriately set the 
        // data up from the then attached to it. (Remember, then returns a promise,
        // and the handler can carry the rest).    

        return generateHashSalt(partialData).then(({salt, hash}) => {
            return({ // this gets passed back up to the map -> [*] -> Promise.all().then([*]).
                username: partialData.username,
                salt: salt,
                password: hash,
            });
        });
    })).then((userDataset) => {
        // Each element is data with salt+hash.
        // Returns a promise that resolves with an array of Users.
        return Promise.all(userDataset.map((userData) => {
            return new User(userData);
        }));
    });

};

// (Promise). Create polls.
const createPolls = (polls) => {

    // Validate the input.
    if(!polls || polls.constructor !== Array) {
        return Promise.reject(new Error("Array of poll data not provided."))
    }

    // No polls to seed, so return empty array in return.
    if(polls.length === 0) {
        return Promise.resolve([]);
    }
    
    return Promise.all(polls.map((pollData) => {
        return new Poll(pollData);
    }));

};

// (Promise). Get user.
const findUser = ({ username }) => {

    // Validate input data.
    if(!username) {
        return Promise.reject(new Error("No username provided."));
    }

    // Return the promise.
    return new Promise((resolve, reject) => {

        User.findByUsername(username, (queryError, user) => {
            if(queryError) { return reject(queryError); }
            if(!user.length) { return reject(new Error("Query sucessful. No users.")); }
            return resolve(user);
        });

    });

}

// (Promise). Save a user to the database.
const saveUser = (user) => {

    // Validate the input data.
    if(!user || !user.username || !user.salt || !user.password || !user.save) {
        return Promise.reject(new Error("No User provided."));
    }

    // Save the user.
    return user.save();

};

// (Promise). Save a collection of users.
const saveUsers = (users) => {

    // Validate the input.
    if(!users || users.constructor !== Array) {
        return Promise.reject(new Error("Array of user data not provided."))
    }

    // Map through all of the users. Return a promise for each one.
    return Promise.all(users.map((user) => {        
        return saveUser(user); // (Will reject, if user is not of appropriate type.)
    }));

};

// Clear all users.
const clearUsers = () => {

    return new Promise((resolve, reject) => {        
        // Delete Users.
        User.deleteMany({}, (err, res) => {
            if(err) { return reject(err); }
            if(res && res.ok !== 1) { return reject(new Error("Bad response.")); }
            resolve(res);
        });
    });

}

// Clear all polls.
const clearPolls = () => {
 
    return new Promise((resolve, reject) => {        
        // Delete Polls.
        Poll.deleteMany({}, (err, res) => {
            if(err) { return reject(err); }
            if(res && res.ok !== 1) { return reject(new Error("Bad response.")); }
            resolve(res);
        });
    });

};



// ////////////////////////
// MODULE EXPORTS
// ////////////////////////

module.exports = {
    User,
    Poll,
    Vote,
    Choice,
    seed,
    actions: {
        user: {
            create: createUser,
            createAll: createUsers,
            find: findUser,
            save: saveUser,
            saveAll: saveUsers,
            clearAll: clearUsers,
        },
        poll: {
            createAll: createPolls,
            clearAll: clearPolls,
        }
    }
};