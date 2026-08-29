if ("0") {
    console.log("A");
} else {
    console.log("B");
}

if ([]) {
    console.log("C");
} else {
    console.log("D");
}

console.log("...............................");

let x = "5";
switch (x) {
    case 5:
        console.log("number");
        break;
    case "5":
        console.log("string");
        break;
}

console.log("...............................");

//if
let age = 20;
if(age>=18){
    console.log("You are an Adult");
}
console.log("...............................");

//if..else
let Age = 15;
if(Age>=18){
    console.log("You are an Adult");
}else{
    console.log("You are a Child");
}
console.log("...............................");

//if..else if...else
let marks=75;
if(marks>=90){
    console.log("Outstanding");
}
else if(marks>=80){
    console.log("A")
}
else if(marks>=70){
    console.log("B")
}
else if(marks>=60){
    console.log("C")
}   
else if(marks>=50){
    console.log("D")
}
else{
    console.log("Fail");
}

console.log("...............................");

//Nested condition:
let AGE=20;
let hasVoterCard=true;
if(AGE>=18){
    if(hasVoterCard){
        console.log("You are eligible to vote");
    }
    else{
        console.log("You donot have a voter card");
    }
}
else{
    console.log("You are not eligible to vote");
}

console.log("...............................");

let day=4;

switch(day){
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;      
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;
    default:
        console.log("Invalid Input");
}
console.log("...............................");

//Loops
//For loop
let i;
for(i=1;i<=5;i++){
    console.log(i);
}
console.log("...............................");

//while
let j=1;
while(j<=5){
    console.log(j);
    j++;
}
console.log("...............................");

//do..while
let k=5;
do{
    console.log(k);
    k++;
}
while(k<=3);

console.log("...............................");

//break
for(i=1;i<=5;i++)
   if(i==3){
      break; //stops entirely
}
console.log(i)

console.log("...............................");

//continue
for(i=1;i<=5;i++)
    if(i==3){
        continue; //skips 3 and continue
    }
console.log(i)

