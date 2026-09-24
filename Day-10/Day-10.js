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
