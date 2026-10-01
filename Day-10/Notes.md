# Day 10 — Prototypes + Classes — Notes

## 1. How Objects Work Internally

- Every object has a hidden internal link to a PROTOTYPE object.
- When a property/method isn't found directly on an object, JavaScript automatically checks its prototype.
- This is why ALL objects can use methods like `toString()` — inherited from `Object.prototype`.

## 2. Prototypes

- A prototype is a shared object other objects inherit properties/methods from — like a shared toolbox.
- Defining a method on `Constructor.prototype.methodName = function(){}` means it exists ONCE and is shared by every instance.
- Defining a method INSIDE a constructor (`this.method = function(){}`) creates a NEW separate copy for every single instance — wasteful for memory/performance at scale.

## 3. Prototype Chain

- JavaScript searches: object itself → its prototype → that prototype's prototype → ... → `null`.
- Mirrors the Day 7 Scope Chain (inner scope → outer scope → global scope) — same "search outward until found" principle, applied to objects instead of variables.

## 4. hasOwnProperty()

- Checks if a property/method is defined DIRECTLY on the object (`true`), or inherited through the prototype chain (`false`).
- Useful for proving whether a class method lives on the prototype (shared) vs. directly on the instance (duplicated).

## 5. Classes

- Modern, cleaner syntax for constructor functions + prototype methods — classes are NOT a replacement for prototypes, they're a nicer way to WRITE them.
- `constructor(...)` runs automatically when using `new ClassName(...)`.
- Methods written directly inside a class (outside the constructor) are automatically placed on the class's prototype — shared across all instances.
- Classes MUST be created with `new` — calling without `new` throws an error (unlike regular functions).
- `typeof SomeClass` is `"function"` — proof that classes are still functions underneath.

## 6. Inheritance — extends and super

- `class Child extends Parent` — Child inherits everything Parent has.
- `super(...)` — called INSIDE the child's constructor, as a function call — runs the PARENT's constructor, handling shared setup logic.
- `super.methodName()` — called inside any child method — runs the PARENT's version of that specific method, letting you build ON TOP of it (method overriding with extension) rather than fully replacing it.

## 7. Getters and Setters

- `get propertyName() {...}` — lets a method be accessed like a plain property (no parentheses), while still running code/calculating a value behind the scenes.
- `set propertyName(value) {...}` — lets an assignment (`obj.prop = value`) trigger validation or custom logic before actually storing the value.
- Common pattern: store the real value in a differently-named property (e.g. `_balance`), and expose controlled access through `get balance()`/`set balance()`.
- Good practice: route constructor assignments through the setter too (`this.price = price;` instead of `this._price = price;`), so validation applies at creation time as well as later updates.

## 8. Static Methods and Properties

- Belong to the CLASS itself, not to individual instances.
- Called directly on the class name: `ClassName.staticMethod()`, `ClassName.staticProperty`.
- Shared across ALL instances — useful for counters, utility functions, or anything that doesn't need a specific instance's data.
- Accessing a static property through an INSTANCE (e.g. `instance.staticProperty`) does NOT throw an error — it returns `undefined`, since the static property was never part of the instance's own data or its prototype chain.

## 9. instanceof

- Checks whether a class appears anywhere in an object's prototype chain.
- `myPet instanceof Dog` → true (created directly from Dog).
- `myPet instanceof Animal` → also true, because `Dog extends Animal`, so Animal is part of the prototype chain too.

## 10. Reinforced rule: missing ≠ error

- Accessing a property/method that doesn't exist anywhere in the prototype chain gives `undefined`, NOT a thrown error.
- This applies to regular missing properties (Day 6, Day 8) AND to static properties accessed via an instance (today) — same underlying behavior.

## 11. Interview-ready Q&A summary

| Question                                         | Answer                                                                                                                   |
| ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| What is a prototype?                             | A shared object other objects inherit methods/properties from                                                            |
| Why avoid defining methods inside a constructor? | Creates a separate copy per instance — wasteful; prototype methods are shared once                                       |
| What is the prototype chain?                     | The search path: object → prototype → prototype's prototype → null                                                       |
| extends vs super()?                              | extends inherits a parent class; super() calls the parent's constructor; super.method() calls a parent's specific method |
| Getter vs regular method?                        | Getter is accessed like a property (no parentheses) but still runs code                                                  |
| Static property via instance?                    | Returns undefined, not an error — static belongs to the class, not instances                                             |
