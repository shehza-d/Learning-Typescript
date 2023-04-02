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
      console.log("You have successfully rented this vehicle.");
      this.rented = true;
    } else {
      console.log("Sorry, this vehicle is already rented.");
    }
  }

  return(): void {
    if (!this.rented) {
      console.log("Sorry, This vehicle has not been rented.");
    } else {
      console.log("You have successfully returned this vehicle.");
      this.rented = false;
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

  get features(): string {
    return `This car is a ${this._classType} class car and has ${this._seats} seats.`;
  }

  rentalRate(): number {
    return 50_000;
  }
}

class Truck extends Vehicle {
  private _weightCapacity: number;

  constructor(
    make: string,
    model: string,
    year: number,
    weightCapacity: number,
    rented: boolean = false
  ) {
    super(make, model, year, rented);
    this._weightCapacity = weightCapacity;
  }

  get weightCapacity(): number {
    return this._weightCapacity;
  }

  rentalRate(): number {
    return 200_000;
  }
}

class Motorcycle extends Vehicle {
  private _cc: number;
  private rentalRate1: number = 32;

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
    return 5_000;
  }
}

//runnign
const car: Car = new Car("Toyota", "SUPRA", 2010, "S", 2);
// const car = new Car("Toyota", "SUPRA", 2010, "S", 2, true);//ye phale se rented hy
console.log(car.features);

car.return; //
console.log(car.rented); //
car.rent(); //
console.log(car.rented); //
console.log(car.rentalRate());
car.rent(); //
car.return(); //
car.rent(); //

const truck = new Truck("Tesla", "Semi", 2020, 10000);
// console.log(truck.rentalRate()); // 200000
// console.log(truck.weightCapacity); // 1000

const motorcycle = new Motorcycle("Yamaha", "YBR-125G", 2023, 150);
// console.log(motorcycle.rentalRate()); // 5000
// console.log(motorcycle.cc); // 150
