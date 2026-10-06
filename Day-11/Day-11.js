// Day 11: Modern JavaScript / ES6+ :

console.log("---------------------------------- 1. let & const ----------------------------------");

// 1. let / const:
let age = 25;
age = 26; // fine — let allows reassignment

const name1 = "Abishek";
//name1 = "Ram"; // ERROR — const cannot be reassigned

// Important Nuance: const with Objects/Arrays:
const user = { name: "Abishek" };
user.name = "Priya"; // THIS WORKS — we're not reassigning "user" itself, just changing its contents
console.log(user); // { name: "Priya" }

//user = { name: "New" }; // ERROR — this WOULD be reassigning "user" entirely

console.log("---------------------------------- 2. Arrow Functions ----------------------------------");

// 2. Arrow Functions:
const add = (a, b) => {
    return a + b;
};

const addArrow = (a, b) => a + b; // identical behavior, shorter syntax

add(5,2);
addArrow(4,5);

console.log("---------------------------------- 3. Template Literals ----------------------------------");

// 3. Template Literals:
const name2 = "Abishek";
const age2 = 22;

// Old way
const oldMessage = "Hello, " + name2 + "! You are " + age2 + " years old.";

// Template literal way
const newMessage = `Hello, ${name2}! You are ${age2} years old.`;

// Expression:
const price = 100;
console.log(`Total with tax: $${price * 1.1}`); // Total with tax: $110

// Multi-line Strings (a bonus feature):
const message = `Line one
Line two
Line three`; // works naturally, no special characters needed
console.log(message);

console.log("---------------------------------- 4. Destructuring ----------------------------------");

// 4. Destructuring:
const userX = { name3: "Abishek", age3: 22, city: "Kathmandu" }; 
const { name3, age3 } = userX;
console.log(name3, age3); // Abishek 22

const numbers = [10, 20, 30];
const [a, b] = numbers;
console.log(a, b); // 10 20

// Renaming (object destructuring):
const { name: userName } = userX;
console.log(userName); // Abishek

// Default Values During Destructuring:
const { country = "Nepal" } = userX; // if "country" doesn't exist on user, use "Nepal"
console.log(country); // Nepal

console.log("---------------------------------- 5. Spread / Rest Operators ----------------------------------");

// 5. Spread / Rest Operators:

// Spread:
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
console.log(arr2); // [1, 2, 3, 4, 5]

const userZ = { name: "Abishek", age: 22 };
const updatedUser = { ...userZ, age: 23 }; // copies everything, then overrides age
console.log(updatedUser); // { name: "Abishek", age: 23 }

// Rest:
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3, 4)); // 10

console.log("---------------------------------- 6. Default Parameters ----------------------------------");

// 6. Default Parameters:
function greet(name = "Guest") {
    console.log("Hello, " + name);
}

greet("Abishek"); // Hello, Abishek
greet();          // Hello, Guest — default kicks in

// -------------------------------------------------------------------

function test(value = "default") {
    console.log(value);
}
test(undefined); // "default" — triggers default
test(null);      // null — does NOT trigger default!
test(0);         // 0 — does NOT trigger default!

console.log("---------------------------------- 7. Optional Chaining (?.) ----------------------------------"); 

// 7. Optional Chaining (?.)
// -> Optional chaining lets you safely access a deeply nested property, WITHOUT crashing your program if something along the way doesn't exist.

const person = {
    userName : "Ram",
    address : {
       // city: "Jhapa",
    }
}

console.log(person.address.city?.house); //// undefined — NO crash! - without ?. it would have crashed.

console.log("---------------------------------- 8. Nullish Coalescing (??) ----------------------------------"); 

//8. Nullish Coalescing (??)
// -> ?? gives you a fallback value, but ONLY when the left side is null or undefined — NOT for other falsy values like 0, "", or false.
//(nullish coalesing = undefined & null).
const x = 0;

// console.log(a || 20); // prints 20 instead of 0. (WRONG! We WANTED to keep 0)
console.log(x ?? 20);

// Side-by-Side Comparision:
console.log(0 || "fallback");          // "fallback" — 0 is falsy, so || replaces it
console.log(0 ?? "fallback");          // 0          — 0 is NOT null/undefined, so ?? keeps it

console.log("" || "fallback");         // "fallback" — empty string is falsy
console.log("" ?? "fallback");         // ""         — kept, since it's not null/undefined

console.log(null || "fallback");       // "fallback"
console.log(null ?? "fallback");       // "fallback" — both work the same for actual null/undefined
console.log(undefined || "fallback");  // "fallback"
console.log(undefined ?? "fallback");  // "fallback"

const city = person.address?.city ?? "City not provided";
console.log(city); // "City not provided" — safely handles missing data AND gives a clean fallback

console.log("---------------------------------- 9. Modules — import / export ----------------------------------"); 

import {Add, subtract, PI} from './mathUtils.js';

console.log(Add(5, 3));      // 8
console.log(subtract(5, 3)); // 2
console.log(PI);             // 3.14159

//greet.js
import greetZ from './greetZ.js'; // no curly braces for default exports!

greet("Ram"); // Hello, Ram

console.log("---------------------------------- Task 1 ----------------------------------");

//Task 1:
const student = {
    name: "Abishek",
    grades: {
        math: 90
    }
};

console.log(student.grades?.science);
console.log(student.grades?.science?.toFixed(2));
console.log(student.address?.city);

console.log("---------------------------------- Task 2 ----------------------------------");

//Task 2:
function displayScore(score) {
    const finalScore = score ?? "No score yet";
    console.log(finalScore);
}

displayScore(0);
displayScore(null);
displayScore(undefined);
displayScore(85);

console.log("---------------------------------- Task 3 ----------------------------------");

//Task 2:
let votes = 0;

const withOr = votes || "No votes";
const withNullish = votes ?? "No votes";

console.log(withOr);
console.log(withNullish);

console.log("---------------------------------- Task 5 ----------------------------------");

// Task 4:
const settings = {
    theme: "dark",
    notifications: false
};

const notificationSetting = settings.notifications ?? true;
const notificationSettingOld = settings.notifications || true;

console.log(notificationSetting);
console.log(notificationSettingOld); 

console.log("---------------------------------- Prediction 3 ----------------------------------");

//Prediction 3:
const config = {
    volume: 0,
    brightness: null
};

console.log(config.volume ?? 50); // 0, because it treats 0 as a valid data.
console.log(config.volume || 50); // 50, because || treats 0 as a falsy value so it gives fallback value.
console.log(config.brightness ?? 50); // 50 because nullish coalescing, gives fallback values only for null/undefined. It doesnot care about other falsy values.
console.log(config.brightness || 50); // 50, because null is a falsy value.

console.log("---------------------------------- Prediction 5 ----------------------------------");

// Prediction 5:
const data = {
    user: {
        profile: null
    }
};

console.log(data.user?.profile?.name);
console.log(data.user?.profile?.name ?? "No name set");