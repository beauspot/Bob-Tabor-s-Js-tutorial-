let names = [ 'david', 'eddie', 'alex', 'michael' ];
let others = [ 'sammy', 'gary', 'wolfgang', 'mark' ];

let lost = [ 4, 8, 15, 16, 23, 42 ];
let fibinacci = [ 1, 1, 2, 3, 5, 8, 13, 21, 34, 55 ];

// combining 2 arrays together 
let combine = lost.concat(fibinacci);
console.log(combine);

// joining arrays together 
console.log(fibinacci.join('~'));

console.log(names);
console.log(names.reverse());
console.log(names.sort());

console.log(others.indexOf('mark'));

console.log(combine)
console.log(combine.lastIndexOf(1))

// Mapping an array 

// filtering an array 
let filtered = combine.filter( (x) => { if (x <= 15) return x; } );
console.log(filtered);

// using forEach 
names.forEach((name) => console.log(`howdy ${name}`) );

console.log(filtered.every((num) => num < 10));

console.log(fibinacci.some( (num) => num < 10));

