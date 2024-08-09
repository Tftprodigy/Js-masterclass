// SYntax:
//         function name(para) {
//             ...code...
//         }

// regular function
// function greet() {
//   console.log("Hello from a function");
// }
// // functiion call.
// greet();
// ----------------------------

// function taking parameters
// //  function funcName (parameter) {
//     ...code...
// }
// funcName(Argument);

// function sayHello(name) {
//   console.log(`Hello ${name}`);
// }

// sayHello("john");

// // ---------------------------------------
// function addition(a, b, c) {
//   c = a + b;
//   console.log(`The addition of the numbers are ${c}`);
// }
// addition(1, 2);
// sayHello("Universal Dev");
// addition(5, 9);

// --------------------------------------------------------
// function with return statement

// function subtraction(x, y, z) {
//   z = x - y;
//   return z;
// }

// // storing the result of the function in a variable.
// const resSub = subtraction(10, 7);
// console.log(resSub);

// const resSub1 = subtraction(1000000, 195000);
// console.log(resSub1);

// #  FUNCTION ASSIGNMENT!
// create function myFunction
// tale 2 parameters
// any number passed as args to be multiplied
// pass favorite nos as args.
// log value.

// function myFunction(n1, n2) {
//   return n1 * n2;
// }
// const res = myFunction(10, 5);
// console.log(`Result is ${res}`);

// #02. Function Declarion and Function Expression
// an expample of a function expression  is an anonymous
// function wrapped in a varaible

const greetings = function (user) {
  console.log(`Welcome back ${user}`);
};
greetings("Ola");


// 2.1 CALLBACK FUNCTION
// WHEN we provide a function as an Argument
// to other function, that function is known as 
// callback function