# Day 8 — Hoisting + Closures

## var Hoisting

```javascript
console.log(myVar); // undefined
var myVar = 10;
console.log(myVar); // 10
```

## Function Declaration Hoisting

```javascript
sayHello(); // works!
function sayHello() {
  console.log("Hello!");
}
```

## let/const — Temporal Dead Zone

```javascript
console.log(myLet); // ERROR: Cannot access 'myLet' before initialization
let myLet = 10;
```

## Function Expression Trap

```javascript
sayHi(); // ERROR: Cannot access 'sayHi' before initialization
const sayHi = function () {
  console.log("Hi!");
};
```

---

## Closures — Basic Example

```javascript
function outer() {
  let count = 5;
  function inner() {
    console.log(count);
  }
  return inner;
}

const myFunc = outer();
myFunc(); // 5
```

## Closures — Counter Pattern

```javascript
function createCounter() {
  let count = 0;
  function increment() {
    count = count + 1;
    console.log(count);
  }
  return increment;
}

const counter1 = createCounter();
counter1(); // 1
counter1(); // 2
counter1(); // 3
```

## Closures — Independent Instances

```javascript
const counter1 = createCounter();
const counter2 = createCounter();
counter1(); // 1
counter1(); // 2
counter2(); // 1 — separate counter, starts fresh!
```

## The Classic Closure Loop Bug

```javascript
// Buggy
for (var i = 1; i <= 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}
// prints: 4, 4, 4

// Fixed
for (let i = 1; i <= 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}
// prints: 1, 2, 3
```

---

## Task 1 — Hoisting prediction

```javascript
console.log(a);
var a = 5;

console.log(b);
let b = 10;
```

**Output:**

```
undefined
ReferenceError: Cannot access 'b' before initialization
```

## Task 2 — Independent Greeter Closures

```javascript
function createGreeter(name) {
  function innerfunction() {
    console.log("Hello, " + name);
  }
  return { innerfunction };
}

const greeters1 = createGreeter("Abishek");
const greeters2 = createGreeter("Shyam");
greeters1.innerfunction();
greeters1.innerfunction();
greeters2.innerfunction();
```

**Output:**

```
Hello, Abishek
Hello, Abishek
Hello, Shyam
```

## Task 3 — Anonymous function returned via closure

```javascript
function outer() {
  let secret = "I am hidden";
  return function () {
    return secret;
  };
}

const getSecret = outer();
console.log(getSecret());
console.log(typeof getSecret); // "function" — proves getSecret is a function, not an object
```

**Output:**

```
I am hidden
function
```

## Task 4 — Loop bug, buggy and fixed

```javascript
for (var i = 1; i <= 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}
// 4, 4, 4

for (let i = 1; i <= 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}
// 1, 2, 3
```

---

## Practical Project — Private Counter & Secure Vault System

### Part 1 — Counter Factory

```javascript
function createCounter() {
  let count = 0;

  function increment() {
    count = count + 1;
    console.log(count);
  }
  function decrement() {
    count = count - 1;
    console.log(count);
  }
  function reset() {
    count = 0;
    console.log(count);
  }

  return { increment, decrement, reset };
}

const counterA = createCounter();
const counterB = createCounter();
counterA.increment();
counterA.increment();
counterA.increment();
counterB.increment();
```

**Output:**

```
1
2
3
1
```

### Part 2 — Secure Vault

```javascript
function createVault(correctPassword) {
  let password = correctPassword;

  function unlock(attemptPassword) {
    if (attemptPassword === password) {
      console.log("Access Granted !");
    } else {
      console.log("Access Denied !");
    }
  }

  function changePassword(oldPassword, newPassword) {
    if (oldPassword === password) {
      console.log("Password matched, now you can update the new password");
      password = newPassword;
    } else {
      console.log("Incorrect current password");
    }
  }

  return { unlock, changePassword };
}

const vault = createVault(12345);
vault.unlock(12345);
vault.changePassword(12345, 54321);
console.log(vault.correctPassword);
```

**Output:**

```
Access Granted !
Password matched, now you can update the new password
undefined
```

**Why undefined:** The returned object only contains `unlock` and `changePassword` — no property named `correctPassword` (or `password`) was ever attached to it. The real password lives inside the closure, accessible only through the two exposed functions.

### Part 3 — The Loop Bug, Applied

```javascript
// Buggy
for (var i = 1; i <= 3; i++) {
  setTimeout(function () {
    console.log("Greeting Number: ", i);
  });
}
// Greeting Number: 4 (x3)

// let respects block scope and creates a brand new i variable for each loop iteration.
for (let i = 1; i <= 3; i++) {
  setTimeout(function () {
    console.log("Greeting Number: ", i);
  });
}
// Greeting Number: 1, 2, 3
```

---

## Test Q4 — makeMultiplier (separate closures)

```javascript
function makeMultiplier(x) {
  return function (y) {
    return x * y;
  };
}

const double = makeMultiplier(2);
const triple = makeMultiplier(3);

console.log(double(5)); // 10
console.log(triple(5)); // 15
```
