// Practical Project: Event Loop Order Lab:

function blockFor(ms) {
  const start = Date.now();

  while (Date.now() - start < ms) {
    // This loop blocks the main thread.
  }
}

console.log("SYNC-1");

setTimeout(() => {
  console.log("TIMER-1");

  // Bonus: this microtask runs before the next timer task.
  Promise.resolve().then(() => console.log("BONUS-MICRO"));
}, 0);

Promise.resolve().then(() => console.log("MICRO-1"));

async function asyncStep() {
  console.log("ASYNC-START");

  await Promise.resolve();

  console.log("ASYNC-AFTER-AWAIT");
}

asyncStep();

setTimeout(() => console.log("TIMER-2"), 0);

Promise.resolve().then(() => console.log("MICRO-2"));

console.log("SYNC-2");

setTimeout(() => console.log("BLOCK-TIMER"), 0);

console.log("BLOCK-START");
blockFor(1000);
console.log("BLOCK-END");

console.log("SYNC-3");

// Golden rule: finish synchronous code first, then process
// microtasks, then tasks. Blocking the main thread delays them all.