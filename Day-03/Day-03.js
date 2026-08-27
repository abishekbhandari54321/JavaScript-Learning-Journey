// JavaScript Day 3
// Operators, Type Conversion and Type Coercion

console.log("................Exercise 1...............");

console.log(10 + 5);
console.log(10 - 5);
console.log(10 * 5);
console.log(10 / 5);
console.log(10 % 3);
console.log(2 ** 3);

//Exercise 1 — Arithmetic
const a = 20;
const b = 6;

const addition = a + b;
const subtraction = a - b;
const multiplication = a * b;
const division = a / b;
const remainder = a % b;

console.log("Addition:", addition);
console.log("Subtraction:", subtraction);
console.log("Multiplication:", multiplication);
console.log("Division:", division);
console.log("Remainder:", remainder);

console.log("................Exercise 2..............");

//Exercise 2 — Comparison

console.log(10 > 5);
console.log(10 < 5);
console.log(10 >= 10);
console.log(10 <= 9);
console.log(10 == "10");
console.log(10 === "10");
console.log(10 != "10");
console.log(10 !== "10");

console.log("..............Exercise 3..............");


// Exercise 3 — Type Coercion

console.log("10" + 5);
console.log("10" - 5);
console.log("10" * 2);
console.log("10" / 2);
console.log(10 + "5");

console.log(".............Exercise 4.............");


//Exercise 4 — Type Conversion

const x = "100";
const number = Number(x); // Convert string to number
console.log(number); // Output: 100

const y = 100;
const stringValue = String(y); // Convert number to string
console.log(stringValue); // Output: "100"

const z = 1;
const boolvalueolean(z);  
console.log(boolvalue) // Output: true

const w = 0;
const booleanValue = Boolean(w);
console.log(booleanValue); // Output: false

console.log("..............Exercise 5.............");


//Exercise 5 — Ternary

const age = 20;
const isAdult = age >= 18 ? "Adult" : "Minor";
console.log(isAdult); // Output: Adult

console.log("..............Exercise 6 ..............");

//Exercise 6 — Template Literal

const name_of_person = "Abishek";
const age_of_person = 25;
const profession = "Full-Stack Developer";

console.log(`My name is ${name_of_person}, I am ${age_of_person} years old and I want to become a ${profession}.`);


