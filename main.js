// Exercise #1
var tripleFive = function() { 
    for(var i=0; i<3; i++) {
        console.log('Five!');
    }
};

// Exercise #2
var lastLetter = function(str) {
    var myString = str;
    var stringLength = myString.length; 
    var lastChar = myString.charAt(stringLength - 1); 
    return lastChar;
}

// Exercise #3
var square = function(num) {
    return num * num;
}

// Exercise #4 
var negate = function(num) {
    return num * -1;
}

// Exercise #5
var toArray = function(a,b,c) {
    return [a,b,c];
}

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

// Exercise #9
var tiny = function(numBetween0and1) {
    if(numBetween0and1 > 0 && numBetween0and1 < 1) {
        return true;
    }
    else {
        return false;
    }
}

// Exercise #10
var getSeconds = function(str) {
    var minutes = parseInt(str.slice(0,2));
    // var minutes = +str.substr("0, 1");
    var seconds = parseInt(str.slice(3, 5));
    // var seconds = +str.substr("3, 4");
    var result = minutes * 60 + seconds;
    return result;
}

console.log(getSeconds("01:10")) // should return 70
console.log(getSeconds("00:40")) // should return 40
console.log(getSeconds("04:00")) // should return 240




