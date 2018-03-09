const { assert: {isFunction, isArray, isObject, deepInclude, hasAllKeys } } = require('chai');
const { listToys } = require('../js/list-all-toys');

describe('list all toys module', () => {
  describe('listToys()', () => {
    it('should be an exportable function', () => {
      isFunction(listToys);
    });
    it('should export an array of objects', () => {
      return listToys()
      .then( (returnedData) => {
        isArray(returnedData, 'data should be in an array');
        for (let i = 0; i < returnedData.length; i++) {
          console.log(returnedData[i])
          isObject(returnedData[i], 'all contents returned should be an object');
          hasAllKeys(returnedData[i], [ 'toy_id', 'name', 'toy', 'delivered', 'naughty' ], 'each object returned should have these keys');
      };
      });
    });
  });
});