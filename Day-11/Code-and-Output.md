# Day 11 — Modern JavaScript / ES6+

## Recap: let/const, Arrow Functions, Template Literals, Destructuring, Spread/Rest, Default Parameters

```javascript
let age = 25;
age = 26; // fine

const user = { name: "Abishek" };
user.name = "Priya"; // works — only the contents change, not the reference
console.log(user); // { name: 'Priya' }

const addArrow = (a, b) => a + b;

const name2 = "Abishek",
  age2 = 22;
console.log(`Hello, ${name2}! You are ${age2} years old.`);
console.log(`Total with tax: $${100 * 1.1}`); // $110.00000000000001 (floating point)

const userX = { name: "Abishek", age: 22, city: "Kathmandu" };
const { name, age: userAge } = userX; // correct destructuring (matches real key names)
console.log(name, userAge); // Abishek 22

const [a, b] = [10, 20];
console.log(a, b); // 10 20

const arr2 = [...[1, 2, 3], 4, 5];
console.log(arr2); // [1, 2, 3, 4, 5]

const updatedUser = { ...{ name: "Abishek", age: 22 }, age: 23 };
console.log(updatedUser); // { name: 'Abishek', age: 23 }

function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3, 4)); // 10

function greet(name = "Guest") {
  console.log("Hello, " + name);
}
greet("Abishek"); // Hello, Abishek
greet(); // Hello, Guest

function test(value = "default") {
  console.log(value);
}
test(undefined); // "default"
test(null); // null — default NOT triggered
test(0); // 0 — default NOT triggered
```

---

## Optional Chaining (?.)

```javascript
const person = {
  userName: "Ram",
  address: {},
};
console.log(person.address.city?.house); // undefined — no crash
```

## Nullish Coalescing (??)

```javascript
const x = 0;
console.log(x ?? 20); // 0 — kept, since 0 is not null/undefined

console.log(0 || "fallback"); // "fallback"
console.log(0 ?? "fallback"); // 0
console.log("" || "fallback"); // "fallback"
console.log("" ?? "fallback"); // ""
console.log(null ?? "fallback"); // "fallback"
console.log(undefined ?? "fallback"); // "fallback"

const city = person.address?.city ?? "City not provided";
console.log(city); // "City not provided"
```

## Modules — import/export

```javascript
// mathUtils.js
export function Add(a, b) {
  return a + b;
}
export function subtract(a, b) {
  return a - b;
}
export const PI = 3.14159;

// greetZ.js
export default function greet(name) {
  console.log("Hello, " + name);
}

// main file
import calculate, { Add, subtract, PI } from "./mathUtils.js"; // combined style
console.log(Add(5, 3)); // 8
console.log(subtract(5, 3)); // 2
console.log(PI); // 3.14159
```

---

## Task 1 — Optional chaining with nested data

```javascript
const student = {
  name: "Abishek",
  grades: { math: 90 },
};
console.log(student.grades?.science); // undefined
console.log(student.grades?.science?.toFixed(2)); // undefined
console.log(student.address?.city); // undefined
```

## Task 2 — Nullish coalescing in a function

```javascript
function displayScore(score) {
  const finalScore = score ?? "No score yet";
  console.log(finalScore);
}
displayScore(0); // 0
displayScore(null); // No score yet
displayScore(undefined); // No score yet
displayScore(85); // 85
```

## Task 3 — || vs ?? with 0

```javascript
let votes = 0;
console.log(votes || "No votes"); // No votes
console.log(votes ?? "No votes"); // 0
```

## Task 4 — Modules (named + default exports)

```javascript
// calculator.js
export function multiply(num1, num2) {
  return num1 * num2;
}
export function divide(a, b) {
  return a / b;
}
export default function calculate() {
  console.log("Calculating...");
}

// main.js
import calculate, { multiply, divide } from "./calculator.js";
console.log(multiply(2, 2));
console.log(divide(10, 2));
calculate();
```

## Task 5 — The false edge case (important real bug)

```javascript
const settings = { theme: "dark", notifications: false };
const notificationSetting = settings.notifications ?? true; // false — correctly kept
const notificationSettingOld = settings.notifications || true; // true — bug! overrides valid false
console.log(notificationSetting); // false
console.log(notificationSettingOld); // true
```

---

## Practical Project — Safe User Profile Viewer

```javascript
const user1 = {
  name: "Ram",
  age: 25,
  address: { country: "India", city: "Ayodhya" },
  settings: { notifications: false },
};

const user2 = { name: "Shyam", age: 22 };

const user3 = {
  name: "Hari",
  age: 0,
  settings: { notifications: true },
};

function displayProfile(user) {
  const { name, age } = user;
  const city = user.address?.city ?? "Not provided";
  const country = user.address?.country ?? "Not provided";
  const notifications = user.settings?.notifications ?? true;

  console.log(
    `Name: ${name}, Age: ${age}, City: ${city}, Country: ${country}, Notifications: ${notifications}`,
  );
}

displayProfile(user1);
displayProfile(user2);
displayProfile(user3);

const updatedUser1 = {
  ...user1,
  address: {
    ...user1.address,
    city: "Rameshwaram",
  },
};

displayProfile(updatedUser1);

console.log("Original user1 city:", user1.address.city);
console.log("Updated user1 city:", updatedUser1.address.city);
```

**Output:**

```
Name: Ram, Age: 25, City: Ayodhya, Country: India, Notifications: false
Name: Shyam, Age: 22, City: Not provided, Country: Not provided, Notifications: true
Name: Hari, Age: 0, City: Not provided, Country: Not provided, Notifications: true
Name: Ram, Age: 25, City: Rameshwaram, Country: India, Notifications: false
Original user1 city: Ayodhya
Updated user1 city: Rameshwaram
```

**Key proof points:** `user3`'s `age: 0` is correctly preserved (not replaced by a fallback), `user1`'s `notifications: false` is correctly preserved (not overridden to `true`), and `updatedUser1`'s city change did NOT affect the original `user1` — spread created a true independent copy.

---

## Test Q3 — Prediction with volume/brightness

```javascript
const config = { volume: 0, brightness: null };
console.log(config.volume ?? 50); // 0
console.log(config.volume || 50); // 50
console.log(config.brightness ?? 50); // 50
console.log(config.brightness || 50); // 50
```

## Test Q5 — Optional chaining stopping at null (not "missing")

```javascript
const data = { user: { profile: null } };
console.log(data.user?.profile?.name); // undefined
console.log(data.user?.profile?.name ?? "No name set"); // No name set
```

**Why:** `profile` EXISTS but is `null`. The `?.` after `profile` detects that `null` and stops immediately, safely returning `undefined` — without ever checking for a `name` property.
