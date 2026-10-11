// Simulated Online Order System (Callback-Based):

// Task 1: Validate Cart
function validateCart(cart, callback) {
    setTimeout(function() {
        console.log("Validating cart...");

        if (cart.length > 0) {
            console.log("Cart is valid!");
            callback(true);
        } else {
            callback(false);
        }
    }, 500);
}

// Task 2: Process Payment
function processPayment(amount, callback) {
    setTimeout(function() {
        console.log(`Processing payment of $${amount}...`);
        console.log(`Payment of $${amount} processed`);
        callback(`Payment of $${amount} processed`);
    }, 1000);
}

// Task 3: Generate Invoice
function generateInvoice(orderDetails, callback) {
    setTimeout(function() {
        console.log("Generating invoice...");

        const invoice = { id: 1, ...orderDetails };

        console.log(`Invoice #${invoice.id} generated`);
        callback(invoice);
    }, 500);
}

// Task 4: Send Confirmation Email
function sendConfirmationEmail(invoice, callback) {
    setTimeout(function() {
        console.log("Sending confirmation email...");

        callback("Email sent for invoice #" + invoice.id);
    }, 500);
}

// Task 5: Chain All Four Functions Using Nested Callbacks
const cart = ["Laptop"];
const amount = 500;

validateCart(cart, function(isValid) {
    if (isValid) {
        processPayment(amount, function(paymentMessage) {
            console.log(paymentMessage);

            generateInvoice(
                { amount: amount, payment: paymentMessage },
                function(invoice) {
                    sendConfirmationEmail(invoice, function(message) {
                        console.log(message);
                        console.log("Order complete!");
                    });
                }
            );
        });
    } else {
        console.log("Cart is empty!");
    }
});

/*
Task 6: Why is Callback Hell a Problem?

If we add 3-4 more steps, we will have more nested callbacks.
The code becomes difficult to read, understand, debug, and maintain.
Promises and async/await can help make the code cleaner.
*/
