# Day 9 — this + call/apply/bind — Notes

## 1. What is `this`?

- Refers to "the object currently calling/running the function."
- Its value is decided at the moment a function is CALLED, not where it's written.
- **Golden Rule:** "What matters is HOW a function is called, not WHERE it's written."

## 2. this in the Global Context

- At the top level, `this` refers to some kind of global object (`{}` in Node modules, `window` in browsers).
- Rarely used directly in real code — mostly a stepping stone.

## 3. this Inside an Object Method

- When a function is called AS a method (`obj.method()`), `this` refers to the object before the dot.
- Detaching a method into its own variable and calling it alone LOSES `this` — there's no object before the dot anymore, so `this` falls back to global/undefined.

## 4. this Inside a Regular Function (called alone)

- No object before it → `this` is the global object (non-strict) or `undefined` (strict mode / most modern JS).

## 5. this Inside an Arrow Function ⭐

- Arrow functions do NOT get their own `this`.
- Instead, they "borrow" `this` from the surrounding code where they were WRITTEN (lexical, like closures).
- This is why arrow functions are the standard choice for callbacks (e.g. inside `setTimeout`) — they don't accidentally lose `this` the way regular functions do.
- Regular function: `this` = decided by HOW it's called (call time).
- Arrow function: `this` = decided by WHERE it's written (write time).

## 6. this Inside a Constructor Function

- When called with `new`, `this` refers to the brand new object being created.
- `this.property = value;` sets a property on that new object.

## 7. call()

- Runs a function immediately, with `this` manually specified.
- Arguments passed ONE BY ONE: `fn.call(thisValue, arg1, arg2)`

## 8. apply()

- Same as `call()`, but arguments passed as a single ARRAY: `fn.apply(thisValue, [arg1, arg2])`
- Memory trick: "**A**pply needs an **A**rray."

## 9. bind()

- Does NOT run the function immediately.
- Returns a brand NEW function with `this` permanently locked in, to be called later.
- Arguments passed one by one (same format as call, not apply).
- Commonly used to fix "lost this" bugs, especially when passing methods as callbacks.

## 10. call/apply/bind — Summary Table

|         | Runs immediately? | Arguments format | Returns                      |
| ------- | ----------------- | ---------------- | ---------------------------- |
| call()  | Yes               | One by one       | The function's result        |
| apply() | Yes               | As an array      | The function's result        |
| bind()  | No                | One by one       | A NEW function to call later |

## 11. Quick reference — this by context

| Context                         | What `this` refers to                                       |
| ------------------------------- | ----------------------------------------------------------- |
| Global scope                    | Global object (or `{}` in Node)                             |
| Object method (`obj.method()`)  | The object before the dot                                   |
| Regular function (called alone) | Global object, or `undefined` in strict mode                |
| Arrow function                  | `this` from the surrounding code where it was WRITTEN       |
| Constructor (`new Fn()`)        | The newly created object                                    |
| call() / apply()                | Whatever object manually specified — runs immediately       |
| bind()                          | Whatever object manually specified — returns a new function |

## 12. Important reminder: side effect vs return value (reinforced from Day 5)

- `console.log()` inside a function is a SIDE EFFECT (it prints something) — it is NOT the same as the function's RETURN VALUE.
- A function with no `return` statement always gives back `undefined`, even if it printed something useful via `console.log` while running.
- Example: `const result = someFunctionThatOnlyLogs();` → `result` will be `undefined`, even though something was printed to the console.

## 13. Interview-ready Q&A summary

| Question                                   | Answer                                                                        |
| ------------------------------------------ | ----------------------------------------------------------------------------- |
| What is `this`?                            | The object currently calling/running the function; decided at call time       |
| Golden rule for `this`?                    | "What matters is HOW a function is called, not WHERE it's written"            |
| Why does a detached method lose `this`?    | No object before the dot at call time, so `this` has nothing to attach to     |
| Why do arrow functions behave differently? | They don't get their own `this` — they borrow it from where they were written |
| call() vs apply()?                         | Same thing, different argument format — individual args vs an array           |
| bind() vs call()/apply()?                  | bind() returns a new function for later; call()/apply() run immediately       |
