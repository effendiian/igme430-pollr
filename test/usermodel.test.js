// ////////////////////////
// MODULE/LIBRARY IMPORT
// ////////////////////////

const expect = require('expect.js');
const User = require('./../server/models').User.UserModel;

// ////////////////////////
// USERMODEL TESTS
// ////////////////////////

describe("test user model", () => {

    // ////////////////////////
    // MEMBER INIT

    // Test user data, used to populate the database.
    const test = {
        model: undefined,
        username: "test",
        rawPassword: "password",
        salt: undefined,
        password: undefined
    }

    // ////////////////////////
    // HOOKS

    // Executed after the last test in this block.
    before("dropping the user collection.", (done) => {
        User.deleteOne({ username: test.username }, (err) => {
            done();
        });
    });

    // ////////////////////////
    // TESTS

    it('# should create a user (create)', (done) => {
        
        // Pre-condition:
        // - connected to the database already.
        // - model instance, salt, and hash are all undefined.

        // Get the inputs.
        expect(test.model).to.be(undefined);
        expect(test.salt).to.be(undefined);
        expect(test.password).to.be(undefined);

        // Test the creation of the user. (Called by generateSalt below).
        const createUser = (userData) => {

            // Assign test user value.
            test.model = new User(userData);

            // Assert values.
            expect(test.model).to.be.ok(); // Should be non-null.
            expect(test.model).to.be.a(User); // Should be of type user.
            expect(test.model).to.have.property("username");
            expect(test.model).to.have.property("password");
            expect(test.model).to.have.property("salt");

            // If the user has been created, it's done.
            done();

        };

        // Get the password.
        User.generateSalt(test.rawPassword, (err, salt, hash) => {
            
            // If there is an error, throw it.
            if(err) { throw err; }

            // Expect salt and hash to not be undefined.
            expect(salt).to.be.ok();
            expect(hash).to.be.ok();

            test.salt = salt;
            test.password = hash;

            createUser({
                username: test.username,
                password: test.password,
                salt: test.salt
            });
        });
        
    });

    it(`# should save user '${test.username}' to the database (create)`, (done) => {
        
        // Pre-condition: 
        // - Test User exists.
        // - Matching user doesn't already exist in the collection.

        // Should expect that the user data exists first.
        expect(test.model).to.not.be(undefined);
        expect(test.model).to.be.ok();
        expect(test.model.isNew).to.be(true);

        // Attempt to save the user.
        test.model.save((err) => {
            if(err) { throw err; }
            expect(test.model.isNew).to.be(false);
            done();
        });

    });
    
    it(`# should query database for user '${test.username}' (read)`, (done) => {
        
        // Pre-condition:
        // - Test User is already in the database.

        // Test User should have already been created.
        expect(test.model).to.be.ok();

        User.findByUsername(test.username, (err, user) => {
            if(err) { throw err; }

            expect(user).to.be.ok();
            expect(user.username).equal(test.model.username);
            expect(user.id).equal(test.model.id);

            done();
        });

    });

    it(`# should deny authentication for incorrect password (read/auth)`, (done) => {
        
        // Pre-condition:
        // - Test User is already in the database with a password hash.

        // Prepare incorrect input data.
        const incorrectPassword = 'this-is-the-wrong-password';

        expect(incorrectPassword).to.not.be(test.rawPassword);

        User.authenticate(test.username, incorrectPassword, (err, user) => {
            if(err) { throw err; }            
            expect(user).to.be(null);
            done();
        });        

    });

    it(`# should authenticate using correct password '${test.rawPassword} (read/auth)'`, (done) => {
        
        // Pre-condition:
        // - Test User is already in the database with a password hash.

        // Prepare correct input data.
        const rawPassword = 'password';

        expect(rawPassword).to.be(test.rawPassword);

        User.authenticate(test.username, rawPassword, (err, user) => {
            if(err) { throw err; }
            expect(user).to.be.ok();
            expect(user.username).equal(test.model.username);
            expect(user.password).equal(test.model.password);
            done();
        });

    });

    it(`# should update user's password (update)`, (done) => {

        const newPassword = 'newPassword';
        const verifyPassword = 'newPassword';

        expect(newPassword).to.not.be(test.rawPassword); // Should be different than old password.
        expect(newPassword).equal(verifyPassword); // Verify new password matches the confirmation input.

        User.authenticate(test.username, test.rawPassword, (err, user) => {
            if(err) { throw err; }

            // Verify user exists.
            expect(user).to.be.ok();
            expect(user.password).equal(test.model.password);

            // const modifiedUser = user;

            // Update the model's password.
            User.generateSalt(newPassword, (err, salt, hash) => {
                if(err) { throw err; }

                // Expect new generated salt and hash to be non-null.
                expect(salt).to.be.ok();
                expect(hash).to.be.ok();

                // Expect hash value to be different from stored.
                expect(hash).not.equal(user.password);

                // Assign the salt, hash.
                // modifiedUser.salt = salt;
                // modifiedUser.password = hash;

                // Ensure values are different than previous model.
                // expect(modifiedUser.password).not.equal(test.model.password);

                // Save the user.
                // modifiedUser.save((err) => {
                   // if(err) { throw err; }
                   // test.model = modifiedUser;
                   // done();
                // });

                User.updateOne({ _id: user._id }, { 
                    salt: salt,
                    password: hash
                }, (err, res) => {
                    if(err) { throw err; }

                    // Ensure exactly 1 entry was modified.
                    expect(res).to.be.ok();
                    expect(res).to.have.property("nModified");
                    expect(res.nModified).equal(1);

                    done();
                });

            });

        });

    });

    it(`# should delete user instance from the database (delete)`, (done) => {

        // Pre-condition: User must already be in the database.

        // Determine if user already exists.
        User.findById(test.model.id, (err, user) => {

            if(err) { throw err; }
            expect(user).to.be.ok();
            expect(user.id).equal(test.model.id);

            // Delete user.
            User.deleteOne({ _id: user._id }, (err, res) => {
                if(err) { throw err; }

                // Ensure exactly 1 model instance was removed.
                expect(res).to.be.ok();

                done();
            });

        });


    });

});
