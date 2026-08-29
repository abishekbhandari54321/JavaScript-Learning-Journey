# Day 4 — Conditions + Loops — Notes

## 1. if statement

- Runs a block of code only if a condition is true.
- Syntax:

```javascript
if (condition) {
  // code
}
```

- Use case: checking login status, checking permissions.

## 2. if...else

- Gives two paths: one if the condition is true, another if it's false.
- Syntax:

```javascript
if (condition) {
  // runs if true
} else {
  // runs if false
}
```

- Use case: "if user is logged in, show dashboard, else show login page."

## 3. if...else if...else

- Used to check multiple conditions in order, one after another.
- JavaScript checks top to bottom and stops at the FIRST true condition.
- Always put the strictest/highest condition first (e.g., check `>= 90` before `>= 60`), otherwise a high value could wrongly match a lower condition first.
- Use case: grade calculation based on marks ranges.

## 4. Nested conditions

- An if statement inside another if statement.
- Use case: "if user is logged in, then check if they are an admin."
- Tip: Too much nesting hurts readability — often can simplify using `&&`.
  ```javascript
  if (age >= 18 && hasID) { ... }
  ```

## 5. switch statement

- A cleaner alternative to a long if...else if chain when comparing ONE variable against MANY fixed values.
- Uses STRICT comparison (`===`) — checks both value and type.
  - Example: `x = "5"` (string) will match `case "5"` but NOT `case 5` (number).
- Must use `break` after each case, or JavaScript will "fall through" and keep running the next cases even if they don't match.
- Use case: menu selections, handling HTTP status codes, handling user roles.

## 6. Truthy and Falsy values ⭐ (important for interviews)

- Every value in JavaScript is either "truthy" or "falsy" when used in a condition.
- The ONLY 7 falsy values:
  ```
  false
  0
  -0
  ""      (empty string)
  null
  undefined
  NaN
  ```
- Everything else is truthy — including `"0"` (string zero), `[]` (empty array), and `{}` (empty object).
- Use case: `if (username) { ... }` — a common real-world pattern to check if a variable has a value before using it.

## 7. for loop

- Repeats code a specific number of times.
- Syntax:

```javascript
for (initialization; condition; increment) {
  // code to repeat
}
```

- Order of execution: initialization runs once → condition checked → code runs → increment runs → repeat from condition check.
- Use case: looping through arrays, repeating a task a fixed number of times.

## 8. while loop

- Repeats code as long as a condition is true.
- Used when you don't know exactly how many times you'll loop.
- Must update the loop variable inside the loop, or you get an infinite loop.
- Syntax:

```javascript
while (condition) {
  // code
}
```

## 9. do...while loop

- Same as while, but the code runs AT LEAST ONCE before the condition is even checked.
- Syntax:

```javascript
do {
  // code
} while (condition);
```

## 10. break

- Completely stops and exits the loop immediately when triggered.
- No further iterations happen after break runs.

## 11. continue

- Skips only the CURRENT iteration and moves to the next one.
- The loop keeps running after continue.

## 12. Important bug lesson: missing braces `{ }`

- If you don't use `{ }` around a loop or if-block, only the very next single statement belongs to it.
- This can cause code to silently run outside the loop, leading to confusing/wrong output.
- Best practice: ALWAYS use `{ }`, even for single-line bodies.

## 13. Interview-ready Q&A summary

| Question                                     | Answer                                                                       |
| -------------------------------------------- | ---------------------------------------------------------------------------- |
| Difference between `==` and `===`?           | `==` allows type coercion, `===` checks value AND type                       |
| What are falsy values?                       | false, 0, -0, "", null, undefined, NaN                                       |
| When to use `switch` vs `if/else`?           | When comparing one variable against many fixed values                        |
| Difference between `while` and `do...while`? | `do...while` always runs at least once                                       |
| Difference between `break` and `continue`?   | `break` exits the loop entirely; `continue` skips to the next iteration only |
| Does `switch` use `==` or `===`?             | `===` (strict comparison)                                                    |
