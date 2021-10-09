let names = [ 'David', 'Eddie', 'Alex', 'Micheal' ];
names.map( (name) => { console.log(`howdy ${name}!`)}); 

 let names = [ 'David', 'Eddie', 'Alex', 'Micheal' ];
let i = 0;
names.map((name) => { i++; console.log(`howdy ${name} ${i}!`);});

let names = [ 'David', 'Eddie', 'Alex', 'Micheal' ];
let transformed = names.map((name) => { return `howdy ${name}!` }); 
console.log(transformed);

// 5:23:33