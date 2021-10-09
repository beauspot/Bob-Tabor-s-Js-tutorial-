// An array is an object or a datatype that can hold multiple values, 
// using the square bracket notation ie [], and can be assigned to a variable.
// An array can include different elements of different datatypes 

let a = [4, 8, 15, 16, 23, 42];
let b = ['David', 'Eddie', 'Alex', 'Micheal'];

console.log(a);

// Acessing a member of an aray using an index
console.log(a[3]);
console.log(b[2]);

// re-assigning a new member of an array
a[0] = 30;
console.log(a);

//running typeof on an array.
console.log(typeof a);

// An array with multiple data types
let c = [ 4, 'alex', true];
console.log(c);

let d = [12, 'Sarah', 'UNIBEN', false];

// trying the access the index of an array that doesn't exist 
console.log(c[4]);

// using the length metthd to get the actual number of the elements in an array 
console.log(a.length);

// Putting an element to the end of the existing array 
a.push(77);
console.log(a);

// Deleting an element at the end of an array 
b.pop();
console.log(b);

// adding an element to the begining of an array 
c.unshift("Beau");
console.log(c);

// deleting an element at the beginning of an array
d.shift();
console.log(d);
