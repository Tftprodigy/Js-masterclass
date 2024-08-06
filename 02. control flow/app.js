// #01. if statement
// syntax: if (condition) {...codeblock...}
// else if (cond..) {..codeblock...}
// else {...codeblock...}

// let a = 10;
// let b = 20;

// if (a > b) {
//   console.log("a is greater than b");
// }

// // 1.1 Assignment

// let password; //create variable password & store nothing

// if ((password == 8)) {
//   console.log("welcome");
//   // if password = 8 print welcome
// } else if (password <= 8) {
//   console.log("Password is too short");
// } else if (password >= 8) {
//   console.log("Too Long password", "password should be 8 characters");
// } else {
//   console.log("Please provide a password");
// }

// #2.0 Switch
// syntax:

// switch (expr) {
// case a:
//     print
//     break;
// case b:
//     print
//     break;
// }

// let control;
// let bulb;

// switch (control) {
//   case 0:
//     bulb = "off";
//     console.log(bulb);
//     break;
//   case 1:
//     bulb = "on";
//     console.log(bulb);
//     break;
//     dafault: bulb = "no value provided for controller";
//     console.log(bulb);
//     break;
// }

// 2.1 Assign,ment
// type of fruits code.

// let fruit = "ORANGE".toLowerCase();

// switch (fruit) {
//   case "banana":
//     console.log("banana is good");
//     break;
//   case "orange":
//     console.log("Not a fan of oranges");
//     break;
//   case "apple":
//     console.log("Oh you like apples?");
//     break;
//   default:
//     console.log("Never heard of that fruit");
//     break;
// }

// #03. For Loops
// syntax
// for (initialExpr; condition; incrementExpr-Or-DecrementExpr){COde}
// for (let i = 0; i <= 50; i++) {
//   console.log("Universal.Dev", i);
// }

//3.1 Nested Loops
// are loops in of a loop

// for (let i = 1; i <= 10; i++) {
//   console.log("Outter loop", i);

//   //nested loops
//   for (let j = 1; j <= 3; j++) {
//     console.log("Inner Loop", j);
//   }
// }

// // 3.2 FOR LOOP ASSIGNMENT
// // PRINT NAME & NO. FROM 0 - 1000
// let name = "Universal Dev";
// for (i = 0; i <= 1000; i++) {
//     console.log(name, i);
// }

// 3.3 WHILE LOOPS
// let i = 0; initialization
// while(condition) {
//     codeblock
//     i++
// }

// let i = 1;
// while (i <= 4) {
//   console.log("SUper Dev", i);
//   i++;
// }

// 3.3 WHILE LOOP ASSIGNMENT
// PRNT NAME 100 TIMES AND ITERATION SHOULD STATRT FROM 10

// let name = "Universal Dev.Ola";
// let i = 10;
// while (i <= 100) {
//   console.log(name, i);
//   i++;
// }

// 3.4  DO WHILE LOOP.
//              syntax:
//                 let i = 1;
//                 do {
//                     code...
//                     i++
//                 } while (condition);

// let i = 1; 
// do{
//     console.log("how are you?", i);
//     i++
// } while (i <= 5);

// 3.5 DO-WHILE-LOOP ASSIGNMENT
// PRINT NAME 400 TIMES & ITERATION SHOULD START FROM 20

// let i = 20;
// let name = "Ola";

// do {
//   console.log(name, i);
//   i++;
// } while (i <= 400);


// #04. Logical Operators
        // AND:- &&
        // OR:- ||
        // NOT:= !