let first = 'Knowledge is power but enthusiasm pulls the switch.';
let second = 'Do or do not. There is no try.';
let third = '4, 8, 15, 16, 23, 42';

// calling a method on a string literal 
//console.log('beau loves you'.toLocaleUpperCase());

let mySplit = third.split(',');
console.log(mySplit);

let mySlice = first.slice(13, 18);
console.log(mySlice);

let mySubst = first.substr(13, 5);
console.log(mySubst);

let mySubstr = first.substring(13, 5);
console.log(mySubstr);

let myEndsWith = second.endsWith("try.");
console.log(myEndsWith);

let myStartsWith = second.startsWith("Do");
console.log(myStartsWith);

let myInclude = second.includes("There");
console.log(myInclude);

let myRepeat = 'Ha! ' .repeat(3);
console.log(myRepeat);

let myTrim = "      bloated      ";
console.log(myTrim.length);
console.log(myTrim.trim().length);

//5:47:46