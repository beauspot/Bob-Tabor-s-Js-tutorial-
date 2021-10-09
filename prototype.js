let originalCar = {
    make: 'bmw',
    model: '745li',
    year: 2010
};

let newCar = Object.create(originalCar);

console.log(newCar.make);

console.log(Object.getPrototypeOf(newCar));
console.log(myPrototype.make);

// originalCar.doors = 4;
// console.log(newCar.doors);
