# Day 9 — this + call/apply/bind

## this in an Object Method

```javascript
const user = {
  name: "Abishek",
  greet: function () {
    console.log("Hi, I am " + this.name);
  },
};
user.greet(); // Hi, I am Abishek
```

## Losing `this` when detaching a method

```javascript
const greetFn = user.greet;
greetFn(); // "Hi, I am undefined" — this is LOST
```

## this in Regular vs Arrow Functions

```javascript
const user2 = {
  name: "Abishek",
  regularGreet: function () {
    console.log("Regular: " + this.name);
  },
  arrowGreet: () => {
    console.log("Arrow: " + this.name);
  },
};
user2.regularGreet(); // Regular: Abishek
user2.arrowGreet(); // Arrow: undefined
```

## Arrow Functions Inside setTimeout (where they shine)

```javascript
const user3 = {
  name: "Abishek",
  delayedGreet: function () {
    setTimeout(function () {
      console.log("Regular: " + this.name); // undefined — lost this
    }, 1000);

    setTimeout(() => {
      console.log("Arrow: " + this.name); // Abishek — kept this
    }, 1000);
  },
};
user3.delayedGreet();
```

## Constructor Function this

```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
}
const person1 = new Person("Abishek", 22);
console.log(person1.name); // Abishek
console.log(person1.age); // 22
```

## call()

```javascript
function greet() {
  console.log("Hello, " + this.name);
}
const user1 = { name: "Abishek" };
const user2b = { name: "Priya" };
greet.call(user1); // Hello, Abishek
greet.call(user2b); // Hello, Priya
```

## apply()

```javascript
function greet2(greeting, punctuation) {
  console.log(greeting + ", " + this.name + punctuation);
}
greet2.apply(user1, ["Good morning", "!"]); // Good morning, Abishek!
```

## bind()

```javascript
const boundGreet = user.greet.bind(user);
boundGreet(); // Hi, I am Abishek — fixed the lost-this bug
```

---

## Task 1 — Detached method loses this

```javascript
const car = {
  brand: "Toyota",
  getBrand: function () {
    console.log(this.brand);
  },
};
const fn = car.getBrand;
fn();
```

**Output:**

```
undefined
```

## Task 2 — Arrow function correctly keeps this

```javascript
const car2 = {
  brand: "Toyota",
  showBrand: function () {
    setTimeout(() => {
      console.log(this.brand);
    }, 1000);
  },
};
car2.showBrand();
```

**Output:**

```
Toyota
```

## Task 3 — call() with two objects

```javascript
function introduce() {
  console.log("I am " + this.name + ", age " + this.age);
}
const personA = { name: "David", age: 26 };
const personB = { name: "Steve", age: 20 };
introduce.call(personA);
introduce.call(personB);
```

**Output:**

```
I am David, age 26
I am Steve, age 20
```

## Task 4 — bind() with two objects

```javascript
const userIntroduce1 = introduce.bind(personA);
userIntroduce1();
const userIntroduce2 = introduce.bind(personB);
userIntroduce2();
```

**Output:**

```
I am David, age 26
I am Steve, age 20
```

## Task 5 — Constructor + method

```javascript
function Animal(name) {
  this.name = name;
  this.speak = function () {
    console.log(this.name + " makes a sound.");
  };
}
const dog = new Animal("Dog");
dog.speak();
```

**Output:**

```
Dog makes a sound.
```

---

## Practical Project — Multi-User Profile System with this Context

```javascript
const employee = {
  name: "Ram",
  department: "Technical-Department",
  showDetails: function () {
    console.log(this.name + " works in " + this.department);
  },
  delayedDetails: function () {
    setTimeout(() => {
      console.log("(Arrow Function inside delayedDetails):");
      console.log(this.name + " works in " + this.department);
    }, 1000);
  },
  delayedDetailsRegular: function () {
    setTimeout(function () {
      console.log("(Regular Function inside delayedDetails):");
      console.log(this.name + " works in " + this.department);
    }, 1000);
  },
};

employee.delayedDetails();
employee.delayedDetailsRegular();

employee.showDetails();
const showDetail = employee.showDetails;
showDetail();

// Fixing lost this with bind()
const fixedshowDetail = showDetail.bind(employee);
fixedshowDetail();

// call/apply on a shared function
function promote(newTitle, raiseAmount) {
  console.log(
    this.name + " promoted to " + newTitle + " with a raise of " + raiseAmount,
  );
}
const managerA = { name: "Shyam" };
const managerB = { name: "Hari" };

promote.call(managerA, "Senior-Manager", 10000);
promote.call(managerB, "Supervisor", 5000);
promote.apply(managerA, ["Director", 15000]);
promote.apply(managerB, ["CEO", 20000]);

// Constructor
function Employee(name, role) {
  this.name = name;
  this.role = role;
  this.introduce = function () {
    console.log(this.name + " works as a " + this.role);
  };
}
const employ1 = new Employee("Ashutosh", "Programmer");
const employ2 = new Employee("Shashank", "Project-Head");
employ1.introduce();
employ2.introduce();
```

**Output:**

```
Ram works in Technical-Department
undefined works in undefined
(bind() fixed):
Ram works in Technical-Department
(call/apply on a shared function):
Shyam promoted to Senior-Manager with a raise of 10000
Hari promoted to Supervisor with a raise of 5000
Shyam promoted to Director with a raise of 15000
Hari promoted to CEO with a raise of 20000
Constructor:
Ashutosh works as a Programmer
Shashank works as a Project-Head
(Arrow Function inside delayedDetails):
Ram works in Technical-Department
(Regular Function inside delayedDetails):
undefined works in undefined
```

---

## Test Q5 — regular vs arrow this

```javascript
const obj = {
  name: "Test",
  regular: function () {
    console.log(this.name);
  },
  arrow: () => {
    console.log(this.name);
  },
};
obj.regular(); // Test
obj.arrow(); // undefined
```

## Test Q6 — bind() return value vs console.log side effect

```javascript
function sayName() {
  console.log(this.name);
}
const person = { name: "Kiran" };
const boundFn = sayName.bind(person);
const result = boundFn();
console.log(result);
```

**Output:**

```
Kiran
undefined
```

**Why:** `sayName` prints `"Kiran"` via `console.log`, but has no `return` statement, so it gives back `undefined` by default. `result` captures that `undefined`, not the printed value.
