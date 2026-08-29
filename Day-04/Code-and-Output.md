# Day 4 — Conditions + Loops

## Truthy / Falsy Values

```javascript
if ("0") {
  console.log("A");
} else {
  console.log("B");
}

if ([]) {
  console.log("C");
} else {
  console.log("D");
}
```

**Output:**

```
A
C
```

---

## switch — strict comparison

```javascript
let x = "5";
switch (x) {
  case 5:
    console.log("number");
    break;
  case "5":
    console.log("string");
    break;
}
```

**Output:**

```
string
```

---

## if

```javascript
let age = 20;
if (age >= 18) {
  console.log("You are an Adult");
}
```

**Output:**

```
You are an Adult
```

---

## if...else

```javascript
let Age = 15;
if (Age >= 18) {
  console.log("You are an Adult");
} else {
  console.log("You are a Child");
}
```

**Output:**

```
You are a Child
```

---

## if...else if...else

```javascript
let marks = 75;
if (marks >= 90) {
  console.log("Outstanding");
} else if (marks >= 80) {
  console.log("A");
} else if (marks >= 70) {
  console.log("B");
} else if (marks >= 60) {
  console.log("C");
} else if (marks >= 50) {
  console.log("D");
} else {
  console.log("Fail");
}
```

**Output:**

```
B
```

---

## Nested conditions

```javascript
let AGE = 20;
let hasVoterCard = true;

if (AGE >= 18) {
  if (hasVoterCard) {
    console.log("You are eligible to vote");
  } else {
    console.log("You do not have a voter card");
  }
} else {
  console.log("You are not eligible to vote");
}
```

**Output:**

```
You are eligible to vote
```

---

## switch — day of week

```javascript
let day = 4;

switch (day) {
  case 1:
    console.log("Sunday");
    break;
  case 2:
    console.log("Monday");
    break;
  case 3:
    console.log("Tuesday");
    break;
  case 4:
    console.log("Wednesday");
    break;
  case 5:
    console.log("Thursday");
    break;
  case 6:
    console.log("Friday");
    break;
  case 7:
    console.log("Saturday");
    break;
  default:
    console.log("Invalid Input");
}
```

**Output:**

```
Wednesday
```

---

## for loop

```javascript
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
```

**Output:**

```
1
2
3
4
5
```

---

## while loop

```javascript
let j = 1;
while (j <= 5) {
  console.log(j);
  j++;
}
```

**Output:**

```
1
2
3
4
5
```

---

## do...while loop

```javascript
let k = 5;
do {
  console.log(k);
  k++;
} while (k <= 3);
```

**Output:**

```
5
```

**Note:** Runs once even though `5 <= 3` is false, because the condition is checked _after_ the code runs.

---

## break (corrected version with proper braces)

```javascript
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    break; // stops the loop completely
  }
  console.log(i);
}
```

**Output:**

```
1
2
```

---

## continue (corrected version with proper braces)

```javascript
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue; // skips only when i is 3
  }
  console.log(i);
}
```

**Output:**

```
1
2
4
5
```

---

## ⚠️ Bug found and fixed today

**Original code (bug):**

```javascript
for (i = 1; i <= 5; i++)
  if (i == 3) {
    break;
  }
console.log(i);
```

This printed only `3` — because without `{ }` around the `for` loop, `console.log(i)` was OUTSIDE the loop and only ran once, after the loop finished.

**Fix:** Always wrap loop bodies in `{ }`, even for what looks like a single statement, to avoid this kind of silent bug.
