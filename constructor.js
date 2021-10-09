/* let car = {
    make: 'bmw',
    model: '745li',
    year: 2010
}; */

// creating a constructor function
function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
};

// referencing the new keyword
let myCar = new Car('bmw', '745li', 2010);

console.log(myCar);