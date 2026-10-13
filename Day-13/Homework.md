# Day 13 — Test Questions & Correct Answers

### Q1. What is a Promise, in your own words? Why was it created?

**Answer:** A Promise is an object that represents a result that isn't ready yet but will arrive later, either as a success (with a value) or a failure (with an error). It was created to fix callback hell by replacing deep nesting with a flat chain of `.then()` steps and one `.catch()` for errors.

---

### Q2. What are the three states of a Promise? Can a settled Promise change its state?

**Answer:** The three states are pending (still waiting), fulfilled (finished successfully, with a value), and rejected (failed, with an error). Once a Promise is fulfilled or rejected (called "settled"), it can never change state again. It moves from pending to one of the other two exactly once.

---

### Q3. What is the difference between `resolve` and `reject`?

**Answer:** `resolve(value)` marks the Promise as fulfilled and sends the value to `.then()`. `reject(error)` marks it as rejected and sends the error to `.catch()`.

---

### Q4. What do `.then()`, `.catch()`, and `.finally()` each do?

**Answer:** `.then()` runs a function when the Promise is fulfilled. `.catch()` runs a function when the Promise is rejected. `.finally()` runs a function in both cases, and is used for cleanup.

---

### Q5. Predict the output and explain:

```javascript
console.log("A");
Promise.resolve("B").then((v) => console.log(v));
console.log("C");
```

**Answer:**

```
A
C
B
```

Synchronous code runs first. Even though the Promise is already fulfilled, its `.then()` callback waits until the synchronous code has finished.

---

### Q6. Why does promise chaining solve callback hell? What must you remember to do inside each `.then()`?

**Answer:** `.then()` returns a new Promise, so each step can be chained one after another in a flat list instead of nested inside the previous callback. One `.catch()` can handle errors for the whole chain, and steps are easy to add or remove. Inside each `.then()`, you must return a value or a Promise so the next step receives it.

---

### Q7. In this chain, what is printed and why?

```javascript
Promise.resolve(1)
  .then((n) => {
    throw new Error("Oops");
  })
  .then((n) => console.log("Step 2"))
  .catch((err) => console.log("Caught:", err.message))
  .finally(() => console.log("Done"));
```

**Answer:**

```
Caught: Oops
Done
```

`throw new Error("Oops")` makes the Promise rejected. A rejected Promise skips the next `.then()`, so `"Step 2"` is never printed. `.catch()` handles the error and prints `Caught: Oops`. After that, `.finally()` runs and prints `Done`, because `.finally()` runs in both cases.
