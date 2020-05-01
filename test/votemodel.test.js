// ////////////////////////
// MODULE/LIBRARY IMPORT
// ////////////////////////

const expect = require('expect.js');
const Vote = require('../server/models').Vote.VoteModel;

// ////////////////////////
// VOTEMODEL TESTS
// ////////////////////////

describe('test vote model', () => {
  it('# should import the model', (done) => {
    // Ensure model is exported properly.
    expect(Vote).to.be.ok();
    done();
  });

  it('# (TODO) should create the model (create)');
  it('# (TODO) should save the model (create)');
  it('# (TODO) should query the model (read)');
  it('# (TODO) should update the model (update)');
  it('# (TODO) should delete the model (delete)');

});
