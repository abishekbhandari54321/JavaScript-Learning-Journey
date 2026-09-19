# Day 8 — Test Questions & Correct Answers

### Q1. What is hoisting, in your own words? What's the key difference in how `var` and `let` behave when hoisted?

**Answer:** Hoisting means JavaScript moves variable and function declarations to the top of their scope before running any code — but only the declaration, not the assigned value. `var` is usable before its declaration line and gives `undefined`. `let` is also hoisted, but stays inaccessible until its declaration line runs (the Temporal Dead Zone), throwing an error if accessed early.

---

### Q2. What is the Temporal Dead Zone (TDZ)? Why does it exist?

**Answer:** The Temporal Dead Zone is the gap between when a `let`/`const` variable is hoisted and when it becomes usable (its declaration line). Accessing it during this gap throws an error. It exists as a safety feature — instead of silently giving `undefined` like `var` does (which can hide bugs), it forces an immediate, clear error, making mistakes easier to catch.

---

### Q3. What is a closure, in your own words? Use `createCounter()` as an example.

**Answer:** A closure is when a function "remembers" and can still access variables from the scope it was created in, even after the outer function has finished running. In `createCounter()`, even after the function finishes executing, `increment`, `decrement`, and `reset` all still remember and can modify the private `count` variable — because they were created inside `createCounter()` and permanently kept that connection through closure.

---

### Q4. Predict the output and explain step by step:

```javascript
function makeMultiplier(x) {
  return function (y) {
    return x * y;
  };
}

const double = makeMultiplier(2);
const triple = makeMultiplier(3);

console.log(double(5));
console.log(triple(5));
```

**Answer:** Output: `10`, then `15`. `makeMultiplier(2)` creates a closure where `x = 2` is remembered; calling `double(5)` runs `x * y` → `2 * 5 = 10`. `makeMultiplier(3)` creates a SEPARATE closure where `x = 3`; calling `triple(5)` → `3 * 5 = 15`. Each call to `makeMultiplier` creates its own independent closure.

---

### Q5. Why does `vault.correctPassword` print `undefined`?

**Answer:** `vault.correctPassword` prints `undefined` because the object returned by `createVault()` only contains `unlock` and `changePassword` — no property named `correctPassword` (or even `password`, the actual private variable) was ever added to it. The real password lives inside the function's closure, completely separate from the returned object, and can only be interacted with indirectly, through the `unlock` and `changePassword` functions.

---

### Q6. Explain the classic `var` loop bug in your own words.

**Answer:** With `var`, there's only ONE shared `i` across the entire loop, because `var` ignores block scope. All three `setTimeout` closures end up referencing that same single `i`, which becomes `4` by the time they actually run. With `let`, block scope is respected, so JavaScript creates a brand NEW `i` for every loop iteration — each closure captures its own separate `i`, producing the correct `1, 2, 3`.

---

### Q7. True or false: "A closure only works if the outer function explicitly returns the inner function."

**Answer:** False. A closure forms any time a function accesses variables from its surrounding (outer) scope — it does NOT require that function to be explicitly returned. In the Part 3 `setTimeout` examples, the callback function forms a closure over `i` simply by using it, even though it's never `return`ed anywhere — it's just passed directly into `setTimeout()`. The "create a function, return it, and call it later" pattern is just ONE common way to use closures — not the only way they can occur.
