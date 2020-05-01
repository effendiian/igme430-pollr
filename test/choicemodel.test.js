// ////////////////////////
// MODULE/LIBRARY IMPORT
// ////////////////////////

const expect = require('expect.js');
const Choice = require('../server/models').Choice.ChoiceModel;

// ////////////////////////
// CHOICEMODEL TESTS
// ////////////////////////

describe('test choice model', () => {
  it('# should import choice model', (done) => {
    // Ensure model is exported properly.
    expect(Choice).to.be.ok();
    done();
  });
  
  it('# (TODO) should create the model (create)');
  it('# (TODO) should save the model (create)');
  it('# (TODO) should query the model (read)');
  it('# (TODO) should update the model (update)');
  it('# (TODO) should delete the model (delete)');
});
