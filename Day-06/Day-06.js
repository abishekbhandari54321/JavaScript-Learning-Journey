//Array:

const fruits = ["apple", "banana", "mango"];
console.log("array: ")
console.log(fruits);

console.log("...............................................");

console.log(fruits[0]); // apple
console.log(fruits[1]); // banana
console.log(fruits[2]); // mango

console.log("...............................................");

//push()— add to the END
fruits.push("orange");
console.log("push(): ");
console.log(fruits); // ["apple", "banana", "mango", "orange"]

console.log("...............................................");

//pop()— remove from the END
fruits.pop();
console.log("pop(): ");
console.log(fruits);

console.log("...............................................");

//unshift() — add to the BEGINNING
fruits.unshift("Pineapple"); //Pineapple gets added at the index 0
console.log("unshift(): ");
console.log(fruits);

console.log("...............................................");

//shift() — remove from the BEGINNING
fruits.shift(); //Pineapple gets removed from index 0
console.log("shift(): ");
console.log(fruits);

console.log("...............................................");

//slice(start, end) — COPY a portion (does NOT change original array)
const arr1 = [1, 2 ,3, 4, 5];
const sliced = arr1.slice(2,4);
console.log("Sliced: ");
console.log(sliced);
console.log("Original Array (arr1): ");
console.log(arr1);

console.log(".............................................................................................");

//splice(start, deleteCount, itemsToAdd) — CHANGES the original array
const arr2 = [1, 2, 3, 4, 5];
const spliced = arr2.splice(1,3);
console.log("Spliced: ");
console.log(spliced);
console.log("Original Array (arr1): ");
console.log(arr2);

//splice
const nums2 = [10, 20, 30];
console.log("Before applying splice in original array: ");
console.log(nums2);
nums2.splice(1, 0, 99); // at index 1, remove 0 items, insert 99
console.log("After applying splice(start, deleteCount, itemsToAdd) - Original Array (nums2): ");
console.log(nums2); // [ 10, 99, 20, 30 ]

console.log("...............................................");
console.log("..............................................."); 

//3. Searching Arrays

//includes() — does the array contain this value? (true/false)
const arr3 = ["Cricket", "Football", "Basketball"];
console.log("includes(): ")
console.log(arr3.includes("Football"));
console.log(arr3.includes("Volleyball"));

console.log("...............................................");

//indexOf() — WHERE is this value? (returns index, or -1 if not found)
console.log("indexOF(): ")
console.log(arr3.indexOf("Basketball"));
console.log(arr3.indexOf("Baseball"));

console.log("...............................................");

//find() — return the FIRST item that matches a condition
const num = [10, 20, 30, 40, 50, 60, 70];
console.log("find(): ");
const found = num.find((num) => num>30);
console.log(found);

console.log("...............................................");

//findIndex() — same as find(), but returns the INDEX instead of the value
console.log("foundIndex(): ");
const foundIndex = num.findIndex((num) => num>50);
console.log(foundIndex);

console.log("...............................................");

//some() — does AT LEAST ONE item match? (true/false)
console.log("some(): ");
const some = num.some((num) => num>25);
console.log(some);

console.log("...............................................");

//every() — do ALL items match? (true/false)
console.log("every(): ");
const every = num.every((num) => num>0);
const every2 = num.every((num) => num>20);
console.log(every);
console.log(every2);

console.log("...............................................");
console.log("..............................................."); 

//4. The Big Three: map(), filter(), reduce()

//map() — transform every item, get a NEW array (same length)
console.log("map(): ");
const number = [10, 20, 30, 40, 50, 60];
const doubled = number.map((num) => num * 2);
console.log("Brand new transformed Array: ")
console.log(doubled);
console.log("Original Array: ");
console.log(number);

console.log("...............................................");

//filter() — keep only items that match a condition, get a NEW (possibly shorter) array
console.log("filter(): ");
const numbers = [1, 2, 3, 4, 5];
const filter = numbers.filter((num) => num % 2 === 0);
console.log("Filtered Array Items (Evens): ");
console.log(filter);
console.log("Original Array: ");
console.log(numbers);

console.log("..............................................."); 

//reduce() — combine ALL items into ONE single value
const prices = [100, 200, 300, 400, 500];
const total = prices.reduce((sum, price) => sum + price, 0);
console.log("reduce(): ");
console.log(total);

console.log("...............................................");
console.log("...............................................");

//Task 1:
const array3 = [1,2,3,4,5];
const squaredArray = array3.map((array) => array * 2);
console.log("Task 1 - map(): ");
console.log(squaredArray);

console.log("...............................................");

//Task 2:
const filter1 = squaredArray.filter((squared) => squared>20);
console.log("Task 2 - filter(): ");
console.log(filter1);

console.log("...............................................");

//ask3:
const reduce1 = array3.reduce((sum, arr) => sum + arr, 0);
console.log("Task 3 - reduce(): ");
console.log(reduce1);

console.log("...............................................");

//Task 3:
const numbers1 = [1, 2, 3, 4, 5];
const result = numbers1.filter((num) => num > 10);
console.log("Task 4: ")
console.log(result); // [] empty array
console.log(result.length); // 0

console.log("...............................................");
console.log("..............................................."); 

//Objects: An object stores data as key-value pairs

const person = {
    name: "Abishek",
    age: 25,
    address: "Nepal",
    isStudent: true
};
console.log("Objects: ");
console.log(person.name);
console.log(person.age);
console.log(person.address);
console.log(person.isStudent);

console.log("...............................................");

//Object Methods (functions inside objects)
const user = {
    name: "Ram",
    greet: function(){
        console.log("Hi, I am " +  this.name);
    }
};
user.greet();

console.log("...............................................");

//Nested Objects
const person1 = {
    name: "Madhav",
    address: {
        city: "Vrindhavan",
        country: "Bharat"
    }
};
console.log(person1.name)
console.log(person1.address.city);
console.log(person1.address.country);

console.log("..............................................."); 

//6. Destructuring:
console.log("Object Destructuring: ");
const user1 = { userName: "Abhishek", age: 25, address: "Kathmandu" };
const {userName, age, address} = user1;
console.log(userName);
console.log(age);
console.log(address);

console.log("...............................................");

//Renaming while destructuring
console.log("Renaming while Destructuring: ");
const { userName: Name } = user1;
console.log(Name); // Abishek

console.log("...............................................");

//Syntax — Array Destructuring
console.log("Array Destructuring: ");
const [first, second] = [10, 20];
console.log(first);  // 10
console.log(second); // 20

console.log("...............................................");   

//7. Spread Operator (...):
//Syntax — Spreading an Array:
console.log("Spread Operator: ")
const array1 = [1, 2, 3];
const array2 = [...array1, 4, 5, 6];
console.log(array2); 

console.log("..............................................."); 

//Syntax — Spreading an Object
console.log("Spreading an Object: ");
const user2 = {Name:"Abhishek", Age:22};
const updatedUser = {...user2, Age:25};
console.log(updatedUser);

console.log("..............................................."); 

//8. Rest Operator (...)
console.log("Rest Operator: ");
function sum(...numbers){
    return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1,2,3)); //6
console.log(sum(1,2,3,4,5)); //15






