# JavaScript Day 03 — Homework & Knowledge Check

## Q1. What is an operator?

### Answer

An operator is a symbol that is used to perform an operation on values.

Example:

```javascript
10 + 5;
```

Here, `+` is the operator, and `10` and `5` are the operands.

---

## Q2. What does `%` do?

### Answer

The `%` operator returns the remainder after division.

Example:

```javascript
7 % 2;
```

Output:

```text
1
```

---

## Q3. What is the difference between `==` and `===`?

### Answer

`==` is called loose equality. It compares values and can perform type conversion when needed.

`===` is called strict equality. It compares both the value and the type without performing automatic type conversion.

Example:

```javascript
5 == "5"; // true
5 === "5"; // false
```

---

## Q4. Which one should you generally prefer in modern JavaScript: `==` or `===`? Why?

### Answer

We should generally prefer `===`.

It checks both the value and the type, so it avoids unexpected type conversions and makes the code easier to understand.

---

## Q5. What does `&&` mean?

### Answer

`&&` means **AND**.

It returns `true` when all the conditions are true.

Example:

```javascript
5 > 2 && 10 > 5;
```

Both conditions are true, so the result is:

```text
true
```

---

## Q6. What does `||` mean?

### Answer

`||` means **OR**.

It returns `true` when at least one condition is true.

Example:

```javascript
5 > 2 || 10 < 5;
```

The first condition is true, so the result is:

```text
true
```

---

## Q7. What does `!` do?

### Answer

`!` means **NOT**.

It reverses a boolean value.

Example:

```javascript
!true;
```

Output:

```text
false
```

And:

```javascript
!false;
```

Output:

```text
true
```

---

## Q8. What is the ternary operator?

### Answer

The ternary operator is a short way to write a simple `if...else` condition.

Its syntax is:

```javascript
condition ? valueIfTrue : valueIfFalse;
```

Example:

```javascript
const age = 20;

const result = age >= 18 ? "Adult" : "Minor";
```

The result is:

```text
Adult
```

---

## Q9. What is type conversion?

### Answer

Type conversion is the intentional conversion of a value from one data type to another.

The developer controls the conversion.

Example:

```javascript
Number("100");
```

This converts the string `"100"` into the number `100`.

---

## Q10. What is type coercion?

### Answer

Type coercion happens when JavaScript automatically converts a value from one data type to another during an operation.

Example:

```javascript
"10" - 5;
```

JavaScript automatically converts `"10"` into the number `10`.

The result is:

```text
5
```

---

## Q11. What is the difference between type conversion and type coercion?

### Answer

**Type conversion** is intentional and is done by the developer.

**Type coercion** happens automatically and is done by JavaScript.

Easy way to remember:

```text
Type Conversion → We do it.

Type Coercion   → JavaScript does it.
```

---

## Q12. What are truthy and falsy values?

### Answer

Truthy and falsy describe how JavaScript treats values when it expects a boolean.

A **truthy value** is treated as `true`.

A **falsy value** is treated as `false`.

Common falsy values include:

```text
false
0
""
null
undefined
NaN
```

For example:

```javascript
Boolean(1);
```

returns:

```text
true
```

And:

```javascript
Boolean(0);
```

returns:

```text
false
```

---

## Q13. What is the output?

```javascript
console.log("5" + 2);
```

### Answer

Output:

```text
52
```

### Why?

The `+` operator can be used for string concatenation.

Because one value is a string, JavaScript treats `2` as a string for this operation.

So:

```text
"5" + 2
↓
"5" + "2"
↓
"52"
```

---

## Q14. What is the output?

```javascript
console.log("5" - 2);
```

### Answer

Output:

```text
3
```

### Why?

The `-` operator performs subtraction.

JavaScript automatically converts the string `"5"` into the number `5`.

So:

```text
"5" - 2
↓
5 - 2
↓
3
```

This is an example of type coercion.

---

## Q15. What is the output?

```javascript
console.log(5 == "5");
console.log(5 === "5");
```

### Answer

Output:

```text
true
false
```

### Why?

`==` is loose equality. It allows JavaScript to perform type conversion, so `5` and `"5"` are treated as equal.

`===` is strict equality. It checks both the value and the type.

```text
5   → number
"5" → string
```

Because their types are different:

```javascript
5 === "5";
```

returns:

```text
false
```

---

# Day 03 Final Revision

```text
Arithmetic Operators
+   → Addition
-   → Subtraction
*   → Multiplication
/   → Division
%   → Remainder
**  → Exponentiation
```

```text
Comparison Operators
>   → Greater than
<   → Less than
>=  → Greater than or equal to
<=  → Less than or equal to
==  → Loose equality
=== → Strict equality
!=  → Loose inequality
!== → Strict inequality
```

```text
Logical Operators
&& → AND
|| → OR
!  → NOT
```

```text
Type Conversion
→ Intentional conversion by the developer.
```

```text
Type Coercion
→ Automatic conversion by JavaScript.
```

```text
Ternary
→ Short form of a simple if...else condition.
```

```text
Template Literal
→ Uses backticks and ${} to insert values.
```

```text
Truthy
→ Treated as true.

Falsy
→ Treated as false.
```
