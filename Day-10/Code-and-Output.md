# Day 10 — Prototypes + Classes

## Objects and the Built-in Prototype

```javascript
const person = { name: "Abishek" };
console.log(person.toString()); // "[object Object]" — inherited from Object.prototype
```

## Prototypes — Manual Example

```javascript
function Person(name) {
  this.name = name;
}
Person.prototype.greet = function () {
  console.log("Hi, I am " + this.name);
};

const person1 = new Person("Abishek");
const person2 = new Person("Priya");
person1.greet(); // Hi, I am Abishek
person2.greet(); // Hi, I am Priya
```

## Prototype Chain

```javascript
console.log(person1.name); // found directly on person1
person1.greet(); // found on Person.prototype
console.log(person1.toString()); // found on Object.prototype
```

## hasOwnProperty()

```javascript
console.log(person1.hasOwnProperty("name")); // true
console.log(person1.hasOwnProperty("greet")); // false — inherited
```

## Classes — Basic

```javascript
class Employee {
  constructor(name, role) {
    this.name = name;
    this.role = role;
  }
  introduce() {
    console.log(this.name + " works as a " + this.role);
  }
}
const employ1 = new Employee("Ashutosh", "Programmer");
employ1.introduce(); // Ashutosh works as a Programmer
console.log(employ1.hasOwnProperty("introduce")); // false — lives on the prototype
```

## Inheritance — extends + super

```javascript
class Manager extends Employee {
  constructor(name, role, teamSize) {
    super(name, role);
    this.teamSize = teamSize;
  }
  introduce() {
    super.introduce();
    console.log("They manage a team of " + this.teamSize + " people.");
  }
}
const manager1 = new Manager("Sita", "Engineering Manager", 8);
manager1.introduce();
```

**Output:**

```
Sita works as a Engineering Manager
They manage a team of 8 people.
```

## Getters and Setters

```javascript
class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  get area() {
    return Math.PI * this.radius * this.radius;
  }
  set radius(value) {
    if (value <= 0) console.log("Radius must be positive");
    else this._radius = value;
  }
  get radius() {
    return this._radius;
  }
}
const circle1 = new Circle(5);
console.log(circle1.area);
circle1.radius = -10; // "Radius must be positive"
```

## Static Methods

```javascript
class MathHelper {
  static square(num) {
    return num * num;
  }
}
console.log(MathHelper.square(5)); // 25
```

---

## Task 1 (corrected) — Class method on the prototype, not the constructor

```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(this.name + " makes a sound.");
  }
}
const dog = new Animal("Dog");
dog.speak(); // Dog makes a sound.
console.log(dog.hasOwnProperty("speak")); // false — confirms it's on the prototype
```

## Task 2 — hasOwnProperty on class instances

```javascript
class Vehicle {
  constructor(brand) {
    this.brand = brand;
  }
  honk() {
    console.log(this.brand + " says beep!");
  }
}
const v1 = new Vehicle("Toyota");
console.log(v1.hasOwnProperty("brand")); // true
console.log(v1.hasOwnProperty("honk")); // false
```

## Task 3 — Inheritance

```javascript
class Shape {
  constructor(color) {
    this.color = color;
  }
  describe() {
    console.log("This is a " + this.color + " shape.");
  }
}
class Circle extends Shape {
  constructor(color, radius) {
    super(color);
    this.radius = radius;
  }
  describe() {
    super.describe();
    console.log("It has a radius of " + this.radius + ".");
  }
}
const circle = new Circle("Red", 5);
circle.describe();
```

**Output:**

```
This is a Red shape.
It has a radius of 5.
```

## Task 4 — Getters/Setters (corrected: < 0, not <= 0, for "not negative")

```javascript
class BankAccount {
  constructor(balance) {
    this._balance = balance;
  }
  get balance() {
    return this._balance;
  }
  set balance(newValue) {
    if (newValue < 0) {
      console.log("Negative values are not allowed!");
    } else {
      this._balance = newValue;
    }
  }
}
const bank = new BankAccount(1000);
console.log(bank.balance); // 1000
bank.balance = 2000;
console.log(bank.balance); // 2000
```

## Task 5 — Static property shared across instances

```javascript
class Counter {
  static count = 0;
  constructor() {
    Counter.count = Counter.count + 1;
  }
}
const c1 = new Counter();
const c2 = new Counter();
const c3 = new Counter();
console.log(Counter.count); // 3
```

---

## Practical Project — Library Management System with Class Inheritance

```javascript
class Book {
  static totalBooks = 0;

  constructor(title, author, price) {
    this.title = title;
    this.author = author;
    this.price = price; // routed through the validating setter
    Book.totalBooks++;
  }

  getSummary() {
    console.log(`${this.title} by ${this.author} - $ ${this.price}`);
  }

  get discountedPrice() {
    const discount = (this.price * 10) / 100;
    return this.price - discount;
  }

  set price(value) {
    if (value <= 0) {
      console.log("Price must be positive.");
    } else {
      this._price = value;
    }
  }

  get price() {
    return this._price;
  }
}

class EBook extends Book {
  constructor(title, author, price, fileSizeMB) {
    super(title, author, price);
    this.fileSizeMB = fileSizeMB;
  }

  getSummary() {
    super.getSummary();
    console.log("File Size (MB): " + this.fileSizeMB);
  }
}

const book = new Book("Python", "Dennis Ritchie", 600);
const book2 = new Book("Java", "James Gosling", 400);
book.getSummary();
console.log("Discounted Price (GET): " + book.discountedPrice);
book.price = -200;
console.log("Price (GET): " + book.price);

book2.getSummary();
console.log("Discounted Price (GET): " + book2.discountedPrice);
book2.price = -200;
console.log("Price (GET): " + book2.price);

const ebook = new EBook("C++", "Bjarne Stroustrup", 800, 50);
ebook.getSummary();

console.log("Static Property: " + Book.totalBooks);
console.log(ebook.hasOwnProperty("getSummary"));
```

**Output:**

```
Python by Dennis Ritchie - $ 600
Discounted Price (GET): 540
Price must be positive.
Price (GET): 600
Java by James Gosling - $ 400
Discounted Price (GET): 360
Price must be positive.
Price (GET): 400
C++ by Bjarne Stroustrup - $ 800
File Size (MB): 50
Static Property: 3
false
```

---

## Test Q6 — Overriding + instanceof

```javascript
class Animal {
  speak() {
    console.log("Some generic sound");
  }
}
class Dog extends Animal {
  speak() {
    console.log("Woof!");
  }
}
const myPet = new Dog();
myPet.speak();
console.log(myPet instanceof Animal); // true
console.log(myPet instanceof Dog); // true
```

**Output:**

```
Woof!
true
true
```
