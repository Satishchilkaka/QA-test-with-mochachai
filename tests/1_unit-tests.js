const chai = require('chai');
const assert = chai.assert;

suite('Unit Tests', function () {
  suite('Basic Assertions', function () {
    // #1

    // #2
    test('#isDefined, #isUndefined', function () {
     assert.isDefined(null, 'null is not undefined');
      assert.isUndefined(undefined, 'undefined IS undefined');
      assert.isDefined('hello', 'a string is not undefined');
    });
    // #3
    test('#isOk, #isNotOk', function () {
      assert.isNotOk(null, 'null is falsey');
      assert.isOk("I'm truthy", 'a string is truthy');
     assert.isOk(true, 'true is truthy');
    });
    // #4
    test('#isTrue, #isNotTrue', function () {
      assert.isTrue(true, 'true is true');
      assert.isTrue(!!'double negation', 'double negation of a truthy is true');
      assert.isNotTrue({ value: 'truthy' }, 'A truthy object is NOT TRUE (neither is false...)');
    });
  });

});