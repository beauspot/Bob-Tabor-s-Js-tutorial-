
var count = 3;
if (count == 4) {
    console.log("count is 4");
}else if (count > 4) {
    console.log('Count is greater than 4');
}else if (count < 4) {
    console.log('count is LESS than 4');
}else {
    console.log("Count is NOT 4");
}


// SWITCH statements 
// Use a switch statement when you want to test if an element meets verious or multiple conditions


let hero = "Aquaman"
switch (hero.toLowerCase) {
    case 'Superman':
        console.log("super strength");
        console.log("x-ray vision");
        break;

    case 'Batman':
        console.log("Intelligence");
        console.log("Fighting Skills");
        console.log("Billionaire");
        break;

    default:
        console.log(`Member of the JLA`);
        break;
}


//Terniary Operator 
let a = 1, b = '1';
let result = (a !== b) ? console.log("not equal") : console.log("equal");
console.log(result);

