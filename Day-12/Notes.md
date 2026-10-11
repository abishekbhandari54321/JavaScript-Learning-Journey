# Day 12 — Synchronous vs Asynchronous JavaScript — Notes

## 1. Synchronous JavaScript

- Code runs one line at a time, in order.
- Each line must finish completely before the next one starts.
- Problem: slow operations (server requests, file reads, timers) would freeze the whole program (and a whole webpage in a browser) if JavaScript simply waited for them.

## 2. Asynchronous JavaScript

- Slow operations run in the background, without blocking the rest of the code.
- JavaScript starts the slow operation, moves on immediately, and handles the result later, when it is ready.
- `setTimeout` is an example: it does NOT pause the program. It schedules a function to run later.
- Real-world use: loading data from a server while the app stays responsive (loading spinner, scrolling, clicking).

## 3. Order of output with setTimeout

- All synchronous code runs first, in order.
- `setTimeout` callbacks run AFTER all current synchronous code has finished, even with a `0` ms delay.
- A `0` ms delay does not mean "run immediately". It means "run as soon as the synchronous code is done."
- Example: `A, C, E` (synchronous) → `D` (0ms) → `B` (1000ms).
- The full mechanism (the waiting line and the Event Loop) is covered on Day 15.

## 4. Callbacks for async tasks

- A function passed in to be called LATER, once a slow operation finishes, to deliver the result.
- Pattern: `loadData(callback)` starts the work, and calls `callback(result)` when done.
- This was the original way JavaScript handled async results, before Promises.
- Each `setTimeout` callback also forms a closure (Day 8), remembering variables like `name` from where it was created.

## 5. Callback Hell (Pyramid of Doom)

- Happens when several async steps must run in SEQUENCE and each step needs the previous result.
- Each step gets nested inside the previous callback, so the code keeps moving to the right in a pyramid shape.
- Problems: hard to read, hard to change, hard to debug, and every level needs its own error handling.
- A single callback is NOT a problem. The problem is nesting many callbacks together.
- Callbacks themselves are still important and widely used. Promises fix the nesting problem, not callbacks as a concept.

## 6. Why this matters for tomorrow

- Promises (Day 13) replace deep nesting with a flat chain: `.then().then().then()`, with one `.catch()` for errors.
- async/await (Day 14) makes the same sequential logic look like normal synchronous code.

## 7. Small detail learned today

- In a template literal, `$${amount}` prints a literal `$` followed by the value. `${amount}` alone prints just the value.

## 8. Interview-ready Q&A summary

| Question                                  | Answer                                                                                                                  |
| ----------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| Synchronous vs asynchronous?              | Sync runs one line at a time and waits. Async lets slow work run in the background while the rest of the code continues |
| Why doesn't setTimeout pause the program? | It hands the timer to the environment and moves on. The callback runs later, after the synchronous code is done         |
| Output of Start / setTimeout 0 / End?     | Start, End, Timeout. Even 0ms callbacks wait until synchronous code finishes                                            |
| What is callback hell?                    | Deeply nested callbacks from chaining sequential async steps, forming a pyramid that is hard to read and maintain       |
| What will Promises fix?                   | Flatten the nesting into a readable chain and handle errors in one place                                                |
