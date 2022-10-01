// Premitives in Js 
// NN BB SS U 
// null Number Boolean BigInt string symbol undefined 
let a = null;
let b = 345;
let c = true;
let d = BigInt("567") + BigInt("3");
let e = "ZEON";
let f = Symbol("I am a nice symbol");
let g = undefined;
let h; // also undefined
console.log(a, b, c, d, e, f, g, h);
console.log(typeof d); // prints bigint 


// Non Primitives in Js
// Objects in  Js (Kinda like Dictionary in Python)
// We can make key value pairs (mapping)
const item = {
    "ZEON": true,
    "Subha": false,
    "Sayan": 69,
    "Saikat": undefined
};
console.log(item["Sayan"]);