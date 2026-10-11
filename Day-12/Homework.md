# Day 12 — Test Questions & Correct Answers

### Q1. What's the difference between synchronous and asynchronous code, in your own words?

**Answer:** Synchronous code runs one line at a time, and each line waits for the previous one to finish. Asynchronous code lets slow operations (timers, server requests, file reads) run in the background, so the rest of the code keeps running without waiting. The result is handled later, when it is ready.

---

### Q2. Why doesn't `setTimeout` "pause" the rest of your program while it waits?

**Answer:** `setTimeout` does not wait. It hands the timer to the environment (the browser or Node.js) and immediately moves on to the next line. When the timer finishes, the callback is put in a waiting line and runs once the main code is free. That is why the rest of your program is never blocked.

---

### Q3. Predict the output and explain:

```javascript
console.log("Start");
setTimeout(() => console.log("Timeout"), 0);
console.log("End");
```

**Answer:** Output:

```
Start
End
Timeout
```

Even with a `0` ms delay, the callback is never run immediately. It goes to the waiting line and only runs after all the current synchronous code (`console.log("End")`) has finished.

---

### Q4. What is "Callback Hell"? Why is it a problem with SEQUENTIAL async operations?

**Answer:** Callback Hell is deeply nested callbacks that form a pyramid shape, caused by chaining async steps where each step needs the previous one's result. A single callback is easy to read. The trouble starts when step 2 must run inside step 1, step 3 inside step 2, and so on. The code becomes hard to read, hard to change, and hard to debug, and every level needs its own error handling.

---

### Q5. What do you think Promises are designed to fix?

**Answer:** Promises replace deep nesting with a flat chain of steps (`.then().then().then()`), and one `.catch()` can handle errors for the whole chain. That makes sequential async code readable and easier to maintain.
