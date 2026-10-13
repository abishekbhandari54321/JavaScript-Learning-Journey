# Day 13 — Promises

## Creating a Promise

```javascript
const checkAge = new Promise((resolve, reject) => {
  const age = 20;
  setTimeout(() => {
    if (age >= 18) {
      resolve("Access granted");
    } else {
      reject("Access denied");
    }
  }, 1000);
});
```

## .then(), .catch(), .finally()

```javascript
checkAge
  .then((result) => {
    console.log("Success:", result);
  })
  .catch((error) => {
    console.log("Error:", error);
  })
  .finally(() => {
    console.log("Done");
  });
```

**Output (after 1 second):**

```
Success: Access granted
Done
```

## Promise Chaining — Flattening Day 12's Callback Hell

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

getUser(1)
  .then((user) => getOrders(user.userId))
  .then((orders) => getOrderDetails(orders[0]))
  .then((details) => console.log("Final details:", details))
  .catch((error) => console.log("Error:", error));
```

**Output:**

```
Got user
Got orders
Got order details
Final details: Order1 - Details
```

---

## Task 1 — Promise.resolve vs synchronous code

```javascript
console.log("1");
Promise.resolve("2").then((value) => console.log(value));
console.log("3");
```

**Output:**

```
1
3
2
```

**Why:** `Promise.resolve("2")` creates an already-fulfilled Promise, but its `.then()` callback still waits until the synchronous code finishes.

## Task 2 — checkStock with resolve and reject

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

checkStock(5)
  .then((result) => console.log(result))
  .catch((error) => console.log(error))
  .finally(() => console.log("Stock check completed"));

checkStock(0)
  .then((result) => console.log(result))
  .catch((error) => console.log(error))
  .finally(() => console.log("Stock check completed"));
```

**Output:**

```
In stock
Stock check completed
Out of stock
Stock check completed
```

**Why:** For `checkStock(0)`, the Promise is rejected, so `.then()` is skipped and `.catch()` runs. Both calls start at the same time, so the whole thing takes about 1 second.

## Task 3 — step1/step2/step3 as a Promise chain

```javascript
function step1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Step 1 complete");
      resolve();
    }, 500);
  });
}
function step2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Step 2 complete");
      resolve();
    }, 500);
  });
}
function step3() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Step 3 complete");
      resolve();
    }, 500);
  });
}

step1()
  .then(() => step2())
  .then(() => step3())
  .then(() => console.log("All steps complete!"));
```

**Output:**

```
Step 1 complete
Step 2 complete
Step 3 complete
All steps complete!
```

## Task 4 — Missing return inside .then()

```javascript
Promise.resolve(5)
  .then((n) => n * 2)
  .then((n) => {
    n + 1;
  })
  .then((n) => console.log(n));
```

**Output:**

```
undefined
```

**Why:** The middle `.then()` uses `{ }` but has no `return`, so the value `11` is lost and the next step receives `undefined`. Fix: `.then((n) => n + 1)` or `.then((n) => { return n + 1; })`.

---

## Practical Project — Order System, Promise Edition

```javascript
function validateCart(cart) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Validating cart...");
      if (cart.length > 0) {
        resolve(true);
      } else {
        reject("Cart is empty!");
      }
    }, 500);
  });
}

function processPayment(amount) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Payment of $${amount} processed`);
    }, 1000);
  });
}

function generateInvoice(orderDetails) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const invoice = { id: 1, ...orderDetails };
      console.log(`Invoice #${invoice.id} generated`);
      resolve(invoice);
    }, 500);
  });
}

function sendConfirmationEmail(invoice) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Sending confirmation email...");
      resolve(`Email sent for invoice #${invoice.id}`);
    }, 500);
  });
}

// Test 1: Successful order
const cart = ["Laptop"];
const amount = 500;

validateCart(cart)
  .then(() => processPayment(amount))
  .then((paymentMessage) =>
    generateInvoice({ amount: amount, payment: paymentMessage }),
  )
  .then((invoice) => sendConfirmationEmail(invoice))
  .then((message) => {
    console.log(message);
    console.log("Order complete!");
  })
  .catch((error) => console.log(error))
  .finally(() => console.log("Order process finished"));

// Test 2: Empty cart
validateCart([])
  .then(() => processPayment(amount))
  .then((paymentMessage) =>
    generateInvoice({ amount: amount, payment: paymentMessage }),
  )
  .then((invoice) => sendConfirmationEmail(invoice))
  .then((message) => {
    console.log(message);
    console.log("Order complete!");
  })
  .catch((error) => console.log(error))
  .finally(() => console.log("Order process finished"));

/*
The Promise version is easier to read and maintain
because it avoids deeply nested callbacks.
*/
```

**Output:**

```
Validating cart...
Validating cart...
Cart is empty!
Order process finished
Invoice #1 generated
Sending confirmation email...
Email sent for invoice #1
Order complete!
Order process finished
```

**Notes:**

- Test 1 and Test 2 start at the same moment, so their output is interleaved. This is expected and not a bug.
- The repeated chain can be moved into one reusable function:

```javascript
function placeOrder(cart, amount) {
  return validateCart(cart)
    .then(() => processPayment(amount))
    .then((payment) => generateInvoice({ amount, payment }))
    .then((invoice) => sendConfirmationEmail(invoice))
    .then((message) => {
      console.log(message);
      console.log("Order complete!");
    })
    .catch((error) => console.log(error))
    .finally(() => console.log("Order process finished"));
}
placeOrder(["Laptop"], 500);
placeOrder([], 500);
```

---

## Test Q5 — Promise.resolve order

```javascript
console.log("A");
Promise.resolve("B").then((v) => console.log(v));
console.log("C");
```

**Output:**

```
A
C
B
```

## Test Q7 — Error thrown inside a chain

```javascript
Promise.resolve(1)
  .then((n) => {
    throw new Error("Oops");
  })
  .then((n) => console.log("Step 2"))
  .catch((err) => console.log("Caught:", err.message))
  .finally(() => console.log("Done"));
```

**Output:**

```
Caught: Oops
Done
```

**Why:** The thrown error rejects the Promise, so the next `.then()` is skipped. `.catch()` handles the error, and `.finally()` runs at the end either way.
