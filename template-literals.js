let name = 'Bob';
console.log(`hi ${name}`);

let sentence = ` This is really a convenience.
    You probalbly will never want to do something like this.
    You might choose to put long passages of text into an external file
    and load it somehow.`;

console.log(sentence);

function getReasonCount() { return 1; };

let interpolation = `Give me ${ (getReasonCount() == 2) ? `one good reason` : `a few reasons`} to try this.`
console.log(interpolation);

