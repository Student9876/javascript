// array methods
let num = [1, 2, 3, 34, 4];
console.log(typeof num);
let b = num.toString(); // b is now a string
console.log(b, typeof b);

//Join function
let c = num.join(" and "); // it joins the a string using a separator
console.log(c, typeof c);

// pop() function. It changes the original array 
let r = num.pop();
console.log(num, r); // pop() also returns the popped value 

// push() function. It changes the original array 
r = num.push(56);
console.log(num, r); // Push returns the length of the updated array 

// shift() function. It removes the first element and returns it
r = num.shift();
console.log(num, r); 

// Unshift function. It adds an element in the beginning of the array
r = num.unshift(79);
console.log(num, r); // unshift returns the length of the updated array