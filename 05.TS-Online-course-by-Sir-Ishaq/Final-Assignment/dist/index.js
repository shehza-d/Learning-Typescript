"use strict";
class Vehicle {
    _make;
    _model;
    _year;
    _rented;
    constructor(make, model, year, rented = false) {
        this._make = make;
        this._model = model;
        this._year = year;
        this._rented = rented;
    }
    get make() {
        return this._make;
    }
    get model() {
        return this._model;
    }
    get year() {
        return this._year;
    }
    get rented() {
        return this._rented;
    }
    set rented(value) {
        this._rented = value;
    }
    rent() {
        if (!this.rented) {
            this.rented = true;
            console.log("You have successfully rented this vehicle.");
        }
        else {
            console.log("Sorry, this vehicle is already rented.");
        }
    }
    return() {
        if (this.rented) {
            console.log("You have successfully returned this vehicle.");
            this.rented = false;
        }
        else {
            console.log("Sorry, This vehicle has not been rented.");
        }
    }
}
class Car extends Vehicle {
    _seats;
    _classType;
    constructor(make, model, year, classType, seats, rented = false) {
        super(make, model, year, rented);
        this._seats = seats;
        this._classType = classType;
    }
    get detail() {
        return `This car is a ${this._classType} class car and has ${this._seats} seats.`;
    }
    rentalRate() {
        return 50;
    }
}
class Truck extends Vehicle {
    _cargoCapacity;
    constructor(make, model, year, cargoCapacity, rented = false) {
        super(make, model, year, rented);
        this._cargoCapacity = cargoCapacity;
    }
    get cargoCapacity() {
        return this._cargoCapacity;
    }
    rentalRate() {
        return 75;
    }
}
class Motorcycle extends Vehicle {
    _cc;
    constructor(make, model, year, cc, rented = false) {
        super(make, model, year, rented);
        this._cc = cc;
    }
    get cc() {
        return this._cc;
    }
    rentalRate() {
        return 30;
    }
}
//runnign
// const car = new Car("Tojyota", "Camry", 2021, "B", 4);
// console.log(car);
// car.rent(); // You have successfully rented this vehicle.
// console.log(car.rented); // true
// console.log(car.rentalRate()); // 50
// car.return(); // You have successfully returned this vehicle.
// const truck = new Truck("Ford", "F-150", 2022, 1000);
// // console.log(truck.rented); // false
// // console.log(truck.rentalRate()); // 75
// truck.rent(); // You have successfully rented this vehicle.
// truck.rent(); // Sorry, this vehicle is already rented.
// console.log(truck.rented); // true
// truck.return(); // You have successfully returned this vehicle.
//Test2 the classes
const car = new Car("Toyota", "Corolla", 2018, "S", 5);
car.rent();
car.rent(); // should print "This vehicle is already rented."
car.return();
car.return(); // should print "This vehicle has not been rented yet."
const truck = new Truck("Ford", "F-150", 2020, 1000);
console.log(truck.rentalRate()); // should print 100
const motorcycle = new Motorcycle("Honda", "CBR600RR", 2021, 600);
console.log(motorcycle.cc); // should print 600
