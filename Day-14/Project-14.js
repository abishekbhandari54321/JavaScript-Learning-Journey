// Project-14:
console.log("----------- Day 14: Order System, async/await Edition -----------");

// Task 1: Validate Cart
function validateCart(cart) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Validating cart...");

            if (cart.length > 0) {
                console.log("Cart is valid!");
                resolve(cart);
            } else {
                console.log("Cart is empty!");
                reject("Cannot place order with an empty cart.");
            }
        }, 1000);
    });
}

// Task 2: Process Payment
function processPayment(amount) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Processing payment...");

            console.log(`Payment of ₹${amount} successful!`);
            resolve("Payment successful");
        }, 1000);
    });
}

// Task 3: Generate Invoice
function generateInvoice(cart, amount) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Generating invoice...");

            const invoice = {
                items: cart,
                totalAmount: amount
            };

            console.log("Invoice generated!");
            resolve(invoice);
        }, 1000);
    });
}

// Task 4: Send Confirmation Email
function sendConfirmationEmail(invoice) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Sending confirmation email...");

            console.log("Confirmation email sent!");
            resolve("Email sent successfully");
        }, 1000);
    });
}

// Task 5: Place Order using async/await
async function placeOrder(cart, amount) {
    try {
        // Wait for each step to complete before starting the next.
        const validCart = await validateCart(cart);

        await processPayment(amount);

        const invoice = await generateInvoice(validCart, amount);

        await sendConfirmationEmail(invoice);

        console.log("Order complete!");

    } catch (error) {
        // Handles errors from any rejected Promise above.
        console.log(error);

    } finally {
        // Executes whether the order succeeds or fails.
        console.log("Order process finished");
    }
}

// Task 6: Run tests sequentially
async function runTests() {
    console.log("\n===== TEST 1: Successful Order =====");

    await placeOrder(["Laptop"], 50000);

    console.log("\n===== TEST 2: Empty Cart =====");

    await placeOrder([], 0);
}

runTests();

/*
Comparison of all three styles:

1. Callbacks: Each step passes a callback to the next step.
   This can become difficult to read when many steps are nested.

2. Promises: Use .then() to handle successful results and .catch()
   to handle errors. The code is easier to chain than nested callbacks.

3. Async/await: Makes Promise-based code look like ordinary,
   step-by-step code. try/catch handles errors, and finally runs
   cleanup or completion code regardless of success or failure.
*/


/* Output: 
----------- Day 14: Order System, async/await Edition -----------

===== TEST 1: Successful Order =====
Validating cart...
Cart is valid!
Processing payment...
Payment of ₹50000 successful!
Generating invoice...
Invoice generated!
Sending confirmation email...
Confirmation email sent!
Order complete!
Order process finished

===== TEST 2: Empty Cart =====
Validating cart...
Cart is empty!
Cannot place order with an empty cart.
Order process finished

*/