let a, b, c, d, e;

let names = [ 'david', 'eddie', 'alex', 'micheal', 'sammy' ];

// destructuring the array
[a, b, c, e, d] = names;

// getting the individual outputs
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);

// using the spread operator 
let others;
[a, b, ...others] = names;

console.log(a);
console.log(b)
console.log(others);

// Destructuring an object

let year, model;
( { year, model } = {make: 'bmw', model: '745li', year: 2010, value: 50000});

console.log(year);
console.log(model);