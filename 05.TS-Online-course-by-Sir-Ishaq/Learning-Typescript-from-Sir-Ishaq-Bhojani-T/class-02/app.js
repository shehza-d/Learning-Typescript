// Types 
var person1 = {
    name: "Tayyaba",
    rollNo: 653853,
    email: "ta6402792@gmail.com",
    password: 12 // Second approach
};
person1.hobbies = ["reading"];
console.log(person1);
var person2 = [];
person2.push({
    name: "Umra",
    rollNo: 7888,
    email: "umra45@gmail.com",
    hobbies: ["cooking"],
    password: 9090,
});
console.log(person2);
// Approach # 01
// If you have to assign any property later for this we have two approaches either you can initialize that property empty or any thing except null undefined because they already are javascript types later you can reassign the value
// Approach # 02
// You can use the optional operator ? in the type to make it optional
// Functions
var add = function (val1, val2, val3, cb) {
    // calling callback
    cb(7890);
    return val1 + val2 + val3;
};
var func; // It will accept any function
func = add;
console.log(func);
var operation = function (num1, num2, calc) {
    if (calc === "ADD" || calc === "+") {
        console.log("hello");
        return num1 + num2;
    }
    else if (calc === "SUBTRACT" || calc === "-") {
        return num1 - num2;
    }
};
// console.log(operation(1,2,"ADD"));
// console.log(operation(8,3,"SUBTRACT"));
// console.log(operation(8,3,"divide"));  // Will complain
// console.log(operation(9,10,"+"));
// console.log(operation(12,10,"SUBTRACT"));
console.log(operation(9, 4, "SUBTRACT"));
// If you pass any string except add and subtract the ts won't complain bcz the type of cal is string which you are pasing correctly
//Union Operator |
// For this we can use the union operator definning the not only the string but exact these strings which i am definning
