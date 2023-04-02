type CarClassType = "A" | "B" | "D" | "L" | "S" | "G";

abstract class Vehicle {
  private _make: string;
  private _model: string;
  private _year: number;
  private _rented: boolean;

  constructor(
    make: string,
    model: string,
    year: number,
    rented: boolean = false
  ) {
    this._make = make;
    this._model = model;
    this._year = year;
    this._rented = rented;
  }

  get make(): string {
    return this._make;
  }

  get model(): string {
    return this._model;
  }

  get year(): number {
    return this._year;
  }

  get rented(): boolean {
    return this._rented;
  }

  set rented(value: boolean) {
    this._rented = value;
  }

  abstract rentalRate(): number;

  rent(): void {
    if (!this.rented) {
      this.rented = true;
      console.log("You have successfully rented this vehicle.");
    } else {
      console.log("Sorry, this vehicle is already rented.");
    }
  }

  return(): void {
    if (this.rented) {
      console.log("You have successfully returned this vehicle.");
      this.rented = false;
    } else {
      console.log("Sorry, This vehicle has not been rented.");
    }
  }
}

class Car extends Vehicle {
  private _seats: number;
  private _classType: CarClassType;

  constructor(
    make: string,
    model: string,
    year: number,
    classType: CarClassType,
    seats: number,
    rented: boolean = false
  ) {
    super(make, model, year, rented);
    this._seats = seats;
    this._classType = classType;
  }

  get detail(): string {
    return `This car is a ${this._classType} class car and has ${this._seats} seats.`;
  }

  rentalRate(): number {
    return 50;
  }
}

class Truck extends Vehicle {
  private _cargoCapacity: number;

  constructor(
    make: string,
    model: string,
    year: number,
    cargoCapacity: number,
    rented: boolean = false
  ) {
    super(make, model, year, rented);
    this._cargoCapacity = cargoCapacity;
  }

  get cargoCapacity(): number {
    return this._cargoCapacity;
  }

  rentalRate(): number {
    return 75;
  }
}

class Motorcycle extends Vehicle {
  private _cc: number;

  constructor(
    make: string,
    model: string,
    year: number,
    cc: number,
    rented: boolean = false
  ) {
    super(make, model, year, rented);
    this._cc = cc;
  }

  get cc(): number {
    return this._cc;
  }

  rentalRate(): number {
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
const car: Vehicle = new Car("Toyota", "Corolla", 2018, "S", 5);
car.rent();
car.rent(); // should print "This vehicle is already rented."
car.return();
car.return(); // should print "This vehicle has not been rented yet."

const truck = new Truck("Ford", "F-150", 2020, 1000);
console.log(truck.rentalRate()); // should print 100

const motorcycle = new Motorcycle("Honda", "CBR600RR", 2021, 600);
console.log(motorcycle.cc); // should print 600
