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
            console.log("You have successfully rented this vehicle.");
            this.rented = true;
        }
        else {
            console.log("Sorry, this vehicle is already rented.");
        }
    }
    return() {
        if (!this.rented) {
            console.log("Sorry, This vehicle has not been rented.");
        }
        else {
            console.log("You have successfully returned this vehicle.");
            this.rented = false;
        }
    }
}
class Car extends Vehicle {
    _classType;
    _seats;
    constructor(make, model, year, classType, seats, rented = false) {
        super(make, model, year, rented);
        this._classType = classType;
        this._seats = seats;
    }
    get features() {
        return `This car is a ${this._classType} class car and has ${this._seats} seats.`;
    }
    rentalRate() {
        return 50_000;
    }
}
class Truck extends Vehicle {
    _weightCapacity;
    constructor(make, model, year, weightCapacity, rented = false) {
        super(make, model, year, rented);
        this._weightCapacity = weightCapacity;
    }
    get weightCapacity() {
        return this._weightCapacity;
    }
    rentalRate() {
        return 200_000;
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
        return 5_000;
    }
}
//runnign
const car = new Car("Toyota", "SUPRA", 2010, "S", 2);
// const car = new Car("Toyota", "SUPRA", 2010, "S", 2, true);//ye phale se rented hy
console.log(car.features); //This car is a S class car and has 2 seats
car.return(); // Sorry, This vehicle has not been rented.
console.log(car.rented); // false
car.rent(); // You have successfully rented this vehicle.
console.log(car.rented); // true
console.log(car.rentalRate()); // 50000
car.rent(); // Sorry, this vehicle is already rented.
car.return(); // You have successfully returned this vehicle.
car.rent(); // You have successfully rented this vehicle.
const truck = new Truck("Tesla", "Semi", 2020, 10000);
// console.log(truck.rentalRate()); // 200000
// console.log(truck.weightCapacity); // 1000
const motorcycle = new Motorcycle("Yamaha", "YBR-125G", 2023, 150);
// console.log(motorcycle.rentalRate()); // 5000
// console.log(motorcycle.cc); // 150
