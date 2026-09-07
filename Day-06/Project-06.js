// Step 1: Student data
const students = [
    { name: "Abishek", age: 22, marks: 85 },
    { name: "Priya", age: 21, marks: 35 },
    { name: "Rahul", age: 23, marks: 92 },
    { name: "Sita", age: 20, marks: 60 },
    { name: "Karan", age: 22, marks: 45 }
];

// Step 2: Grade calculator
function getGrade(marks) {
    if (marks >= 90) return "Outstanding";
    else if (marks >= 75) return "A";
    else if (marks >= 60) return "B";
    else if (marks >= 40) return "C";
    else return "Fail";
}

// Step 3: Add grade to each student (map)
const studentsWithGrades = students.map((student) => {
    return { ...student, grade: getGrade(student.marks) };
});

// Step 4: Get passing students (filter)
const passingStudents = studentsWithGrades.filter((student) => {
    return student.marks >= 40;
});

// Step 5: Calculate average marks (reduce)
const totalMarks = students.reduce((sum, student) => {
    return sum + student.marks;
}, 0);
const averageMarks = totalMarks / students.length;

// Step 6: Add a new student without mutating original (spread)
const newStudent = { name: "Shyam", age: 20, marks: 80 };
const updatedStudents = [...students, newStudent];
console.log("Students: ", updatedStudents);

// Step 7: Print report (destructuring + forEach)
console.log("=== Class Report ===");
studentsWithGrades.forEach((student) => {
    const { name, age, marks, grade } = student;
    console.log(`${name} (Age ${age}) - Marks: ${marks} - Grade: ${grade}`);
});

console.log("");
console.log("Average Marks:", averageMarks);
console.log("Passing Students:", passingStudents.length);
console.log("Original student count:", students.length);
console.log("Updated student count:", updatedStudents.length);