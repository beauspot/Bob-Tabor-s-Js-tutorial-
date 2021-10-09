// Definign an object literal 
let car = {
    make: 'bmw',
    model: '745li',
    year: 2010,
    getPrice: function(){
        //Perform some calc
        return 50000;
    },
    printDescription: function(){
        console.log(this.make + ' ' + this.model);
    }
};


// calling the printDescription methd
car.printDescription();

//gettig a property
console.log(car.year);

//N:B the property access operator is the "." operator which is used to access the properties of the object
let carLots = [
    { year: 2017, make: 'Toyota', model: '4Runner'},
    { year: 2015, make: 'BMW', model: '528i'},
    { year: 1982, make: 'Buick', model: 'Skylark'},
];

// for (let i = 0; i < carLots.length; i++) {
//     const carlot = carLots[i];
//     console.log(carlot);
// };

// Using forEach method
carLots.forEach(i => {
    console.log(i);
    console.log(i.make)
});

let contacts = {
    customers: [
        { firstName: 'Bob', lastName: 'Tabor', phoneNumbers: [ '(123) 456-7890', '(123) 567-8901' ] },
        {firstName: 'Richard', lastname: 'Boughton', phoneNumbers: [ '(123) 555-7894', '(123) 555-8903' ]}
    ],
    employees: [
        { firstName: 'Steve', lastName: 'Jaworski', phoneNumbers: [ '(312) 456-7890', '(312) 567-8901' ] },
        { firstName: 'Conrad', lastName: 'Tabor', phoneNumbers: [ '(312) 456-7890' ] },
        { firstName: 'Grant', lastName: 'Tabor', phoneNumbers: [ '(312) 456-7890' ] },
    ]
};