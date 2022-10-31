// Question No 1
console.log("zeo\"".length)

// Question No 2
// Js implimentation of "includes"

const sentence = "A quick brown fox jumps over the lazy dog";
const word = 'fox';
console.log(sentence.includes(word));
console.log(`The word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the sentence`);


const str1 = 'Cats are the best!';

console.log(str1.endsWith('best!'));
// expected output: true

console.log(str1.endsWith('best', 17));
// expected output: true

const str2 = 'Is this a question?';

console.log(str2.endsWith('question'));
// expected output: false


// Question No 3
// Converting a string into lower case string
let story = 'THIS A string WIth SOME Upper case Characters BUT soON it will BE IN ALL Lower CAse';
console.log(story.toLowerCase());


// Question No 4
// Extract the amount out of the string " Please give 1000 Rs"
let str3 = "Please give Rs 1000";
let amount = str3.slice("Please give Rs ".length);
console.log(amount);
console.log(typeof amount);
amount = Number.parseInt(amount);
console.log(typeof amount);
console.log(amount);

// Question No 4
// Try to change 4th character of a string. Will you be able to do it ?
let friend = "Dipika";
friend[3] = "R"; //  It does give error but it also doesn't works
console.log(friend);