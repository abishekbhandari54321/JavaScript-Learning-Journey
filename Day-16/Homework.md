# Day 16 — Test Questions & Correct Answers

### Q1. What is the DOM? Why does JavaScript need it?

**Answer:** The DOM (Document Object Model) is the browser's tree of objects that represents the HTML page. JavaScript needs it because HTML alone is fixed, and the DOM lets JavaScript read and change content, styles, and elements so the page can respond to the user.

---

### Q2. What is the difference between `querySelector` and `querySelectorAll`? What does each return when nothing matches?

**Answer:** `querySelector` returns the first matching element, or `null` if nothing matches. `querySelectorAll` returns a NodeList of all matching elements, or an empty NodeList if nothing matches.

---

### Q3. What is the difference between `textContent` and `innerHTML`? Why is `innerHTML` risky with user input?

**Answer:** `textContent` gets or sets plain text only. `innerHTML` gets or sets HTML, including tags. `innerHTML` is risky with user input because someone could inject malicious HTML or JavaScript, causing an XSS (Cross-Site Scripting) attack. Use `textContent` for anything a user types.

---

### Q4. Why is `classList` usually better than setting `element.style` directly?

**Answer:** `classList` lets you add, remove, or toggle CSS classes, which keeps styling in CSS and logic in JavaScript. One class can apply many styles at once, it is easy to toggle and reuse, and the code stays cleaner and easier to manage.

---

### Q5. What does `event.preventDefault()` do on a form's submit event? What happens without it?

**Answer:** It stops the browser's default form submission, which would reload the page (or go to another page). Without it, the page reloads and everything your JavaScript did disappears, so your code can't handle the form properly.

---

### Q6. Predict the output and explain. Clicking the button inside `<div id="outer">`:

```javascript
outer.addEventListener("click", () => console.log("outer"));
inner.addEventListener("click", () => console.log("inner"));
```

Then explain what changes if `inner`'s listener also calls `event.stopPropagation()`.

**Answer:**

```
inner
outer
```

The click happens on the button and then bubbles up through its parents, so `inner` runs first and `outer` runs second. If `inner`'s listener also calls `event.stopPropagation()`, the output becomes only:

```
inner
```

because the event is stopped before it bubbles up to `outer`.

---

### Q7. What is event delegation? Give two reasons to use it, and explain what `event.target` is.

**Answer:** Event delegation means adding ONE event listener to a parent element and using `event.target` to find which child was clicked. Two reasons to use it: (1) it uses fewer listeners, so there is less code and less memory; (2) it works for children added later by JavaScript, without adding new listeners. `event.target` is the actual element that triggered the event (for example, the Delete button that was clicked). `event.currentTarget` is the element the listener is attached to (the parent).

---

# Day 16 — Practice Task Corrections

### Task 4: Bubbling with `stopPropagation()` on the parent

**Answer:** Clicking the child prints:

```
Child
Parent
```

`Grandparent` never prints, because `stopPropagation()` on the parent stops the event before it reaches the grandparent. Without `stopPropagation()`, the output would be `Child`, `Parent`, `Grandparent`.

### Task 6: Duplicate ids

**Answer:** The Task 6 form used `id="nameInput"`, which was already used by the first form. `getElementById` returns the FIRST match, so the code read the wrong input. Fix: give every element a unique id (`userNameInput`, `userAgeInput`).
