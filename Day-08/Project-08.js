//Part 1 : Counter Factory:

function createCounter(){
    let count = 0;

    function increment(){
        count = count + 1;
        console.log(count);
    }

    function decrement(){
        count = count - 1;
        console.log(count);
    }

    function reset(){
        count = 0;
        console.log(count);
    }

    return{increment, decrement, reset};
}

const counterA = createCounter();
const counterB = createCounter();
counterA.increment(1);
counterA.increment(1);
counterA.increment(1);
counterB.increment(1);

console.log(".............................................");

//Part 2 : Secure Vault:

function createVault(correctPassword){
    let password = correctPassword;

    function unlock(attemptPassword){
        if(attemptPassword === password){
            console.log("Access Granted !");
        }
        else{
            console.log("Access Denied !");
        }
    }

    function changePassword(oldPassword, newPassword){
        if(oldPassword === password){
            console.log("Password matched, now you can update the new passord");
            password = newPassword;

        }
        else{
            console.log("Incorrect current password");
        }
    }

    return{unlock, changePassword};
}

const vault = createVault(12345);
vault.unlock(12345);
vault.changePassword(12345, 54321);

console.log(vault.correctPassword);

vault.unlock(54321);
vault.changePassword(11111, 99999);
vault.unlock(54321);
vault.unlock(99999);

console.log(".............................................");


//Part 3 — The Loop Bug, Applied:

for(var i=1; i<=3; i++){
    setTimeout(function(){
        console.log("delayed greeting");
        console.log("Greeting Number: ", i);
    });  
}

//let repects the block scope and it creates a brand new i variable to each loop iteration.
for(let i=1; i<=3; i++){
    setTimeout(function(){
        console.log("delayed greeting");
        console.log("Greeting Number: ", i);
    })
}