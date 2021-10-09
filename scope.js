let a = 'first'; // global scope 


function scopeTest(){
    console.log(a);
    a = "changed";

    if (a != "") console.log(a);
    let b = 'second'; // local scope
};

scopeTest();

console.log(b) 

// returns an error cause the var b is on a local scope inside the function scopeTest
// ie we can't access a variable that is declared in a local scope or function outside of the scope
// that the variable was declared in ie a globalscope

console.log(a);