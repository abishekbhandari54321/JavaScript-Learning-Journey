# JavaScript Day 02 — Homework & Knowledge Check

## Q1. What is a variable?

### Answer

A variable is a named container used to store a value in a program.

Example:

```javascript
let age = 25;
```

Here, `age` is the variable and `25` is its value.

---

## Q2. What is the difference between declaration and assignment?

### Answer

**Declaration** means creating a variable.

```javascript
let age;
```

**Assignment** means giving a value to a variable.

```javascript
age = 25;
```

They can also be done together:

```javascript
let age = 25;
```

---

## Q3. When should you use `let`?

### Answer

Use `let` when the value of a variable needs to be reassigned later.

Example:

```javascript
let score = 60;

score = 95;
```

---

## Q4. When should you use `const`?

### Answer

Use `const` when the variable should not be reassigned after it is given a value.

Example:

```javascript
const pi = 3.14159;
```

In modern JavaScript, `const` is usually the default choice when reassignment is not needed.

---

## Q5. Why is `var` generally avoided in modern JavaScript?

### Answer

`var` is an older way to declare variables.

It has some confusing behavior, especially with scope and variable declarations.

Modern JavaScript usually uses `let` and `const` instead because they provide clearer and safer behavior.

---

## Q6. What is the difference between `undefined` and `null`?

### Answer

`undefined` usually means that a variable has been declared but has not been given a value.

Example:

```javascript
let age;

console.log(age);
```

Output:

```text
undefined
```

`null` means that the developer intentionally gives the variable no value.

Example:

```javascript
let age = null;
```

Easy way to remember:

```text
undefined → No value has been assigned.

null      → No value was intentionally assigned.
```

---

## Q7. What are JavaScript primitive data types?

### Answer

JavaScript has seven primitive data types:

1. String
2. Number
3. BigInt
4. Boolean
5. Undefined
6. Null
7. Symbol

---

## Q8. What does `typeof` do?

### Answer

`typeof` is an operator used to check the type of a value.

Example:

```javascript
console.log(typeof "Hello");
```

Output:

```text
string
```

---

## Q9. Why does `typeof null` return `"object"` even though `null` is a primitive?

### Answer

This is because of an old behavior in JavaScript.

In the early implementation of JavaScript, `null` was treated in a way that made `typeof null` return `"object"`.

This behavior became part of JavaScript, and changing it could break existing code.

So JavaScript kept it for compatibility.

The important thing to remember is:

```javascript
typeof null;
```

returns:

```text
"object"
```

even though `null` is a primitive value.

---

## Q10. What is the difference between these?

```javascript
const age = 25;
```

and:

```javascript
let age = 25;
```

### Answer

With `const`, the variable cannot be reassigned.

```javascript
const age = 25;

// age = 26; ❌ Not allowed
```

With `let`, the variable can be reassigned.

```javascript
let age = 25;

age = 26; // Allowed
```

Easy way to remember:

```text
const → Cannot be reassigned.

let   → Can be reassigned.
```

---

# Day 02 Final Revision

### Variables

```text
Variable → Named container used to store a value.
```

### Declaration and Assignment

```text
Declaration → Create a variable.

Assignment  → Give a value to a variable.
```

### `let` and `const`

```text
let   → Use when reassignment is needed.

const → Use when reassignment is not needed.
```

### Basic Data Types

```text
String
Number
Boolean
Undefined
Null
BigInt
Symbol
```

### `typeof`

```text
typeof → Checks the type of a value.
```

### Important JavaScript Quirk

```text
typeof null
→ "object"
```

This happens because of an old JavaScript behavior.
