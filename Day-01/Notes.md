# JavaScript Day 01 — Notes

## 1. What is JavaScript?

JavaScript is a programming language used to make web pages and web applications dynamic and interactive.

It adds behavior and functionality to a webpage.

For example, JavaScript can be used to:

- Handle button clicks
- Show or hide content
- Validate forms
- Change webpage content
- Create interactive features

JavaScript can be used for both frontend and backend development.

---

# 2. HTML, CSS, and JavaScript

HTML, CSS, and JavaScript have different roles in web development.

A simple way to remember them is:

```text
HTML       → Structure
CSS        → Appearance
JavaScript → Behavior
```

---

## HTML — Structure

HTML stands for **HyperText Markup Language**.

HTML provides the structure of a webpage or web application.

It creates the basic or raw structure of the webpage.

### House Example

Think about building a house.

HTML is like:

- Bricks
- Walls
- Doors
- Windows
- Rooms

HTML creates the basic structure of the house.

---

## CSS — Appearance

CSS stands for **Cascading Style Sheets**.

CSS is used to make a webpage attractive and improve its appearance.

CSS can control things such as:

- Colors
- Fonts
- Text size
- Spacing
- Layout
- Backgrounds
- Borders

### House Example

HTML creates the raw house.

CSS is like:

- Painting the house
- Choosing colors
- Designing the rooms
- Improving the appearance

---

## JavaScript — Behavior

JavaScript adds behavior and functionality to a webpage.

For example:

- A button performs an action when clicked.
- A menu opens when clicked.
- A form checks user input.
- Content changes when the user interacts with the page.

### House Example

```text
HTML       → Structure
CSS        → Appearance
JavaScript → Behavior
```

---

# 3. Why is JavaScript Important?

JavaScript is important in web development because it can be used for both frontend and backend development.

### Frontend

JavaScript can run inside a web browser.

It can make webpages:

- Dynamic
- Interactive
- Responsive to user actions

### Backend

JavaScript can also run outside the browser using Node.js.

This allows JavaScript to be used for backend development.

---

# 4. Where Can JavaScript Run?

JavaScript can run in different JavaScript environments.

Two important environments are:

1. Browser
2. Node.js

---

## Browser

JavaScript can run inside a web browser using the browser's JavaScript engine.

Examples of browsers include:

- Google Chrome
- Microsoft Edge
- Mozilla Firefox
- Safari

---

## Node.js

Node.js is a JavaScript runtime environment that allows JavaScript to run outside the browser.

It is commonly used for backend development.

---

# 5. What is Node.js?

Node.js is a JavaScript runtime environment.

It allows JavaScript code to run outside the browser.

For example, we can create a JavaScript file:

```javascript
console.log("Hello World");
```

Then we can run it using Node.js from the terminal:

```bash
node filename.js
```

For example, if the file is named `Day-01.js`:

```bash
node Day-01.js
```

---

# 6. Running JavaScript with Node.js

If a JavaScript file is named:

```text
Day-01.js
```

we can run it from the VS Code terminal using:

```bash
node Day-01.js
```

Example:

```javascript
console.log("Hello World");
```

Output:

```text
Hello World
```

---

# 7. console.log()

`console.log()` is used to display a value or message in the console.

### Example

```javascript
console.log("Hello World");
```

Output:

```text
Hello World
```

It can also display numbers:

```javascript
console.log(100);
```

Output:

```text
100
```

It can also display boolean values:

```javascript
console.log(true);
```

Output:

```text
true
```

---

# 8. JavaScript is Case-Sensitive

JavaScript is case-sensitive.

This means uppercase and lowercase letters are treated as different.

For example:

```javascript
console.log("Hello");
```

and:

```javascript
Console.log("Hello");
```

are not the same.

When using `console.log()`, JavaScript expects:

```text
console
```

not:

```text
Console
```

---

# 9. Comments in JavaScript

Comments are notes written inside the code.

Comments are ignored when JavaScript runs the program.

Comments are useful for explaining code and making code easier to understand.

---

## Single-Line Comment

Use `//` for a single-line comment.

```javascript
// This is a single-line comment
```

Everything after `//` on that line is treated as a comment.

---

## Multi-Line Comment

Use `/* ... */` for a multi-line comment.

```javascript
/*
This is a
multi-line comment
*/
```

This allows us to write comments across multiple lines.

---

# 10. Day 01 Quick Revision

```text
HTML       → Structure of a webpage
CSS        → Appearance and styling
JavaScript → Behavior and functionality
```

```text
JavaScript can run in:

1. Browser
2. Node.js
```

```text
console.log()
→ Displays a value or message in the console.
```

```text
//        → Single-line comment

/* ... */ → Multi-line comment
```

```text
JavaScript → Case-sensitive
```

---

# Key Points to Remember

1. JavaScript is a programming language.
2. JavaScript makes webpages dynamic and interactive.
3. HTML provides structure.
4. CSS controls appearance.
5. JavaScript adds behavior and functionality.
6. JavaScript can run in browsers.
7. JavaScript can also run outside the browser using Node.js.
8. `console.log()` displays values or messages in the console.
9. `//` is used for single-line comments.
10. `/* ... */` is used for multi-line comments.
11. JavaScript is case-sensitive.
