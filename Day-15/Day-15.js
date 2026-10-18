// Day 15: The Event Loop:

console.log("---------- The Classic Example ----------");

console.log("A");

setTimeout(() => {
    console.log("B");
}, 0);

Promise.resolve().then(() => {
    console.log("C");
});

console.log("D");


console.log("---------- setTimeout(..., 0) Is Not “Immediately” ----------");

setTimeout(() => console.log("timer"), 0);

const end = Date.now() + 1000;
while (Date.now() < end) {
    // blocks the call stack for 1 second
}

console.log("loop finished");


console.log("---------- Task 1 ----------");

console.log("1");
setTimeout(() => console.log("2"), 0);
Promise.resolve().then(() => console.log("3"));
console.log("4");


console.log("---------- Task 2 ----------");

setTimeout(() => console.log("T1"), 0);
setTimeout(() => console.log("T2"), 0);
Promise.resolve().then(() => console.log("P1"));
Promise.resolve().then(() => console.log("P2"));
console.log("Sync");


console.log("---------- Task 3 ----------");

async function one() {
    console.log("A");
    await two();
    console.log("B");
}

async function two() {
    console.log("C");
}

console.log("D");
one();
console.log("E");


console.log("---------- Test 4 ----------");

Promise.resolve().then(() => {
    console.log("P1");
    setTimeout(() => console.log("T"), 0);
    Promise.resolve().then(() => console.log("P2"));
});
console.log("S");


console.log("---------- Test 6 ----------");

console.log("1");
setTimeout(() => console.log("2"), 0);
Promise.resolve().then(() => console.log("3"));
console.log("4");


async function run() {
    console.log("X");
    await null;
    console.log("Y");
}

console.log("Start");
run();
setTimeout(() => console.log("Z"), 0);
console.log("End");