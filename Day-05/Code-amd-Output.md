# Day 5 — Functions

## Function Declaration & Return

```javascript
function greet() {
  console.log("Hello!");
}
greet();
greet();
```

**Output:**

```
Hello!
Hello!
```

---

## Task 1 — calculateArea

```javascript
function calculateArea(length, width) {
  return length * width;
}
console.log("Area of rectangle: " + calculateArea(5, 10));
```

**Output:**

```
Area of rectangle: 50
```

---

## Task 2 — Arrow function conversion

```javascript
const square = (num) => num * num;
console.log("Area of square: " + square(4));
```

**Output:**

```
Area of square: 16
```

---

## Task 3 — Default Parameters

```javascript
function multiply(a, b = 2) {
  return a * b;
}
console.log(multiply(5));
console.log(multiply(5, 3));
```

**Output:**

```
10
15
```

**Note:** Default parameter only applies when the argument is missing. Passing a value always overrides the default.

---

## Task 4 — Callback practice

```javascript
function processOrder(orderName, callback) {
  console.log("Processing " + orderName);
  callback();
}

function orderComplete() {
  console.log("Order finished!");
}

processOrder("Pizza", orderComplete);
```

**Output:**

```
Processing Pizza
Order finished!
```

---

## Practical Project — Simple Order Billing System (Final Working Version)

```javascript
function calculateTotal(price, quantity) {
  return price * quantity;
}
const total = calculateTotal(600, 2);
console.log("Raw-Total: " + total);

function applyDiscount(total) {
  if (total > 1000) {
    const discount = total * 0.1;
    return discount;
  } else {
    console.log("No discount applied.");
    return 0;
  }
}
const discount = applyDiscount(total);
console.log("Discount: " + discount);

function calculateFinalAmount(total, discount) {
  return total - discount;
}
const finalAmount = calculateFinalAmount(total, discount);
console.log("Final Amount: " + finalAmount);

function generateReceipt(itemName, total, callback) {
  console.log("Item: " + itemName);
  console.log("Total: " + total);
  callback();
}

function thankYouMessage() {
  console.log("Thank you for shopping with us!");
}

generateReceipt("Laptop", finalAmount, thankYouMessage);
```

**Output:**

```
Raw-Total: 1200
Discount: 120
Final Amount: 1080
Item: Laptop
Total: 1080
Thank you for shopping with us!
```

---

## ⚠️ Bugs found and fixed during the project

1. **First attempt:** `applyDiscount` only used `console.log` instead of `return` — so it never gave back a usable number.
2. **First attempt:** parameter was named `calculateTotal` (same as another function) — caused confusing shadowing.
3. **First attempt:** tried to do everything in one messy nested line instead of step-by-step variables.
4. **Fix:** Broke the logic into clear steps — calculate total → calculate discount → calculate final amount → generate receipt — storing each result in its own variable before passing it forward.

---

## Test Question 3 — return stops execution

```javascript
function test() {
  return;
  console.log("Will this run?");
}
console.log(test());
```

**Output:**

```
undefined
```

**Why:** `return;` stops the function immediately. The `console.log` after it never runs. Since no value follows `return`, the function returns `undefined`.

---

## Test Question 6 — callback called immediately by mistake

```javascript
function greet(name, callback) {
  console.log("Hi " + name);
  callback();
}
function bye() {
  console.log("Bye!");
}
greet("Sam", bye());
```

**Output:**

```
Bye!
Hi Sam
TypeError: callback is not a function
```

**Why:** `bye()` (with parentheses) runs immediately while JavaScript prepares the arguments for `greet`. Its return value (`undefined`) — not the function itself — gets passed in as `callback`. Then `callback()` fails because `undefined` is not a function. Correct way: `greet("Sam", bye)` — no parentheses.
