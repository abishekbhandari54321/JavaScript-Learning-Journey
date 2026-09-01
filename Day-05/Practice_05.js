//Task 1: Write a function called calculateArea that takes length and width as parameters and returns the area of a rectangle.
function calculateArea(length, width) {
    return length * width;
}
console.log("Area of rectangle: " + calculateArea(5, 10)); // 50

console.log("...............................");

/*Task 2: Convert this regular function into an arrow function with implicit return:

function square(num) {
    return num * num;
}*/ 
const square = (num) => num *num;
console.log("Area of square: " + square(4)); // 16

console.log("...............................");

//Task 3 (predict the output first, then run it):

function multiply(a, b = 2) {
    return a * b;
}

console.log(multiply(5));
console.log(multiply(5, 3));

console.log("...............................");

//Task 4 — Callback practice: Write a function called processOrder that takes an orderName and a callback function. Inside, log "Processing " + orderName, then call the callback. Then write a separate function called orderComplete that logs "Order finished!", and call processOrder("Pizza", orderComplete).

function processOrder(orderName, callback) {
    console.log("Processing " + orderName);
    callback();
}

function orderComplete(){
    console.log("Order finished!")
}

processOrder("Pizza", orderComplete);

console.log("...............................");

/*
function greet(name, callback) {
       console.log("Hi " + name);
       callback();
   }
   function bye() {
       console.log("Bye!");
   }
   greet("Sam", bye());

   */