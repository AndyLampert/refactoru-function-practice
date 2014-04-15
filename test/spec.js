// Exerise #1

describe("console love 3 'Five!'s", function(){
  it("should console.log \"Five!\" 3 times", function() {
    expect(tripleFive()).toEqual("Five!");
  });
});

// Exercise #2
describe("get last letter", function() {
  it("should get the last letter of a string", function(){
    expect(lastLetter("hello")).toEqual("o");
    // why is the 2nd test failing but the first passing?!
    expect(lastLetter("island")).toEqual("d");
  });
});

// Exercise #3
describe("squaring", function() {
  it("should square the input number", function() {
    expect(square(3)).toEqual(9);
    expect(square(5)).toEqual(25);
  });
});

// Exercise #4 
describe("negate", function() {
  it("take a single number arg and return its negative value", function() {
    expect(negate(5)).toEqual(-5);
    expect(negate(-8)).toEqual(8);
  });
});

// Exercise #5
describe("Makes array", function() {
  it("takes three arguments and returns an array with each of those args as items", function() {
    expect(toArray(1,4,5)).toEqual([1,4,5]);
    expect(toArray(8,9,10)).toEqual([8,9,10]);
  });
});

// Exercise #6

// Exercise #7
// Exercise #8
// Exercise #9
// Exercise #10

