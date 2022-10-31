let marks = {
    zeon: 90,
    khalu: 85,
    sayan: 93,
    saikat: 85
  }
  // Question 1: Prints the marks of students in an object using for loop
  
  // Object.keys() gives the keys of an object in an array. And .length gives the length of the array
  // inserting any key in marks gives the corresponding value 
  for (let i = 0; i < Object.keys(marks).length; i++) {
    console.log("The marks of " + Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]]);
  }
  
  
  // Question 2: Prints the marks of students in an object using for in loop
  for (let key in marks) {
    // console.log(key);
    console.log("The marks of " + key + " are " + marks[key]);
  }
  
  
  // Question 3: To check whether a number is matching a correct number
  let cn = 4;
  let num;
  while (num != cn) {
    console.log("Try again");
    num = prompt("Enter a Number: ");
  }
  console.log("You have entered a correct number");
  
  // Question 4: Write a function to find mean of 5 numbers
  const mean = (a, b, c, d, e) => {
    return (a + b + c + d + e) / 5;
  }
  
  console.log(mean(2, 3, 4, 5, 6));