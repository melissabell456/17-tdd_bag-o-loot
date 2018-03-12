const { assert: { isFunction, isDefined, hasAllKeys } } = require('chai');
const { addToy } = require('../js/add-toy');
const { createTable } = require('../js/create-table');

let toy = {
  toy: "catnip",
  name: "Cinder"
};

describe('addToy()', () => {
  beforeEach( (done) => {
    createTable()
    .then( () => {
      done();
    })
  })
  it('should be a function', () => {
    isFunction(addToy);
  });
  it('should resolve with the key of the last item in the db', () => {
    return addToy(toy)
    .then( (data) => {
      hasAllKeys(data, ['id']);
      isDefined(data);
    });
  })
});
