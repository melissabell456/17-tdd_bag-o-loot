const { assert: {isFunction, isString, isArray, deepEqual, isObject} } = require('chai');
const { listKidsToys } = require('../js/list-toys');

let name = "Kylie";

describe('list-toys module', () => {
  describe('listKidsToys', () => {
    it('should be an exported function', () => {
      isFunction(listKidsToys);
    });
  });
  describe('listKidsToys(name)', () => {
    it.skip('should receive a string argument', () => {
      isString(listKidsToys(name));
    });
    it('should retrieve an array', () => {
      return listKidsToys(name)
      .then( (data) => {
        isArray(data);
      });
    });
    it('should retrieve an array of toy objects for only selected child', () => {
      return listKidsToys(name)
      .then( (data) => {
        for (let i = 0; i < data.length; i++) {
          isObject(data[i], 'all returned items in array should be objects');
          deepEqual({ name: `${name}` }, { name: data[i].name }, 'only selected childs toys should be returned');
        }
      })
    });
    // it('should retrieve an array of only one kids toys', () => {

    // })
  })
});