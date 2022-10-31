console.log("Practice Questions chapter 2");
// Problem No 1
let age = prompt("What is your age?");
age = Number.parseInt(age); // Converting to integer
if (age > 10 && age < 20) {
  console.log("your age lies between 10 and 20");
}
else {
  console.log("Your age doesn't lies between 10 and 20");
}
// Either run it on replit or browser
// Problem No 2
age = prompt("What is your age?");
age = Number.parseInt(age); // Converting to integer
switch (age) {
  case 12:
    console.log("your age is 12");
  case 13:
    console.log("your age is 13");
  case 14:
    console.log("your age is 14");
  case 15:
    console.log("your age is 15");
  default:
    console.log("Your age is not special");
}

// Problem No 3 
// Javascript program to find the number is divisible by 2 and 3
let num1 = prompt("Enter a number to check if it is divisible by 2 and 3 ");
num1 = Number.parseInt(num1);
if (num1 % 2 == 0 && num1 % 3 == 0) {
  console.log("This number is divisible by 2 and 3");
}
else {
  console.log("This number is divisible by 2 and 3");
}

//Problem No 4
// Javascript program to find the number is divisible either 2 or 3
let num2 = prompt("Enter a number to check if it is divisible by either 2 or 3 ");
num2 = Number.parseInt(num2);
if (num2 % 2 == 0 || num2 % 3 == 0) {
  console.log("This number is divisible by either 2 or 3");
}
else {
  console.log("This number is not divisible by either 2 or 3");
}

//Problem No 5
// Use of ternary operator
let age2 = 19;
let a = age2 > 18 ? "You can drive" : "You cannot drive";
console.log(a);


