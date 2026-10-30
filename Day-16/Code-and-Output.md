# Day 16 — DOM + Events

> **How to read this file:** every code block has its output directly below it.
> DOM code runs in the **browser** (not Node.js). Open `index.html`, press **F12**, and use the **Console** tab.
> Below each code block you will see **Console output** (text in the Console) and/or **What you see** (what changes on the page).

---

## 1. Selecting Elements

```javascript
console.log("----- Day 16: DOM Selection -----");

const title = document.getElementById("title");
const firstText = document.querySelector(".text");
const allTexts = document.querySelectorAll(".text");

console.log("Title element:", title);
console.log("First paragraph:", firstText.textContent);
console.log("Number of paragraphs:", allTexts.length);

// Convert the NodeList into an array
const textsArray = Array.from(allTexts);

console.log(
  "Paragraph texts:",
  textsArray.map(function (paragraph) {
    return paragraph.textContent;
  }),
);

// Safely select an element that does not exist
const missingText = document.querySelector(".missing")?.textContent;
console.log("Missing element text:", missingText);

// Apply a CSS class to all selected paragraphs
allTexts.forEach(function (paragraph) {
  paragraph.classList.add("text-highlight");
});
```

**Console output:**

```
----- Day 16: DOM Selection -----
Title element: <h1 id="title">…</h1>
First paragraph: First paragraph
Number of paragraphs: 2
Paragraph texts: (2) ['First paragraph', 'Second paragraph']
Missing element text: undefined
```

**What you see:** No visible change from the last block, because there is no CSS rule for `.text-highlight`. Inspect a paragraph in DevTools (Elements tab) and you will see `class="text text-highlight"`.

**Why:** A NodeList has `forEach` but not `map`, so `Array.from()` converts it. `?.` (Day 11) returns `undefined` instead of crashing when nothing matches.

---

## 2. Changing Content, Styles, and Attributes

```javascript
// Content
title.textContent = "Hello, JavaScript";

// Styles and classes
title.style.color = "blue";
title.classList.add("highlight");
title.classList.remove("highlight");

// Attributes
const btn = document.getElementById("btn");
console.log("Button ID:", btn.getAttribute("id"));
btn.setAttribute("title", "I am a button");
console.log("Button title:", btn.getAttribute("title"));
console.log("Initially disabled:", btn.disabled);
btn.disabled = true;
console.log("After disabling:", btn.disabled);
btn.disabled = false;
console.log("After enabling:", btn.disabled);
```

**Console output:**

```
Button ID: btn
Button title: I am a button
Initially disabled: false
After disabling: true
After enabling: false
```

**What you see:** The heading reads **Hello, JavaScript** in blue (no highlight, because it was added and then removed). Hovering the button shows the tooltip "I am a button".

**Note:** Setting `textContent` replaces **all children** of the element, so a hidden `<span>` inside the `<h1>` was removed too.

---

## 3. Creating and Removing Elements

```javascript
const list = document.getElementById("list");

// Step 1: Create a new list item
const newItem = document.createElement("li");
// Step 2: Add text
newItem.textContent = "Mango";
// Step 3: Add it to the end of the list
list.appendChild(newItem);
// Step 4: Remove the first list item
list.firstElementChild.remove();
```

**Console output:**

```
(nothing printed)
```

**What you see:** The list changes from `Apple, Banana` to `Banana, Mango`.

---

## 4. Event Listener on a Button

### As written (has a typo bug)

```javascript
btn.addEventListener("click", function (event) {
  console.logw("Button clicked!");
  console.log(event.type);
  console.log(event.target.id);
});
```

**Console output (every click):**

```
Uncaught TypeError: console.logw is not a function
```

**Why:** `console.logw` is a typo. The error stops the function, so the other two lines never run.

### Fixed

```javascript
btn.addEventListener("click", function (event) {
  console.log("Button clicked!");
  console.log(event.type);
  console.log(event.target.id);
});
```

**Console output (every click):**

```
Button clicked!
click
btn
```

---

## 5. preventDefault on a Link

```javascript
document.getElementById("harvard").addEventListener("click", function (e) {
  e.preventDefault();
  e.stopPropagation();
  console.log("Harvard link clicked!"); // original message said "Youtube clicked !"
});
```

**Console output (every click on the link):**

```
Harvard link clicked!
```

**What you see:** The page does **not** navigate to Harvard's website, because `preventDefault()` stops the link's default action.

---

## 6. Mode Button (dark / light)

### As written

```javascript
let modeBtn = document.querySelector("#modeBtn");
let currentMode = "light"; //dark

modeBtn.addEventListener("click", () => {
  if (currentMode === "light") {
    currentMode = "dark";
    document.querySelector("body").style.backgroundColor = "#212121";
  } else {
    currentMode = "light";
    document.querySelector("body").style.backgroundColor = "#fff0f0";
  }
  console.log(currentMode);
});
```

**Console output (clicks 1, 2, 3):**

```
dark
light
dark
```

**What you see:**

- **Click 1:** nothing visibly changes, because the page already starts dark (`<body class="body">` has a dark background), but the variable says `'light'`.
- **Click 2:** the background becomes light pink, but the text stays **white**, so it is hard to read.

**Why (bug):** The variable (`'light'`) did not match the real page (dark). Data and page must stay in sync.

### Suggested fix: toggle one CSS class

```css
body.dark {
  background-color: #212121;
  color: #ffffff;
}
body.light {
  background-color: #fff0f0;
  color: #000000;
}
```

```javascript
document.body.classList.add("dark"); // start state matches the page

modeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  document.body.classList.toggle("light");
  console.log(document.body.classList.contains("dark") ? "dark" : "light");
});
```

**Console output (clicks 1, 2, 3):**

```
light
dark
light
```

**What you see:** Every click visibly switches the page, and the text color changes with it.

---

## 7. Forms

```javascript
const form = document.getElementById("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("nameInput").value.trim();
  document.getElementById("greeting").textContent = name
    ? `Hello, ${name}`
    : "Please enter your name";
});
```

**Console output:**

```
(nothing printed)
```

**What you see:**

- Type `Ram` and press Greet → the page shows `Hello, Ram`
- Leave it empty and press Greet → the page shows `Please enter your name`
- The page does **not** reload (because of `preventDefault()`).

---

## 8. Event Bubbling, Capturing, and Stopping

```javascript
const outer = document.getElementById("outer");
const inner = document.getElementById("inner");

// Bubbling
outer.addEventListener("click", () => console.log("outer"));
inner.addEventListener("click", () => console.log("inner"));

// Capturing
outer.addEventListener("click", () => console.log("outer (capture)"), true);

// Stopping the event
inner.addEventListener("click", (event) => {
  console.log("inner (stopping the event)");
  event.stopPropagation();
});
```

**Console output (click the Inner button):**

```
outer (capture)
inner
inner (stopping the event)
```

**Why:**

1. Capturing goes first (outside in), so `outer (capture)` prints first.
2. Both `inner` listeners run, in the order they were added.
3. `stopPropagation()` stops the bubbling, so the plain `outer` listener **never runs**.

**Note:** `stopPropagation()` does not stop other listeners on the _same_ element. That is what `stopImmediatePropagation()` is for.

---

## 9. Event Delegation

```javascript
const list2 = document.getElementById("list");

list2.addEventListener("click", (event) => {
  if (event.target.tagName === "LI") {
    event.target.classList.toggle("done");
  }
});
```

**Console output:**

```
(nothing printed)
```

**What you see:** Clicking `Banana` or `Mango` crosses it out (grey, with a line). Clicking again undoes it. `Mango` was added by JavaScript, and it still works, because the listener is on the parent.

---

## Practice Task 1: Selecting (predict first)

```javascript
console.log("------- Practice -------");
console.log(document.querySelectorAll(".text").length);
console.log(document.querySelector(".missing"));
console.log(document.querySelector(".missing")?.textContent);
```

**Console output:**

```
------- Practice -------
2
null
undefined
```

---

## Practice Task 2: Button changes the heading

```html
<h1 id="h1">Heading 1</h1>
<button id="button2">Practice 2</button>
```

```javascript
const btn2 = document.querySelector("#button2");
const heading2 = document.querySelector("#h1");

btn2.addEventListener("click", function () {
  heading2.textContent = "Clicked!";
  heading2.classList.toggle("highlight");
});
```

**Console output:**

```
(nothing printed)
```

**What you see:**

- **Before clicking:** `Heading 1` and the `Practice 2` button
- **After the 1st click:** the heading says `Clicked!` with the highlight style (light yellow background, red text)
- **After the 2nd click:** still `Clicked!`, but the highlight is removed (toggle)

---

## Practice Task 3: Add an item to a list

```html
<ul id="ToDoList">
  <li>Learn JavaScript</li>
  <li>Practice DOM manipulation</li>
</ul>
<input type="text" id="itemInput" placeholder="Enter a new task" />
<button id="addBtn">Add</button>
```

```javascript
const itemInput = document.getElementById("itemInput");
const addBtn = document.getElementById("addBtn");
const ToDoList = document.getElementById("ToDoList");

addBtn.addEventListener("click", function () {
  const text = itemInput.value.trim();

  // Ignore empty text
  if (text === "") {
    return;
  }

  const newItem = document.createElement("li");
  newItem.textContent = text;
  ToDoList.appendChild(newItem);

  // Clear the input field
  itemInput.value = "";
});
```

**Console output:**

```
(nothing printed)
```

**What you see:**

- Type `Learn Git` and click Add → a third item `Learn Git` appears under the first two, and the input box becomes empty.
- Click Add with an empty box (or only spaces) → nothing happens.

---

## Practice Task 4: Bubbling with three nested elements

```html
<div id="grandparent">
  Grandparent
  <div id="parent">
    Parent
    <div id="child">Child</div>
  </div>
</div>
```

```javascript
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
```

**Console output (click Child, with `stopPropagation()` on the parent):**

```
Child
Parent
```

**Console output (click Child, if you remove `stopPropagation()` from the parent):**

```
Child
Parent
Grandparent
```

**Why:** The click bubbles up from the inside out. `stopPropagation()` on the parent stops it before it reaches the grandparent.

---

## Practice Task 5: Event delegation on a list

```html
<ul id="todoList">
  <li>Learn JavaScript</li>
  <li>Practice event bubbling</li>
  <li>Understand event delegation</li>
</ul>
<button id="addItem">Add New Task</button>
```

```javascript
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

const addItemBtn = document.getElementById("addItem");

addItemBtn.addEventListener("click", function () {
  const newItem = document.createElement("li");
  newItem.textContent = "New JavaScript task";
  todoList.appendChild(newItem);
});
```

**Console output:**

```
(nothing printed)
```

**What you see:**

- Clicking any of the three items crosses it out (grey with a line). Clicking again undoes it.
- Click **Add New Task** → `New JavaScript task` appears at the bottom, and clicking it also crosses it out, with no new listener added.

---

## Practice Task 6: Form with name and age

```html
<form id="userForm">
  <label for="userNameInput">Name:</label>
  <input type="text" id="userNameInput" placeholder="Enter your name" />
  <br /><br />
  <label for="userAgeInput">Age:</label>
  <input type="text" id="userAgeInput" placeholder="Enter your age" />
  <br /><br />
  <button type="submit">Submit</button>
</form>
<p id="message"></p>
```

```javascript
console.log("JavaScript file loaded!");
console.log("Name input:", document.getElementById("userNameInput"));
console.log("Form:", document.getElementById("userForm"));

const userForm = document.getElementById("userForm");
const nameInput = document.getElementById("userNameInput");
const ageInput = document.getElementById("userAgeInput");
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
  message.textContent = `Hello, ${name}! You are ${age} years old.`;
});
```

**Console output (on page load):**

```
JavaScript file loaded!
Name input: <input type="text" id="userNameInput" placeholder="Enter your name">
Form: <form id="userForm">…</form>
```

**What you see:**
| Name | Age | Message on the page |
|---|---|---|
| `Ram` | `25` | `Hello, Ram! You are 25 years old.` |
| (empty) | `25` | `Error: Name cannot be empty.` |
| `Ram` | `abc` | `Error: Please enter a valid number for age.` |
| `Ram` | (empty) | `Error: Please enter a valid number for age.` |

### ⚠️ Bug found and fixed

The original `index.html` had **two inputs with `id="nameInput"`** (the first form and this form). An `id` must be unique, and `getElementById` returns the **first** match. So this form's code was reading the _first form's_ input, and the debug line printed `placeholder="Your name"` instead of `"Enter your name"`.
**Fix:** unique ids (`userNameInput`, `userAgeInput`), as shown above. Optional: also reject negative ages with `age < 0`.

---

## Practical Project: To-Do List (DOM Edition)

### Project-16.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <title>My To-Do List</title>

    <link rel="stylesheet" href="Project-16.css" />
  </head>
  <body>
    <div class="container">
      <h1>My To-Do List</h1>

      <!-- Task Form -->
      <form id="taskForm">
        <input type="text" id="taskInput" placeholder="Enter your task..." />

        <button type="submit">Add Task</button>
      </form>

      <!-- Task List -->
      <ul id="taskList"></ul>

      <!-- Task Counter -->
      <p id="taskCounter">0 tasks left</p>
    </div>

    <script src="Project-16.js"></script>
  </body>
</html>
```

**What you see:** A white card with the heading `My To-Do List`, a text box with an `Add Task` button, an empty list, and the text `0 tasks left`. (JavaScript fills in the real list and counter on load.)

### Project-16.js

```javascript
/*
Why do we keep tasks in an array?

The array is our single source of truth.
Whenever a task is added, deleted, or completed,
we update the array and call render().

This keeps our data and webpage synchronized
and makes the application easier to manage.
*/

// (2) Task array

let tasks = [
  {
    id: 1,
    text: "Learn JavaScript",
    done: false,
  },
  {
    id: 2,
    text: "Practice DOM Manipulation",
    done: false,
  },
];

// (3) render()

function render() {
  const taskList = document.getElementById("taskList");

  taskList.innerHTML = "";

  tasks.forEach(function (task) {
    const li = document.createElement("li");

    // Store task ID
    li.dataset.id = task.id;

    const span = document.createElement("span");

    span.textContent = task.text;

    // Add completed class if task is done
    if (task.done === true) {
      span.classList.add("completed");
    }

    const deleteBtn = document.createElement("button");

    deleteBtn.textContent = "Delete";

    // Identify delete button
    deleteBtn.classList.add("deleteBtn");

    li.appendChild(span);
    li.appendChild(deleteBtn);

    taskList.appendChild(li);
  });

  // Count incomplete tasks
  const remainingTasks = tasks.filter(function (task) {
    return task.done === false;
  }).length;

  // Update counter
  const taskCounter = document.getElementById("taskCounter");

  taskCounter.textContent =
    remainingTasks + (remainingTasks === 1 ? " task left" : " tasks left");
}

// (4) Add new task

const taskForm = document.getElementById("taskForm");

const taskInput = document.getElementById("taskInput");

taskForm.addEventListener("submit", function (event) {
  // Prevent page refresh
  event.preventDefault();

  // Get input value
  const taskText = taskInput.value.trim();

  // Ignore empty input
  if (taskText === "") {
    return;
  }

  // Create new task object
  const newTask = {
    id: Date.now(),
    text: taskText,
    done: false,
  };

  // Add task to array using spread
  tasks = [...tasks, newTask];

  // Clear input field
  taskInput.value = "";

  // Update the page
  render();
});

// (5) Event delegation on ul

const taskList = document.getElementById("taskList");

taskList.addEventListener("click", function (event) {
  // Find the clicked li
  const li = event.target.closest("li");

  // If no li was clicked, stop
  if (!li) {
    return;
  }

  // Get task ID
  const taskId = Number(li.dataset.id);

  // Check if Delete button was clicked
  if (event.target.classList.contains("deleteBtn")) {
    // Remove task using filter()
    tasks = tasks.filter(function (task) {
      return task.id !== taskId;
    });
  }

  // Otherwise, check if task text was clicked
  else if (event.target.tagName === "SPAN") {
    // Toggle done using map()
    tasks = tasks.map(function (task) {
      if (task.id === taskId) {
        return {
          ...task,
          done: !task.done,
        };
      }

      return task;
    });
  }

  // Update the page
  render();
});

// Initial rendering
render();
```

**Console output:**

```
(nothing printed)
```

**What you see (step by step):**

| Action                                     | What the page shows                                                                                        |
| ------------------------------------------ | ---------------------------------------------------------------------------------------------------------- |
| Page loads                                 | `Learn JavaScript` and `Practice DOM Manipulation`, each with a red Delete button. Counter: `2 tasks left` |
| Type `Buy milk` and press **Enter**        | A third task `Buy milk` appears. The input clears. Counter: `3 tasks left`                                 |
| Click the text `Buy milk`                  | `Buy milk` is crossed out (grey). Counter: `2 tasks left`                                                  |
| Click the text `Buy milk` again            | The line disappears (toggle). Counter: `3 tasks left`                                                      |
| Click the Delete button next to `Buy milk` | The task disappears. Counter: `2 tasks left`                                                               |
| Delete one of the other two                | Counter: `1 task left` (singular)                                                                          |
| Type only spaces and press Enter           | Nothing happens                                                                                            |

**The `tasks` array after adding `Buy milk`** (check it with `console.log(tasks)`):

```
[
  { id: 1, text: 'Learn JavaScript', done: false },
  { id: 2, text: 'Practice DOM Manipulation', done: false },
  { id: 1730000000000, text: 'Buy milk', done: false }   // id comes from Date.now(), so it will differ
]
```

### Project-16.css

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
  background-color: #f1f5f9;
  padding: 40px 20px;
}

.container {
  max-width: 500px;
  margin: auto;
  background-color: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

h1 {
  text-align: center;
  margin-bottom: 25px;
  color: #1e293b;
}

form {
  display: flex;
  gap: 10px;
  margin-bottom: 25px;
}

input {
  flex: 1;
  padding: 12px;
  border: 1px solid #cbd5e1;
  border-radius: 6px;
  font-size: 15px;
  min-width: 0;
}

form button {
  padding: 12px 16px;
  background-color: #2563eb;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

ul {
  list-style: none;
}

li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  padding: 12px;
  margin-bottom: 10px;
  background-color: #f8fafc;
  border-radius: 6px;
}

li span {
  cursor: pointer;
  overflow-wrap: anywhere;
}

.completed {
  text-decoration: line-through;
  color: #94a3b8;
}

.deleteBtn {
  padding: 7px 12px;
  background-color: #ef4444;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

#taskCounter {
  margin-top: 20px;
  text-align: center;
  color: #475569;
  font-weight: bold;
}

button:hover {
  opacity: 0.85;
}
```

**What you see:** A centered white card with rounded corners and a soft shadow on a light grey page. The Add Task button is blue, the Delete buttons are red, and completed tasks are grey with a line through them.

**Key ideas in this project:**

- The `tasks` array is the **single source of truth**, and `render()` rebuilds the page from it.
- Updates are **immutable**: `[...tasks, newTask]`, `filter` for delete, and `map` with `{ ...task, done: !task.done }` for toggle. This is how React state updates work.
- `closest("li")` and `dataset.id` find which task was clicked, using **one** delegated listener.
- `textContent` is used for user text (safe). `innerHTML = ""` is used only to clear the list.

---

## Test Q6: Bubbling prediction

```javascript
outer.addEventListener("click", () => console.log("outer"));
inner.addEventListener("click", () => console.log("inner"));
```

**Console output (click the Inner button):**

```
inner
outer
```

```javascript
inner.addEventListener("click", (event) => {
  console.log("inner");
  event.stopPropagation();
});
```

**Console output (click the Inner button, with `stopPropagation()`):**

```
inner
```

**Why:** The click bubbles up from `inner` to `outer`. `stopPropagation()` stops it from reaching `outer`.

---

## Test Q7: What is `event.target`?

```javascript
taskList.addEventListener("click", function (event) {
  console.log(event.target);
  console.log(event.currentTarget);
});
```

**Console output (click a Delete button):**

```
<button class="deleteBtn">Delete</button>
<ul id="taskList">…</ul>
```

**Why:** `event.target` is the element that was actually clicked (the Delete button). `event.currentTarget` is the element the listener is attached to (the `ul`).
