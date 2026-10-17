# Day 14 — async/await — Notes

## 1. async functions

- Putting `async` before a function makes it ALWAYS return a Promise.
- A returned value is wrapped in a fulfilled Promise: `async function f() { return 5; }` returns `Promise { 5 }`.
- A thrown error inside becomes a rejected Promise.
- Because it returns a Promise, you can still use `.then()` and `.catch()` on it.
- Works for arrow functions too: `const f = async () => { ... };`

## 2. await

- Pauses ONLY the `async` function it is in, until the Promise settles. Then it gives back the Promise's value directly.
- Does NOT block the rest of the program. Other code keeps running.
- Can only be used inside an `async` function (or at the top level of a module). Using it in a normal function is a SyntaxError.
- The code after `await` runs LATER, after the current synchronous code finishes (explained fully on Day 15, the Event Loop).

## 3. Rewriting Promise chains

- Promise chain: `getUser(1).then(user => getOrders(user.userId)).then(...)`
- async/await: `const user = await getUser(1); const orders = await getOrders(user.userId);`
- Benefits: reads top to bottom like normal code, and earlier results (`user`, `orders`) stay available as plain variables for later lines.
- Both versions do exactly the same work. async/await is just cleaner syntax on top of Promises.

## 4. try / catch / finally

- Two ways of doing the same job:
  - `try` = success path (like `.then()`)
  - `catch` = error path (like `.catch()`)
  - `finally` = runs in both cases (like `.finally()`), used for cleanup
- When an awaited Promise is REJECTED, `await` throws an error, and `catch` handles it.
- One `try/catch` can cover many `await` lines.
- If something inside `try` fails, the rest of `try` is skipped and JavaScript jumps to `catch`.

## 5. Sequential vs Parallel ⭐

- Sequential: `await a(); await b();` runs one after another. Total time = a + b.
- Parallel: `await Promise.all([a(), b()]);` starts both at once. Total time = the slower one.
- `Promise.all` returns an array of results, and rejects if any one Promise rejects.
- Use sequential when step 2 needs step 1's result (get user, then get that user's orders).
- Use parallel when tasks are independent (load products AND load categories). It is faster.

## 6. A Promise starts when it is CREATED

- A Promise begins working the moment it is created, not when you `await` it.
- `await` only controls when you READ the result.
- Example: two Promises created at the top (2s and 4s) finish in about 4 seconds total, not 6.
- To make one wait for another, create the second Promise AFTER the first `await`.

## 7. Common mistakes

1. **Forgetting `await`:** you get the Promise object (`Promise { <pending> }`) instead of its value.
2. **Missing parentheses:** `await fetchData` awaits the function itself. Use `await fetchData()`. (Same as `bye` vs `bye()` from Day 5.)
3. **`await` outside an async function:** SyntaxError.
4. **No `try/catch`:** an unhandled rejection can crash the program or fail silently.
5. **Awaiting in sequence when tasks are independent:** works, but slower than `Promise.all`.
6. **`await` inside `forEach`:** `forEach` does not wait for async callbacks. Use a `for...of` loop to await each item in order.
7. **Never calling the function:** an `async function load() {}` does nothing until `load()` is called.

## 8. Bug lesson: duplicate function names

- Function declarations are hoisted (Day 8). If two functions have the SAME name in one file, the LATER one replaces the earlier one everywhere.
- Example: two `async function run()` declarations made the first `run()` call run the second version.
- Fix: give every function a unique name, or put them in separate files/scopes.

## 9. Reading async output

- When many timers run in one file, their output prints by DELAY TIME, not file order.
- Interleaved output is normal, not a bug. It shows async operations running side by side.
- To avoid interleaving in tests, run them one after another: `await test1(); await test2();`.

## 10. Why this matters for React

- API calls (`fetch`) return Promises, and in React you will write `async/await` with `try/catch` all the time, usually inside `useEffect`.
- `Promise.all` is used to load several independent pieces of data at once for a faster page.

## 11. Interview-ready Q&A summary

| Question                            | Answer                                                                                                                                    |
| ----------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| What does `async` do?               | Makes a function always return a Promise                                                                                                  |
| What does `await` do?               | Pauses that async function until the Promise settles and returns its value. Does not block the program. Only works inside async functions |
| try/catch vs .then/.catch?          | Same job. try = success path, catch = error path. A rejected awaited Promise throws, and catch handles it                                 |
| Sequential vs parallel?             | Sequential awaits one by one (a + b). `Promise.all` starts all at once (slowest one). Use parallel for independent tasks                  |
| Why prefer async/await?             | Reads like normal code, uses familiar try/catch, and earlier results stay available as variables                                          |
| What happens if you forget `await`? | You get a pending Promise object instead of the value                                                                                     |
