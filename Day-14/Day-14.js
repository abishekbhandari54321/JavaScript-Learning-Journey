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
