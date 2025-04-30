let car = {
    make: "Porsche",
    model: "911",
    year: 1964,

    description() {
        console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);
    }
};

// a) Wrapping in a function
setTimeout(() => car.description(), 200); //

// b) Clone and override year
let newerCar = { ...car, year: 2025 };

// c) Check values used
newerCar.description(); // Porsche 911 from 2025
car.description(); // Porsche 911 from 1964

// d) Using bind to lock `this`
let boundDescription = car.description.bind(car);
setTimeout(boundDescription, 400); //

// e) Clone again and change model
let anotherCar = { ...car, model: "Taycan" };
setTimeout(boundDescription, 600); // Still shows original: Porsche 911 from 1964
