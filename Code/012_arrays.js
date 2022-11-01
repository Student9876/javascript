let marks_class_12 = [91, 82, 63, 84, null, false, "not present"];
console.log(marks_class_12);
console.log(marks_class_12[0]);
console.log(marks_class_12[1]);
console.log(marks_class_12[2]);
console.log(marks_class_12[3]);
console.log(marks_class_12[4]);
console.log(marks_class_12[5]);
console.log(marks_class_12[6]);
console.log(marks_class_12[7]); // Undefined. No value is at 7th index 
marks_class_12[7] = 89; // adding new value in the array
console.log(marks_class_12[7]);

// Changing value of an array
marks_class_12[0]= 96;

console.log(marks_class_12);

console.log("The length of marks_class_12 is ",marks_class_12.length);
console.log(typeof marks_class_12);
