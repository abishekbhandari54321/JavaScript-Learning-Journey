console.log("------------ 1. Synchronous JavaScript ------------");
// 1. Synchronous JavaScript:

console.log("Step 1"); // each line must completely finish before the next one starts.
console.log("Step 2");
console.log("Step 3");


console.log("------------  2. Asynchronous JavaScript ------------");
// 2. Asynchronous JavaScript

console.log("Step 1");

setTimeout( () => {
    console.log("Step 2");
}, 500);

console.log("Step 3");

console.log("------------  3. Callbacks for Async Tasks ------------");

function loadData(callback){
    console.log("Data Loading...");

    setTimeout(() => {
        const data = {id: 101, name:"Ram"};
        callback(data);
    }, 2000);
}

loadData((result) => {
    console.log("Data Loaded: ", result);
})

console.log("This runs before data finishes loading!");


console.log("------------  4. The Problem With Callbacks — “Callback Hell” ------------");
// 4. The Problem With Callbacks — “Callback Hell”

function getUser(userId, callback) {
    setTimeout(() => {
        console.log("Got user");
        callback({ userId: userId, name: "Abishek" });
    }, 1000);
}

function getOrders(userId, callback) {
    setTimeout(() => {
        console.log("Got orders");
        callback(["Order1", "Order2"]);
    }, 1000);
}

function getOrderDetails(order, callback) {
    setTimeout(() => {
        console.log("Got order details");
        callback(order + " - Details");
    }, 1000);
}

// Now imagine needing all three IN SEQUENCE:
getUser(1, (user) => {
    getOrders(user.userId, (orders) => {
        getOrderDetails(orders[0], (details) => {
            console.log("Final details:", details);
            // if there were even MORE steps, this would keep nesting deeper and deeper...
        });
    });
});



console.log("------------  Task 1 ------------");

// Task 1:
console.log("A");
setTimeout(() => {
    console.log("B");
}, 1000);
console.log("C");
setTimeout(() => {
    console.log("D");
}, 0);
console.log("E");


console.log("------------  Task 2 ------------");

// Task 2:
function processPayment(amount, callback){
    setTimeout(function(){
        callback(`Payment of $[amount] processed`);
    }, 1000);
}

processPayment(100, function(message){
    console.log(message);
});


console.log("------------  Task 3 ------------");

// Task 3:
function step1(callback) {
    setTimeout(function() {
        console.log("Step 1");
        callback();
    }, 500);
}

function step2(callback) {
    setTimeout(function() {
        console.log("Step 2");
        callback();
    }, 500);
}

function step3(callback) {
    setTimeout(function() {
        console.log("Step 3");
        callback();
    }, 500);
}

step1(function() {
    step2(function() {
        step3(function() {
            console.log("All steps complete!");
        });
    });
});


console.log("------------  Task 5 ------------");

// Task 5:
function delayedGreeting(name) {
    setTimeout(() => {
        console.log("Hello, " + name);
    }, 1000);
}

delayedGreeting("Abishek");
delayedGreeting("Priya");
console.log("Both greetings scheduled");