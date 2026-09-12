# Day 7 — Scope + Execution Context

## Global Scope

```javascript
let country = "Nepal";

function showCountry() {
  console.log(country);
}

showCountry(); // Nepal
console.log(country); // Nepal
```

---

## Function Scope

```javascript
function greet() {
  let message = "Hello!";
  console.log(message); // works
}
greet();
// console.log(message); // ERROR — not accessible outside
```

---

## Block Scope — let/const vs var

```javascript
if (true) {
  let age = 25;
  console.log(age); // 25
}
// console.log(age); // ERROR — trapped in block

if (true) {
  var name = "Abishek";
}
console.log(name); // "Abishek" — var LEAKS out of the block
```

---

## Lexical Scope

```javascript
function outer() {
  let city = "Kathmandu";
  function inner() {
    console.log(city); // can access outer's variable
  }
  inner();
}
outer(); // Kathmandu
```

---

## Scope Chain

```javascript
let level1 = "I am global";

function outer() {
  let level2 = "I am in outer";
  function inner() {
    let level3 = "I am in inner";
    console.log(level3);
    console.log(level2);
    console.log(level1);
  }
  inner();
}
outer();
```

**Output:**

```
I am in inner
I am in outer
I am global
```

---

## Call Stack Basics

```javascript
function first() {
  console.log("Inside first");
  second();
  console.log("Back in first");
}
function second() {
  console.log("Inside second");
}
first();
```

**Output:**

```
Inside first
Inside second
Back in first
```

---

## Task 1 — Nested scope, same variable name

```javascript
let x = "global";
function outer() {
  let x = "outer";
  function inner() {
    let x = "inner";
    console.log(x);
  }
  inner();
  console.log(x);
}
outer();
console.log(x);
```

**Output:**

```
inner
outer
global
```

---

## Task 2 — var leaking from a for loop

```javascript
for (var i = 0; i < 3; i++) {
  // empty
}
console.log(i);
```

**Output:**

```
3
```

**Why:** `var` leaks out of the loop's block scope, so `i` is still accessible outside, holding its final value.

---

## Task 3 — Multi-level call stack trace

```javascript
function a() {
  console.log("A start");
  b();
  console.log("A end");
}
function b() {
  console.log("B start");
  c();
  console.log("B end");
}
function c() {
  console.log("C");
}
a();
```

**Output:**

```
A start
B start
C
B end
A end
```

**Why:** Each function pauses when it calls another, and only resumes once the called function fully finishes — producing a "go deep, then unwind in reverse" pattern.

---

## Task 4 — Lexical scope with a bank-style example

```javascript
function outerFunc() {
  let secretNumber = 40;
  function innerFunc() {
    console.log(secretNumber);
  }
  innerFunc();
}
outerFunc();
```

**Output:**

```
40
```

---

## Practical Project — Call Stack Tracer + Scope Playground

### Part 1 — Call Stack Practice

```javascript
function startProcess() {
  console.log("Starting process...");
  validateData();
  console.log("Process finished.");
}
function validateData() {
  console.log("Validating data...");
  saveData();
  console.log("Validation Complete.");
}
function saveData() {
  console.log("Data saved.");
}
startProcess();
```

**Output:**

```
Starting process...
Validating data...
Data saved.
Validation Complete.
Process finished.
```

### Part 2 — Scope Playground

```javascript
let appName = "MyApp"; // global scope

function processOrder() {
  let orderId = 101; // function scope

  if (true) {
    let status = "pending"; // block scope
    var legacyStatus = "old-pending"; // var will leak

    console.log(appName);
    console.log(orderId);
    console.log(status);
  }

  console.log(legacyStatus); // works — var leaked out of if block
  // console.log(status); // ReferenceError: status is not defined — trapped in the if block (block scope)
}
processOrder();
```

**Output:**

```
MyApp
101
pending
old-pending
```

### Part 3 — Lexical Scope Demo

```javascript
function bankAccount() {
  let balance = 1000;
  function checkBalance() {
    console.log("Current balance: " + balance);
  }
  checkBalance();
}
bankAccount();
```

**Output:**

```
Current balance: 1000
```

---

## Test Q4 — Deeper call stack trace

```javascript
function one() {
  console.log("1");
  two();
  console.log("2");
}
function two() {
  console.log("3");
  three();
  console.log("4");
}
function three() {
  console.log("5");
}
one();
console.log("6");
```

**Output:**

```
1
3
5
4
2
6
```

---

## Test Q6 — Returning a function vs calling it (closure preview)

```javascript
function outer() {
  let count = 5;
  function inner() {
    console.log(count);
  }
  return inner;
}

const myFunc = outer();
myFunc();
```

**Output:**

```
5
```

**Why:** `return inner;` returns the function itself, not its result. `myFunc` becomes a real callable function (same as `inner`). Even after `outer()` finishes, `inner` still remembers `count` because of lexical scope — this is the foundation of closures (Day 8's topic).
