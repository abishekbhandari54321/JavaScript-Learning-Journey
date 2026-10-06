# Day 11 — Test Questions & Correct Answers

### Q1. What is the real difference between `||` and `??`? Give an example of a genuine bug.

**Answer:** `||` falls back for ANY falsy value (`0`, `""`, `false`, `NaN`, `null`, `undefined`). `??` falls back ONLY for `null`/`undefined`. Example bug: `const age = 0; console.log(age || 5);` prints `5` even though `0` was a valid, intentional value — `age ?? 5` correctly prints `0` instead.

---

### Q2. What does optional chaining (`?.`) do? What error does it prevent?

**Answer:** Optional chaining safely accesses a nested property without crashing the program if something along the way is `null`/`undefined`. It prevents the "Cannot read properties of undefined/null" error that occurs when you try to access a property on something that doesn't exist. If any link in the chain is `null`/`undefined`, `?.` stops immediately and returns `undefined` instead of continuing and crashing.

---

### Q3. Predict the output:

```javascript
const config = { volume: 0, brightness: null };
console.log(config.volume ?? 50);
console.log(config.volume || 50);
console.log(config.brightness ?? 50);
console.log(config.brightness || 50);
```

**Answer:**

```
0
50
50
50
```

`volume ?? 50` keeps `0` (not null/undefined). `volume || 50` replaces `0` since it's falsy. `brightness ?? 50` replaces `null` (exactly what `??` targets). `brightness || 50` also replaces `null` (null is also falsy, so `||` catches it too).

---

### Q4. Named export vs default export — how many of each per file?

**Answer:** A named export (`export function x() {}`) can have MULTIPLE per file, and must be imported with curly braces, matching the exact name: `import { x } from './file.js';`. A default export (`export default function x() {}`) can only have ONE per file, and is imported without curly braces, with any name chosen by the importer: `import anyName from './file.js';`.

---

### Q5. Predict the output:

```javascript
const data = { user: { profile: null } };
console.log(data.user?.profile?.name);
console.log(data.user?.profile?.name ?? "No name set");
```

**Answer:**

```
undefined
No name set
```

`profile` exists but holds the value `null`. The `?.` right after `profile` detects that `null` and stops immediately, safely returning `undefined` without ever attempting to check for a `name` property. The second line applies `??` to that `undefined`, correctly replacing it with the fallback `"No name set"`.

---

### Q6. Why do `const`, destructuring, and spread work well together when updating an object? What goes wrong with direct mutation?

**Answer:** `const` prevents a variable from being accidentally reassigned to something entirely different. Spread creates a NEW object/array (a copy) with specific changes applied, instead of editing the original's existing properties directly. Destructuring then cleanly extracts exactly the needed pieces from either version. The problem with directly mutating an object instead (e.g. `user1.address.city = "X"`) is that it changes the ORIGINAL for every part of the program holding a reference to it — in real applications, and especially in React, this breaks the ability to compare "the old version" vs "the new version" of data, which is exactly how React decides when to re-render the UI. Mutating directly removes that old version entirely, so comparisons (and re-renders) can silently fail.
