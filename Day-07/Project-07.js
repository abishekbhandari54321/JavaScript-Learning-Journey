//Call Stack Tracer + Scope Playground

function startProcess(){
    console.log("Starting process...");
    validateData();
    console.log("Process finished.");
}

function validateData(){
    console.log("Validating data...");
    saveData();
    console.log("Validation Complete.");
}

function saveData(){
    console.log("Data saved.");
}
startProcess();

/*My Output Prediction:
Starting process...
Validating data...
Data saved.
Validation Complete.
Process finished */     

//Scope Playground:
console.log("............... Scope Playground.................");

let appName = "MyApp"; //global scope

function processOrder(){
    let orderId = 101; //function scope

    if (true){
        let status = "pending"; //block scpoe
        var legacyStatus = "old-pending"; //var will leak

        console.log(appName);
        console.log(orderId);
        console.log(status);
    }

    console.log(legacyStatus); // works -var leaked out of if block
    //console.log(status); //ReferenceError: status is not defined - It is outside of the function so it can't be accessed
    }
processOrder();


console.log("............... Lexical Scope Demo .................");

function bankAccount(){
    let balance = 1000;
     
    function checkBalance(){
        console.log("Current balance: " + balance);
    }
    checkBalance();
}
bankAccount();