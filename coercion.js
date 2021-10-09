/* the variable 'a' gets coerced into a string and then 
concatinated together with the varialbe 'b', which  is 
stored in the variable 'c' and then returns the value 76*/

let a = 7;
let b = '6';
// converting the variable b to an int
let c = parseInt(b, 10);
let d = a + c;
console.log('Answer: ' + d);


let e = parseInt('bob', 10);
console.log(e);

let f = isNaN(e);
console.log(f);