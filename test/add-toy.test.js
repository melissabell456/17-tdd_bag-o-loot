const { assert: { isFunction, isDefined, hasAllKeys } } = require('chai');
const { addToy } = require('../js/add-toy');

let toy = {
  toy: "catnip",
  name: "Cinder"
};

describe('addToy()', () => {
  it('should be a function', () => {
    isFunction(addToy);
  });
  it('should resolve with the key of the last item in the db', () => {
    return addToy(toy)
    .then( (data) => {
      console.log(data);
      hasAllKeys(data, ['id']);
      isDefined(data);
    });
  })
  // it('should return object with all keys defined', () => {
  //   isDefined(addToy(toy), { name, toy, delivered, naughty });
  // });
});
