var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // add 1+4 and get 5
  it('can add', function(){
    calculator.numberClick(1);
    calculator.operatorClick('+');
    calculator.numberClick(4);
    calculator.operatorClick('=');
    assert.equal(calculator.runningTotal, 5);
  })

  // subtract 7-4 and get 3
  it('can subtract', function(){
    calculator.numberClick(7);
    calculator.operatorClick('-');
    calculator.numberClick(4);
    calculator.operatorClick('=');
    assert.equal(calculator.runningTotal, 3);
  })

  // multiply 3x5 and get 15
  it('can multiply', function(){
    calculator.numberClick(3);
    calculator.operatorClick('*');
    calculator.numberClick(5);
    calculator.operatorClick('=');
    assert.equal(calculator.runningTotal, 15);
  })

  // divide 21/7 and get 3
  it('can divide',function(){
    calculator.numberClick(2);
    calculator.numberClick(1);
    calculator.operatorClick('/');
    calculator.numberClick(7);
    calculator.operatorClick('=');
    assert.equal(calculator.runningTotal, 3);
  })

  // concatenate multiple number button clicks
  it('can concatinate multiple number button clicks', function(){
    calculator.numberClick(1);
    calculator.numberClick(2);
    calculator.numberClick(3);
    calculator.numberClick(4);
    assert.strictEqual(calculator.runningTotal, 1234);
  })

  // chain multiple operations together
  it('can chain multiple operations together, add and multiply', function(){
    calculator.numberClick(1);
    calculator.operatorClick('+');
    calculator.numberClick(4);
    calculator.operatorClick('*');
    calculator.numberClick(5);
    calculator.operatorClick('=');
    assert.equal(calculator.runningTotal, 25)
  })

  it('can chain multiple operations together, subtract and divide', function(){
    calculator.numberClick(1);
    calculator.numberClick(0);
    calculator.operatorClick('-');
    calculator.numberClick(1);
    calculator.operatorClick('/');
    calculator.numberClick(3);
    calculator.operatorClick('=');
    assert.equal(calculator.runningTotal, 3)
  })

  // clear the running total without affecting the calculation
  it('can clear running total without affecting the calcualtion', function(){
    calculator.numberClick(1);
    calculator.numberClick(0);
    calculator.operatorClick('/');
    calculator.numberClick(5);
    calculator.clearClick();
    calculator.numberClick(2)
    calculator.operatorClick('=');
    assert.equal(calculator.runningTotal, 5)
  })

  it('can clear running total without affecting the calcualtion, multiple', function(){
    calculator.numberClick(1);
    calculator.numberClick(0);
    calculator.operatorClick('/');
    calculator.numberClick(1);
    calculator.clearClick();
    calculator.numberClick(2)
    calculator.operatorClick('+');
    calculator.numberClick(1);
    calculator.numberClick(1);
    calculator.clearClick();
    calculator.numberClick(1);
    calculator.operatorClick('=');
    assert.equal(calculator.runningTotal, 6)
  })

});
