# Day 5 — Test Questions & Correct Answers

### Q1. What is the difference between a function parameter and a function argument?

**Answer:** A parameter is the placeholder name written when defining a function. An argument is the real value you pass in when calling that function. Example: in `function greet(name)`, `name` is the parameter; in `greet("Sam")`, `"Sam"` is the argument.

---

### Q2. What does the `return` keyword actually do, and how is it different from `console.log()`?

**Answer:** `return` sends a value out of the function so it can be stored in a variable and reused elsewhere in your code. `console.log()` only displays a value on the screen — it does not give you anything you can save or use later. Example: `let result = add(2, 3);` only works because `add` uses `return`. If `add` only used `console.log`, `result` would be `undefined`.

---

### Q3. Predict the output and explain why:

```javascript
function test() {
  return;
  console.log("Will this run?");
}
console.log(test());
```

**Answer:** The output is:

```
undefined
```

`console.log("Will this run?")` never runs because `return;` immediately stops the function before reaching that line. Since `return` has no value attached to it, the function returns `undefined`, and that's what gets printed by the outer `console.log(test())`.

---

### Q4. What is a callback function? Give a simple real-world example.

**Answer:** A callback is a function you pass into another function, so it can be run later — usually after some task finishes. Real-world example: when a user clicks a button, you want a message to appear only after that click happens — the message-showing function is passed in as a callback and runs at the right time.

---

### Q5. What is a Higher-Order Function?

**Answer:** A higher-order function is a function that either accepts another function as an argument, or returns a function as its result. Examples used constantly in real projects: `map()`, `filter()`, `reduce()`.

---

### Q6. Predict the output:

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

**Answer:** The output is:

```
Bye!
Hi Sam
TypeError: callback is not a function
```

This happens because `bye()` was written with parentheses, so JavaScript calls it immediately while preparing the arguments — before `greet` even starts running. This passes `bye`'s return value (`undefined`) into `greet`, instead of passing the `bye` function itself. Then, inside `greet`, trying to call `undefined()` crashes the program. The fix would be to write `greet("Sam", bye)` — no parentheses — so the function reference itself is passed in, to be called later.
