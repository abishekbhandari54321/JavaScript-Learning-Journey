//Function in JavaScript:
function greet(){
    console.log("Hello");
}
greet();

console.log("...............................");

//real usecases:
function showWelcomeMessage(name){
    console.log("Welcome, " + name + "!");
}
showWelcomeMessage("Abishek");
showWelcomeMessage("John");     

console.log("...............................");

//Parameter and Argument:
function person(name){
    console.log("Hello, " + name);
}
person("Abishek");

console.log("...............................");

//return:
function add(a,b){
    return a+b;
}
let sum = add(5,10);
console.log(sum);

console.log("...............................");

// Regular function
function add(a, b) {
    return a + b;
}

// Arrow function (same thing)
const add2 = (a, b) => {
    return a + b;
};

// Arrow function - shorter version (implicit return)
const add3 = (a, b) => a + b;

console.log(add(2, 3));   // 5
console.log(add2(5, 4));  // 5
console.log(add3(4, 4));  // 5

console.log("...............................");

// Multiple lines — needs { } and return
const calculateTax = (price) => {
    let tax = price * 0.1;
    return tax;
}
console.log(calculateTax(100)); // 10

// One line — implicit return works
const double = (num) => num * 2;
console.log(double(10)); // 20

console.log("...............................");

//callback function:

function userInput(name, callback){
    console.log("Hello, " + name);
    callback();
}

function sayBye(){
    console.log("Goodbye!");
}

userInput("Abishek", sayBye);

console.log("...............................");

//Higher Order function:
function higherOrder(callback){
    console.log("This is before callback");
    callback();
    console.log("This is after callback");
}

higherOrder(function(){
    console.log("This is the callback function");
});