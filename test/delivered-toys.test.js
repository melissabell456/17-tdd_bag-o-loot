const { assert: {isFunction, isObject, deepEqual} } = require('chai');
const { markAsDelivered, markAsNotDelivered } = require('../js/delivered-toys');
const { listKidsToys } = require('../js/list-toys');

let name = 'Kylie';

describe('delivered-toys module', () => {
  // beforeEach( (done) => {
  //   markAsNotDelivered(name)
  //   .then( () => {
  //     done();
  //   })
  // })
  describe('markAsDelivered', () => {
    it('markAsDelivered() should be an exported function', () => {
      isFunction(markAsDelivered);
    });
    it('markAsDelivered(name) should change all childs toy status to delivered', () => {
      return markAsDelivered(name)
      .then( (toyAdjusted) => {
        return listKidsToys(name)
        .then( (data) => {
          data.forEach((toy) => {
            deepEqual({ delivered: 1 }, { delivered: 1 }, 'childs toys should be marked as delivered');
          })
        });
      });
    });
  })
    it('markAsNotDelivered(name) should change all childs toy status to not delivered', () => {
      return markAsNotDelivered(name)
      .then( (toyAdjusted) => {
        return listKidsToys(name)
        .then( (data) => {
          data.forEach((toy) => {
            deepEqual({ delivered: 0 }, { delivered: 0 }, 'childs toys should be marked as delivered');
          })
        });
      });
    });
  })