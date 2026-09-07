# Day 6 — Test Questions & Correct Answers

### Q1. What is the difference between `slice()` and `splice()`?

**Answer:** `slice(start, end)` copies a portion of an array into a brand new array, and leaves the original array unchanged. `splice(start, deleteCount, itemsToAdd)` directly changes the original array — it can remove items, add items, or both, at a given index.

---

### Q2. What is the difference between `map()` and `filter()`?

**Answer:** `map()` runs a function on every item and returns a new array of the SAME length, where each item has been transformed. `filter()` tests every item against a condition and returns a new array that may be SHORTER, containing only the items that passed the test.

---

### Q3. Explain step by step what `reduce()` is doing:

```javascript
const nums = [2, 4, 6];
const result = nums.reduce((acc, num) => acc + num, 10);
console.log(result);
```

**Answer:** `reduce()` combines all items in an array into a single value. Here, `acc` (accumulator) starts at `10`. Step 1: `acc=10, num=2` → `12`. Step 2: `acc=12, num=4` → `16`. Step 3: `acc=16, num=6` → `22`. Final `result` is `22`. It starts from `10` because `10` is the starting value explicitly given as the second argument to `reduce()`.

---

### Q4. What is destructuring, and why is it useful?

**Answer:** Destructuring is a shortcut that lets you unpack values from an array or object directly into individual variables, instead of writing `object.property` repeatedly. Example: `const { name, age } = person;` pulls `name` and `age` straight out of the `person` object in one line.

---

### Q5. What is the difference between the spread operator and the rest operator?

**Answer:** Spread (`...`) expands an array or object into its individual items — used when building new arrays/objects or passing multiple arguments. Rest (`...`) does the opposite — it collects multiple individual values into a single array — used in function parameters. You tell them apart by context: spread appears inside `[ ]` or `{ }` or a function call; rest appears inside a function's parameter list.

---

### Q6. Predict the output:

```javascript
const original = { name: "Sam", score: 50 };
const updated = { ...original, score: 90 };

console.log(original.score);
console.log(updated.score);
```

**Answer:** The output is:

```
50
90
```

`console.log(original.score)` only prints the `score` property from `original`, which is `50` — spreading into `updated` never touches `original` itself. `console.log(updated.score)` prints `90`, because when writing `{ ...original, score: 90 }`, the `score: 90` came AFTER the spread, so it overwrote the copied `score: 50`.

---

### Q7. Why do developers prefer using `map()`/`filter()`/`reduce()` over a regular `for` loop in modern JavaScript?

**Answer:** `map()`, `filter()`, and `reduce()` make code shorter, easier to read, and safer, because they don't change (mutate) the original array — they always return a new one. They also make the intent of the code obvious at a glance: `.map()` clearly means "transform this into something new," `.filter()` clearly means "keep only some items." This clarity is a big reason React uses `.map()` constantly to turn data into UI elements.
