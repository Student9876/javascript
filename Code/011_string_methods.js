let name = "Zeon"
let s = "ThisIsAlongString"
// For string length
console.log(name.length)

// For converting all characters to uppercase or lowercase
console.log(name.toUpperCase())
console.log(name.toLowerCase())

// To slice a string
// This will print characters starting from index 2 upto 7 (<7)
console.log(s.slice(2, 7))
console.log(s.slice(4)) // This will go from index 4 till the end

// to replace a string or a part of the string 
console.log(name.replace("on", "one"))

// To mix strings, This merges strings and add additional strings 
let friend = "Naman"
console.log(name.concat(" is a friend of ", friend, " ok"))

// To trim spaces from a string
let friend2 = "     Saikat      "
console.log(friend2)
console.log(friend2.trim())

// Concatenating strings
let fr1 = "Abhi" + "Sayantan" + "saikat"
console.log(fr1)