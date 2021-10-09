// both are wrong 
//------------------------------------------
var myVar = "I am at the global scope";

var myFunction = function(){
    console.log('me too!');
};
//-----------------------------------------


function one() {
    return 'one';
};

let value = one;
console.log(value);

// another way of doing this 

let val = one;
console.log(val());


console.log(one());

console.log(typeof value);

// function cld return a function
function two() {
    return function () {
        console.log('two');
    };
};

let myFunction = two();
myFunction();


function three() {
    return function () {
        return "three";
    };
};

console.log(three()());