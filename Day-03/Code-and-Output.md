# JavaScript Day 03 — Code and Output

## Topics Covered

- Arithmetic Operators
- Comparison Operators
- Type Coercion
- Type Conversion
- Ternary Operator
- Template Literals

---

# Exercise 1 — Arithmetic Operators

### Code

```javascript
console.log(10 + 5);
console.log(10 - 5);
console.log(10 * 5);
console.log(10 / 5);
console.log(10 % 3);
console.log(2 ** 3);
```

### Output

```text
15
5
50
2
1
8
```

### Operators Used

```text
+  → Addition
-  → Subtraction
*  → Multiplication
/  → Division
%  → Remainder
** → Exponentiation
```

---

# Exercise 1 — Arithmetic with Variables

### Code

```javascript
const a = 20;
const b = 6;

const addition = a + b;
const subtraction = a - b;
const multiplication = a * b;
const division = a / b;
const remainder = a % b;

console.log("Addition:", addition);
console.log("Subtraction:", subtraction);
console.log("Multiplication:", multiplication);
console.log("Division:", division);
console.log("Remainder:", remainder);
```

### Output

```text
Addition: 26
Subtraction: 14
Multiplication: 120
Division: 3.3333333333333335
Remainder: 2
```

---

# Exercise 2 — Comparison Operators

### Code

```javascript
console.log(10 > 5);
console.log(10 < 5);
console.log(10 >= 10);
console.log(10 <= 9);
console.log(10 == "10");
console.log(10 === "10");
console.log(10 != "10");
console.log(10 !== "10");
```

### Output

```text
true
false
true
false
true
false
false
true
```

### Operators Used

```text
>   → Greater than
<   → Less than
>=  → Greater than or equal to
<=  → Less than or equal to
==  → Loose equality
=== → Strict equality
!=  → Loose inequality
!== → Strict inequality
```

---

# Exercise 3 — Type Coercion

### Code

```javascript
console.log("10" + 5);
console.log("10" - 5);
console.log("10" * 2);
console.log("10" / 2);
console.log(10 + "5");
```

### Output

```text
105
5
20
5
105
```

### What happened?

JavaScript automatically converts values in some operations.

For example:

```javascript
console.log("10" - 5);
```

The string `"10"` is automatically converted to the number `10`.

So:

```text
10 - 5 = 5
```

But with `+`:

```javascript
console.log("10" + 5);
```

JavaScript treats the operation as string concatenation.

So:

```text
"10" + 5 → "105"
```

---

# Exercise 4 — Type Conversion

## Convert String to Number

### Code

```javascript
const x = "100";

const number = Number(x);

console.log(number);
```

### Output

```text
100
```

`Number()` converts a value into a number.

---

## Convert Number to String

### Code

```javascript
const y = 100;

const stringValue = String(y);

console.log(stringValue);
```

### Output

```text
100
```

`String()` converts a value into a string.

---

## Convert Number to Boolean

### Code

```javascript
const z = 1;

const booleanToString = Boolean(z);

console.log(booleanToString);
```

### Output

```text
true
```

`Boolean()` converts a value into a boolean.

---

## Convert `0` to Boolean

### Code

```javascript
const w = 0;

const booleanValue = Boolean(w);

console.log(booleanValue);
```

### Output

```text
false
```

---

# Exercise 5 — Ternary Operator

### Code

```javascript
const age = 20;

const isAdult = age >= 18 ? "Adult" : "Minor";

console.log(isAdult);
```

### Output

```text
Adult
```

The condition:

```text
age >= 18
```

is true, so `"Adult"` is selected.

---

# Exercise 6 — Template Literal

### Code

```javascript
const name_of_person = "Abishek";
const age_of_person = 25;
const profession = "Full-Stack Developer";

console.log(
  `My name is ${name_of_person}, I am ${age_of_person} years old and I want to become a ${profession}.`,
);
```

### Output

```text
My name is Abishek, I am 25 years old and I want to become a Full-Stack Developer.
```

Template literals use backticks:

```text
`
```

They allow us to insert variables into a string using:

```text
${variable}
```

---

# Complete Day 03 Practice Code

```javascript
// JavaScript Day 3
// Operators, Type Conversion and Type Coercion

console.log("................Exercise 1...............");

console.log(10 + 5);
console.log(10 - 5);
console.log(10 * 5);
console.log(10 / 5);
console.log(10 % 3);
console.log(2 ** 3);

// Exercise 1 — Arithmetic

const a = 20;
const b = 6;

const addition = a + b;
const subtraction = a - b;
const multiplication = a * b;
const division = a / b;
const remainder = a % b;

console.log("Addition:", addition);
console.log("Subtraction:", subtraction);
console.log("Multiplication:", multiplication);
console.log("Division:", division);
console.log("Remainder:", remainder);

console.log("................Exercise 2..............");

// Exercise 2 — Comparison

console.log(10 > 5);
console.log(10 < 5);
console.log(10 >= 10);
console.log(10 <= 9);
console.log(10 == "10");
console.log(10 === "10");
console.log(10 != "10");
console.log(10 !== "10");

console.log("..............Exercise 3..............");

// Exercise 3 — Type Coercion

console.log("10" + 5);
console.log("10" - 5);
console.log("10" * 2);
console.log("10" / 2);
console.log(10 + "5");

console.log(".............Exercise 4.............");

// Exercise 4 — Type Conversion

const x = "100";
const number = Number(x);

console.log(number);

const y = 100;
const stringValue = String(y);

console.log(stringValue);

const z = 1;
const booleanToString = Boolean(z);

console.log(booleanToString);

const w = 0;
const booleanValue = Boolean(w);

console.log(booleanValue);

console.log("..............Exercise 5.............");

// Exercise 5 — Ternary

const age = 20;
const isAdult = age >= 18 ? "Adult" : "Minor";

console.log(isAdult);

console.log("..............Exercise 6 ..............");

// Exercise 6 — Template Literal

const name_of_person = "Abishek";
const age_of_person = 25;
const profession = "Full-Stack Developer";

console.log(
  `My name is ${name_of_person}, I am ${age_of_person} years old and I want to become a ${profession}.`,
);
```

---

# Complete Day 03 Output

```text
................Exercise 1...............
15
5
50
2
1
8
Addition: 26
Subtraction: 14
Multiplication: 120
Division: 3.3333333333333335
Remainder: 2
................Exercise 2..............
true
false
true
false
true
false
false
true
..............Exercise 3..............
105
5
20
5
105
.............Exercise 4.............
100
100
true
false
..............Exercise 5.............
Adult
..............Exercise 6 ..............
My name is Abishek, I am 25 years old and I want to become a Full-Stack Developer.
```
