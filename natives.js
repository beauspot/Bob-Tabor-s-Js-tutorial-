// creating a REGEX pattern
/* let pattern = /xyz/;

console.log(pattern); 
console.log(typeof pattern); 

let value = `This is xyz a test.`;

console.log(pattern.test(value));

console.log(value.replace(pattern, 'just'));

console.log(value.match(pattern));
let match = value.match(pattern);
console.log(match.index); */

let myString = new String("howdy");
//console.log(myString);
console.log(myString.toString());

console.log(typeof myString);

//built-in natives with primitives
// String(), Number(), Boolean(), Object(), Function(), Symbol()

//built-in natives without primitives
// Array(), RegExp()

// Date(), Error()
/* 
let myPrimitive = 'THIS IS CRAZY';

console.log(typeof myPrimitive);
myPrimitive = myPrimitive.toLowerCase();
console.log(typeof myPrimitive); */

let myNumber = new Number(7);
console.log(typeof myNumber);
let myPrimitive = myNumber.valueOf();
console.log(typeof myPrimitive);