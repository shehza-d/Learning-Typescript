// Types 

type Person = {
    name: string;
    rollNo: number;
    email: string;
    hobbies?: string[];   //optional key Approach # 02
    password: number;

}

const person1: Person = {
    name: "Tayyaba",
    rollNo: 653853,
    email: "ta6402792@gmail.com",
    password:12  // Second approach
}

person1.hobbies=["reading"]

console.log(person1)


const person2: Person[] = [];

person2.push({
    name: "Umra",
    rollNo: 7888,
    email: "umra45@gmail.com",
    hobbies: ["cooking"],
    password: 9090,
})
console.log(person2);


// Approach # 01

// If you have to assign any property later for this we have two approaches either you can initialize that property empty or any thing except null undefined because they already are javascript types later you can reassign the value

// Approach # 02

// You can use the optional operator ? in the type to make it optional


// Functions

const add = function (val1: number, val2: number,val3:number,cb:(x:number)=>void): number  { //can specify the return type of your function if rour function is not returning anything you can use the void
    
// calling callback
    
    cb(7890)

    return val1+val2+val3
}

let func:(x:number,y:number,z:number,cb:(y:number)=>number)=>void; // It will accept any function

func = add;
console.log(func)



// Making a function which accepts two parameters and will perform the operations


// before the type of cal was only string accepting all strings


// We can already make the type using these union operator like this

type Calc = "ADD"|"SUBTRACT" |"+"|"-" // string literals 

const operation = function (num1: number, num2: number, calc: Calc) {
    if (calc === "ADD"||calc === "+") {
        console.log("hello")
        return num1+num2
    }
    else if (calc === "SUBTRACT"||calc === "-") {
        return num1-num2
    }

}
// console.log(operation(1,2,"ADD"));
// console.log(operation(8,3,"SUBTRACT"));
// console.log(operation(8,3,"divide"));  // Will complain
// console.log(operation(9,10,"+"));
// console.log(operation(12,10,"SUBTRACT"));
console.log(operation(9,4,"SUBTRACT"));




// If you pass any string except add and subtract the ts won't complain bcz the type of cal is string which you are pasing correctly


//Union Operator |


// For this we can use the union operator definning the not only the string but exact these strings which i am definning


