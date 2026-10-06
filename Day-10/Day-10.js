//How Objects Work Internally:

console.log("(How Object work internally): ");

const person = { name: "Abishek" };
console.log(person.toString()); // "[object Object]"

console.log("........................................................................");

//2. Prototypes
console.log("(Prototypes): ");

function Person(name){
    this.name = name;
}

// Adding a method to the PROTOTYPE, not directly on each object
Person.prototype.greet = function(){
    console.log("Hi, " + this.name);
}

const person1 = new Person("Ram");
const person2 = new Person("Shyam");

person1.greet();
person2.greet();

console.log("........................................................................");

// Prototype Chain:
console.log("(Prototype Chain): ");

function Person1(name){
    this.name = name;
}

Person1.prototype.greet1 = function(){
    console.log("Hi, I am " + this.name);
};

const personX = new Person1("Abhishek");

console.log(personX.name);
personX.greet1();
console.log(personX.toString());

//Prototype Chain another example:
console.log("(Prototype Chain another example): ");

const animal = {eats: true};
const dog = {barks: true};

dog.__proto__ = animal; //dog is a child of animal
console.log(dog.eats);
console.log(dog.barks);

console.log("........................................................................");

//4. Prototype Methods (recap + one useful one):
console.log("(Prototype Methods (recap + one useful one)): ");

console.log(personX.hasOwnProperty("name"));  // true — defined directly on person1
console.log(personX.hasOwnProperty("greet")); // false — inherited from the prototype

console.log("........................................................................");

//Classes in JS:
console.log("(Classes Example): ");

class Employee {
    constructor(name, role){
        this.name = name;
        this.role = role;
    }

    introduce(){
        console.log(this.name + " work as a " + this.role);
    }
}

const employ1 = new Employee("Ram", "Programmer");
const employ2 = new Employee("Shyam", "Developer");

employ1.introduce();
employ2.introduce();

console.log(typeof Employee); // "function" — classes are still functions underneath!
console.log(employ1.hasOwnProperty("introduce")); // false — it's on the prototype, not the object itself

console.log("........................................................................");

// Inheritence in JS:
console.log("(Inheritence Example): ");

class Employee1 {
    constructor (name, role){
        this.name = name;
        this.role = role;
    }

    introduce(){
        console.log(this.name + " work as a " + this.role);
    }
}

class Manager extends Employee1 {
    constructor(name, role, teamSize){
        super(name, role); // runs Employee1's constructor first
        this.teamSize = teamSize;
    }

    introduce(){
        super.introduce(); // reuse the PARENT's introduce() method
        console.log("They manage a team of " + this.teamSize + " people.");
    }
}

const manager1 = new Manager("Hari", "Software Developer", 7);
manager1.introduce();

console.log("........................................................................"); 

//getter & setter:
console.log("(Getter Example): ");
//A getter is a function that you READ like a property.

const personZ = {
  firstName: "Abishek",
  lastName: "Bhandari",

  get fullName() {
    return this.firstName + " " + this.lastName;
  }
};

console.log(personZ.fullName); // looks like a function, you access it like a property.

//Getter + Setter Together:
console.log("(Getter + Setter Together): ");

const User = {
    _name:"Abishek",

    get name(){
        return this._name;
    },

    set name(value){
        this._name = value;
    }
};


console.log(User.name); // reading - GET -> Abishek
User.name = "Ram"; // writing - SET
console.log(User.name) // SET -> Ram

//A Real Software Example of GET & SET:

class UserA {
    constructor(){
        this._email = "";
    }

    set email(value){
        this._email = value.trim().toUpperCase();
    }

    get email(){
        return this._email;
    }

}

const userA = new UserA();
userA.email = "Abishek@gmail.com";

console.log("(Getter and Setter Example): ");

class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    get area() {
        return Math.PI * this.radius * this.radius;
    }

    set radius(value) {
        if (value <= 0) {
            console.log("Radius must be positive");
        } else {
            this._radius = value;
        }
    }

    get radius() {
        return this._radius;
    }
}

const circle1 = new Circle(5);
console.log(circle1.area);   // 78.53... — called like a property, no ()!
circle1.radius = -10;        // "Radius must be positive"
console.log(circle1.radius); // 5 — unchanged, since the invalid set was blocked

console.log("........................................................................");

// Static Method: 
console.log("(Static Method): ");

class MathHelper {
    static square(num) {
        return num * num;
    }
}

console.log(MathHelper.square(5)); // 25

const helper = new MathHelper();
// console.log(helper.square(5)); // ERROR — square() is NOT available on instances

console.log("........................................................................"); 

//Task 1:

console.log("(Task 1): ");

class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {   // <-- defined as a class method, NOT inside constructor
        console.log(this.name + " makes a sound.");
    }
}

const dog = new Animal("Dog");
dog.speak(); // Dog makes a sound.

console.log("........................................................................");

//Task 2:

console.log("(Task 2): ");

class Vehicle {
    constructor(brand) {
        this.brand = brand;
    }
    honk() {
        console.log(this.brand + " says beep!");
    }
}

const v1 = new Vehicle("Toyota");
const v2 = new Vehicle("Honda");

console.log(v1.hasOwnProperty("brand")); 
console.log(v1.hasOwnProperty("honk"));

console.log("........................................................................");

console.log("(Task 3 - Inheritence): ");

class Shape {
    constructor(color){
        this.color = color;
    }
    describe(){
        console.log("This is a " + this.color + " shape.");
    }
}

class Circle extends Shape {
    constructor(color, radius){
        super(color);
        this.radius = radius;
    }
    describe(){
        super.describe();
        console.log("It has a radius of " + this.radius + ".");
    }
}

const circle = new Circle("Red", 5);
circle.describe();

console.log("........................................................................");

//Task 3:
console.log("Task 4 - Getters/Setters): ");

class BankAccount {
    constructor(_balance){
        this._balance = _balance;  
    }

    get balance(){
        return this._balance;
    }

    set balance(newValue){
        if(newValue <= 0){
            console.log("Negative values are not allowed !");
        }
        else {
            return this._balance = newValue;       
         }
    }
}
const bank = new BankAccount(1000);
console.log(bank.balance) // GET (read)
bank.balance = 2000;
console.log(bank.balance);

console.log("........................................................................");

//Task 5: Static Method:
console.log("(Task 5 - Static Method): ");

class Counter {
    static count = 0;
    constructor() {
        Counter.count = Counter.count + 1;
    }
}

const c1 = new Counter();
const c2 = new Counter();
const c3 = new Counter();

console.log(Counter.count);

console.log("........................................................................");

// Predict: 

class AnimalX {
    speakX() {
        console.log("Some generic sound");
    }
}

class DogX extends AnimalX {
    speakX() {
        console.log("Woof!");
    }
}

const myPet = new DogX();
myPet.speakX();
console.log(myPet instanceof AnimalX);
console.log(myPet instanceof DogX);