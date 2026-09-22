//Multi-User Profile System with this Context

//Part1 - Object Method:
const employee = {
    name:"Ram",
    department: "Technical-Department",
    showDetails: function(){
        console.log(this.name + " works in " + this.department);
    },

    //Part 3 — Arrow Function Behavior:
    //4.Add a method delayedDetails() to employee
    //Arrow Function:
    delayedDetails: function(){
        setTimeout(() => {
            console.log("(Arrow Function inside delayedDetails):");
            console.log(this.name + " works in " + this.department);
        }, 1000);   
    },

     delayedDetailsRegular: function(){
        setTimeout(function(){
            console.log("(Regular Function inside delayedDetails):");
            console.log(this.name + " works in " + this.department);
        }, 1000);   
    }
    
};
employee.delayedDetails();
employee.delayedDetailsRegular();

employee.showDetails();
const showDetail = employee.showDetails;
showDetail();

console.log(".......................................................");

//Part 2 — Fixing Lost this:
console.log("(bind() fixed): ");
const fixedshowDetail = showDetail.bind(employee);
fixedshowDetail();

console.log(".......................................................");

//Part 4 — call/apply on a shared function:
console.log("(call/apply on a shared function): ");

function promote(newTitle, raiseAmount){
    console.log(this.name + " promoted to " + newTitle +" with a raise of " + raiseAmount);
}

const managerA = {name : "Shyam"};
const managerB = {name : "Hari"};

promote.call(managerA, "Senior-Manager", 10000);
promote.call(managerB, "Supervisor", 5000);
promote.apply(managerA, ["Director", 15000]);
promote.apply(managerB, ["CEO", 20000]);

console.log(".......................................................");

//Part 5 — Constructor:
console.log("Constructor: ");

function Employee(name, role) {
        this.name = name;
        this.role = role;

        this.introduce = function(){
            console.log(this.name + " works as a " + this.role);
        };
    }

const employ1 = new Employee("Ashutosh", "Programmer");
const employ2 = new Employee("Shashank", "Project-Head");

employ1.introduce();
employ2.introduce();

console.log(".......................................................");