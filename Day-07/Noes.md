# Day 7 — Scope + Execution Context — Notes

## 1. Global Scope

- A variable is accessible from ANYWHERE in the file.
- Professional developers minimize global variables — too many make bugs hard to trace, since any part of the code could be changing them.

## 2. Function Scope

- A variable declared inside a function (with `let`/`const`) only exists inside that function.
- Once the function finishes, its variables are gone — nothing outside ever had access.
- Benefit: safely reuse variable names across different functions without conflicts.

## 3. Block Scope

- A "block" = anything inside `{ }` (if, for, while, etc.).
- `let`/`const` respect block scope — trapped inside the `{ }` where declared.
- `var` does NOT respect block scope — it "leaks" out to the nearest function or global scope.
- This leaking behavior is a major reason modern JavaScript avoids `var` in favor of `let`/`const`.

## 4. Lexical Scope

- "Lexical" = based on WHERE something is physically written in the code.
- A function can access variables from the functions/blocks surrounding it (where it was written).
- Access is ONE-DIRECTIONAL: inner functions can see outer variables, but outer functions can NEVER see inner functions' variables.
- This is the exact mechanism that makes closures possible (Day 8).

## 5. Scope Chain

- When JavaScript looks for a variable, it checks the CURRENT scope first, then moves outward: inner → outer → global.
- It never searches "downward" or sideways — only outward from where the code is currently running.

## 6. Execution Context

- The "workspace" JavaScript builds to run a piece of code — tracks variables, functions, and what `this` means.
- Two types:
  - **Global Execution Context** — created once, when the file starts running.
  - **Function Execution Context** — created fresh every time a function is called, destroyed when it finishes.

## 7. Call Stack

- Tracks which function is CURRENTLY running, and which functions called which.
- Works LIFO (Last In, First Out) — like a stack of plates.
- KEY RULE: when a function calls another function, the caller PAUSES completely and does not resume until the called function fully finishes.
- This produces the "go deep, then unwind in reverse" output pattern seen in nested function calls.
- Real-world use: error stack traces show the call stack at the moment of a crash — understanding this helps read and debug real error messages.

## 8. Key distinction: returning a function vs calling a function

- `return inner;` → returns the function ITSELF as a value (not its result). The returned thing is still fully callable.
- `return inner();` → calls the function immediately and returns whatever VALUE it produces.
- This distinction is the foundation of closures — a returned inner function still "remembers" its outer scope's variables, even after the outer function has already finished running.

## 9. Mental trick for tracing call stack output

- Draw the call stack as a vertical list on paper.
- Add a function name to the top when it's called.
- Cross it off (from the top) only when it completely finishes.
- This visual trick works for any nested function trace, no matter how deep.

## 10. Interview-ready Q&A summary

| Question                           | Answer                                                                                                                           |
| ---------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| Block scope vs function scope?     | Block scope = trapped inside `{ }`; function scope = accessible anywhere inside the function, including nested blocks            |
| Why does var leak but let doesn't? | var only understands function scope and ignores block boundaries; let/const respect block boundaries                             |
| What is lexical scope?             | Access to variables is determined by where code is physically written; inner sees outer, never the reverse                       |
| What is the call stack?            | Tracks currently running functions, LIFO order; a function pauses when it calls another and resumes only after that one finishes |
| What is an execution context?      | The workspace JS creates to run code, tracking variables and `this`; Global and Function are the two main types                  |
| Returning vs calling a function?   | `return fn` gives back the function itself (still callable later); `return fn()` gives back its result immediately               |
