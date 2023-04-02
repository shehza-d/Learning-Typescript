// const input1ELe = document.getElementById("num1")! as HTMLInputElement;
// const input2ELe = document.getElementById("num2")as HTMLInputElement;
// const btn = document.getElementById("btn")!
// function addNumbers(num1:number, num2:number) {
//     return num1+num2
// }
// btn.addEventListener("click", () => {
//     console.log(addNumbers(+input1ELe.value,+input2ELe.value))
// })
// const myName = "Tayyaba"
var myName = "Tayyaba";
myName = "Umra";
// myName = 5;
// Throw error bcz when you assigning the value the TS is smart it will make the same type of the variable as the value type and after if you try to reassign any value against the type it will not let you do this
// let person:number;
// person=true
// String Array
// let names = ["Tayyaba","Umra","Sahiba"]
var names = []; // Let guiding TS that the array will be of strings
// names.push(6)
names.push("Wareesha");
names.push("Hira");
names.push("5");
console.log(names);
// Number Array
var numbers = [];
numbers.push(8);
console.log(numbers);
