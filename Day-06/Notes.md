# Day 6 — Arrays + Objects — Notes

## 1. Arrays — Basics

- An ordered list that can hold multiple values in one variable.
- Indexing starts at 0, not 1.
- `array.length` gives the number of items.
- Accessing an out-of-range index gives `undefined`, not an error.

## 2. Modifying Arrays

- `push()` — add to the end
- `pop()` — remove from the end
- `unshift()` — add to the beginning
- `shift()` — remove from the beginning
- `slice(start, end)` — copies a portion, does NOT change the original array
- `splice(start, deleteCount, itemsToAdd)` — CHANGES the original array (can remove and/or insert items)
- `concat()` — joins two arrays into a new one

**Interview trap:** `slice` does not mutate; `splice` does mutate the original array. This distinction is commonly tested.

## 3. Searching Arrays

- `includes(value)` — true/false, does the array contain this value
- `indexOf(value)` — returns index, or -1 if not found
- `find(callback)` — returns the FIRST item matching a condition
- `findIndex(callback)` — same as find, but returns the index
- `some(callback)` — true if AT LEAST ONE item matches
- `every(callback)` — true only if ALL items match
- All of these take a callback function as their argument.

## 4. map(), filter(), reduce() ⭐ (most important today)

| Method   | Purpose                | Returns                                       |
| -------- | ---------------------- | --------------------------------------------- |
| map()    | Transform each item    | New array, SAME length                        |
| filter() | Keep matching items    | New array, SAME or SHORTER length             |
| reduce() | Combine into one value | A single value (number, string, object, etc.) |

- None of these three change (mutate) the original array — they all return something NEW.
- `map()` is exactly how React turns arrays of data into UI elements.
- `reduce(callback, startingValue)` — the starting value matters:
  - Addition → start at `0`
  - Multiplication → start at `1` (the "identity value" — a value that changes nothing when combined)
  - String building → start at `""`
  - Array building → start at `[]`
  - General rule: "what starting value, combined with any item, changes nothing?"
- Common mistake: forgetting `return` inside a multi-line arrow function passed to map/filter/reduce — silently gives `undefined` for every item.
- IMPORTANT: `map()`/`filter()`/`reduce()` take a SNAPSHOT of the array at the moment they run — they are not "live." If the source array changes later, you must re-run these methods to reflect the change. (This connects directly to how React re-renders when state/data changes.)

## 5. Objects — Basics

- Stores data as key-value pairs (unlike arrays, which are ordered lists).
- Access with dot notation (`obj.key`) or bracket notation (`obj["key"]`) — bracket notation is needed when the key is stored in a variable.
- Accessing a non-existent property gives `undefined`, not an error.

## 6. Object Methods

- A function stored as a property inside an object.
- `this` inside a method refers to the object it belongs to (deeper coverage on Day 9).

## 7. Nested Objects

- Objects can contain other objects. Access deeper values by chaining dots: `user.address.city`.
- Common in real API responses.

## 8. Destructuring

- A shortcut to unpack values from an array or object into individual variables.
- Object destructuring: `const { key1, key2 } = objectName;` — variable names must match key names (unless renamed).
- Renaming: `const { name: userName } = user;`
- Array destructuring: `const [first, second] = [10, 20];` — based on position, not name.
- HUGE in React — used constantly for props: `function UserCard({ name, age }) { ... }`

## 9. Spread Operator (`...`)

- EXPANDS an array or object into individual items — used to copy or combine data.
- `{ ...user, age: 23 }` — copies everything from `user` first, then any property listed AFTER the spread OVERWRITES the copied value. Order matters.
- Critical for React state updates — React requires creating new objects/arrays instead of directly modifying old ones.

## 10. Rest Operator (`...`)

- Looks identical to spread, but does the OPPOSITE job: COLLECTS multiple values INTO an array.
- Used in function parameters: `function sum(...numbers) { ... }`
- How to tell spread vs rest apart: spread is used inside array/object literals or function calls; rest is used inside a function's parameter list.

## 11. Object.keys() / Object.values() / Object.entries()

- `Object.keys(obj)` — array of the object's key names
- `Object.values(obj)` — array of the object's values
- `Object.entries(obj)` — array of [key, value] pairs, useful for looping over an object with `forEach()`

## 12. Debugging habits reinforced today

- Always declare variables with `const`/`let` — skipping this creates an implicit global variable, a hidden source of bugs.
- Always test/CALL functions you write — an untested function can hide bugs indefinitely (e.g., a broken method that's never called never shows an error).
- When logging arrays, use `console.log(array)` directly instead of string concatenation (`"text" + array`) — concatenation can visually disguise a one-item array as a plain value.

## 13. Interview-ready Q&A summary

| Question                                     | Answer                                                                                                         |
| -------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| slice() vs splice()?                         | slice copies (no mutation); splice changes the original array (can remove/insert)                              |
| map() vs filter()?                           | map transforms every item (same length); filter keeps only matching items (same or shorter)                    |
| Why does reduce() need a starting value?     | It defines the initial accumulator; the right value depends on the operation (0 for sum, 1 for multiply, etc.) |
| What is destructuring?                       | Unpacking array/object values into individual variables in one line                                            |
| Spread vs rest?                              | Spread expands values out; rest collects values in; context (literal vs function parameter) tells them apart   |
| Why prefer map/filter/reduce over for loops? | Shorter, doesn't mutate the original data, and clearly signals intent — heavily used in React                  |
