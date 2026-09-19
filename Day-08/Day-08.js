//Hoisting:

//Following two lines will run successfully due to hoisting
console.log("Hoisting Example: ");

console.log(a); //undefined

greet(); // prints good morning because function calls its name and the complete body.

function greet(){
    console.log("Good Morning");
}

var a = 10;
console.log(a);  /*

// var Hoisting — Example:

console.log(myVar); // undefined (NOT an error!)
var myVar = 10;
console.log(myVar); // 10

/*How It Works: Behind the scenes, JavaScript actually treats this code like:

javascript
var myVar;        // declaration is hoisted to the top
console.log(myVar); // undefined — declared, but not yet assigned
myVar = 10;        // assignment happens here, in its original position
console.log(myVar); // 10       */ 

// Function Declaration Hoisting:
console.log("Function Declaration Hoisting: ");

sayHello(); // works! "Hello!" prints, even though sayHello is called before it's written

function sayHello() {
    console.log("Hello!");
}

// let and const — Hoisting + The Temporal Dead Zone (TDZ)

//console.log(myLet); // ERROR: Cannot access 'myLet' before initialization
let myLet = 10;

//Function Expression:
console.log("Hoisting Function Expression: ");

//sayHi(); // ERROR: Cannot access 'sayHi' before initialization

const sayHi = function() {
    console.log("Hi!");
};

console.log("...............................................................");

//Closures:
console.log("Closure Example: ")

function outer() {
    let count = 5;

    function inner() {
        console.log(count);
    }

    return inner;
}

const myFunc = outer();
myFunc(); // 5

// Closure : Real-World Use Case - Private data / data hiding:

console.log("Closure Real World Example: ")

function createNewAccount(initialBalance){
    let balance = initialBalance; //private variable

    function deposit(amount){
        balance = balance + amount;
        console.log("New Balance: ", balance);
    }

    function withdraw(amount){
        if(amount > balance){
            console.log("Insufficient Balance");
        }
        else{
            balance = balance - amount;
            console.log(balance);
        }
    }

   return {deposit, withdraw};
}

const myAccount = createNewAccount(1000);
myAccount.deposit(500);
myAccount.withdraw(2000);


console.log("...............................................................");

//Task 1:
console.log("Task 1: ");


console.log(taskA);
var taskA = 5;

console.log(taskA);

//console.log(b); //error
let b = 10;

//Task 2:
console.log("Task 2: ");

function createGreeter(name){
    function innerfunction(){
        console.log("Hello, " + name);
    }
    return {innerfunction};
}

const greeters1 = createGreeter("Abishek");
const greeters2 = createGreeter("Shyam");
greeters1.innerfunction();
greeters1.innerfunction();
greeters2.innerfunction();

//Task 3: 
console.log("Task 3: ");

function outer() {
    let secret = "I am hidden";
    return function() {
        return secret;
    };
}

const getSecret = outer();
console.log(getSecret());


console.log("Task 4: ");

for(var i=1; i<=3; i++){
   setTimeout(function(){
     console.log(i);
   },1000);
}

for(let i=1; i<=3; i++){
   setTimeout(function(){
     console.log(i);
   },1000);
}