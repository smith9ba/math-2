// tell jasmine where to find our code
var math = require('../math');

describe("A program that does basic arithmetic", function() {

  it("can add two numbers together", function() {
    expect(math.add(3,5)).toBe(8);
  });

  it("can subtract two numbers", function() {
    expect(math.subtract(3,5)).toBe(-2);
  });

  it("can multipy two numbers together", function() {
    expect(math.multipy(3,5)).toBe(15);
  });

  it("can divide two numbers", function() {
    expect(math.divide(15,5)).toBe(3);
  });

});