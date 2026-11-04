const user = { name: "Ram", age: 25, skills: ["JS", "React"] };

const jsonText = JSON.stringify(user);
console.log(jsonText);
console.log(typeof jsonText);

const backToObject = JSON.parse(jsonText);
console.log(backToObject.name);

// Invalid JSON Throws an Error:
try {
    JSON.parse("{name: 'Ram'}");
} catch (error) {
    console.log("Invalid JSON");
}