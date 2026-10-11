# Day 12 — Synchronous vs Asynchronous JavaScript

## Synchronous Code

```javascript
console.log("Step 1");
console.log("Step 2");
console.log("Step 3");
```

**Output:**

```
Step 1
Step 2
Step 3
```

## Asynchronous Code with setTimeout

```javascript
console.log("Step 1");
setTimeout(() => {
  console.log("Step 2 (delayed)");
}, 2000);
console.log("Step 3");
```

**Output:**

```
Step 1
Step 3
Step 2 (delayed)
```

## Callback for an Async Task

```javascript
function loadData(callback) {
  console.log("Loading data...");
  setTimeout(() => {
    const data = { id: 1, name: "Abishek" };
    callback(data);
  }, 2000);
}

loadData((result) => {
  console.log("Data loaded:", result);
});

console.log("This runs before data finishes loading!");
```

**Output:**

```
Loading data...
This runs before data finishes loading!
Data loaded: { id: 1, name: 'Abishek' }
```

## Callback Hell (the problem)

```javascript
function getUser(userId, callback) {
  setTimeout(() => {
    console.log("Got user");
    callback({ userId: userId, name: "Abishek" });
  }, 1000);
}
function getOrders(userId, callback) {
  setTimeout(() => {
    console.log("Got orders");
    callback(["Order1", "Order2"]);
  }, 1000);
}
function getOrderDetails(order, callback) {
  setTimeout(() => {
    console.log("Got order details");
    callback(order + " - Details");
  }, 1000);
}

getUser(1, (user) => {
  getOrders(user.userId, (orders) => {
    getOrderDetails(orders[0], (details) => {
      console.log("Final details:", details);
    });
  });
});
```

---

## Task 1 — setTimeout order (including 0ms)

```javascript
console.log("A");
setTimeout(() => {
  console.log("B");
}, 1000);
console.log("C");
setTimeout(() => {
  console.log("D");
}, 0);
console.log("E");
```

**Output:**

```
A
C
E
D
B
```

**Why:** A, C, E are synchronous and run first. Even a 0ms `setTimeout` callback waits until all synchronous code is finished, so D prints after E. B waits one second.

## Task 2 — processPayment with a callback

```javascript
function processPayment(amount, callback) {
  setTimeout(function () {
    callback(`Payment of $${amount} processed`);
  }, 1000);
}

processPayment(100, function (message) {
  console.log(message);
});
```

**Output (after 1 second):**

```
Payment of $100 processed
```

**Note:** `$${amount}` prints a literal `$` followed by the value.

## Task 3 — Building callback hell

```javascript
function step1(callback) {
  setTimeout(function () {
    console.log("Step 1");
    callback();
  }, 500);
}
function step2(callback) {
  setTimeout(function () {
    console.log("Step 2");
    callback();
  }, 500);
}
function step3(callback) {
  setTimeout(function () {
    console.log("Step 3");
    callback();
  }, 500);
}

step1(function () {
  step2(function () {
    step3(function () {
      console.log("All steps complete!");
    });
  });
});
```

**Output:**

```
Step 1
Step 2
Step 3
All steps complete!
```

## Task 4 — Async + closures

```javascript
function delayedGreeting(name) {
  setTimeout(() => {
    console.log("Hello, " + name);
  }, 1000);
}

delayedGreeting("Abishek");
delayedGreeting("Priya");
console.log("Both greetings scheduled");
```

**Output:**

```
Both greetings scheduled
Hello, Abishek
Hello, Priya
```

**Why:** Both timers are scheduled without blocking, so the last line prints first. Each callback remembers its own `name` through a closure (Day 8).

---

## Test Q3 — setTimeout with 0ms

```javascript
console.log("Start");
setTimeout(() => console.log("Timeout"), 0);
console.log("End");
```

**Output:**

```
Start
End
Timeout
```

---

## Practical Project — Simulated Online Order System (Callback-Based)

```javascript
// validateCart
function validateCart(cart, callback) {
  setTimeout(function () {
    console.log("Validating cart...");
    if (cart.length > 0) {
      console.log("Cart is valid!");
      callback(true);
    } else {
      callback(false);
    }
  }, 500);
}

// processPayment
function processPayment(amount, callback) {
  setTimeout(function () {
    console.log(`Processing payment of $${amount}...`);
    console.log(`Payment of $${amount} processed`);
    callback(`Payment of $${amount} processed`);
  }, 1000);
}

// generateInvoice
function generateInvoice(orderDetails, callback) {
  setTimeout(function () {
    console.log("Generating invoice...");
    const invoice = { id: 1, ...orderDetails };
    console.log(`Invoice #${invoice.id} generated`);
    callback(invoice);
  }, 500);
}

// sendConfirmationEmail
function sendConfirmationEmail(invoice, callback) {
  setTimeout(function () {
    console.log("Sending confirmation email...");
    callback("Email sent for invoice #" + invoice.id);
  }, 500);
}

// Chain all four using nested callbacks
const cart = ["Laptop"];
const amount = 500;

validateCart(cart, function (isValid) {
  if (isValid) {
    processPayment(amount, function (paymentMessage) {
      console.log(paymentMessage);

      generateInvoice(
        { amount: amount, payment: paymentMessage },
        function (invoice) {
          sendConfirmationEmail(invoice, function (message) {
            console.log(message);
            console.log("Order complete!");
          });
        },
      );
    });
  } else {
    console.log("Cart is empty!");
  }
});

/*
Why is Callback Hell a Problem?
If we add 3-4 more steps, we will have more nested callbacks.
The code becomes difficult to read, understand, debug, and maintain.
Every nested level also needs its own error handling.
Promises and async/await can help make the code cleaner.
*/
```

**Output:**

```
Validating cart...
Cart is valid!
Processing payment of $500...
Payment of $500 processed
Payment of $500 processed
Generating invoice...
Invoice #1 generated
Sending confirmation email...
Email sent for invoice #1
Order complete!
```

**Notes:**

- `Payment of $500 processed` prints twice because it is logged inside `processPayment` AND again in the chain. A function should either log or pass the result to its callback, not both.
- All timers in `Day-12.js` were scheduled at the same moment, so their output is interleaved by delay time (0ms → 500ms → 1000ms → 2000ms), not by file order. This shows async operations running side by side.
- Bug fixed during review: `` `Payment of $[amount] processed` `` prints the text `[amount]` literally. The correct form is `` `Payment of $${amount} processed` ``.
