
console.log("-------------- async function --------------");

async function getNumber(){
    return 5;
}
console.log(getNumber());  // Promise { 5 }
// getNumber().then((num) => {console.log(num)}); // 5

console.log("-------------- await --------------");

function wait(ms){
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function run(){
    console.log("start");
    await wait(1000);
    console.log("After 1 second");
}
run();
console.log("Meanwhile, rest of the program continues...");