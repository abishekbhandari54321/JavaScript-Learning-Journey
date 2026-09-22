// "this" keyword in JS:

//this in the Global Context:
console.log(this);

console.log(".................................................");

//this Inside an Object Method

const user={
    name:"Abishek",
    age:25,
    greet:function(){
        console.log("Hi, " + this.name);
    }
}
user.greet();

console.log(".................................................");

//this Inside a Regular Function (not a method):

function showMessage(){
    console.log(this)
}

showMessage();

console.log(".................................................");

//this Inside an Arrow Function:

const user3 = {
    userName : "Ram",
    regularGreet : function(){
        console.log("Regular function: " + this.userName);
    },

    arrowGreet : () => {
        console.log("Arrow Function: " + this.userName);
    }
};

user3.regularGreet();
user3.arrowGreet();

console.log(".................................................");

//Where Arrow Functions Actually SHINE with this:

const user4 = {
    name1:"Shyam",
    delayedGreet : function(){
        setTimeout(function(){
            console.log("Regular function inside setTimeout: " + this.name1);
        }, 1000);

        setTimeout(() => {
            console.log("Arrow function inside setTimeout: " + this.name1);
  
        }, 1000);
    }
};

console.log(".................................................");

//this Inside a Constructor Function:

function Person(name, age){
    this.name = name;
    this.age = age;
}

const person1 = new Person("Hari", 25);
console.log(person1.name);
console.log(person1.age);

console.log(".................................................");

//call() — borrow a function, choose this manually:

function greet1(){
    console.log("Hi, " + this.name2);
}

const obj1 = {name2: "Krishna"};
const obj2 = {name2: "Gopal"};

greet1.call(obj1);
greet1.call(obj2);

//With Arguments:

function greet1(greeting){
    console.log(greeting + ", " + this.name2);
}

greet1.call(obj1, "Good Morning");

console.log(".................................................");

//apply() — same as call(), but arguments go in an ARRAY

function greet(greeting, punctuation){
    console.log(greeting + ", " + this.name3 + punctuation);
}

const userA = {name3: "Ashutosh"};
const userB = {name3: "Shashank"};

greet.apply(userA, ["Good Morning", "!"]);
greet.apply(userB, ["Good Afternoon", "!"]);

console.log(".................................................");

//bind() — create a NEW function with this permanently locked in:

function greet2(){
    console.log("Hello, " + this.name4);
}

const userC = {name4: "Narayan"};
const userD = {name4: "Laxmi"};

const greetUser1 = greet2.bind(userC);
greetUser1();
const greetUser2 = greet2.bind(userD);
greetUser2();


//This Solves the Earlier "Losing this" Bug!

const userE = {
    name5: "Ganesh",

    greet3: function() {
        console.log("Hi, I am " + this.name5);
    }
};


const boundGreet = userE.greet3.bind(userE); // lock "this" to user permanently
boundGreet(); // Hi, I am Ganesh — works correctly now!

console.log(".................................................");

//Practice:
//Task 1:
console.log("Task 1:");

const car = {
    brand: "Toyota",
    getBrand: function() {
        console.log(this.brand);
    }
};

const fn = car.getBrand;
fn();

console.log(".................................................");

//Task 2:
console.log("Task 2:");

const car1 = {
    brand: "Toyota",
    showBrand: function() {
        setTimeout(() => {
            console.log(this.brand);
        }, 1000);
    }
};

car1.showBrand();

console.log(".................................................");

//Task 3:
console.log("Task 3:");

function introduce(){
    console.log("I am " + this.name + ", age " + this.age);
}

const personA = {name: "David", age: 26};
const personB = {name: "Steve", age: 20};

introduce.call(personA);
introduce.call(personB);

console.log(".................................................");

//Task 4:
console.log("Task 4:");

const userIntroduceA = introduce.bind(personA);
userIntroduceA();
const userIntroduceB = introduce.bind(personB);
userIntroduceB();

console.log(".................................................");

//Task 5:
console.log("Task 5: ");

function Animal(name) {
    this.name = name;
    this.speak = function() {
        console.log(this.name + " makes a sound.");
    };
}

const dog = new Animal("Dog");
dog.speak();

console.log(".................................................");

//6. Predict:
function sayName() {
    console.log(this.name);
}
const person = { name: "Kiran" };
const boundFn = sayName.bind(person);
const result = boundFn();
console.log(result);