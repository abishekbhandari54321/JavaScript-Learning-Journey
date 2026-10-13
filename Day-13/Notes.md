# Day 13 — Promises — Notes

## 1. What is a Promise?

- An object that represents a result that is NOT ready yet but will arrive later, either as a success (with a value) or a failure (with an error).
- Created to fix callback hell: a function returns a Promise right away, and you attach what to do with the result afterward, instead of nesting callbacks.
- Analogy: a receipt number for food you ordered. The food isn't ready yet, but you will get either the food (success) or a refund (failure).
- Every `fetch()` call (Day 17) returns a Promise, so this is essential for API calls in React.

## 2. Promise States

| State     | Meaning                             |
| --------- | ----------------------------------- |
| pending   | Still waiting, no result yet        |
| fulfilled | Finished successfully, with a value |
| rejected  | Failed, with an error               |

- A Promise moves from pending to fulfilled OR rejected exactly once.
- Fulfilled or rejected = "settled". A settled Promise can NEVER change state again.

## 3. Creating a Promise

```javascript
const myPromise = new Promise((resolve, reject) => {
  // do some work
  // resolve(value) on success, reject(error) on failure
});
```

- `resolve(value)` marks the Promise as fulfilled and sends the value to `.then()`.
- `reject(error)` marks the Promise as rejected and sends the error to `.catch()`.
- The work inside runs immediately when the Promise is created, but the result arrives later.
- Shortcuts: `Promise.resolve(value)` creates an already-fulfilled Promise. `Promise.reject(error)` creates an already-rejected one.

## 4. .then(), .catch(), .finally()

- `.then(fn)` runs when the Promise is fulfilled, receiving the value.
- `.catch(fn)` runs when the Promise is rejected, receiving the error.
- `.finally(fn)` runs in BOTH cases. Good for cleanup, like hiding a loading spinner.
- `.then()` callbacks always run LATER, after the synchronous code finishes, even for an already-fulfilled Promise.

## 5. Promise Chaining ⭐

- `.then()` returns a NEW Promise, so steps can be chained in a flat list instead of a nested pyramid.
- Whatever you `return` from one `.then()` is passed to the next one.
- If you return a Promise, the chain waits for it to finish before moving on.
- ONE `.catch()` at the end handles an error from any step above it.
- Easy to add or remove steps, since each step is one line.

## 6. Important rule: always return inside .then()

- Every `.then()` must return what the next step needs (a value or a Promise).
- A multi-line arrow function `{ }` with no `return` passes `undefined` to the next step. This is the same Day 5 mistake showing up again.
- `.then((n) => n + 1)` returns implicitly. `.then((n) => { n + 1; })` returns nothing.

## 7. Error flow in a chain

- A thrown error inside `.then()` (or a `reject`) makes the Promise rejected.
- A rejected Promise SKIPS every `.then()` until it reaches a `.catch()`.
- After `.catch()` handles the error, the chain is fulfilled again, so `.finally()` still runs.
- Example: `.then(throw) → .then(skipped) → .catch(runs) → .finally(runs)`.

## 8. Things learned from practice

- Two Promises started at the same time run side by side (two 1-second Promises take about 1 second total, not 2). Chain them to run in sequence.
- When two flows run together, their console output is interleaved by timing, not by the order they were written.
- Repeated Promise chains should be moved into a reusable function.
- A function should either log OR return its result, not both (avoids duplicate output).

## 9. Interview-ready Q&A summary

| Question                                                          | Answer                                                                                  |
| ----------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| What is a Promise?                                                | An object for a result that arrives later, as success or failure                        |
| What are the states?                                              | pending, fulfilled, rejected. Once settled, it never changes                            |
| resolve vs reject?                                                | resolve marks success and feeds `.then()`. reject marks failure and feeds `.catch()`    |
| Why does chaining fix callback hell?                              | `.then()` returns a new Promise, so steps stay flat and one `.catch()` covers the chain |
| What must each .then() do?                                        | Return a value or Promise for the next step                                             |
| What happens when a Promise is rejected in the middle of a chain? | Remaining `.then()` calls are skipped until `.catch()`, then `.finally()` runs          |
