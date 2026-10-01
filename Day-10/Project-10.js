// Library Management System with Class Inheritance:

// Part 1 — Base Class

console.log("-------------------------- Part 1 — Base Class ------------------------------ ");

/* Part 1 — Base Class

Create a class Book with a constructor taking title, author, and price.
Add a method getSummary() that logs "[title] by [author] - $[price]".
Add a static property totalBooks = 0 on the class, and increment it inside the constructor every time a new Book is created.
Add a getter discountedPrice that returns the price with a 10% discount applied (just the calculation, don't store it separately).
Add a setter price that only allows setting a new price if it's a positive number (log an error otherwise). */

class Book {

    static totalBooks = 0;

    constructor(title, author, price) { 
        this.title = title;
        this.author = author;
        this.price = price;   

        Book.totalBooks++;
    }

    getSummary(){
        console.log(`${this.title} by ${this.author} - $ ${this.price}`);
    }

    get discountedPrice(){
       const discount = this.price * 10/100;
       //"price with 10% discount applied":
       const result = this.price - discount;

      return result;


    }

    set price(value){
        if(value<=0){
            console.log("Price must be positive.");
        }
        else{
            this._price = value;
        }
    }

    get price(){
        return this._price;
    }
}



console.log("-------------------------- Part 2 — Inheritance ------------------------------ ");

// Part 2 — Inheritance:

/* Part 2 — Inheritance
6. Create a class EBook that extends Book, adding a fileSizeMB property.
7. Override getSummary() in EBook to call the parent's version (super.getSummary()), then add an extra line: "File size: [fileSizeMB]MB". */

class EBook extends Book{
    constructor(title, author, price, fileSizeMB){
        super(title, author, price); // calls thje parent properties
        this.fileSizeMB = fileSizeMB;
    }

    getSummary(){
        super.getSummary(); // calls the parent's version first
        console.log("File Size (MB): " + this.fileSizeMB);
    }
}



console.log("-------------------------- Part 3 — Using It All ------------------------------ ");

/* Part 3 — Using It All
8. Create at least 3 Book/EBook instances (mix of both types).
9. Call getSummary() on each.
10. Log Book.totalBooks to show the static counter tracking ALL instances (both Book and EBook, since EBook inherits from Book).
11. Use hasOwnProperty("getSummary") on one instance to PROVE the method lives on the prototype, not the object itself — log the result.
12. Test your getter and setter — try setting an invalid (negative) price on one book and confirm the error message shows, then confirm the price didn't actually change. */

const book = new Book("Python", "Dennis Ritchie", 600);
const book2 = new Book("Java", "James Gosling", 400);
book.getSummary();
console.log("Discounted Price (GET): " + book.discountedPrice);
book.price = -200;
console.log("Price (GET): " + book.price);

book2.getSummary();
console.log("Discounted Price (GET): " + book2.discountedPrice);
book2.price = -200;
console.log("Price (GET): " + book2.price);

const ebook = new EBook("C++","Bjarne Stroustrup", 800, 50);
ebook.getSummary();

console.log("Static Property: " + Book.totalBooks);

console.log(ebook.hasOwnProperty("getSummary"));