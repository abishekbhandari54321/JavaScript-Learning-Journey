# JavaScript Day 03 — Notes

## Topics Covered

1. Operators
2. Arithmetic Operators
3. Comparison Operators
4. Equality Operators
5. Logical Operators
6. Type Conversion
7. Type Coercion
8. Ternary Operator
9. Template Literals
10. Truthy and Falsy Values

---

# 1. What is an Operator?

An operator is a symbol that performs an operation on values.

The values used by an operator are called **operands**.

Example:

```javascript
10 + 5;
```

Here:

```text
10 and 5 → operands
+        → operator
```

---

# 2. Arithmetic Operators

Arithmetic operators are used to perform mathematical operations.

| Operator | Meaning        | Example  | Result |
| -------- | -------------- | -------- | ------ |
| `+`      | Addition       | `10 + 5` | `15`   |
| `-`      | Subtraction    | `10 - 5` | `5`    |
| `*`      | Multiplication | `10 * 5` | `50`   |
| `/`      | Division       | `10 / 5` | `2`    |
| `%`      | Remainder      | `10 % 3` | `1`    |
| `**`     | Exponentiation | `2 ** 3` | `8`    |

---

# 3. Remainder Operator `%`

The `%` operator gives us the remainder after division.

Example:

```javascript
7 % 2;
```

Output:

```text
1
```

Because:

```text
7 ÷ 2 = 3 remainder 1
```

Another example:

```javascript
10 % 3;
```

Output:

```text
1
```

---

# 4. Comparison Operators

Comparison operators compare two values.

They return either:

```text
true
```

or:

```text
false
```

Examples:

```javascript
10 > 5;
```

Result:

```text
true
```

```javascript
10 < 5;
```

Result:

```text
false
```

---

# 5. Common Comparison Operators

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

# 6. `==` vs `===`

These two operators are very important.

## `==` — Loose Equality

`==` compares values after allowing JavaScript to perform type conversion when needed.

Example:

```javascript
5 == "5";
```

Result:

```text
true
```

The number `5` and string `"5"` are treated as equal after type conversion.

---

## `===` — Strict Equality

`===` compares both the value and the type.

Example:

```javascript
5 === "5";
```

Result:

```text
false
```

Why?

```text
5   → number
"5" → string
```

The values look similar, but their types are different.

---

# 7. Which Should We Prefer?

In modern JavaScript, we generally prefer:

```javascript
===
```

instead of:

```javascript
==
```

because strict equality avoids many unexpected type conversions.

### Easy rule

```text
==  → Loose equality → allows type conversion

=== → Strict equality → checks value and type
```

---

# 8. Logical Operators

Logical operators are used to combine or change conditions.

The three common logical operators are:

```text
&& → AND
|| → OR
!  → NOT
```

---

# 9. AND Operator `&&`

`&&` means **AND**.

It returns `true` when all conditions are true.

Example:

```javascript
10 > 5 && 8 > 3;
```

Both conditions are true, so the result is:

```text
true
```

If even one condition is false, the result is false.

Example:

```javascript
10 > 5 && 8 < 3;
```

Result:

```text
false
```

---

# 10. OR Operator `||`

`||` means **OR**.

It returns `true` when at least one condition is true.

Example:

```javascript
10 > 5 || 8 < 3;
```

The first condition is true, so the result is:

```text
true
```

Both conditions must be false for the result to be false.

---

# 11. NOT Operator `!`

`!` means **NOT**.

It reverses a boolean value.

Example:

```javascript
!true;
```

Result:

```text
false
```

And:

```javascript
!false;
```

Result:

```text
true
```

Easy way to remember:

```text
true  → ! → false
false → ! → true
```

---

# 12. Type Conversion

Type conversion means intentionally changing a value from one data type to another.

The programmer controls the conversion.

Common conversion functions include:

```text
Number()
String()
Boolean()
```

---

## String to Number

```javascript
const value = "100";

const number = Number(value);
```

Now:

```text
"100" → 100
```

---

## Number to String

```javascript
const value = 100;

const text = String(value);
```

Now:

```text
100 → "100"
```

---

## Value to Boolean

```javascript
Boolean(1);
```

Result:

```text
true
```

And:

```javascript
Boolean(0);
```

Result:

```text
false
```

---

# 13. Type Coercion

Type coercion happens when JavaScript automatically converts a value from one type to another during an operation.

The conversion is done automatically by JavaScript.

Example:

```javascript
console.log("10" - 5);
```

JavaScript automatically converts:

```text
"10" → 10
```

So:

```text
10 - 5 = 5
```

Output:

```text
5
```

---

# 14. Type Conversion vs Type Coercion

| Type Conversion         | Type Coercion          |
| ----------------------- | ---------------------- |
| Done intentionally      | Happens automatically  |
| Developer controls it   | JavaScript performs it |
| Example: `Number("10")` | Example: `"10" - 5`    |

Easy way to remember:

```text
Conversion → We do it.

Coercion → JavaScript does it.
```

---

# 15. String + Number

The `+` operator behaves differently when one value is a string.

Example:

```javascript
console.log("5" + 2);
```

Output:

```text
52
```

JavaScript combines the values as strings.

```text
"5" + 2
 ↓
"5" + "2"
 ↓
"52"
```

---

# 16. String - Number

The `-` operator performs subtraction.

Example:

```javascript
console.log("5" - 2);
```

Output:

```text
3
```

JavaScript converts `"5"` into the number `5`.

```text
"5" - 2
 ↓
5 - 2
 ↓
3
```

---

# 17. Other Arithmetic Operations with Strings

JavaScript can also convert numeric strings when using some arithmetic operators.

Example:

```javascript
"10" * 2;
```

Result:

```text
20
```

And:

```javascript
"10" / 2;
```

Result:

```text
5
```

---

# 18. Ternary Operator

The ternary operator is a short way to write a simple `if...else` condition.

Syntax:

```javascript
condition ? valueIfTrue : valueIfFalse;
```

Example:

```javascript
const age = 20;

const result = age >= 18 ? "Adult" : "Minor";
```

Because `age >= 18` is true:

```text
result → "Adult"
```

### Easy way to understand

```text
condition
    ↓
true ? "Adult" : "Minor"
     ↓
   Adult
```

Use the ternary operator for simple conditions.

---

# 19. Template Literals

Template literals allow us to create strings using backticks.

Backticks are:

```text
`
```

Example:

```javascript
const name = "Abishek";

console.log(`Hello ${name}`);
```

Output:

```text
Hello Abishek
```

---

# 20. `${}` in Template Literals

We can insert variables inside a template literal using:

```text
${variable}
```

Example:

```javascript
const name = "Abishek";
const age = 25;

console.log(`My name is ${name} and I am ${age} years old.`);
```

Output:

```text
My name is Abishek and I am 25 years old.
```

---

# 21. Truthy and Falsy Values

JavaScript treats some values as `true` and some values as `false` when they are used in a condition.

These are called **truthy** and **falsy** values.

## Common Falsy Values

The main falsy values are:

```text
false
0
-0
0n
""
null
undefined
NaN
```

Everything else is generally truthy.

For example:

```javascript
Boolean(1);
```

Result:

```text
true
```

And:

```javascript
Boolean(0);
```

Result:

```text
false
```

### Important

Truthy and falsy do **not** mean that a value is "good" or "bad."

They describe how JavaScript treats a value when it expects a boolean.

---

# 22. Day 03 Quick Revision

```text
Operator
→ Symbol used to perform an operation.
```

```text
%
→ Returns the remainder.
```

```text
==
→ Loose equality.

===
→ Strict equality.
```

```text
&& → AND
|| → OR
!  → NOT
```

```text
Type Conversion
→ Intentional conversion done by the developer.
```

```text
Type Coercion
→ Automatic conversion performed by JavaScript.
```

```text
Ternary
→ Short form of a simple if...else condition.
```

```text
Template Literal
→ String written with backticks and supports ${}.
```

```text
Truthy
→ Treated as true in a boolean context.

Falsy
→ Treated as false in a boolean context.
```

---

# Important Things to Remember

1. Operators perform operations on values.
2. `%` gives the remainder.
3. `==` allows type conversion.
4. `===` checks both value and type.
5. Prefer `===` in modern JavaScript.
6. `&&` means AND.
7. `||` means OR.
8. `!` means NOT.
9. Type conversion is intentional.
10. Type coercion is automatic.
11. `Number()` converts a value to a number.
12. `String()` converts a value to a string.
13. `Boolean()` converts a value to a boolean.
14. The ternary operator is useful for simple `if...else` conditions.
15. Template literals use backticks.
16. `${}` is used to insert values into template literals.
17. Truthy and falsy values are important when working with conditions.
