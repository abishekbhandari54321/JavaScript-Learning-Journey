# Day 14 — async/await

> **How to read this file:** every code block has its output directly below it.
> Outputs are shown per snippet, as if each snippet ran on its own. When many timers run together in ONE file, their output interleaves by delay time, not by file order.

---

## 1. async function

```javascript
async function getNumber() {
  return 5;
}

console.log(getNumber()); // Promise { 5 }

getNumber().then((num) => {
  console.log(num); // 5
});
```

**Output:**

```
Promise { 5 }
5
```

**Why:** An `async` function always returns a Promise. The returned value `5` is wrapped in a fulfilled Promise.

---

## 2. await

```javascript
function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function runAwaitDemo() {
  console.log("start");
  await wait(1000);
  console.log("After 1 second");
}

runAwaitDemo();
console.log("Meanwhile, rest of the program continues...");
```

**Output:**

```
start
Meanwhile, rest of the program continues...
After 1 second
```

**Why:** `await` pauses only `runAwaitDemo`. The rest of the program keeps running.

---

## 3. Rewriting a Promise Chain

```javascript
function getUser(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Got user");
      resolve({ userId: userId, name: "Abishek" });
    }, 1000);
  });
}

function getOrders(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Got orders");
      resolve(["Order1", "Order2"]);
    }, 1000);
  });
}

function getOrderDetails(order) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Got order details");
      resolve(order + " - Details");
    }, 1000);
  });
}
```

**Output:**

```
(No output. These only define the three functions.)
```

### Version A: Promise chain

```javascript
function showDetailsWithPromises() {
  return getUser(1)
    .then((user) => getOrders(user.userId))
    .then((orders) => getOrderDetails(orders[0]))
    .then((details) => {
      console.log("Final details:", details);
    })
    .catch((error) => {
      console.log("Error:", error);
    });
}

showDetailsWithPromises();
```

**Output:**

```
Got user
Got orders
Got order details
Final details: Order1 - Details
```

### Version B: async/await

```javascript
async function showDetails() {
  try {
    const user = await getUser(1);
    const orders = await getOrders(user.userId);
    const details = await getOrderDetails(orders[0]);

    console.log("Final details:", details);
    console.log(`${user.name} has ${orders.length} orders`);
  } catch (error) {
    console.log("Error:", error);
  }
}

async function main() {
  console.log("--- async/await version ---");
  await showDetails();
}

main();
```

**Output:**

```
--- async/await version ---
Got user
Got orders
Got order details
Final details: Order1 - Details
Abishek has 2 orders
```

**Why Version B is easier:** it reads top to bottom, and earlier results (`user`, `orders`) stay available as normal variables. That is why the last line can use both `user.name` and `orders.length`.

---

## 4. Error Handling with try / catch / finally

```javascript
const somePromise = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Data received successfully!");
  }, 500);
});

async function runErrorHandlingDemo() {
  try {
    const result = await somePromise;
    console.log(result);
  } catch (error) {
    console.log("Error:", error);
  } finally {
    console.log("Done");
  }
}

runErrorHandlingDemo();
```

**Output:**

```
Data received successfully!
Done
```

**Why:** The Promise was fulfilled, so `try` ran, `catch` was skipped, and `finally` ran. If the Promise had been rejected, `catch` would run instead, and `finally` would still run.

---

## 5. Sequential vs Parallel

```javascript
async function sequential() {
  console.time("Sequential time");
  await wait(1000);
  await wait(1000);
  console.timeEnd("Sequential time");
}

async function parallel() {
  console.time("Parallel time");
  await Promise.all([wait(1000), wait(1000)]);
  console.timeEnd("Parallel time");
}

async function compareExecution() {
  console.log("--- Sequential execution ---");
  await sequential();

  console.log("--- Parallel execution ---");
  await parallel();
}

compareExecution();
```

**Output:**

```
--- Sequential execution ---
Sequential time: 2.007s
--- Parallel execution ---
Parallel time: 1.002s
```

**Why:** Sequential waits for the first `wait` to finish before starting the second (about 2 seconds). `Promise.all` starts both together (about 1 second).

---

## 6. My Own Practice: weatherData

```javascript
async function weatherData() {
  const californiaWeather = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("18 Degree");
      reject("Error !");
    }, 2000);
  });

  const chicagoWeather = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("7 Degree");
      reject("Error !");
    }, 4000);
  });

  console.log("California Weather data loading... Please Wait...");
  let californiaW = await californiaWeather;
  console.log("California Data fetched successfully: " + californiaW);

  console.log("Chicago Weather data loading... Please Wait...");
  let chicagoW = await chicagoWeather;
  console.log("Chicago Data fetched successfully: " + chicagoW);

  return { californiaW, chicagoW };
}

console.log("Welcome to USA weather: ");
let a = weatherData();
a.then((value) => {
  console.log(value);
}).catch((error) => {
  console.log("Error: " + error);
});
```

**Output:**

```
Welcome to USA weather:
California Weather data loading... Please Wait...
California Data fetched successfully: 18 Degree
Chicago Weather data loading... Please Wait...
Chicago Data fetched successfully: 7 Degree
{ californiaW: '18 Degree', chicagoW: '7 Degree' }
```

**Key lesson:** The total time is about **4 seconds, not 6**. A Promise starts working the moment it is **created**, not when it is awaited. Both timers started together at the top. `await` only controls when you read the result.

**Note:** `reject("Error !")` after `resolve(...)` does nothing, because a settled Promise can never change state.

---

## Task 1: What does an async function return?

```javascript
async function test() {
  return 5;
}
console.log(test());
```

**Output:**

```
Promise { 5 }
```

---

## Task 2: Code after await runs later

```javascript
async function runTask2() {
  console.log("1");
  await null;
  console.log("2");
}

runTask2();
console.log("3");
```

**Output:**

```
1
3
2
```

**Why:** `runTask2()` prints `1`, then pauses at `await`. The main code continues and prints `3`. The rest of the function (`2`) runs afterward.

### ⚠️ Bug found in Day-14.js

In the original file, this function was named `run`, and a second function also named `run` was declared later (the `A / B / C` prediction). Function declarations are hoisted, and the **later one replaces the earlier one**, so Task 2 accidentally ran the `A / B` version and printed `A`, `3` instead of `1`, `3`, `2`.
**Fix:** use different function names (`runTask2` and `runPredict`).

---

## Task 3: Check stock with Promise + async/await

```javascript
function checkStock(quantity) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (quantity > 0) {
        resolve("In stock");
      } else {
        reject("Out of stock");
      }
    }, 1000);
  });
}

async function showStock(quantity) {
  try {
    console.log("Checking stock...");
    const result = await checkStock(quantity);
    console.log(result);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("Stock check completed.");
  }
}

showStock(5);
showStock(0);
```

**Output:**

```
Checking stock...
Checking stock...
In stock
Stock check completed.
Out of stock
Stock check completed.
```

**Why:** Both calls start at the same time, so both "Checking stock..." lines print first. For `showStock(0)` the Promise is rejected, so `catch` runs instead of the success path.

---

## Task 4: Step-by-step execution with async/await

```javascript
function step1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Step 1 completed!");
      resolve();
    }, 1000);
  });
}

function step2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Step 2 completed!");
      resolve();
    }, 1000);
  });
}

function step3() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Step 3 completed!");
      resolve();
    }, 1000);
  });
}

async function runSteps() {
  await step1();
  await step2();
  await step3();
  console.log("All steps complete!");
}

runSteps();
```

**Output:**

```
Step 1 completed!
Step 2 completed!
Step 3 completed!
All steps complete!
```

---

## Task 5: Sequential vs Parallel with timing

```javascript
function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function sequentialWait() {
  const start = Date.now();
  await wait(1000);
  await wait(1000);
  const end = Date.now();
  console.log("Sequential execution time:", end - start, "ms");
}

async function parallelWait() {
  const start = Date.now();
  await Promise.all([wait(1000), wait(1000)]);
  const end = Date.now();
  console.log("Parallel execution time:", end - start, "ms");
}

sequentialWait();
parallelWait();
```

**Output:**

```
Parallel execution time: 1002 ms
Sequential execution time: 2019 ms
```

**Why:** Sequential takes about 2000 ms because the second `wait(1000)` starts only after the first one finishes. `Promise.all()` takes about 1000 ms because both start together. "Parallel" prints first only because both functions were started at the same time and it finishes sooner.

---

## Prediction: A, await, B, then C

```javascript
async function runPredict() {
  console.log("A");
  await Promise.resolve();
  console.log("B");
}
runPredict();
console.log("C");
```

**Output:**

```
A
C
B
```

**Why:** `A` prints immediately. At `await`, the function pauses, so `C` prints next. `B` runs afterward.

---

## Test Q6: The missing await

```javascript
function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Data loaded"), 1000);
  });
}

// Wrong: no await
async function loadWrong() {
  const data = fetchData();
  console.log(data);
}
loadWrong();
```

**Output:**

```
Promise { <pending> }
```

```javascript
// Wrong fix: await without parentheses (awaits the function itself)
async function loadWrongFix() {
  const data = await fetchData;
  console.log(data);
}
loadWrongFix();
```

**Output:**

```
[Function: fetchData]
```

```javascript
// Correct: await with parentheses
async function loadCorrect() {
  const data = await fetchData();
  console.log(data);
}
loadCorrect();
```

**Output (after 1 second):**

```
Data loaded
```

**Why:** Without `await`, `data` is the Promise object. `await fetchData` (no parentheses) awaits the function itself, not the Promise it returns. `await fetchData()` calls the function and waits for the Promise. This is the same `bye` vs `bye()` lesson from Day 5.

---

## Practical Project: Order System, async/await Edition

```javascript
// Validate Cart
function validateCart(cart) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Validating cart...");

      if (cart.length > 0) {
        console.log("Cart is valid!");
        resolve(cart);
      } else {
        console.log("Cart is empty!");
        reject("Cannot place order with an empty cart.");
      }
    }, 1000);
  });
}

// Process Payment
function processPayment(amount) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Processing payment...");
      console.log(`Payment of ₹${amount} successful!`);
      resolve("Payment successful");
    }, 1000);
  });
}

// Generate Invoice
function generateInvoice(cart, amount) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Generating invoice...");

      const invoice = {
        items: cart,
        totalAmount: amount,
      };

      console.log("Invoice generated!");
      resolve(invoice);
    }, 1000);
  });
}

// Send Confirmation Email
function sendConfirmationEmail(invoice) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Sending confirmation email...");
      console.log("Confirmation email sent!");
      resolve("Email sent successfully");
    }, 1000);
  });
}

// Place Order using async/await
async function placeOrder(cart, amount) {
  try {
    const validCart = await validateCart(cart);
    await processPayment(amount);
    const invoice = await generateInvoice(validCart, amount);
    await sendConfirmationEmail(invoice);
    console.log("Order complete!");
  } catch (error) {
    console.log(error);
  } finally {
    console.log("Order process finished");
  }
}

// Run tests one after the other
async function runTests() {
  console.log("\n===== TEST 1: Successful Order =====");
  await placeOrder(["Laptop"], 50000);

  console.log("\n===== TEST 2: Empty Cart =====");
  await placeOrder([], 0);
}

runTests();

/*
Comparison of all three styles:

1. Callbacks: Each step passes a callback to the next step.
   This can become difficult to read when many steps are nested.

2. Promises: Use .then() to handle successful results and .catch()
   to handle errors. The code is easier to chain than nested callbacks.

3. Async/await: Makes Promise-based code look like ordinary,
   step-by-step code. try/catch handles errors, and finally runs
   cleanup or completion code regardless of success or failure.
*/
```

**Output:**

```
===== TEST 1: Successful Order =====
Validating cart...
Cart is valid!
Processing payment...
Payment of ₹50000 successful!
Generating invoice...
Invoice generated!
Sending confirmation email...
Confirmation email sent!
Order complete!
Order process finished

===== TEST 2: Empty Cart =====
Validating cart...
Cart is empty!
Cannot place order with an empty cart.
Order process finished
```

**Notes:**

- The two tests run one after the other (`await placeOrder(...)` inside `runTests`), so the output is not interleaved like it was on Day 13.
- `validCart` flows from `validateCart` into `generateInvoice`. This is the main benefit of async/await: earlier results stay available as normal variables.
