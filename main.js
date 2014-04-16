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
// console.log(square(3));
// console.log(square(5));

// Exercise #4 
var negate = function(num) {
    return num * -1;
}

// Exercise #5
var toArray = function(a,b,c) {
    return [a,b,c];
}
// console.log(toArray(1,4,5));

// Exercise #6
var startsWithA = function(str) {
    var firstChar = str[0];
    if(firstChar.toLowerCase() === 'a') {
        return true;
    }
    else {
        return false;
    }
}
console.log(startsWithA('aardvark'));
console.log(startsWithA('bear'));
console.log(startsWithA('Aardvark'));

// Exercise #7
var excite = function(str){
    var funstr = str + "!!!";
    return funstr; 
}

// Exercise #8
var sun = function(str) {
    if(str.indexOf('sun') >= 0) 
        return true;
    else 
        return false;
    }

console.log(sun('sunasdf'));
console.log(sun('asunder'));
console.log(sun('catapult'));
// Exercise #9
var tiny = function(numBetween0and1) {
    if(numBetween0and1 > 0 && numBetween0and1 < 1) {
        return true;
    }
    else {
        return false;
    }
}
console.log(tiny(1.2));
console.log(tiny(0.2));


// Exercise #10







