# Day 4 — Test Questions & Correct Answers

### Q1. What is the difference between `if...else` and `if...else if...else`?

**Answer:** `if...else` checks one condition and gives two possible outcomes — true or false. `if...else if...else` is used when you have multiple conditions to check in order, and you want to run different code depending on which one is true first (like assigning grades based on marks ranges).

---

### Q2. What are "falsy values" in JavaScript? Name as many as you remember.

**Answer:** Falsy values are values that behave like `false` when used in a condition (like an `if` statement). There are exactly 7 falsy values in JavaScript: `false`, `0`, `-0`, `""` (empty string), `NaN`, `null`, and `undefined`. Every other value — including `"0"`, `[]`, and `{}` — is truthy.

---

### Q3. Why did `switch(x)` with `x = "5"` match `case "5"` and not `case 5`?

**Answer:** `switch` compares values using strict equality (`===`), which checks both the value and the data type. Since `x` is the string `"5"`, it only matches `case "5"` (also a string). It does not match `case 5` because that's a number, and `"5" === 5` is `false` in JavaScript.

---

### Q4. What's the difference between `while` and `do...while`?

**Answer:** A `while` loop checks the condition first, and only runs the code if the condition is true — so it might run zero times. A `do...while` loop runs the code block first, and checks the condition after — so it always runs at least once, even if the condition is false from the start.

---

### Q5. What's the difference between `break` and `continue`?

**Answer:** `break` completely stops and exits the loop the moment its condition is true — no further iterations happen at all. `continue` only skips the current iteration and moves on to the next one; the loop keeps running. Example: for a loop from 1 to 5, if `break` happens when `i === 3` (checked before printing), the output is `1 2` (loop stops before printing 3). If `continue` happens when `i === 3`, the output is `1 2 4 5` (3 is skipped, but the loop continues).

---

### Q6. Why did the original break/continue code only print one number instead of a sequence?

**Answer:** In the original code, `console.log(i)` was written without curly braces `{ }` around the `for` loop. In JavaScript, if you don't use `{ }`, the loop body is only the single statement right after it (in this case, just the `if` block) — `console.log(i)` was technically outside the loop. So it only ran once, after the entire loop had already finished, showing the final value of `i` — not the value at each step of the loop.
