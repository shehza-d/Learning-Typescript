// const input1 = document.getElementById("num1")! as HTMLInputElement;
// const input2 = document.getElementById("num2")! as HTMLInputElement;
// const button = document.getElementById("btn")!;

// const add = function (val1: number, val2: number) {
//     return val1 + val2;
// };

// button.addEventListener("click", function () {
//     const firstVal = input1.value;
//     const secondVal = input2.value;
//     console.log(add(+firstVal, +secondVal));
// });

// Basic Types

// 1. String: string => "Apple", "Orange"
// 2. Number: number => 1 0 -87 4.5
// 3. Boolean: boolean => true false

// let person: number;

// person = 8;

// let arr: string[];

// arr = ["Apple", "Orange", ];
// arr.push("Pineapple");
// arr.push();

// const arr2: number[] = [1, 2, 3];
// arr2.push();

// This is my new comment.

// type Person = {
//     name: string;
//     rollNo: number;
//     hobbies: string[];
//     email?: string
// };

// let person: Person = {
//     name: "Ishaq",
//     rollNo: 405,
//     hobbies: ["Video Games"],
// };
// person.email = "test@test.com";

// const persons: Person[] = [];
// persons.push({
//     name: "Ameen",
//     rollNo: 301,
//     hobbies: ["Cricket"],
//     email: "test@test.com"
// });

// const add = function (val1: number, val2: number, cb: (x: string) => void): number {
//     cb("Hello");
//     return val1 + val2;
// };

// let func: (x: number, y: number, z: (x: string) => void) => number;

// func = add;

// type Calc = "add" | "subtract" | "+" | "-";
// const add = function (val1: number, val2: number, calc: Calc) {
//     if (calc === "add" || calc === "+") {
//         return val1 + val2;
//     } else if (calc === "subtract" || calc === "-") {
//         return val1 - val2;
//     }
// };

// console.log(add(10, 5, "subtract"));

// Tuples

// let gender: [string, string] = ["Male", "Female"];
// gender.push("asd");

// let admin: [number, string] = [1, "Admin"];
// let error: [number, string] = [404, "Not Found"];

// Class

// class Student {
//     private readonly skills: string[] = [];
//     constructor(public name: string, public readonly rollNo: number) {
//     }

//     addSkill (skill: string) {
//         this.skills.push(skill);
//     }
// }

// const student1 = new Student("Yasir", 1234);
// const student2 = new Student("Nadir", 2345);
// student1.addSkill("JavaScript");
// student2.addSkill("Python");
// console.log(student1, student2);

// abstract class Product {
//   constructor(
//     private _id: number,
//     private _name: string,
//     private _price: number
//   ) {}

//   get id() {
//     return this._id;
//   }

//   get name() {
//     return this._name;
//   }

//   set name(newName: string) {
//     if (!newName) {
//       throw new Error("Name cannot be empty");
//     }
//     this._name = newName;
//   }

//   get price() {
//     return this._price;
//   }

//   abstract getDiscountRates(): number;
// }

// class ClothingProduct extends Product {
//   constructor(
//     id: number,
//     name: string,
//     price: number,
//     private _color: string,
//     private _size: "S" | "M" | "L" | "XL"
//   ) {
//     super(id, name, price);
//   }

//   getDiscountRates() {
//     return this.price * 0.9;
//   }
// }

// class ElectronicsProduct extends Product {
//   constructor(
//     id: number,
//     name: string,
//     price: number,
//     private _brand: string,
//     private _model: string
//   ) {
//     super(id, name, price);
//   }

//   getDiscountRates() {
//     return this.price * 0.5;
//   }
// }

// class Cart {
//   private products: Product[] = [];

//   public addProduct(product: Product) {
//     this.products.push(product);
//   }

//   get getTotalPrice(): number { // Best Example for getter
//     let totalPrice = 0;
//     for (const product of this.products) {
//       totalPrice += product.price;
//     }
//     return totalPrice;
//   }
// }

// const tShirt = new ClothingProduct(2, "T-Shirt", 1000, "Blue", "M");
// console.log(tShirt);

// class Util {  // Singletons
//     private static instance: Util;
//     private constructor () {

//     }

//     static getInstance() {
//         if(!this.instance) {
//             this.instance = new Util();
//         }
//         return this.instance;
//     }
// }
// const utlInst = Util.getInstance();
// const utlInst2 = Util.getInstance();

// type Combine = string | number | boolean  // Union Operators.
// let abc: Combine = "Apple";
// abc = 123;
// abc = true;

// type Animal = {
//     name: string;
//     runningSpeed: number;
// }

// type Bird = {
//     name: string;
//     flyingSpeed: number;
// }

// type Creature = Animal | Bird; // Union Types

// const tiger: Creature = {
//     name: "Tiger",
//     runningSpeed: 300
// }


// Intersection Types
// type Creature = Animal & Bird; // Intersection Types

// const cockroach: Creature = {
//     name: "Cockroach",
//     runningSpeed: 100,
//     flyingSpeed: 300
// }

// Interfaces

// interface Animal {
//     name: string;
//     runningSpeed: number;
// }

// interface Bird {
//     name: string;
//     flyingSpeed: number;
// }

// interface Creature extends Animal, Bird {}

// const tiger: Creature = {
//     name: "Tiger",
//     runningSpeed: 300,
//     flyingSpeed: 10
// }

// interface Animal {
//     name: string;
//     runningSpeed: number;
//     eat(food: string): string;
// }

// class Tiger implements Animal {
//     constructor(public name: string, public runningSpeed: number) {}

//     eat (food: string) {
//         return "Eating food";
//     }
// }

// Type Guards

// type Bird = {
//     name: string;
//     flyingSpeed: number;
// }

// type Animal = {
//     name: string;
//     runningSpeed: number;
// }

// type Creature = Animal | Bird;

// function log(creature: Creature) {
//     if ("runningSpeed" in creature) { // Type Guards
//         console.log(creature.runningSpeed);
//     }

//     // console.log(creature.runningSpeed);
// }
// const sparrow: Creature = {
//     name: "Sparrow",
//     flyingSpeed: 150
// }
// log(sparrow);

// Type Casting
// const input = document.getElementById("input1")! as HTMLInputElement;
// const input1 = <HTMLInputElement>document.getElementById("input1")!;

type User = {
    name: string;
    id: number;
};

// Generics
// const promiseFunc = (): Promise<User> => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve({
//                 name: "Ishaq",
//                 id: 123
//             });
//         }, 2000);
//     });
// }

// promiseFunc()
//     .then((data) => {
//         console.log(data.name);
//     });

function merge<T extends object, U extends object>(objA: T, objB: U) {
    return {...objA, ...objB};
}

const merged = merge({person: "Ishaq"}, {id:123});
console.log(merged.person);