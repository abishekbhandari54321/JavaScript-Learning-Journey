# Day 7 — Test Questions & Correct Answers

### Q1. What is the difference between block scope and function scope?

**Answer:** Block scope means a variable declared with `let`/`const` inside `{ }` (like an `if` or `for` block) only exists within that block — like `status` in the project, trapped inside the `if`. Function scope means a variable exists anywhere inside the function that declared it, even inside nested blocks — like `orderId`, which was still accessible after the `if` block closed, because it belongs to the whole function, not just the block.

---

### Q2. Why does `var` "leak" out of an `if` block, but `let` does not?

**Answer:** `var` only understands function scope — it completely ignores block boundaries like `if` or `for`, so it "escapes" upward to the nearest function (or global scope). `let` (and `const`) were specifically designed to respect block scope, so they stay trapped inside the `{ }` where they were declared.

---

### Q3. What is lexical scope, in your own words?

**Answer:** Lexical scope means a function's access to variables is determined by WHERE it was physically written in the code. A function can access variables from any function or block surrounding it, but not the other way around.

---

### Q4. Predict the output and explain your reasoning step by step:

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

**Answer:** Output: `1, 3, 5, 4, 2, 6`. `one()` runs, prints `1`, pauses to call `two()`. `two()` prints `3`, pauses to call `three()`. `three()` prints `5` and finishes. Control returns to `two()`, which resumes and prints `4`, then finishes. Control returns to `one()`, which resumes and prints `2`, then finishes. Only now does `console.log("6")` run, since it was waiting for `one()` to completely finish.

---

### Q5. What is an execution context, in simple words? What are the two main types?

**Answer:** An execution context is the "workspace" JavaScript creates to run a piece of code — it tracks things like which variables exist and what `this` refers to. The two main types are the Global Execution Context (created once, when the file starts) and the Function Execution Context (created fresh every time a function is called).

---

### Q6. Predict the output and explain why:

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

**Answer:** The output is `5`. No error occurs. `outer()` returns the `inner` function itself (not its result), so `myFunc` becomes a real, callable function — equivalent to `inner`. When `myFunc()` is called, it can still access `count`, even though `outer()` has already finished running. This is possible because of lexical scope — `inner` was written inside `outer()`, so it "remembers" that environment permanently. This behavior — a function remembering variables from where it was created, even after the outer function has finished — is called a closure (Day 8's topic).
