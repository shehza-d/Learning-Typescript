"use strict";
//=====Getters & Setters
// class Product {
// 	constructor(private id: number, private name: string, private price: number) {}
// 	public getId(): number {
// 		return this.id;
// 	}
// 	public getName(): string {
// 		return this.name;
// 	}
// 	public getPrice(): number {
// 		return this.price;
// 	}
// }
// const product1 = new Product(1, "Milk", 4500)
// console.log(product1);
// console.log(product1.getName());
// console.log(product1.getId());
// console.log(product1.getPrice());
// Now how can we make getters
// just insert _before your private properties
class Product {
    constructor(_id, _name, _price) {
        this._id = _id;
        this._name = _name;
        this._price = _price;
    }
    get name() {
        return this._name; // getters will always return
    }
    get id() {
        return this._id;
    }
    get price() {
        return this._price;
    }
    // setter must have required parameter
    set name(newName) {
        if (!newName) {
            throw new Error("Name can't be empty string");
        }
        this._name = newName;
    }
}
// const product1 = new Product(1, 'Milk', 4500);
//Benefit you have you call like product1.function()  simply you can call these as properties
// console.log(product1.name);
// console.log(product1.id);
// console.log(product1.price);
// product1.price= // private
// for these we have setters
// product1.name="Sugar"
// console.log(product1.name);
// Revision Inheritance
class clothingProducts extends Product {
    constructor(id, price, name, _color, _size) {
        super(id, name, price);
        this._color = _color;
        this._size = _size;
    }
    getDiscount() {
        return this.price * 0.9;
    }
}
const tShirt = new clothingProducts(3, 2300, 't-shirt', 'black', 'XL');
console.log(tShirt);
console.log(tShirt.getDiscount());
// abstract class those methods in the base/parent class you want to also in the child class or those who are extending the base class
// use the keyword abstract before the base class
// Singletons
// class should have only 1 object
class myNumber {
    constructor() {
    }
    static getInstance(no) {
        if (!this.instance) {
            this.instance = new myNumber();
        }
        return this.instance;
    }
}
const number1 = myNumber.getInstance(4);
console.log(number1);
//# sourceMappingURL=app.js.map