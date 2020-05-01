// ////////////////////////
// MODULE/LIBRARY IMPORT
// ////////////////////////

const expect = require('expect.js');
const models = require('../server/models');
const source = require('./');

// ////////////////////////
// POLLMODEL TESTS
// ////////////////////////

describe('test poll model', () => {
        
    // ////////////////////////
    // MEMBER INIT

    const Poll = models.Poll.PollModel;

    const test = {
        users: undefined,
        polls: undefined,
    }

    const clearUserCollection = () => {
        return source.actions.user.clearAll().then((res) => {
            // Confirmation of the cleared users.
            // console.log(`\tDeleted ${res.deletedCount} user(s).`);
            return res;
        });
    };

    const prepareUserCollection = () => {
        return clearUserCollection().then((res) => {

            // Seed the users.
            return source.actions.user.createAll([
                { username: "user01", rawPassword: "password" },
                { username: "user02", rawPassword: "password" },
                { username: "user03", rawPassword: "password" },
                { username: "user04", rawPassword: "password" },
                { username: "user05", rawPassword: "password" },
            ]);

        }).then((users) => {

            // console.log(`\tSaving models.`);
            return Promise.all(users.map((user) => {
                return user.save().then((user) => {
                    // console.log(`\t\tSaved user: [...${user.id.slice(-7)}] @${user.username}`);
                    return user;
                }).catch((err) => {
                    // console.error(err);
                });
            }));

        }).then((users) => {

            // Confirmation of saved users.
            // console.log(`\tCreated ${users.length} user(s).`);    

            // Pass users to the next function.
            return users;
        });
    };

    const clearPollCollection = () => {
        return source.actions.poll.clearAll().then((res) => {
            // Confirmation of the cleared polls.
            // console.log(`\tDeleted ${res.deletedCount} poll(s).`);
            return res;
        });
    };

    const preparePollCollection = (users) => {

        return clearPollCollection().then((res) => {

            // Confirmation of the cleared polls.
            // console.log(`\tDeleted ${res.deletedCount} poll(s).`);

            // Seed the polls.
            return source.actions.poll.createAll([
                { 
                    title: "Where should I get lunch today?", 
                    description: "Need to make a choice.", 
                    owner: users[0]._id, 
                    options: [],
                    votes: [],
                },                
                { 
                    title: "Where should I go today?", 
                    description: "Need to make a choice.", 
                    owner: users[1]._id, 
                    options: [],
                    votes: [],
                },                
                { 
                    title: "What should I eat tomorrow?", 
                    description: "Need to make a choice.", 
                    owner: users[2]._id, 
                    options: [],
                    votes: [],
                }
            ]);

        }).then((polls) => {

            // console.log(`\tSaving models.`);
            return Promise.all(polls.map((poll) => {
                return poll.save().then((poll) => {
                    // console.log(`\t\tSaved poll: [...${poll.id.slice(-7)}] '${poll.title}' from @${poll.owner.toString()}`);
                    return poll;
                }).catch((err) => {
                    // console.error(err);
                });
            }));

        }).then((polls) => {

            // Confirmation of saved polls.
            // console.log(`\tCreated ${polls.length} poll(s).`);    

            // Pass users to the next function.
            return polls;
        });
    };

    // Preparing the user collection.
    before('preparing the user and poll collections.', (done) => {

        // console.log("    setting up");
        prepareUserCollection().then((users) => {
            test.users = users;
            return preparePollCollection(users);
        }).then((polls) => {
            test.polls = polls;
        }).finally(() => {
            done();
        });
        
    });

    // After, delete everything.
    after('removing changes from the test', (done) => {

        // console.log("    cleaning up");
        clearUserCollection().then(
            () => clearPollCollection()
        ).finally(() => {
            done();
        });

    });

  // ////////////////////////
  // TESTS

  it('# should import poll model', (done) => {
    // Ensure model is exported properly.
    expect(Poll).to.be.ok();
    done();
  });

  it(`# should create a poll (create)`, (done) => {
    
    const pollData = {
        title: "Example of new Poll",
        owner: test.users[0]._id,
    }

    const poll = new Poll(pollData);
    expect(poll).to.be.ok();
    test.polls.push(poll);
    expect(test.polls[test.polls.length - 1].title).equal(poll.title);
    done();

  });

  it(`# should save poll to the database (create)`, (done) => {

    const poll = test.polls[test.polls.length - 1];
    expect(poll.isNew).to.be(true);

    // Attempt to save the user.
    poll.save((err) => {
      if (err) { throw err; }
      expect(poll.isNew).to.be(false);
      done();
    });

  });

  it(`# should query database for poll (read)`, (done) => {

    const poll = test.polls[test.polls.length - 1];
    expect(poll).to.be.ok();

    Poll.findById(poll._id, (err, dbPoll) => {
        if (err) { throw err; }
  
        expect(dbPoll).to.be.ok();
        expect(dbPoll.title).equal(poll.title);
        expect(dbPoll.owner.toString()).equal(poll.owner.toString());
  
        done();
    });

  });

  it('# (TODO) should update the model (update)');
  it('# (TODO) should delete the model (delete)');
  
});
