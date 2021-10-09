function sayHello(){
    console.log('----------------------');
    console.log('hello!');
    console.log('----------------------');
}

// calling or invoking the function
sayHello();

// getting a reference to a function 
let a = sayHello;
// invoking the variable 
 a();

function sayHello(name){
    console.log('----------------------');
    console.log('hello ' + name +'!');
    console.log('----------------------');
};

sayHello("Beau");
sayHello("Caseley");
sayHello("Ashley");

//returning values from a function 
function calculateTax(amt){
    let salesTax = 0.0825;
    let result = amt * salesTax;
    return result;
};

let taxResult = calculateTax(100); // ======>function invocation expression 
console.log(taxResult);