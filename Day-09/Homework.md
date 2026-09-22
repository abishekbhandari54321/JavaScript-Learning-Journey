# Day 9 — Test Questions & Correct Answers

### Q1. What does `this` refer to? What's the "golden rule"?

**Answer:** `this` refers to the object currently calling/running the function. Its value is decided at the moment the function is CALLED, not where it's written. Golden rule: "What matters is HOW a function is called, not WHERE it's written."

---

### Q2. Why does storing a method in a separate variable and calling it alone cause `this` to break?

**Answer:** When you write `const fn = car.getBrand;`, you're copying just the FUNCTION itself into `fn` — not the connection to `car`. When you later call `fn()`, there's no object before the dot, so `this` has nothing to attach to, and it falls back to the global object (or `undefined` in strict mode) instead of `car`.

---

### Q3. Why do arrow functions behave differently with `this` compared to regular functions?

**Answer:** Regular functions get their OWN `this`, decided fresh every time they're called, based on HOW they're called (object before the dot, or not). Arrow functions do NOT get their own `this` at all — instead, they "borrow" `this` from the surrounding code where they were WRITTEN, exactly like how closures remember variables from their outer scope. This is why an arrow function inside an object method correctly keeps `this` pointing to the object, even when called later (e.g. inside `setTimeout`), while a regular function in the same position loses it.

---

### Q4. What's the difference between `call()` and `apply()`? What's the difference between both and `bind()`?

**Answer:** `call()` and `apply()` both run the function immediately — the only difference between them is how arguments are passed: `call()` takes them one by one, `apply()` takes them as a single array (memory trick: "Apply needs an Array"). `bind()` is different from both — it does NOT run the function immediately. Instead, it returns a brand new function with `this` permanently locked in, ready to be called later, whenever you want — and its arguments are passed one by one, like `call()`.

---

### Q5. Predict the output:

```javascript
const obj = {
  name: "Test",
  regular: function () {
    console.log(this.name);
  },
  arrow: () => {
    console.log(this.name);
  },
};
obj.regular();
obj.arrow();
```

**Answer:** Output:

```
Test
undefined
```

`obj.regular()` is called with `obj` before the dot, so `this` correctly refers to `obj`, giving `"Test"`. `obj.arrow()` is an arrow function, so it doesn't get its own `this` — it borrows `this` from where it was written, which here is the outer/global scope, where `this.name` doesn't exist — giving `undefined`.

---

### Q6. Predict the output:

```javascript
function sayName() {
  console.log(this.name);
}
const person = { name: "Kiran" };
const boundFn = sayName.bind(person);
const result = boundFn();
console.log(result);
```

**Answer:** The output is:

```
Kiran
undefined
```

`boundFn()` runs `sayName` with `this` bound to `person`, which prints `"Kiran"` via `console.log` inside the function. But `sayName` never uses `return`, so calling it gives back `undefined` by default — that's what gets stored in `result`, and that's what the final `console.log(result)` prints. This shows the difference between a function's SIDE EFFECT (printing something) and its RETURN VALUE (what you actually get back to use elsewhere).
