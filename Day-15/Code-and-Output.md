# Day 15 — The Event Loop

> **How to read this file:** every code block has its output directly below it.
> Outputs are shown per snippet, as if each snippet ran on its own. At the end there is the real combined output of `Day-15.js`, where all snippets run together in one file.

**Golden Rule:** Synchronous code first → then ALL microtasks (Promises, code after `await`) → then ONE task (`setTimeout`, events) → repeat.

---

## 1. The Classic Example

```javascript
console.log("A");

setTimeout(() => {
  console.log("B");
}, 0);

Promise.resolve().then(() => {
  console.log("C");
});

console.log("D");
```

**Output:**

```
A
D
C
B
```

**Why:** `A` and `D` are synchronous. `C` is a microtask, so it runs next. `B` is a task, so it runs last.

---

## 2. async/await and the Event Loop

```javascript
async function f() {
  console.log("1");
  await null;
  console.log("2");
}

console.log("start");
f();
Promise.resolve().then(() => console.log("3"));
setTimeout(() => console.log("4"), 0);
console.log("end");
```

**Output:**

```
start
1
end
2
3
4
```

**Why:** `f()` prints `1`, then pauses at `await`. The code after `await` (`2`) becomes a microtask, queued first. The Promise callback (`3`) is queued second. The timer (`4`) goes to the Task Queue. After the synchronous code, microtasks run in order (`2`, `3`), and then the task (`4`).

---

## 3. setTimeout(..., 0) Is Not "Immediately"

```javascript
setTimeout(() => console.log("timer"), 0);

const end = Date.now() + 1000;
while (Date.now() < end) {
  // blocks the call stack for 1 second
}

console.log("loop finished");
```

**Output (after about 1 second):**

```
loop finished
timer
```

**Why:** The timer was ready after 0 ms, but it had to wait for the Call Stack to be free. A long synchronous loop blocks everything.

---

## Task 1: Sync, microtask, task

```javascript
console.log("1");
setTimeout(() => console.log("2"), 0);
Promise.resolve().then(() => console.log("3"));
console.log("4");
```

**Output:**

```
1
4
3
2
```

**Why:** `1` and `4` are synchronous, `3` is a microtask, and `2` is a task.

---

## Task 2: Two timers and two promises

```javascript
setTimeout(() => console.log("T1"), 0);
setTimeout(() => console.log("T2"), 0);
Promise.resolve().then(() => console.log("P1"));
Promise.resolve().then(() => console.log("P2"));
console.log("Sync");
```

**Output:**

```
Sync
P1
P2
T1
T2
```

**Why:** Synchronous first. Then **all** microtasks (`P1`, `P2`). Then the tasks, one at a time, in the order they were created (`T1`, `T2`).

---

## Task 3: await two()

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

**Output:**

```
D
A
C
E
B
```

**Why:** `one()` prints `A`. Then `await two()` does two things in order: first `two()` is **called**, and a function call is synchronous, so it prints `C` right now. Then `await` pauses `one`. `E` prints. Finally the microtask runs `B`.

**Mistake made:** The prediction was `D, A, E, B, C`, which delayed `C`. **Rule to remember:** everything on the same line as `await` runs before the pause. Only the code **after** it is delayed.

---

## Task 4: A microtask created inside a microtask

```javascript
Promise.resolve().then(() => {
  console.log("P1");
  setTimeout(() => console.log("T"), 0);
  Promise.resolve().then(() => console.log("P2"));
});
console.log("S");
```

**Output:**

```
S
P1
P2
T
```

**Why:** `S` is synchronous. `P1` is the first microtask. Inside it, a timer (`T`) goes to the Task Queue, and a new microtask (`P2`) is added. All microtasks finish first, so `P2` runs before any task. Then the task `T` runs.

---

## Task 5: Blocking the call stack for 2 seconds

```javascript
setTimeout(() => console.log("timer"), 0);

const start = Date.now();

// Block the main thread for approximately 2 seconds.
while (Date.now() - start < 2000) {
  // Busy-waiting: the main thread cannot process timer callbacks.
}

console.log("loop finished");

// The timer waited because JavaScript runs this synchronous loop
// on the main thread. The event loop cannot execute the timer
// callback until the blocking code finishes.
```

**Output (after about 2 seconds):**

```
loop finished
timer
```

**Prediction that should have been stated:** `loop finished` appears after about 2 seconds, immediately followed by `timer`. The timer was ready at 0 ms but waited for the call stack to be free.

---

## Task 6: Where everything is when the Call Stack first becomes empty (Classic Example)

```
Already printed:  A, D

Call Stack:
  (empty)

Microtask Queue:
  Promise.then() callback   -> will print C

Task Queue:
  setTimeout() callback     -> will print B
```

**What happens next:** The Event Loop runs all microtasks (prints `C`), then takes one task (prints `B`).

---

## Test Q4: Sync, microtask, task

```javascript
console.log("1");
setTimeout(() => console.log("2"), 0);
Promise.resolve().then(() => console.log("3"));
console.log("4");
```

**Output:**

```
1
4
3
2
```

---

## Test Q6: async function with await and a timer

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

**Output:**

```
Start
X
End
Y
Z
```

**Why:** `Start` prints. `run()` prints `X`, then pauses, and `Y` becomes a microtask. The timer goes to the Task Queue. `End` prints (synchronous). Then the microtask prints `Y`, and finally the task prints `Z`.

---

## Practical Project: Event Loop Order Lab

```javascript
function blockFor(ms) {
  const start = Date.now();

  while (Date.now() - start < ms) {
    // This loop blocks the main thread.
  }
}

console.log("SYNC-1");

setTimeout(() => {
  console.log("TIMER-1");

  // Bonus: this microtask runs before the next timer task.
  Promise.resolve().then(() => console.log("BONUS-MICRO"));
}, 0);

Promise.resolve().then(() => console.log("MICRO-1"));

async function asyncStep() {
  console.log("ASYNC-START");

  await Promise.resolve();

  console.log("ASYNC-AFTER-AWAIT");
}

asyncStep();

setTimeout(() => console.log("TIMER-2"), 0);

Promise.resolve().then(() => console.log("MICRO-2"));

console.log("SYNC-2");

setTimeout(() => console.log("BLOCK-TIMER"), 0);

console.log("BLOCK-START");
blockFor(1000);
console.log("BLOCK-END");

console.log("SYNC-3");

// Golden rule: finish synchronous code first, then process
// microtasks, then tasks. Blocking the main thread delays them all.
```

**Output:**

```
SYNC-1
ASYNC-START
SYNC-2
BLOCK-START
BLOCK-END
SYNC-3
MICRO-1
ASYNC-AFTER-AWAIT
MICRO-2
TIMER-1
BONUS-MICRO
TIMER-2
BLOCK-TIMER
```

**Prediction vs actual:** The prediction matched the actual output on all 13 lines ✅.

| Line                                           | Rule used                                                    |
| ---------------------------------------------- | ------------------------------------------------------------ |
| SYNC-1, SYNC-2, SYNC-3, BLOCK-START, BLOCK-END | Synchronous code runs first, in order                        |
| ASYNC-START                                    | An async function runs synchronously until its first `await` |
| MICRO-1, ASYNC-AFTER-AWAIT, MICRO-2            | Microtasks run in the order they were queued                 |
| TIMER-1, TIMER-2, BLOCK-TIMER                  | Tasks run after all microtasks, in the order created         |
| BONUS-MICRO                                    | A microtask created inside a task runs before the next task  |

**Optional improvement:** to prove the blocking delay, add timestamps:

```javascript
const t0 = Date.now();
setTimeout(() => console.log("BLOCK-TIMER after", Date.now() - t0, "ms"), 0);
blockFor(1000);
```

**Output:**

```
BLOCK-TIMER after 1000 ms
```

(approximately, even though the delay was `0`)

---

## Real Combined Output of Day-15.js (all snippets in one file)

When every snippet runs in ONE file, the output falls into three groups. This is the Event Loop at full scale.

```
---------- The Classic Example ----------
A
D
---------- setTimeout(..., 0) Is Not "Immediately" ----------
loop finished
---------- Task 1 ----------
1
4
---------- Task 2 ----------
Sync
---------- Task 3 ----------
D
A
C
E
---------- Test 4 ----------
S
---------- Test 6 ----------
1
4
Start
X
End
C
3
P1
P2
B
P1
3
Y
P2
B
timer
2
T1
T2
2
Z
T
```

| Phase                                     | What printed (in order)                                                                  |
| ----------------------------------------- | ---------------------------------------------------------------------------------------- |
| **1. Synchronous code**                   | all headers, `A D`, `loop finished`, `1 4`, `Sync`, `D A C E`, `S`, `1 4`, `Start X End` |
| **2. Microtasks** (in queue order)        | `C 3 P1 P2 B P1 3 Y P2`                                                                  |
| **3. Tasks / timers** (in creation order) | `B timer 2 T1 T2 2 Z T`                                                                  |

**Two details:**

- The last microtask `P2` was created **inside** another microtask, so it joined the **end** of the microtask queue. It still ran before every timer.
- `T` was created inside a microtask, so its timer joined the **end** of the task queue and printed last.
