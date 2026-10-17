// Day-14.js

// Topic: Async/Await in JavaScript

console.log("-------------- 1. async function --------------");

async function getNumber() {
    return 5;
}

console.log(getNumber()); // Promise { 5 }

getNumber().then((num) => {
    console.log(num); // 5
});


console.log("-------------- 2. await --------------");

function wait(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function runAwaitDemo() {
    console.log("start");

    await wait(1000);

    console.log("After 1 second");
}

runAwaitDemo();

console.log("Meanwhile, rest of the program continues...");


console.log("-------------- 3. Rewriting a Promise Chain --------------");

// ---------- The three functions (each returns a Promise) ----------

function getUser(userId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Got user");
            resolve({
                userId: userId,
                name: "Abishek"
            });
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


// ---------- Version A: Promise chain ----------

function showDetailsWithPromises() {
    return getUser(1)
        .then((user) => getOrders(user.userId))
        .then((orders) => getOrderDetails(orders[0]))
        .then((details) => {
            console.log("Final details:", details);
        })
        .catch((error) => {
            console.log("Error:", error);
        });
}


// ---------- Version B: async/await ----------

async function showDetails() {
    try {
        const user = await getUser(1);
        const orders = await getOrders(user.userId);
        const details = await getOrderDetails(orders[0]);

        console.log("Final details:", details);
        console.log(`${user.name} has ${orders.length} orders`);
    } catch (error) {
        console.log("Error:", error);
    }
}


// ---------- Run the async/await version ----------

async function main() {
    console.log("--- async/await version ---");

    await showDetails();
}

main();


console.log("-------------- 4. Error Handling with try / catch / finally --------------");


const somePromise = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Data received successfully!");
    }, 500);
});

async function runErrorHandlingDemo() {
    try {
        const result = await somePromise;
        console.log(result);
    } catch (error) {
        console.log("Error:", error);
    } finally {
        console.log("Done");
    }
}

runErrorHandlingDemo();


console.log("-------------- 5. Sequential vs Parallel --------------");

// Sequential execution: each operation waits for the previous one.

async function sequential() {
    console.time("Sequential time");

    await wait(1000);
    await wait(1000);

    console.timeEnd("Sequential time");
}


// Parallel execution: both operations start together.

async function parallel() {
    console.time("Parallel time");

    await Promise.all([
        wait(1000),
        wait(1000)
    ]);

    console.timeEnd("Parallel time");
}


// Run both examples.

async function compareExecution() {
    console.log("--- Sequential execution ---");
    await sequential();

    console.log("--- Parallel execution ---");
    await parallel();
}

compareExecution(); 

console.log("----------- My own practice async/await function: -----------");

async function weatherData(){

    const californiaWeather = new Promise((resolve, reject) => {
        setTimeout(()=> {
            resolve("18 Degree");
            reject("Error !");
        }, 2000);
    });

    const chicagoWeather = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("7 Degree");
            reject("Error !");
        }, 4000);
    });

    console.log("California Weather data loading... Please Wait...");
    let californiaW = await californiaWeather;
    console.log("California Data fetched successfully: " + californiaW);

    console.log("Chicago Weather data loading... Please Wait...");
    let chicagoW = await chicagoWeather;
    console.log("Chicago Data fetched successfully: " + chicagoW);

    return {californiaW, chicagoW};

}

console.log("Welcome to USA weather: ");
let a = weatherData();
a.then((value) => {
    console.log(value);
}).catch((error) => {
    console.log("Error: " + error);
})


console.log("----------- Task 1 -----------");

async function test() {
    return 5;
}
console.log(test());

console.log("----------- Task 2 -----------");

async function run1() {
    console.log("1");
    await null;
    console.log("2");
}

run1();
console.log("3");


console.log("----------- Task 3: Check Stock using Promise and Async/Await -----------");

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

async function showStock(quantity) {
    try {
        console.log("Checking stock...");

        const result = await checkStock(quantity);

        console.log(result);
    } 
    
    catch (error) {
        console.log(error);
    } 
    
    finally {
        console.log("Stock check completed.");
    }
}

// Function calls
showStock(5);
showStock(0);


console.log("----------- Task 4: Step-by-Step Execution using Async/Await -----------");

function step1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Step 1 completed!");
            resolve();
        }, 1000);
    });
}

function step2() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Step 2 completed!");
            resolve();
        }, 1000);
    });
}

function step3() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Step 3 completed!");
            resolve();
        }, 1000);
    });
}

async function runSteps() {
    await step1();
    await step2();
    await step3();

    console.log("All steps complete!");
}

runSteps();


console.log("----------- Task 5: Sequential vs. Parallel Execution -----------");

// Returns a Promise that resolves after the specified time
function wait(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

// 1. Sequential execution
async function sequentialWait() {
    const start = Date.now();

    await wait(1000);
    await wait(1000);

    const end = Date.now();

    console.log("Sequential execution time:", end - start, "ms");
}

// 2. Parallel execution using Promise.all()
async function parallelWait() {
    const start = Date.now();

    await Promise.all([
        wait(1000),
        wait(1000)
    ]);

    const end = Date.now();

    console.log("Parallel execution time:", end - start, "ms");
}

// Run both functions
sequentialWait();
parallelWait();

/*
Explanation:
Sequential execution takes approximately 2000 ms because the second
wait(1000) starts only after the first one finishes.

Promise.all() takes approximately 1000 ms because both wait(1000)
Promises start together and run concurrently.

Therefore, Promise.all() is faster here because it does not wait
for the first Promise to finish before starting the second.
*/


console.log("-------------- Predict: -------------")

async function run2() {
    console.log("A");
    await Promise.resolve();
    console.log("B");
}
run2();
console.log("C");