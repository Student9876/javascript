console.log("Operator in Js");
let a = 45;
let b = 6;

// Arithmatic Operators
console.log("a+b = ", a + b);
console.log("a-b = ", a - b);
console.log("a*b = ", a * b);
console.log("a/b = ", a / b);

// exponential operator 
console.log("a ** b= ", a ** b); // Here 45 is being multiplied 6 times

// Modulus Operator
console.log("a%b = ", a % b); // Gives remainder

//Increment and decrement operator

console.log("a++ = ", a++);
console.log("a = ", a);
console.log("a-- = ", a--);
console.log("a = ", a);

// Assignment Operator 
let assignment = 1;
assignment += 5; // is same as a = a+5
console.log(assignment);
assignment -= 2;
console.log(assignment);
assignment *= 2;
console.log(assignment);
assignment /= 2;
console.log(assignment);
assignment %= 2;
console.log(assignment);


// Comparison Operator
let comp1 = 6;
// let comp2 =7;
let comp2 = "6"; // This compare to be equal to the integer 6 which gives false in ===

console.log("comp1 == comp2 is ", comp1 == comp2);
console.log("comp1 != comp2 is ", comp1 != comp2);
console.log("comp1 === comp2 is ", comp1 === comp2);
console.log("comp1 !== comp2 is ", comp1 !== comp2);
console.log("comp1 > comp2 is ", comp1 > comp2);

// Logical Operators 
let x = 5;
let y = 6;

console.log(x > y && x == 5) // Logical and
console.log(x > y || x == 5) // Logical or
console.log(!false)