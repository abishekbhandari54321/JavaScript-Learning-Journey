// Day 13: Promises:

console.log("--------------- Resolve() & .then() ---------------");

const promise1 = new Promise(function(resolve, reject){
    // Do an async task:
    // DB calls, cryptography, network calls etc
    setTimeout(function(){
        console.log("Async task is completed.");
    }, 1000);
});

// consuming the promise:
promise1.then(function(result){
    console.log("Success: ", result);
})

console.log("--------------- Promise without storing in Variable ---------------");

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2.");
        resolve();
    }, 1000);
}).then(function(){
    console.log("Async 2 resolved.");
})

console.log("--------------- Promise 3 ---------------");

const promise3 = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({userName: "Ram", email: "Ram@gmail.com"});
    }, 1000);
})

promise3.then(function(user){
    console.log(user);
})


console.log("--------------- Promise 4 (Reject Promise) ---------------");

const promise4 = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let error = true;

        if (!error) {
            resolve({
                username: "Hari",
                password: 123456
            });
        } else {
            reject("ERROR, Something went wrong!");
        }
    }, 1000);
});

promise4
    .then((user) => {
        console.log(user);
        return user.username;
    })
    .then((username) => {
        console.log(username);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log("Promise is finally resolved or rejected!");
    })

console.log("--------------- Promise (async/await) ---------------");

const promise5 = new Promise(function(resolve, reject){
    setTimeout(function(){
         let error = true;

        if (!error) {
            resolve({
                username: "Shyam",
                password: 54321
            });
        } else {
            reject("ERROR, JS went wrong!");
        }
    }, 1000);
});

async function consumePromise5(){
    try{
        const response = await promise5
        console.log(response);
    }
    catch(error){
        console.log(error);
    }
}

consumePromise5();


console.log("---------------- Promise (Simple Example) ----------------");

const checkAge = new Promise((resolve, reject) => {
    const age = 20;

    setTimeout(()=>{

        if(age >= 18)
        {
            resolve("Eligible for vote !");
        }

        else
        {
            reject("Not Eligible (Error) !");
        }

    }, 1000)

});

// Consume the Promise
checkAge
    .then((result) => {
        console.log("Success:", result);   // runs if fulfilled
    })
    .catch((error) => {
        console.log("Error:", error);      // runs if rejected
    })
    .finally(() => {
        console.log("Done");               // runs either way
    });


console.log("------------------- Promise Chaining -------------------");

function getUser(userId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Got user");
            resolve({ userId: userId, name: "Abishek" });
        }, 1000);
    });
}

function getOrders(userId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Got orders");
            resolve(["Order1", "Order2"]);
        }, 1000);
    });
}

function getOrderDetails(order) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Got order details");
            resolve(order + " - Details");
        }, 1000);
    });
}

getUser(1)
    .then((user) => getOrders(user.userId))
    .then((orders) => getOrderDetails(orders[0]))
    .then((details) => console.log("Final details:", details))
    .catch((error) => console.log("Error:", error));
    

console.log("------------------- Task 1 -------------------");
//Task 1
console.log("1");
Promise.resolve("2").then((value) => console.log(value));
console.log("3");

console.log("------------------- Task 2 -------------------");

function checkStock(quantity) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (quantity > 0) {
                resolve("In stock");
            } else {
                reject("Out of stock");
            }
        }, 1000);
    });
}

checkStock(5)
    .then(result => console.log(result))
    .catch(error => console.log(error))
    .finally(() => console.log("Stock check completed"));

checkStock(0)
    .then(result => console.log(result))
    .catch(error => console.log(error))
    .finally(() => console.log("Stock check completed"));


console.log("------------------- Task 3 -------------------");

function step1() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Step 1 complete");
            resolve();
        }, 500);
    });
}

function step2() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Step 2 complete");
            resolve();
        }, 500);
    });
}

function step3() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Step 3 complete");
            resolve();
        }, 500);
    });
}

step1()
    .then(() => step2())
    .then(() => step3())
    .then(() => console.log("All steps complete!"));

console.log("------------------- Task 4 -------------------");

Promise.resolve(5)
    .then((n) => n * 2)
    .then((n) => { n + 1; })
    .then((n) => console.log(n));