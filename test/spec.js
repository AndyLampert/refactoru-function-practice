// describe(tripleFive, tripleFive(){
//   it("should console.log \"Five!\" 3 times", tripleFive() {
//     expect(tripleFive()).toEqual("Five!");
//   });
// });

describe("get last letter", function() {
  it("should get the last letter of a string", function(){
    expect(lastLetter("hello")).toEqual("o");
    // why is the 2nd test failing but the first passing?!
    expect(lastLetter("island")).toEqual("d");
  });
});

describe("squaring", function() {
  it("should square the input number", function() {
    expect(square(3)).toEqual(9);
    expect(square(5)).toEqual(25);
  })
});