# JavaScript Day 02 — Code and Output

## Exercise 1 — Variables with `let`

### Code

```javascript
let score = 60;

score = 95;

console.log(score);
```

### Output

```text
95
```

### What happened?

The variable `score` was first given the value `60`.

Later, its value was changed to `95`.

This is possible because `score` was created using `let`.

---

## Exercise 2 — Constants with `const`

### Code

```javascript
const pi = 3.14159;

// pi = 3.14;
// This would cause an error because a const variable cannot be reassigned.

console.log(pi);
```

### Output

```text
3.14159
```

A variable created with `const` cannot be reassigned after it has been given a value.

---

## Exercise 3 — Different Data Types

### Code

```javascript
const name = "Abishek";

let age = 25;

const country = "Nepal";

const isGraduate = true;

let noAssignedVariable;

let nullvariable = null;
```

---

## Exercise 4 — `typeof` Operator

### Code

```javascript
console.log(typeof name);

console.log(typeof age);

console.log(typeof country);

console.log(typeof isGraduate);

console.log(typeof noAssignedVariable);

console.log(typeof nullvariable);
```

### Output

```text
string
number
string
boolean
undefined
object
```

---

## Complete Day 02 Practice Code

```javascript
let score = 60;

score = 95;

console.log(score);

const pi = 3.14159;

// pi = 3.14;
// This will throw an error because pi is a constant and cannot be reassigned.

console.log(pi);

const name = "Abishek";

let age = 25;

const country = "Nepal";

const isGraduate = true;

let noAssignedVariable;

let nullvariable = null;

console.log(typeof name);

console.log(typeof age);

console.log(typeof country);

console.log(typeof isGraduate);

console.log(typeof noAssignedVariable);

console.log(typeof nullvariable);
```

### Output

```text
95
3.14159
string
number
string
boolean
undefined
object
```

---

# Exercise 5 — Predict the Output

Before running the code, the expected output was:

```javascript
console.log(typeof "100");
console.log(typeof 100);
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null);
```

### Prediction

```text
string
number
boolean
undefined
object
```

### Actual Output

```text
string
number
boolean
undefined
object
```

The prediction was correct.

---

# Day 02 Key Code Examples

## `let`

```javascript
let age = 25;

age = 26;

console.log(age);
```

Output:

```text
26
```

---

## `const`

```javascript
const country = "Nepal";

console.log(country);
```

Output:

```text
Nepal
```

A `const` variable cannot be reassigned.

---

## `undefined`

```javascript
let value;

console.log(value);
```

Output:

```text
undefined
```

---

## `null`

```javascript
let value = null;

console.log(value);
```

Output:

```text
null
```

---

## `typeof`

```javascript
console.log(typeof "Hello");
console.log(typeof 100);
console.log(typeof true);
```

Output:

```text
string
number
boolean
```
