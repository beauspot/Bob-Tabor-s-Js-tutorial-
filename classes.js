// Declaring a class 
class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    };

    // creating a method
    print(){
        console.log(`${this.make} ${this.model} (${this.year})`);
    };
};

let myCar = new Car('BMW', '754l1', 2010);
myCar.print();

// Inheritance 
class sportsCar extends Car {

    revEngine() {
        console.log('Vrrrrom goes the ' + this.model);
    }
};

let mySportsCar = new sportsCar('Dodge', 'viper', 2011);
mySportsCar.print();
mySportsCar.revEngine();

myCar.revEngine();  // error