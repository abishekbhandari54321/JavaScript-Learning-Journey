# Day 11 — Modern JavaScript / ES6+ — Notes

## Recap (already used in earlier days, formally named today)

- **let/const:** `let` reassignable, `const` not. `const` objects/arrays can still have their CONTENTS changed — only the variable's reference is locked.
- **Arrow functions:** shorter syntax; no own `this` (inherits from surrounding scope, Day 9).
- **Template literals:** backticks + `${}` for embedding expressions; supports multi-line strings naturally.
- **Destructuring:** unpack object (by key name) or array (by position) values into variables in one line.
- **Spread/Rest:** `...` expands (spread) or collects (rest) values — context tells them apart.
- **Default parameters:** fallback ONLY when argument is missing or explicitly `undefined` — NOT for `null`, `0`, or `""`.

## 1. Optional Chaining (?.)

- Safely accesses a nested property without crashing if something along the way is missing.
- If the left side of `?.` is `null`/`undefined`, the WHOLE expression short-circuits and returns `undefined` immediately — it does not attempt to go further.
- Works with function calls too: `obj.method?.()` safely does nothing if `method` doesn't exist.
- Important: `?.` only protects the SPECIFIC spot it's placed — every risky link in the chain needs its own `?.` if it might be missing.
- IMPORTANT NUANCE: `?.` stops at `null`/`undefined` VALUES, not just "missing" properties. A property can fully exist and still hold `null` — `?.` treats that exactly the same as if the property were missing entirely.

## 2. Nullish Coalescing (??)

- Gives a fallback value, but ONLY when the left side is `null` or `undefined`.
- Does NOT trigger for other falsy values: `0`, `""`, `false`, `NaN` are all kept as-is.
- Fixes a real bug class that `||` causes: `||` falls back for ANY falsy value, which incorrectly overrides valid values like `0` (a real quantity) or `false` (a real, intentional setting like "notifications OFF").
- Rule of thumb: use `??` when `0`, `false`, or `""` could be genuinely valid data; use `||` only when ANY falsy value should truly be replaced.

## 3. Modules — import/export

- Lets code be split across multiple files, sharing specific pieces between them.
- **Named exports:** `export function x() {}` — multiple allowed per file. Imported with curly braces, exact name match: `import { x } from './file.js';`
- **Default export:** `export default function x() {}` — only ONE per file. Imported WITHOUT curly braces, any name allowed: `import anyName from './file.js';`
- Combined import style (common in real code): `import defaultThing, { named1, named2 } from './file.js';`
- CRITICAL for React: every component lives in its own file and is exported/imported this exact way.

## 4. Common real-world pattern: combining ?. and ??

```javascript
const city = user.address?.city ?? "City not provided";
```

Safely handles missing/null data AND provides a clean fallback — extremely common when working with real API data (Day 17), which is often incomplete or inconsistent.

## 5. Why const + destructuring + spread work well together

- `const` prevents accidentally reassigning a variable to something entirely different.
- Spread creates a NEW object/array (a copy) instead of directly modifying (mutating) the original.
- Destructuring cleanly extracts just the needed pieces from either the original or the updated copy.
- Directly mutating an object instead (e.g. `user1.address.city = "X"`) changes the ORIGINAL for every part of the program holding a reference to it — this causes serious bugs in real applications, especially in React, which relies on comparing old vs. new data to decide when to re-render the UI. Mutating directly makes that comparison impossible, since there's no "old version" left to compare against.

## 6. Interview-ready Q&A Summary

| Question                                                    | Answer                                                                                                                                              |
| ----------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | --- | -------------------------------------------------------- | --- | -------------------------------------------------------------------- |
| `??` vs `                                                   |                                                                                                                                                     | `   | `??` uses the fallback only for `null` or `undefined`. ` |     | `uses the fallback for any falsy value such as`0`, `false`, or `""`. |
| What does `?.` prevent?                                     | It prevents errors when trying to access a property on `null` or `undefined`.                                                                       |
| Does `?.` care if a property is missing or contains `null`? | No. Both result in `undefined`, so `?.` stops safely.                                                                                               |
| Named vs Default Export?                                    | Named exports can have multiple exports per file and use `{ }` when importing. Default exports allow one main export per file and do not use `{ }`. |
| Why avoid directly mutating objects?                        | It makes it harder to compare old and new data and can cause problems with UI updates, especially in React.                                         |
