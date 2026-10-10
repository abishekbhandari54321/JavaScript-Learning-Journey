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