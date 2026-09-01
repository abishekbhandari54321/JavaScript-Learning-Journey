// Billing System Project:

function calculateTotal(price, quantity){
    return price * quantity;
}

const total = calculateTotal(600, 2);
console.log("Raw-Total: " + total);

console.log("........................................................");


function applyDiscount(total){
    if(total > 1000){
        const discount = total * 0.1;
        return discount;
    }
    else{
        console.log("No discount applied.");
        return 0;
    }  
}
const discount = applyDiscount(total);
console.log("Discount: " + discount);

console.log("........................................................");


function calculateFinalAmount(total, discount){
    return total - discount;
}
const finalAmount = calculateFinalAmount(total, discount);
console.log("Final Amount: " + finalAmount);

console.log("........................................................");


function generateReceipt(itemName, total, callback){
    console.log("Item: " + itemName);
    console.log("Total: " + total);
    callback();
}

function thankYouMessage(){
    console.log("Thank you for shopping with us!");
}

generateReceipt("Laptop", finalAmount, thankYouMessage);




