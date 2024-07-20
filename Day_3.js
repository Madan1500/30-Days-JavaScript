// Activity 1

// Task 1
let num = 10
if(num == 0)
    console.log("zero")
else if(num>0)
    console.log("positive")
else
    console.log("negative")
// Task 2
let age = 18
if(age>=18)
    console.log("You can vote!!!")
else
    console.log("Sorry but you can't vote now")

// Activity 2

// Task 3
let a =10,b=20,c=30;
if(a>=b){
    if(a>=c)
        console.log(`${a} is greatest number`)
    else
        console.log(`${c} is greatest number`)
}else{
    if(b>=c)
        console.log(`${b} is greatest number`)
    else
        console.log(`${c} is greatest number`)
}
// Activity 3

// Task 4
const day = 1
switch(day){
    case 1: console.log("Monday");
            break;
    case 2: console.log("Tuesday");
            break;
    case 3: console.log("Wednesday");
            break;
    case 4: console.log("Thursday");
            break;
    case 5: console.log("Friday");
            break;
    case 6: console.log("Saturday");
            break;
    case 7: console.log("Sunday");
            break;
    default: console.log("Please enter a valid number in the range 1-7")
}
// Task 5
const score = 88
switch (true) {
    case (score >= 90):
        console.log("A grade");
        break;
    case (score >= 80 && score < 90):
        console.log("B grade");
        break;
    case (score >= 70 && score < 80):
        console.log("C grade");
        break;
    case (score >= 60 && score < 70):
        console.log("D grade");
        break;
    case (score < 60):
        console.log("F grade");
        break;
    default:
        console.log("Invalid score");
}
// Activity 4
// Task 6
let number = 24
console.log(number%2==0?"Even":"Odd")

// Activity 5
// Task 7
let year = 2020
if(yaer%4==0 && year%100!=0 || year%400==0)
    console.log("Leap year")
else
    console.log("Not a leap year")