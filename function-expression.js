// setTimeout takes 2 argument viz:
//1. a handler ie a function expression or an annonymous function 
//2. a timeout ie the number of milliseconds you want the function to wait before it is been carried out 


setTimeout(function (){
    console.log("I waited 2 seconds")
}, 2000);


// using an arrow function 
setTimeout(() => console.log("I waited 3 Seconds"), 3000);

let counter = 0;
function timeout(){
    setTimeout(function(){
        console.log('hi ' + counter++);
        timeout();
    }, 2000);
};

timeout();

//Immediately invoked function Expression
(function (){
    console.log("Immediately invoked function Expression");
})();