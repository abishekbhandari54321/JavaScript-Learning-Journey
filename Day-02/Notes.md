# JavaScript Day 02 — Notes

## 1. Variables

A variable is a named container used to store a value in a program.

For example:

```javascript
let age = 25;
```

Here:

- `age` is the variable name.
- `25` is the value.
- `let` is used to declare the variable.

We can think of a variable as a labeled box that stores a value.

```text
age
┌─────────┐
│   25    │
└─────────┘
```

---

# 2. Variable Declaration

Declaration means creating or declaring a variable.

Example:

```javascript
let age;
```

Here, the variable `age` has been declared, but no value has been assigned to it.

Its value is:

```text
undefined
```

---

# 3. Assignment

Assignment means giving a value to a variable.

Example:

```javascript
let age;

age = 25;
```

Here:

- `age` is declared first.
- `25` is assigned to `age`.

We can also declare and assign at the same time:

```javascript
let age = 25;
```

---

# 4. `let`

`let` is used when the value of a variable may need to change later.

Example:

```javascript
let score = 60;

score = 95;

console.log(score);
```

Output:

```text
95
```

The value can be reassigned because the variable was created using `let`.

---

# 5. `const`

`const` is used when a variable should not be reassigned after it is given a value.

Example:

```javascript
const pi = 3.14159;

console.log(pi);
```

Output:

```text
3.14159
```

Trying to reassign it:

```javascript
const pi = 3.14159;

pi = 3.14;
```

will cause an error.

### Simple rule

```text
Use let   → when the value may change.

Use const → when the variable should not be reassigned.
```

In modern JavaScript, `const` is often preferred by default, and `let` is used when reassignment is needed.

---

# 6. `var`

`var` is another way to declare variables in JavaScript.

Example:

```javascript
var age = 25;
```

However, `var` has older behavior related to scope and variable declarations.

Because of this, modern JavaScript code generally prefers:

```javascript
let;
```

and:

```javascript
const
```

instead of `var`.

For now, focus mainly on `let` and `const`.

---

# 7. Data Types

A data type tells us what kind of value we are working with.

Some basic JavaScript data types are:

- String
- Number
- Boolean
- Undefined
- Null
- BigInt
- Symbol

---

# 8. String

A string is text.

Strings are written inside quotes.

Examples:

```javascript
const name = "Abishek";
const country = "Nepal";
```

Both values are strings.

Another example:

```javascript
console.log("Hello World");
```

---

# 9. Number

The `number` type is used for numbers.

Examples:

```javascript
let age = 25;
let score = 95;
let price = 100.5;
```

JavaScript uses the `number` type for both whole numbers and decimal numbers.

---

# 10. Boolean

A boolean has only two possible values:

```text
true
false
```

Example:

```javascript
const isGraduate = true;
```

Another example:

```javascript
const isLoggedIn = false;
```

Booleans are commonly used when something has two states, such as yes/no or true/false.

---

# 11. Undefined

`undefined` means a variable has been declared but has not been given a value.

Example:

```javascript
let age;

console.log(age);
```

Output:

```text
undefined
```

In simple words:

```text
Declared
   ↓
No value assigned
   ↓
undefined
```

---

# 12. Null

`null` represents an intentional absence of a value.

Example:

```javascript
let value = null;
```

Here, the developer intentionally gives the variable the value `null`.

In simple words:

```text
null → intentionally no value
```

---

# 13. `undefined` vs `null`

These two values are different.

### Undefined

Usually means:

> A variable exists, but no value has been assigned to it.

Example:

```javascript
let value;

console.log(value);
```

Output:

```text
undefined
```

### Null

Usually means:

> The developer intentionally says that there is no value.

Example:

```javascript
let value = null;

console.log(value);
```

Output:

```text
null
```

### Easy way to remember

```text
undefined → No value has been assigned.

null      → No value was intentionally assigned.
```

---

# 14. `typeof`

`typeof` is an operator used to check the type of a value.

Example:

```javascript
console.log(typeof "Abishek");
```

Output:

```text
string
```

Another example:

```javascript
console.log(typeof 25);
```

Output:

```text
number
```

Another example:

```javascript
console.log(typeof true);
```

Output:

```text
boolean
```

---

# 15. Common `typeof` Results

```javascript
typeof "Hello";
```

Result:

```text
string
```

```javascript
typeof 100;
```

Result:

```text
number
```

```javascript
typeof true;
```

Result:

```text
boolean
```

```javascript
typeof undefined;
```

Result:

```text
undefined
```

---

# 16. Why Does `typeof null` Return `"object"`?

This is a famous old behavior in JavaScript.

Consider:

```javascript
console.log(typeof null);
```

Output:

```text
object
```

But `null` is actually a primitive value.

### Why?

This comes from an old implementation detail in the early version of JavaScript.

In the early JavaScript implementation, values were represented using internal type information. `null` was given a type representation that was associated with objects.

This behavior became part of JavaScript and existing programs started depending on it.

Changing it now could break old JavaScript code.

So JavaScript kept this behavior for compatibility.

### Very simple explanation

Think of it as an old mistake that became part of the language.

```text
null
  ↓
Old JavaScript behavior
  ↓
typeof null
  ↓
"object"
```

So:

```javascript
typeof null;
```

returns:

```text
"object"
```

even though `null` is a primitive value.

### Important

You do not need to memorize the historical technical details right now.

Just remember:

```text
typeof null === "object"
```

This is a known JavaScript quirk.

---

# 17. Primitive Data Types

JavaScript has several primitive data types.

The main primitive types are:

1. String
2. Number
3. BigInt
4. Boolean
5. Undefined
6. Null
7. Symbol

Examples:

```javascript
"Hello"; // String
100; // Number
100n; // BigInt
true; // Boolean
undefined; // Undefined
null; // Null
Symbol("id"); // Symbol
```

---

# 18. `let` vs `const`

### `let`

Use `let` when the variable needs to be reassigned.

```javascript
let age = 25;

age = 26;
```

This is valid.

### `const`

Use `const` when the variable should not be reassigned.

```javascript
const age = 25;
```

This is not allowed:

```javascript
age = 26;
```

if `age` was declared using `const`.

### Easy rule

```text
const → Default choice when reassignment is not needed.

let   → Use when reassignment is needed.
```

---

# 19. Declaration vs Assignment

### Declaration

Creating a variable:

```javascript
let age;
```

### Assignment

Giving the variable a value:

```javascript
age = 25;
```

### Both together

```javascript
let age = 25;
```

This performs declaration and assignment together.

---

# 20. Day 02 Quick Revision

```text
Variable
→ A named container used to store a value.
```

```text
Declaration
→ Creating a variable.
```

```text
Assignment
→ Giving a value to a variable.
```

```text
let
→ Used when the value may be reassigned.
```

```text
const
→ Used when reassignment is not needed.
```

```text
String
→ Text
```

```text
Number
→ Numbers
```

```text
Boolean
→ true or false
```

```text
undefined
→ Variable has no assigned value.
```

```text
null
→ Intentional absence of a value.
```

```text
typeof
→ Checks the type of a value.
```

---

# Important Things to Remember

1. Variables store values.
2. `let` allows reassignment.
3. `const` does not allow reassignment.
4. Modern JavaScript generally prefers `let` and `const` instead of `var`.
5. Strings contain text.
6. Numbers contain numeric values.
7. Booleans are `true` or `false`.
8. `undefined` means no value has been assigned.
9. `null` means intentional absence of a value.
10. `typeof` is used to check a value's type.
11. `typeof null` returns `"object"` because of an old JavaScript behavior.
12. JavaScript has seven primitive data types: String, Number, BigInt, Boolean, Undefined, Null, and Symbol.
