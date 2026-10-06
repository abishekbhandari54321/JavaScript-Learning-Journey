// Safe User Profile Viewer:

const user1 = {
    name: "Ram",
    age: 25,
    address: {
        country: "India",
        city: "Ayodhya"
    },
    settings: {
        notifications: false
    }
};

const user2 = {
    name: "Shyam",
    age: 22
};

const user3 = {
    name: "Hari",
    age: 0,
    settings: {
        notifications: true
    }
};


// Function to display user profile

function displayProfile(user) {

    // Destructuring
    const { name, age } = user;
    console.log(name, age);

    // Optional chaining + nullish coalescing
    const city = user.address?.city ?? "Not provided";
    const country = user.address?.country ?? "Not provided";
    const notifications = user.settings?.notifications ?? true;

    // Template literal
    console.log(`Name: ${name}, Age: ${age}, City: ${city}, Country: ${country}, Notifications: ${notifications}`);
}


// 1. Run displayProfile() on all three users

console.log("----- User 1 -----");
displayProfile(user1);

console.log("----- User 2 -----");
displayProfile(user2);

console.log("----- User 3 -----");
displayProfile(user3);


// 2. Create updatedUser1 using spread

const updatedUser1 = {
    ...user1,
    address: {
        ...user1.address,
        city: "Rameshwaram"
    }
};


// Check updated user

console.log("----- Updated User 1 -----");
displayProfile(updatedUser1);


// Confirm original user1 was NOT changed

console.log("Original user1 city:", user1.address.city);
console.log("Updated user1 city:", updatedUser1.address.city);

