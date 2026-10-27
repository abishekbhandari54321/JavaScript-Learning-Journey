
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
