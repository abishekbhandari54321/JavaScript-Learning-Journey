# Day 15 — Test Questions & Correct Answers

### Q1. Why is JavaScript called single-threaded? How does it still handle waiting (like `setTimeout` or `fetch`) without freezing?

**Answer:** JavaScript is single-threaded because it has one Call Stack and can do only one thing at a time. It doesn't freeze while waiting because the environment (browser or Node.js) handles timers and requests outside the stack, then hands the callback back through the queues when it is ready.

---

### Q2. What is the difference between the Microtask Queue and the Task Queue? Give two examples of what goes in each.

**Answer:** The Microtask Queue holds Promise callbacks (`.then/.catch/.finally`) and the code after `await`. It has higher priority, and ALL microtasks run before the next task. The Task Queue holds `setTimeout`, `setInterval`, and DOM events, and the Event Loop takes ONE task at a time.

---

### Q3. What does the Event Loop do? Explain it as a short list of steps.

**Answer:** The Event Loop moves callbacks onto the Call Stack when it is empty:

1. Run all synchronous code.
2. Run all microtasks.
3. Run one task.
4. Repeat.

---

### Q4. Predict the output and explain:

```javascript
console.log("1");
setTimeout(() => console.log("2"), 0);
Promise.resolve().then(() => console.log("3"));
console.log("4");
```

**Answer:**

```
1
4
3
2
```

`1` and `4` are synchronous. `3` is a microtask, so it runs next. `2` is a task, so it runs last.

---

### Q5. Why does a `Promise.then` callback run before a `setTimeout(..., 0)` callback, even if the `setTimeout` was written first?

**Answer:** The Event Loop runs ALL microtasks before taking the next task, no matter which was written first. A Promise callback is a microtask and `setTimeout` is a task, so the Promise always goes first.

---

### Q6. Predict the output and explain:

```javascript
async function run() {
  console.log("X");
  await null;
  console.log("Y");
}

console.log("Start");
run();
setTimeout(() => console.log("Z"), 0);
console.log("End");
```

**Answer:**

```
Start
X
End
Y
Z
```

`Start` prints. `run()` prints `X`, then pauses at `await`, and `Y` becomes a microtask. The timer goes to the Task Queue. `End` prints (synchronous). Then the microtask prints `Y`, and finally the task prints `Z`.

---

### Q7. A page freezes when you run a very long `for` loop. Using the Event Loop, explain why.

**Answer:** A long loop keeps the Call Stack busy, so the Event Loop can't run anything else. Clicks, timers, and screen updates all wait until the loop ends, so the page appears frozen.

---

# Day 15 — Practice Task Corrections

### Task 3 (the one that was missed): `await two()`

```javascript
async function one() {
  console.log("A");
  await two();
  console.log("B");
}

async function two() {
  console.log("C");
}

console.log("D");
one();
console.log("E");
```

**Answer:**

```
D
A
C
E
B
```

In `await two();`, the call `two()` happens first and is synchronous, so `C` prints immediately. Then `await` pauses `one`. `E` prints, and finally the microtask runs `B`. Only the code AFTER the `await` line is delayed.

### Task 5: Blocking for 2 seconds

**Answer:** `loop finished` appears after about 2 seconds, immediately followed by `timer`. The timer was ready at 0 ms, but it waited for the Call Stack to be free.
