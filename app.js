// // console.log(5 = 5)

// // var num1 = 10;
// // num1 += 20;
// // console.log("+",num1);

// // num1 -= 20;
// // console.log("-",num1);

// // num1 *= 20;
// // console.log("*",num1);

// // num1 /= 20;
// // console.log("/",num1);

// console.log("Cmparision Operators")
// var num1 = 20>=20;
// console.log( num1);

console.log("mark sheet");
var totalmarks = 400;
var mathsub = +prompt("Math Obtain Marks");
var Physsub = +prompt("Physics Obtain Marks");
var chemsub = +prompt("chemistry Obtain Marks");
var engsub = +prompt("english Obtain Marks");

var obtainmarks = mathsub + Physsub + chemsub + engsub;

var percentage = obtainmarks /totalmarks * 100;

console.log("math marks: "+ mathsub)    
console.log("physics marks: "+Physsub)
console.log("cheistry marks: "+chemsub)
console.log("english marks: "+engsub)
console.log("You Got: "+ percentage +"%")





