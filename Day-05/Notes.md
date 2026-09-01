# Day 5 — Functions — Notes

## 1. Function Declaration

- A function is a reusable block of code that does a specific job.
- Solves repetition (DRY principle — Don't Repeat Yourself).
- Syntax:

```javascript
function functionName(parameters) {
  // code
}
```

- Defining a function does NOT run it — you must CALL it: `functionName();`
- Function declarations are "hoisted" — can technically be called before they appear in the file (more on this Day 8).

## 2. Parameters vs Arguments

- Parameter = placeholder name in the function definition.
- Argument = actual value passed in when calling the function.
- Mismatch in count (e.g., calling with fewer arguments than parameters) causes missing values to become `undefined`.

## 3. return statement

- Sends a value OUT of the function so it can be stored/reused elsewhere.
- Different from `console.log()`, which only displays a value — it cannot be reused in code.
- Once `return` runs, the function STOPS immediately — nothing after it in that function runs.
- A function with no `return` gives back `undefined` by default.

## 4. Default Parameters

- Gives a parameter a fallback value if no argument is passed for it.
- Syntax: `function greetUser(name = "Guest") { ... }`
- Only kicks in when the argument is missing/undefined — passing any value overrides the default.

## 5. Arrow Functions (ES6+)

- Shorter, modern function syntax — used constantly in React.
- Syntax:

```javascript
const functionName = (parameters) => {
  // code
};
```

- If body is a single expression, use implicit return (no `{ }`, no `return` keyword):

```javascript
const double = (num) => num * 2;
```

- Multi-line logic still needs `{ }` and explicit `return`.
- Common mistake: forgetting `return` inside a multi-line arrow function body — silently returns `undefined`.

## 6. Scope (Introduction)

- Scope = where in the code a variable can be accessed.
- A variable created INSIDE a function only exists inside that function — it disappears once the function finishes.
- This is the foundation for Closures (Day 8).

## 7. Callbacks

- A function passed as an ARGUMENT into another function, to be run later.
- Written WITHOUT parentheses when passing it as a reference: `greet("Sam", bye)` — NOT `bye()`.
- Adding `()` calls the function immediately and passes its RETURN VALUE instead of the function itself — a very common bug.
- Real use: click handlers, setTimeout, map/filter, and the foundation for Promises and async/await.

## 8. Higher-Order Functions

- A function that either:
  - takes another function as an argument, OR
  - returns a function.
- `map()`, `filter()`, `reduce()` (Day 6) are all higher-order functions — one of the most important patterns in JS and React.

## 9. Key debugging habit learned today

- Break logic into small steps, store each result in a variable, THEN pass it to the next function.
- Avoid nesting everything into one messy line — it causes bugs that are hard to trace.
- Ask: "Does this run right now, or later?" — critical for understanding `return`, callbacks, and (later) async code.

## 10. Naming conventions

- Variables and functions: camelCase (`discount`, not `Discount`).
- Capitalized names (PascalCase) are reserved for classes and, later, React components.

## 11. Interview-ready Q&A summary

| Question                         | Answer                                                                             |
| -------------------------------- | ---------------------------------------------------------------------------------- |
| Parameter vs Argument?           | Parameter = placeholder in definition; Argument = actual value passed when calling |
| return vs console.log?           | return gives a reusable value back; console.log only displays it                   |
| What happens after return runs?  | Function stops immediately — no further code in it runs                            |
| What is a callback?              | A function passed into another function to be run later                            |
| Callback mistake to avoid?       | Don't add `()` when passing a callback reference — it calls it immediately         |
| What is a Higher-Order Function? | A function that takes a function as an argument or returns a function              |
