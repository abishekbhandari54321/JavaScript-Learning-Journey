
console.log("----- Day 16: DOM Selection -----");

// 1. Select an element by its ID
const title = document.getElementById("title");

// 2. Select the first element matching a CSS selector
const firstText = document.querySelector(".text");

// 3. Select all elements matching a CSS selector
const allTexts = document.querySelectorAll(".text");

// Display the results
console.log("Title element:", title);
console.log("First paragraph:", firstText.textContent);
console.log("Number of paragraphs:", allTexts.length);

// 4. Convert the NodeList into an array
const textsArray = Array.from(allTexts);

console.log("Paragraph texts:",
    textsArray.map(function (paragraph) {
        return paragraph.textContent;
    })
);

// 5. Safely select an element that does not exist
const missingText = document.querySelector(".missing")?.textContent;

console.log("Missing element text:", missingText);

// 6. Apply CSS to all selected paragraphs
allTexts.forEach(function (paragraph) {
    paragraph.classList.add("text-highlight");
});


//Changing Content, Styles, and Attributes:
title.textContent = 'Hello, JavaScript';

//Styles and Classes:
title.style.color = "blue";
title.classList.add("highlight");

// title.classList.toggle("highlight");   // adds it if missing, removes it if present
title.classList.remove("highlight");

//Attributes:

const btn = document.getElementById("btn");
// Read attributes
console.log("Button ID:", btn.getAttribute("id"));
// Add a title attribute
btn.setAttribute("title", "I am a button");
// Read the new title
console.log("Button title:", btn.getAttribute("title"));
// Read the disabled property
console.log("Initially disabled:", btn.disabled);
// Disable the button
btn.disabled = true;
// Displaying:
console.log("After disabling:", btn.disabled);
// Enable the button again
btn.disabled = false;
// Displaying:
console.log("After enabling:", btn.disabled);


// Creating and Removing Elements:

//Select the existing list
const list = document.getElementById("list");
// Step 1: Create a new list item
const newItem = document.createElement("li");
// Step 2: Add text to the new list item
newItem.textContent = "Mango";
// Step 3: Add the new item to the end of the list
list.appendChild(newItem);
// Step 4: Remove the first list item
list.firstElementChild.remove();

// Event Listener:

btn.addEventListener("click", function (event) {
    console.log("Button clicked!");
    console.log(event.type);
    console.log(event.target.id);
});

document.getElementById('harvard').addEventListener("click", function (e) { 
    e.preventDefault();
    e.stopPropagation();
    console.log("Harvard clicked !");
});

// Mode Button:

let modeBtn = document.querySelector('#modeBtn');
let currentMode = 'light'; //dark

modeBtn.addEventListener("click", () => {
    if (currentMode === 'light') {
        currentMode = 'dark';
        document.querySelector("body").style.backgroundColor = "#212121";
    } else {
        currentMode = 'light';
        document.querySelector("body").style.backgroundColor = "#fff0f0";
    }
    console.log(currentMode);
});

const form = document.getElementById("form");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("nameInput").value.trim();
    document.getElementById("greeting").textContent = name ? `Hello, ${name}` : "Please enter your name";
});

// Event Bubbling:
const outer = document.getElementById("outer");
const inner = document.getElementById("inner");

outer.addEventListener("click", () => console.log("outer"));
inner.addEventListener("click", () => console.log("inner"));

//Capturing:
outer.addEventListener("click", () => console.log("outer (capture)"), true);

// Stopping the Event:
inner.addEventListener("click", (event) => {
    console.log("inner (stopping the event)");
    event.stopPropagation(); // stopPropagation() stops the event from going further, so outer never runs.
});

// Event Delegation:
const list2 = document.getElementById("list");

list2.addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
        event.target.classList.toggle("done");
    }
});



// Practice Code:

console.log("------- Practice -------");

// 1:
console.log(document.querySelectorAll(".text").length);
console.log(document.querySelector(".missing"));
console.log(document.querySelector(".missing")?.textContent);

// 2:
const btn2 = document.querySelector("#button2");
const heading2 = document.querySelector("#h1");

btn2.addEventListener("click", function () {
    heading2.textContent = "Clicked!";
    heading2.classList.toggle("highlight");
});

//3:
const itemInput = document.getElementById("itemInput");
const addBtn = document.getElementById("addBtn");
const ToDoList = document.getElementById("ToDoList");

addBtn.addEventListener("click", function () {

    const text = itemInput.value.trim();

    // Ignore empty text
    if (text === "") {
        return;
    }

    // Create a new <li>
    const newItem = document.createElement("li");

    // Add the typed text
    newItem.textContent = text;

    // Append the <li> to the <ul>
    ToDoList.appendChild(newItem);

    // Clear the input field
    itemInput.value = "";
});

// 4:
const grandparent = document.getElementById("grandparent");
const parent = document.getElementById("parent");
const child = document.getElementById("child");

grandparent.addEventListener("click", function () {
    console.log("Grandparent");
});

parent.addEventListener("click", function (event) {
    console.log("Parent");
    event.stopPropagation();

});

child.addEventListener("click", function () {
    console.log("Child");
});

// 5:
const todoList = document.getElementById("todoList");

/* Event delegation: one listener on the parent <ul> handles clicks
   on all current and future <li> items. This is better than adding
   a separate listener to every item, because it reduces the number
   of listeners and automatically supports dynamically added items. */

todoList.addEventListener("click", function (event) {
    if (event.target.tagName === "LI") {
        event.target.classList.toggle("done");
    }
});

// Task 3: Add a new item dynamically
const addItemBtn = document.getElementById("addItem");

addItemBtn.addEventListener("click", function () {
    const newItem = document.createElement("li");
    newItem.textContent = "New JavaScript task";
    todoList.appendChild(newItem);
});


// 6:
console.log("JavaScript file loaded!");
console.log("Name input:", document.getElementById("nameInput2"));
console.log("Form:", document.getElementById("userForm"));

const userForm = document.getElementById("userForm");
const nameInput = document.getElementById("nameInput2");
const ageInput = document.getElementById("ageInput");
const message = document.getElementById("message");

userForm.addEventListener("submit", function (event) {

    // Prevent the browser from refreshing the page
    event.preventDefault();

    const name = nameInput.value.trim();
    const ageText = ageInput.value.trim();
    const age = Number(ageText);

    // Validate the name
    if (name === "") {
        message.textContent = "Error: Name cannot be empty.";
        return;
    }

    // Validate the age
    if (ageText === "" || !Number.isFinite(age)) {
        message.textContent = "Error: Please enter a valid number for age.";
        return;
    }

    // Display the greeting
    message.textContent =
        `Hello, ${name}! You are ${age} years old.`;
});