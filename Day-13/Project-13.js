// Order System, Promise Edition:


console.log("Day 13 - Order System, Promise Edition");

function validateCart(cart) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Validating cart...");

            if (cart.length > 0) {
                resolve(true);
            } else {
                reject("Cart is empty!");
            }
        }, 500);
    });
}

function processPayment(amount) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Payment of $${amount} processed`);
        }, 1000);
    });
}

function generateInvoice(orderDetails) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const invoice = { id: 1, ...orderDetails };
            console.log(`Invoice #${invoice.id} generated`);
            resolve(invoice);
        }, 500);
    });
}

function sendConfirmationEmail(invoice) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Sending confirmation email...");
            resolve(`Email sent for invoice #${invoice.id}`);
        }, 500);
    });
}

// Test 1: Successful order
const cart = ["Laptop"];
const amount = 500;

validateCart(cart)
    .then(() => processPayment(amount))
    .then((paymentMessage) =>
        generateInvoice({ amount: amount, payment: paymentMessage })
    )
    .then((invoice) => sendConfirmationEmail(invoice))
    .then((message) => {
        console.log(message);
        console.log("Order complete!");
    })
    .catch((error) => console.log(error))
    .finally(() => console.log("Order process finished"));

// Test 2: Empty cart
validateCart([])
    .then(() => processPayment(amount))
    .then((paymentMessage) =>
        generateInvoice({ amount: amount, payment: paymentMessage })
    )
    .then((invoice) => sendConfirmationEmail(invoice))
    .then((message) => {
        console.log(message);
        console.log("Order complete!");
    })
    .catch((error) => console.log(error))
    .finally(() => console.log("Order process finished"));

/*
The Promise version is easier to read and maintain
because it avoids deeply nested callbacks.
*/
