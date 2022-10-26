
// Defining a Function
function onePlusAvg(x,y){
    console.log("Done!")
    return Math.round(1+(x+y)/2);
  }
  
  // This is the way to defining function in modern Js. Arrow function
  const sum = (p,q)=>{
    return p+q;
  }
  
  const hello = ()=>{
    console.log("Hey how are you. I am toh fine yaar");
  }
  
  let a = 1;
  let b = 2;
  let c = 3;
  
  // console.log("Average of a and b is ",(a+b)/2);
  // console.log("Average of b and c is ",(b+c)/2);
  // console.log("Average of a and c is ",(a+c)/2);
  console.log("Average of a and b is ",onePlusAvg(a,b));
  console.log("Average of b and c is ",onePlusAvg(b,c));
  console.log("Average of a and c is ",onePlusAvg(a,c));
  
  console.log(sum(9,7));
  
  hello();