# Day 15 — The Event Loop — Notes

## 1. JavaScript is single-threaded

- JavaScript can do only ONE thing at a time. It has one Call Stack (Day 7).
- It still handles waiting (timers, `fetch`, clicks) without freezing, because the ENVIRONMENT (browser or Node.js) does the waiting outside the stack, then hands the result back at the right time.
- The Event Loop manages that handoff.

## 2. The pieces

| Piece                        | What it is                                                                                                                   |
| ---------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| Call Stack                   | Where JavaScript runs code, one function at a time                                                                           |
| Web APIs / Runtime           | Browser or Node.js features that handle timers, `fetch`, DOM events outside the stack                                        |
| Task Queue (macrotask queue) | Waiting line for `setTimeout`, `setInterval`, and DOM event callbacks                                                        |
| Microtask Queue              | Waiting line for Promise callbacks (`.then/.catch/.finally`) and the code after `await`. HIGHER priority than the Task Queue |
| Event Loop                   | Moves callbacks from the queues to the Call Stack when the stack is empty                                                    |

## 3. What the Event Loop does (repeats forever)

1. Run all synchronous code until the Call Stack is empty.
2. Run ALL microtasks (until the Microtask Queue is empty).
3. Take ONE task from the Task Queue and run it.
4. Go back to step 2 (all microtasks again), then take the next task, and so on.

## 4. Golden Rule ⭐

> **Synchronous code first → ALL microtasks → ONE task → repeat.**

## 5. Why a Promise `.then` beats `setTimeout(..., 0)`

- Microtasks have higher priority than tasks, and the Event Loop finishes the WHOLE microtask queue before taking the next task.
- This is true even if the `setTimeout` was written first.

## 6. async/await and the Event Loop

- An `async` function runs synchronously until its first `await`.
- At `await`, the function pauses, and the code AFTER the `await` becomes a microtask.
- **Everything on the same line as `await` runs BEFORE the pause.** Example: in `await two();`, the call `two()` runs immediately (and prints its output), then `one` pauses. Only the code after the line is delayed.

## 7. Tracing method (use this for any prediction)

Keep three lists while you read the code top to bottom:

1. **Output** (synchronous logs, in order)
2. **Microtask queue** (Promise callbacks, code after await), in the order queued
3. **Task queue** (timers, events), in the order created

Then print: all of list 1, then all of list 2, then one item from list 3 (and after each task, run any microtasks it created).

## 8. Nested cases

- A microtask created INSIDE a microtask joins the END of the microtask queue, but still runs before any task.
- A timer created inside a microtask or task goes to the END of the task queue.
- A microtask created inside a task runs right after that task, before the next task.

## 9. Blocking the Call Stack

- `setTimeout(..., 0)` does NOT mean "immediately". It means "as soon as the stack is free and microtasks are done."
- The delay in `setTimeout` is a MINIMUM, not a guarantee. If the Call Stack is busy, the timer waits.
- A long synchronous loop blocks EVERYTHING: timers, clicks, screen updates. In a browser, the page freezes.
- Heavy work should be async, or split into smaller pieces.

## 10. Common interview traps

1. "setTimeout 0 runs immediately." Wrong. It waits for all sync code AND all microtasks.
2. "Promise `.then` and `setTimeout 0` run in the order written." Wrong. Microtasks always go first.
3. "Code after `await` runs right away." Wrong. It becomes a microtask and runs later.
4. "`await two()` delays `two()`." Wrong. `two()` is called immediately; only the code after the `await` line is delayed.

## 11. Why this matters for React

- State updates and effects do not happen "instantly" in the middle of your function. Understanding that async code runs after the current code finishes explains many React surprises.
- Blocking the call stack with heavy work freezes the whole interface.

## 12. Interview-ready Q&A summary

| Question                                     | Answer                                                                                                                                   |
| -------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| Why is JavaScript single-threaded?           | One Call Stack, one thing at a time. The environment handles waiting                                                                     |
| Microtask vs Task queue?                     | Microtasks: Promise callbacks, code after await (higher priority, all run first). Tasks: setTimeout, setInterval, events (one at a time) |
| What does the Event Loop do?                 | When the stack is empty: run all microtasks, then one task, repeat                                                                       |
| Why does `.then` run before `setTimeout(0)`? | The whole microtask queue runs before the next task                                                                                      |
| Why does a long loop freeze a page?          | The Call Stack is busy, so the Event Loop can't run clicks, timers, or repaints                                                          |
| What runs immediately in `await two()`?      | The call `two()`. Only the code after the `await` line is delayed                                                                        |
