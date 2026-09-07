# Day 6 — Arrays + Objects

## Array Basics + Indexing

```javascript
const fruits = ["apple", "banana", "mango"];
console.log(fruits);
console.log(fruits[0]); // apple
console.log(fruits[1]); // banana
console.log(fruits[2]); // mango
```

**Output:**

```
[ 'apple', 'banana', 'mango' ]
apple
banana
mango
```

---

## push / pop / unshift / shift

```javascript
fruits.push("orange");
console.log(fruits); // add to end

fruits.pop();
console.log(fruits); // remove from end

fruits.unshift("Pineapple");
console.log(fruits); // add to beginning

fruits.shift();
console.log(fruits); // remove from beginning
```

**Output:**

```
[ 'apple', 'banana', 'mango', 'orange' ]
[ 'apple', 'banana', 'mango' ]
[ 'Pineapple', 'apple', 'banana', 'mango' ]
[ 'apple', 'banana', 'mango' ]
```

---

## slice() vs splice()

```javascript
// slice — does NOT change original
const arr1 = [1, 2, 3, 4, 5];
const sliced = arr1.slice(2, 4);
console.log(sliced); // [ 3, 4 ]
console.log(arr1); // [ 1, 2, 3, 4, 5 ] unchanged

// splice — CHANGES original
const arr2 = [1, 2, 3, 4, 5];
const spliced = arr2.splice(1, 3);
console.log(spliced); // [ 2, 3, 4 ] removed items
console.log(arr2); // [ 1, 5 ] original changed

// splice — insert without removing
const nums2 = [10, 20, 30];
nums2.splice(1, 0, 99);
console.log(nums2); // [ 10, 99, 20, 30 ]
```

---

## Searching Arrays

```javascript
const arr3 = ["Cricket", "Football", "Basketball"];
console.log(arr3.includes("Football")); // true
console.log(arr3.includes("Volleyball")); // false
console.log(arr3.indexOf("Basketball")); // 2
console.log(arr3.indexOf("Baseball")); // -1

const num = [10, 20, 30, 40, 50, 60, 70];
console.log(num.find((num) => num > 30)); // 40
console.log(num.findIndex((num) => num > 50)); // 5
console.log(num.some((num) => num > 25)); // true
console.log(num.every((num) => num > 0)); // true
console.log(num.every((num) => num > 20)); // false
```

---

## map(), filter(), reduce()

```javascript
const number = [10, 20, 30, 40, 50, 60];
const doubled = number.map((num) => num * 2);
console.log(doubled); // [ 20, 40, 60, 80, 100, 120 ]
console.log(number); // original unchanged

const numbers = [1, 2, 3, 4, 5];
const filtered = numbers.filter((num) => num % 2 === 0);
console.log(filtered); // [ 2, 4 ]

const prices = [100, 200, 300, 400, 500];
const total = prices.reduce((sum, price) => sum + price, 0);
console.log(total); // 1500
```

---

## Practice Tasks 1–4

```javascript
// Task 1 — square each number
const array1 = [1, 2, 3, 4, 5];
const squaredArray = array1.map((num) => num * num);
console.log(squaredArray); // [ 1, 4, 9, 16, 25 ]

// reduce — sum
const reduceArray = array1.reduce((sum, num) => sum + num, 0);
console.log(reduceArray); // 15

// Task 2 — filter squared numbers > 20
const filterArray = squaredArray.filter((num) => num > 20);
console.log(filterArray); // [ 25 ]

// Task 4 — filter with no matches
const numbers = [1, 2, 3, 4, 5];
const result = numbers.filter((num) => num > 10);
console.log(result); // []
console.log(result.length); // 0
```

---

## Objects — Basics, Methods, Nested

```javascript
const car = {
  brand: "Rolls Royce",
  model: "Phantom",
  year: 2021,
  isElectric: false,

  startingEngine: function () {
    console.log(`${this.brand} ${this.model} is starting...`);
  },
};
car.startingEngine(); // Rolls Royce Phantom is starting...

console.log(car.brand); // Rolls Royce
console.log(car.model); // Phantom

const student = {
  name: "Shyam",
  age: 16,
  address: {
    city: "Gokul",
    country: "Bharat",
  },
};
console.log(student.address.city); // Gokul

const book = { title: "JavaScript Basics", pages: 300 };
console.log(book.author); // undefined (property doesn't exist)
```

---

## Destructuring, Spread, Rest, Object.entries()

```javascript
// Object destructuring
const product = { name: "Phone", price: 500, brand: "Samsung" };
const { name, price } = product;
console.log(name); // Phone
console.log(price); // 500

// Spread — copy + override
const updatedProduct = { ...product, price: 450 };
console.log(updatedProduct); // { name: 'Phone', price: 450, brand: 'Samsung' }
console.log(product); // original unchanged

// Rest — collect args, correct multiplication identity value (1, not 0)
function multiplyAll(...nums) {
  return nums.reduce((total, num) => total * num, 1);
}
console.log(multiplyAll(1, 2, 3)); // 6
console.log(multiplyAll(1, 2, 3, 4, 5)); // 120

// Object.entries()
console.log(Object.entries(product));
// [ ['name','Phone'], ['price',500], ['brand','Samsung'] ]
```

---

## ⚠️ Bugs found and fixed today

1. **Missing `const`/`let`** — `updatedProduct = {...}` without a keyword created an implicit global variable. Fixed by adding `const`.
2. **Wrong `reduce()` starting value for multiplication** — used `0` as the starting value in `multiplyAll`, which made every result `0` (anything × 0 = 0). Fixed by using `1` (the identity value for multiplication).
3. **Task label mismatch** — a task labeled "square the numbers" actually doubled them (`* 2` instead of `* num`) in one practice file. Logic was correct for what was written, just mislabeled.

---

## Practical Project — Student Management System

```javascript
const students = [
  { name: "Abishek", age: 22, marks: 85 },
  { name: "Priya", age: 21, marks: 35 },
  { name: "Rahul", age: 23, marks: 92 },
  { name: "Sita", age: 20, marks: 60 },
  { name: "Karan", age: 22, marks: 45 },
];

function getGrade(marks) {
  if (marks >= 90) return "Outstanding";
  else if (marks >= 75) return "A";
  else if (marks >= 60) return "B";
  else if (marks >= 40) return "C";
  else return "Fail";
}

const studentsWithGrades = students.map((student) => {
  return { ...student, grade: getGrade(student.marks) };
});

const passingStudents = studentsWithGrades.filter((student) => {
  return student.marks >= 40;
});

const totalMarks = students.reduce((sum, student) => {
  return sum + student.marks;
}, 0);
const averageMarks = totalMarks / students.length;

const newStudent = { name: "Shyam", age: 20, marks: 80 };
const updatedStudents = [...students, newStudent];

console.log("=== Class Report ===");
studentsWithGrades.forEach((student) => {
  const { name, age, marks, grade } = student;
  console.log(`${name} (Age ${age}) - Marks: ${marks} - Grade: ${grade}`);
});

console.log("Average Marks:", averageMarks);
console.log("Passing Students:", passingStudents.length);
console.log("Original student count:", students.length);
console.log("Updated student count:", updatedStudents.length);
```

**Output:**

```
=== Class Report ===
Abishek (Age 22) - Marks: 85 - Grade: A
Priya (Age 21) - Marks: 35 - Grade: Fail
Rahul (Age 23) - Marks: 92 - Grade: Outstanding
Sita (Age 20) - Marks: 60 - Grade: B
Karan (Age 22) - Marks: 45 - Grade: C
Average Marks: 63.4
Passing Students: 4
Original student count: 5
Updated student count: 6
```

**Key lesson from this project:** `studentsWithGrades` was created BEFORE `newStudent` (Shyam) was added, so Shyam does not appear in the class report — `map()` takes a snapshot of the data at the moment it runs, it doesn't stay "live" or auto-update when the source array changes later. This connects directly to how React re-renders — when data changes, you must re-process it, not expect old derived data to update itself.
