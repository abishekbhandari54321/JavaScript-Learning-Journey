//1. Global Scope

console.log("Global Scope: ");

let country = "Nepal";

function showCountry(){
    console.log(country);
}
showCountry();
console.log(country);

console.log("...................................................");

//2. Function Scope
console.log("Function Scope: ");

function greet(){
    const message = "Namaste";
    console.log(message);
}
greet();
//console.log(message); //undefined variable

console.log("..................................................."); 

//3. Block Scope
console.log("Block Scope: ");

if(true){
    let age = 25;
    console.log(age);
}

//console.log(age); //age is not defined

console.log("...................................................");

//4. Lexical Scope
console.log("Lexical Scope: ");

function outer(){
    let name = "Abishek";

    function inner(){
        console.log("Hi, " + name);
    }
    inner();
}
outer();

console.log("...................................................");

//5. Scope Chain

let level1 = "I am global variable";

function outer1(){
    let level2 = "I am in outer function";

    function inner1(){
        let level3 = "I am in inner function";
        console.log(level3);
        console.log(level2);
        console.log(level1);
    }
    inner1();
}
outer1();

console.log("...................................................");

//6. Execution Context
console.log("Execution Context: ");

let x = 10; // part of the Global Execution Context

function add(a,b){
    let result = a + b; // part of add()'s OWN Function Execution Context
    return result;
}
add(8,5); //a new Execution Context is created just for this call

console.log("...................................................");

//Ca;; Stack
console.log("Call Stack: ");

function first(){
    console.log("Inside first");
    second();
    console.log("Back in first");
}

function second(){
    console.log("Inside second");
}

first();

console.log("...................................................");
