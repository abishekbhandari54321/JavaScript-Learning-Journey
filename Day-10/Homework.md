# Day 10 — Test Questions & Correct Answers

### Q1. What is a prototype, in your own words? Why does it matter for memory/performance?

**Answer:** A prototype is an object that other objects can inherit properties and methods from — like a shared toolbox. It matters for memory/performance because methods defined on a prototype exist ONCE and are shared by every instance, instead of each object carrying its own separate copy.

---

### Q2. What is the prototype chain? How is it similar to Day 7?

**Answer:** The prototype chain is how JavaScript searches for a property: check the object itself, then its prototype, then that prototype's prototype, and so on, until found or until reaching `null`. This mirrors the Day 7 scope chain, which searches inner scope → outer scope → global scope when looking for a variable — both use the same "search outward until found" principle.

---

### Q3. Difference between a constructor-defined method and a class method?

**Answer:** Defining a method inside the constructor (`this.method = function(){}`) creates a brand new, separate copy of that function for EVERY instance created — wasteful if you create many objects. Defining it as a class method, outside the constructor, places it once on the class's prototype, shared by all instances — much better for memory efficiency and performance.

---

### Q4. Explain `extends` and `super()`.

**Answer:** `extends` lets a child class inherit all properties and methods from a parent class. `super()` (called inside the child's constructor, as a function call) runs the PARENT's constructor — delegating shared setup logic to the parent instead of rewriting it. Separately, `super.methodName()` (used inside any child method) calls the PARENT's version of that specific method. Both use the `super` keyword, but `super()` targets the parent's constructor, while `super.method()` targets a parent's regular method.

---

### Q5. Difference between a regular method and a getter?

**Answer:** A regular method is called WITH parentheses (`obj.methodName()`) and must be explicitly invoked. A getter LOOKS like a property when used (`obj.propertyName`, no parentheses) but still runs code behind the scenes every time it's accessed. Developers choose getters when a value should behave like a simple property from the outside while still being calculated or validated internally.

---

### Q6. Predict the output:

```javascript
class Animal {
  speak() {
    console.log("Some generic sound");
  }
}
class Dog extends Animal {
  speak() {
    console.log("Woof!");
  }
}
const myPet = new Dog();
myPet.speak();
console.log(myPet instanceof Animal);
console.log(myPet instanceof Dog);
```

**Answer:** Output:

```
Woof!
true
true
```

`myPet.speak()` prints `"Woof!"` because `Dog`'s own `speak()` overrides `Animal`'s version — found on `Dog.prototype` first. `myPet instanceof Animal` is `true` because `Dog extends Animal`, so `Animal` exists somewhere in `myPet`'s prototype chain. `myPet instanceof Dog` is `true` since `myPet` was created directly with `new Dog()`.

---

### Q7. If you tried `book.totalBooks` (instance instead of class), what happens?

**Answer:** `book.totalBooks` would print `undefined`, NOT throw an error. Static properties belong to the class itself (`Book.totalBooks`), not to instances or even to `Book.prototype` — so when JavaScript searches `book`'s prototype chain for `totalBooks`, it never finds it anywhere in that chain, and returns `undefined` — the same behavior as accessing any other property that doesn't exist.
