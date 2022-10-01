console.log("Javascript Tutorial: var, let and constant")
var a = 45;
var b = "Zeon";
var c = null;
var d = undefined
const author = "ZEON"
// author = "D" // Thorws an error as it is declared as a const
// const value; // Need to assign value of the const where it is being defined 
// var can be defined multiple times. So it may cause error in future.
// Making a block
{
    // var b = "this";
    // if we use let then the operation is in the block. Variable is not changed globally
    let b = "this";
    console.log(b)
}
console.log(b)

// Better use let instead of var 
