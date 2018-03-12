const { assert: {isFunction, isDefined, isTrue} } = require('chai');
const { removeToy } = require('../js/remove-toy');
const { createTable } = require('../js/create-table.js');

let toy =     { name: 'Niko', toy: 'coloring book'};

describe('remove-toy module', () => {
  beforeEach( (done) => {
    createTable()
    .then( () => {
      done();
    })
  })
  describe('removeToy()', () => {
    it('should be a function', () => {
      isFunction(removeToy);
    });
  })
  describe('removeToy(toy)', () => {
    it('should destructure received object', () => {
      isDefined(removeToy(toy));
    });
    it('should resolve successfully', () => {
      return removeToy(toy)
      .then( (data) => {
        isTrue(data);
      });
    })
  });
});