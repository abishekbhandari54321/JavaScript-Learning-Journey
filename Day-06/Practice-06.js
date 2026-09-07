
//Task 1: Create an array of 5 numbers. Use map() to create a new array where each number is squared.
const array1=[1, 2, 3, 4, 5];
const squaredArray = array1.map((num) => num * num);
console.log("Squared Array:" + squaredArray);

//reduce()
const reduceArray = array1.reduce((sum, arr) => sum + arr, 0);
console.log("Reduced Array (Sum of Numbers):" + reduceArray);

const filterArray = squaredArray.filter((num) => num > 20);
console.log("Filtered Array: ");
console.log(filterArray);           // [ 25 ]  <- shows it's really an array
console.log(typeof filterArray);    // object  <- arrays are technically objects in JS
console.log(Array.isArray(filterArray)); // true

//Task 4 (predict first, then run):
const numbers = [1, 2, 3, 4, 5];
const result = numbers.filter((num) => num > 10);
console.log("Result of filtering numbers greater than 10:");
console.log(result);
console.log(result.length);


//Task 5 & Task 6:
const car={
    brand: "Rolls Royce",
    model: "Phantom",
    year: 2021,
    isElectric: false,

    startingEngine : function(){
        console.log(`${this.brand} ${this.model} is starting...`);
    }
};
car.startingEngine();

console.log("Car Object:" + car.brand);
console.log("Car Model:" + car.model);
console.log("Car Year:" + car.year);
console.log("Is Electric:" + car.isElectric);

//Task 7:
const student = {
    name: "Shyam",
    age: 16,
    address: {
        city: "Gokul",
        country:"Bharat",
    }
};
console.log(student.address.city);

//Task 8:
const book = {
    title: "JavaScript Basics",
    pages: 300
};
console.log(book.author);

console.log(".................................................");

//Task 9:
const product = { Name:"Phone", Price:500, Brand:"Samsung" };
const {Name, Price} = product;
console.log(Name);
console.log(Price);

//Task 10:
const updatedProduct = {...product, Price:450};
console.log("Updated Product: ");
console.log(updatedProduct);
console.log("Original Product: ");
console.log(product);

//Task 11:
function multiplyAll(...nums){
    return nums.reduce((total, num) => total * num, 1);
}
console.log(multiplyAll(1, 2, 3));
console.log(multiplyAll(1, 2, 3, 4, 5,)); // I am not confident about this code

//Task 12:
console.log(Object.entries(product));



