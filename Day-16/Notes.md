# Day 16 — DOM + Events — Notes

## 1. What is the DOM?

- The DOM (Document Object Model) is the browser's TREE of objects that represents the HTML page.
- JavaScript reads and changes this tree, and the page updates on screen.
- HTML alone is fixed. The DOM lets JavaScript respond to the user (show messages, add items, validate forms).
- DOM code runs in the browser, not in Node.js. Put the `<script>` tag at the END of `<body>` so the elements exist when the code runs.

## 2. Selecting elements

| Method                    | Returns                                   |
| ------------------------- | ----------------------------------------- |
| `getElementById("id")`    | The one element with that id, or `null`   |
| `querySelector("css")`    | The FIRST match, or `null`                |
| `querySelectorAll("css")` | A NodeList of all matches (empty if none) |

- `querySelector` accepts any CSS selector (`"#title"`, `".text"`, `"ul li"`).
- A NodeList has `forEach`, but NOT `map` or `filter`. Convert first with `Array.from(list)` or `[...list]`.
- A missing element gives `null`. Reading a property on `null` crashes. Use optional chaining: `document.querySelector(".x")?.textContent`.
- IDs must be UNIQUE. `getElementById` returns the FIRST match, so duplicate ids cause code to read the wrong element.

## 3. Changing content, styles, attributes

- `textContent` sets plain text (safe). Setting it replaces ALL children of the element (including nested elements).
- `innerHTML` parses HTML. Risky with user input (XSS attacks). Use `textContent` for anything a user types. Using `innerHTML = ""` just to clear a list is safe.
- `innerText` respects CSS (skips hidden elements); `textContent` includes hidden text.
- `element.style.color = "blue"` sets inline styles (camelCase names like `backgroundColor`).
- `classList.add / remove / toggle / contains`: PREFERRED. Keep styling in CSS and logic in JavaScript. One class can apply many styles at once.
- Attributes: `getAttribute`, `setAttribute`, and properties like `btn.disabled = true`.
- `data-*` attributes are read with `element.dataset.name` (for example `li.dataset.id`).

## 4. Creating and removing elements

1. `document.createElement("li")` creates an element in memory only.
2. Set its content (`textContent`).
3. `parent.appendChild(element)` puts it in the page.
4. `element.remove()` deletes it from the page.

## 5. Events

- An event is something that happens (click, input, submit, keydown). A listener is a callback function that runs when it happens.
- `element.addEventListener("click", handler);` Pass the function itself: `handler`, NOT `handler()` (same `bye` vs `bye()` rule from Day 5).
- The handler receives an event object: `event.type`, `event.target`, `event.currentTarget`.
- `event.target` = the element actually clicked. `event.currentTarget` = the element the listener is attached to.
- Event callbacks run as TASKS in the Event Loop (Day 15).
- In a regular `function`, `this` is the element. In an arrow function it is not, so prefer `event.target` / `event.currentTarget`.
- `event.preventDefault()` stops the browser's default action (a link navigating, a form reloading the page).

## 6. Forms

- Listen to the form's `submit` event (not the button's click), so pressing Enter works too.
- Always call `event.preventDefault()`, or the page reloads and your JavaScript results disappear.
- `input.value` reads what the user typed. `.trim()` removes extra spaces.
- Validate: empty text, `Number(text)` with `Number.isFinite(...)`, and also negative values if they make no sense.

## 7. Event bubbling and capturing ⭐

- An event travels through the parents of the clicked element:
  - Capturing phase (down): document → outer → inner
  - Target phase: the clicked element
  - Bubbling phase (up): inner → outer → document
- By default, listeners run in the BUBBLING phase (inside out).
- Pass `true` as a third argument to listen in the CAPTURING phase. Capturing listeners run first.
- `event.stopPropagation()` stops the event from traveling further. It does NOT stop other listeners on the SAME element (`stopImmediatePropagation()` does).

## 8. Event delegation ⭐

- Put ONE listener on the parent and use `event.target` to see which child was clicked.
- Two big reasons: (1) fewer listeners (less memory and code), (2) it works for children added LATER, with no new listeners.
- `event.target.closest("li")` finds the row even when a child inside it (like a button) was clicked.
- Common use: to-do lists, product lists, tables, menus.

## 9. Pattern learned: render from an array ⭐

- Keep data in a JavaScript array (the single source of truth): `{ id, text, done }`.
- A `render()` function clears and rebuilds the page from the array.
- Update with new arrays, not by editing the old one:
  - add: `tasks = [...tasks, newTask]`
  - delete: `tasks = tasks.filter(t => t.id !== id)`
  - toggle: `tasks = tasks.map(t => t.id === id ? { ...t, done: !t.done } : t)`
- Then call `render()` again.
- This is exactly the idea React uses: the UI is a result of your data.

## 10. Bugs found today and how to avoid them

1. **Typo `console.logw`:** throws "not a function" and stops the rest of the handler. Always check the Console for red errors.
2. **Duplicate ids:** `getElementById` returned the first element, so the wrong input was read. Keep every id unique.
3. **Variable not matching the page:** `currentMode = 'light'` while the page was dark. State and page must stay in sync.
4. **Light mode with white text:** changing only the background color left unreadable text. Toggle one CSS class with `classList` instead of editing inline styles.
5. **Messages that don't match the code:** "Youtube clicked" on a Harvard link. Keep labels accurate.
6. **Almost-identical names:** `todoList` vs `ToDoList` are two different variables or ids. Use clearly different names.

## 11. Why this matters for React

- React was created because updating the DOM by hand (create, set, remove, keep in sync) becomes messy. In React you describe the UI from data (arrays and objects with `map`), and React updates the DOM for you.
- `onClick={handleClick}` is the same idea as `addEventListener`. `onClick={handleClick()}` has the same bug as `addEventListener("click", handleClick())`.
- Immutable updates (spread, filter, map) are exactly how React state is updated.

## 12. Interview-ready Q&A summary

| Question                               | Answer                                                                                                       |
| -------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| What is the DOM?                       | The browser's tree of objects for the page. JavaScript reads and changes it                                  |
| querySelector vs querySelectorAll?     | First match or `null` vs a NodeList of all matches (empty if none)                                           |
| textContent vs innerHTML?              | textContent is plain text (safe). innerHTML parses HTML (risky with user input, XSS)                         |
| Why classList over style?              | Keeps styling in CSS, easier to toggle and reuse, keeps files separate                                       |
| What does preventDefault do on submit? | Stops the page from reloading so JavaScript can handle the form                                              |
| Bubbling vs capturing?                 | Bubbling goes inside out (default). Capturing goes outside in and runs first                                 |
| What does stopPropagation do?          | Stops the event from traveling to other elements. Other listeners on the same element still run              |
| What is event delegation?              | One listener on the parent, use `event.target` to find the child. Fewer listeners and works for new children |
| event.target vs currentTarget?         | target = the clicked element. currentTarget = the element the listener is on                                 |
