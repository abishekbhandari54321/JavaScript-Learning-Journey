const student = {
    name: "Ram",
    age: 22,
    course: "MCA"
};

const jsonData = JSON.stringify(student);
console.log(jsonData);

console.log(typeof student);
console.log(typeof jsonData);

console.log("----------------------------------------------------");

const user = { name: "Ram", age: 25, skills: ["JS", "React"] };

const jsonText = JSON.stringify(user);
console.log(jsonText);
console.log(typeof jsonText);

const backToObject = JSON.parse(jsonText);
console.log(backToObject.name);
console.log(typeof backToObject);

// Invalid JSON Throws an Error:
try {
    JSON.parse("{name: 'Ram'}");
} catch (error) {
    console.log("Invalid JSON");
}

console.log("----------------------------------------------------");

const student2 = {
    name: "Ram",
    age: 22,
    course: "MCA"
};

// Object → String
const jsonText2 = JSON.stringify(student2);

console.log(jsonText2);
console.log(typeof jsonText2);

// String → Object
const newStudent = JSON.parse(jsonText2);

console.log(newStudent);
console.log(typeof newStudent);
console.log(newStudent.name);
console.log(newStudent.age);

/*
console.log("----------- localStorage and sessionStorage -----------");

localStorage.setItem("theme", "dark");
console.log(localStorage.getItem("theme"));
console.log(localStorage.getItem("missing"));

const settings = { theme: "dark", fontSize: 16 };
localStorage.setItem("settings", JSON.stringify(settings));
const saved = JSON.parse(localStorage.getItem("settings"));
console.log(saved.fontSize);

localStorage.removeItem("theme");
console.log(localStorage.getItem("theme"));  */

