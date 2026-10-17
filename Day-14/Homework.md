# Day 14 — Test Questions & Correct Answers

### Q1. What does the `async` keyword do to a function? What does an `async` function always return?

**Answer:** `async` makes a function always return a Promise. A returned value is wrapped in a fulfilled Promise, and a thrown error becomes a rejected Promise.

---

### Q2. What does `await` do? Does it block the entire program? Where can you use it?

**Answer:** `await` pauses only the `async` function it is in until the Promise settles, and then gives back the Promise's value. It does not block the rest of the program. It can only be used inside an `async` function (or at the top level of a module). Using it in a normal function is a SyntaxError.

---

### Q3. How does `try/catch/finally` relate to `.then()/.catch()/.finally()`?

**Answer:** They do the same job in two different styles. `try` is the success path (like `.then()`), `catch` handles errors (like `.catch()`), and `finally` runs in both cases (like `.finally()`) and is used for cleanup. The link between them is that when an awaited Promise is rejected, `await` throws an error, and `catch` handles it.

---

### Q4. Predict the output and explain:

```javascript
async function run() {
  console.log("A");
  await Promise.resolve();
  console.log("B");
}
run();
console.log("C");
```

**Answer:**

```
A
C
B
```

`run()` starts and prints `A` immediately. At `await`, the function pauses and gives control back, so `console.log("C")` runs next. The rest of `run` (`console.log("B")`) runs after the current synchronous code finishes, so `B` prints last.

---

### Q5. What is the difference between these two, and when would you use each?

```javascript
await a();
await b();
// vs
await Promise.all([a(), b()]);
```

**Answer:** `await a(); await b();` runs one after another (total time = a + b). `await Promise.all([a(), b()])` starts both at once and waits for both (total time = the slower one). Use sequential when step 2 needs step 1's result. Use `Promise.all` when the tasks are independent, because it is faster.

---

### Q6. What happens in this code, and how do you fix it?

```javascript
async function load() {
  const data = fetchData(); // fetchData returns a Promise
  console.log(data);
}
```

**Answer:** Without `await`, `data` holds the Promise object, so it prints `Promise { <pending> }`. Also, nothing runs at all unless `load()` is called. The fix is:

```javascript
async function load() {
  const data = await fetchData(); // with parentheses
  console.log(data);
}
load();
```

Note: `await fetchData` (without parentheses) would await the function itself and print `[Function: fetchData]`. Always call the function with `()` so you get the Promise.

---

### Q7. Compare callbacks, Promises, and async/await. Why do most developers prefer async/await?

**Answer:**
| Style | How it works | Weakness / strength |
|---|---|---|
| Callbacks | You pass a function to be called when a task finishes | With many sequential steps, they nest into a pyramid (callback hell) |
| Promises | A function returns an object for a future result. `.then()` chains keep code flat, with one `.catch()` | Better, but long chains can still be harder to read |
| async/await | Built on Promises, but code reads top to bottom like normal code | Uses familiar `try/catch`, and earlier results stay available as plain variables |

Most developers prefer async/await because it is the easiest to read, write, and debug, while still being non-blocking.
