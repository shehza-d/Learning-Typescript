"use strict";
// const input1 = document.getElementById("num1")! as HTMLInputElement;
// const input2 = document.getElementById("num2")! as HTMLInputElement;
// const button = document.getElementById("btn")!;
function add(x, y) {
    if (typeof x === "number" && typeof y === "number") {
        return x + y;
    }
    else if (typeof x === "string" && typeof y === "string") {
        return x + y;
    }
    else {
        throw new Error("Types did not match.");
    }
}
const value = add("Hello", "World"); // as string;
const value2 = add(5, 5); // as number;
value2.toFixed();
console.log(value.split(" "));
//# sourceMappingURL=app.js.map