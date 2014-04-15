// Exercise #1
var tripleFive = function() { 
    for(var i=0; i<3; i++) {
        console.log('Five!');
    }
};
// tripleFive();

// Exercise #2
var lastLetter = function(str) {
    var myString = str;
    var stringLength = myString.length; 
    var lastChar = myString.charAt(stringLength - 1); 
    return lastChar;
}
// console.log(lastLetter('hello'));
// console.log(lastLetter('island'));

// Exercise #3
var square = function(num) {
    return num * num;
}
console.log(square(3));
console.log(square(5));

// Exercise #4 