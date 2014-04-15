var tripleFive = function() { 
    for(var i=0; i<3; i++) {
        console.log('Five!');
    }
};

// function call
tripleFive();


var lastLetter = function(str) {
    var myString = "hello";
    var stringLength = myString.length; 
    var lastChar = myString.charAt(stringLength - 1); 
    return lastChar;
}

console.log(lastLetter('hello'));
console.log(lastLetter('island'));


