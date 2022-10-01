// Question 1
console.log("Create a variable of type string and try to add a number in it");

let a = "ZEON";
let b = 6;
console.log(a + b); // it concatenates. Prints ZEON6

console.log("trying to add a number to that string");
// Question 2
console.log(typeof (a + b)); // prints "string"

// Question 3
console.log("Declare a const object, Can you change it to hold a number later?");
const c = {
    name: "Zeon",
    section: 1,
    isPrincipal: false
}
//  c = "Harry"; c = 56; // This lines throws error as we cannot change const 


// Question 4
console.log("Try to add a new key to the const object");
c['freind'] = "Shuvam"; // We can add new keys to new objects
console.log(c); // c is reference to that object
c['name'] = "Shou" // name key value is updated
console.log(c);

// Question 4
console.log("Using object Make a dictionary of 5");
const dict = {
    appreciate:"recognize the full worth of.",
    remove:"take (something) away or off from the position occupied",
    locate:" discover the exact place or position of."

}
console.log(dict.appreciate);