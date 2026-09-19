# Day 8 — Hoisting + Closures — Notes

## 1. Hoisting

- JavaScript moves variable and function DECLARATIONS to the top of their scope before running any code.
- Only the declaration is hoisted — NOT the assigned value.
- `var` → hoisted AND initialized to `undefined` automatically. Usable before its line (gives `undefined`, not an error).
- `let`/`const` → hoisted but placed in the Temporal Dead Zone (TDZ) — unusable until their declaration line runs. Accessing early throws an error.
- Function DECLARATIONS are hoisted completely (name + body) — callable before they're written.
- Function EXPRESSIONS (`const fn = function(){}`) only hoist the variable name (in TDZ) — NOT callable before their line.

## 2. Temporal Dead Zone (TDZ)

- The gap between a `let`/`const` variable being hoisted and becoming usable (its declaration line).
- Accessing a variable during the TDZ throws an error.
- Exists as a safety feature — forces an immediate, clear error instead of silently returning `undefined` (which can hide real bugs), making mistakes easier to catch.

## 3. Why modern JS avoids `var`

- `var`'s silent `undefined` behavior can hide bugs.
- `let`/`const` fail loudly and immediately instead — safer, easier to debug.
- Most professional teams enforce `let`/`const` only (often via ESLint).

## 4. Closures ⭐

- A closure happens when a function "remembers" the variables from the place where it was created, even after the outer function has already finished running.
- Made possible by lexical scope (Day 7) — the mechanism; closure is the resulting behavior.
- Returning a function (`return inner;`) hands back the FUNCTION ITSELF, not its result — it stays callable later, and keeps its connection to the outer scope's variables.

## 5. Closures do NOT require an explicit return

- A closure forms any time an inner function references outer variables — even if that function is never returned, just used directly (e.g., passed into `setTimeout`).
- "Return the inner function" is just ONE common pattern, not the only way closures occur.

## 6. Real-world uses of closures

- **Private/protected data:** variables inside a closure can only be changed through specific controlled functions (e.g., a bank account's `deposit`/`withdraw`, a vault's `unlock`/`changePassword`) — never accessed directly from outside.
- **Independent instances:** each call to a factory function (like `createCounter()`) creates a brand new, separate closure — none of them share data with each other.
- **React Hooks:** `useState` and other hooks rely on closures internally to "remember" data between renders.
- **Event handlers:** each button/element can have its own private data (like a click counter) through closures, even when using the same general code.

## 7. Object shorthand syntax

- `{ deposit, withdraw }` is shorthand for `{ deposit: deposit, withdraw: withdraw }` — used when the property name and variable name are identical.
- Common in professional code and used constantly in React.

## 8. The classic closure + var loop bug (famous interview question)

```javascript
for (var i = 1; i <= 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}
// prints 4, 4, 4
```

- With `var`, there is only ONE shared `i` for the whole loop (var ignores block scope). All three closures reference that same `i`, which is `4` by the time they run.
- Fix: use `let` — creates a brand NEW `i` for each loop iteration, so each closure captures its own separate `i`. Produces `1, 2, 3`.

## 9. Debugging tip: checking a value's type

- When unsure whether something is a function, object, etc., use `typeof` to check directly instead of guessing:

```javascript
console.log(typeof someValue); // "function", "object", "undefined", etc.
```

## 10. Interview-ready Q&A summary

| Question                                     | Answer                                                                                                |
| -------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| What is hoisting?                            | Declarations move to the top of scope before code runs; only declarations, not values                 |
| var vs let hoisting?                         | var → undefined if accessed early; let/const → TDZ error if accessed early                            |
| What is the TDZ?                             | The gap between hoisting and usability for let/const; accessing it throws an error                    |
| What is a closure?                           | A function that remembers variables from where it was created, even after the outer function finishes |
| Does a closure require a return?             | No — any inner function referencing outer variables forms a closure, returned or not                  |
| Why does the var/setTimeout loop bug happen? | Only one shared `i` exists across all iterations with var; let creates a new `i` per iteration        |
