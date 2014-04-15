// Exerise #1

// can't be checked because it has no return value
// describe("console log 3 'Five!'s", function(){
//   it("should console.log  \"Five!\"3 times", function() {
//     expect(tripleFive()).toEqual("Five!");
//   });
// });

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
describe("startsWithA", function() {
  it("takes a single string argument and returns true if the given string's first letter is 'A' and false otherwise.", function() {
    expect(startsWithA('aardvark')).toEqual(true);
    expect(startsWithA('bear')).toEqual(false);
  });
});

// Exercise #7
describe("excite", function() {
  it("takes a single string argument and returns the given string plus three exclamation marks.", function() {
    expect(excite()).toEqual('yes!!!');
    expect(excite()).toEqual('no!!!');
  });
});
// Exercise #8
describe("sun", function() {
  it("takes a single string argument and returns true if the string contains the word 'sun' within it.", function(){
    expect('sundries').toEqual(true);
    expect('asunder').toEqual(true);
    expect('catapult').toEqual(false);
  });
});

// Exercise #9
describe("tiny", function() {
  it("takes a single number argument and returns true if the number is between 0 and 1.", function() {
    expect(0.3).toEqual(true);
    expect(14).toEqual(false);
    expect(-5).toEqual(false);
  });
});

// Exercise #10
describe("getSeconds", function() {
  it("takes a single string argument in the format 'MM:SS' (hours, minutes, and seconds) and returns the total number of seconds represented by that timespan.", function() {
    expect('01:30').toEqual(90);
    expect('10:25').toEqual(625);
  });
});