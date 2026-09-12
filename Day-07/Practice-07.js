//Task 1: 

console.log("Task 1: ");

let x = "global";

function outer() {
    let x = "outer";

    function inner() {
        let x = "inner";
        console.log(x);
    }

    inner();
    console.log(x);
}

outer();
console.log(x);

console.log("..................................................");

//Task 2
console.log("Task 2: ");

for (var i = 0; i < 3; i++) {
    let x = "global";

function outer() {
    let x = "outer";

    function inner() {
        let x = "inner";
        console.log(x);
    }

    inner();
    console.log(x);
}

outer();
console.log(x);
}
console.log(i);

console.log("..................................................");

//Task 3:
console.log("Task 3: ");

function a() {
    console.log("A start");
    b();
    console.log("A end");
}

function b() {
    console.log("B start");
    c();
    console.log("B end");
}

function c() {
    console.log("C");
}

a();

console.log(".................................................."); 

//Task 4:
console.log("Task 4: ");

function outerFunc(){
    let secretNumber = 40;
    
    function innerFunc(){
        console.log(secretNumber);
    }
    innerFunc();
}
outerFunc();

console.log("..................................................");

//Test
console.log("Test: ");

function one() {
    console.log("1");
    two();
    console.log("2");
}

function two() {
    console.log("3");
    three();
    console.log("4");
}

function three() {
    console.log("5");
}

one();
console.log("6");

console.log("..................................................");

console.log("Test 2: ");

function outer() {
    let count = 5;

    function inner() {
        console.log(count);
    }

    return inner;
}

const myFunc = outer();
myFunc();