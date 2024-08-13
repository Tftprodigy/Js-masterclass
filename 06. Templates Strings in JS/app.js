// 1. TEMPLATE STRING ASSIGNMENT

// console.log(`The quick
// brown fox
// jumps over
// the lazy dog`);

// let firstName = "UniversalDev";
// let lastName = "Ola";
// console.log(`Hello ${firstName} ${lastName}`);

// 2.0  ARROW FUNCTIONS
// arrow function is a concise way to write function
// expression
// syntax :
// (parameters) => some code

// if the code is more than one statement then
// {} is necessary
// (parameters) => {some code }

// // a normal function expression
// const hello = function () {
//   console.log(`HELLO`);
// };
// // LET  CONVERT TO ARROW FUNCTION

// const hello1 = () => {
//   console.log("hello1");
// };

// hello();
// hello1();

// // lets try passing paramenters and arguements

// let student = (name, age) => {
//   console.log(`Hello ${name} you are ${age} years old`);
// };
// student("Mike", 26);

// // N/B: if the arrow function is taking a single parameter
// // getting rid of the parenthesis & the code still runs
// // i.e
// const student1 = (name) => {
//   console.log(`Hello ${name} This is arrow function without ()`);
// };
// student1("mike");

// // if a the function only has one statement, the function
// // {} can be omitted provided that it statement is written
// // in a single line.
// // i.e
// const student2 = name => console.log(`Hello ${name}, This is arrow function without () nor {}`);
// student2("Mike");

// // Testing a if i still remember regular function.
// function greetStudent(name) {
//   console.log(`Hi ${name}, This is a regular function`);
// }
// greetStudent("micheal");

//#MORE EXAMPLES!
// I.E 1.
// REGULAR FUNCTION
// function greet(timeOfDay, username) {
//   return `Good ${timeOfDay} ${username}, Welcome Back.`;
// }

// console.log(greet("Afternoon", 'Scott'));

// #CONVERTED TO ARROW FUNCTION
// const greet = (timeOfDay, username) => {
//   return `Good ${timeOfDay} ${username}, Welcome Back.`;
// };
// console.log(greet("Morning", "Kola"));

// // #OR
// // using one Parameter and one line test
// const greet1 = (timeOfDay) => `Good ${timeOfDay}, Welcome Back.`;
// console.log(greet1("Afternoon"));

// ##TEST
// CREATE a function that checks if username and
// password length is longer than 8 each

// fullClass = [
//   // came back to create an array of objects with
//   // dummy data to work with and try something different.
//   {
//     name: "Tolu",
//     password: "yesnoyes",
//   },

//   {
//     name: "michealbukola",
//     password: "mikolo0099",
//   },
// ];

// // function
// const userCheck = (username, password) => {
//   if (username.length >= 8 && password.length >= 8) {
//     return `Authentication Strong Enough`;
//   } else {
//     return `Try username & password longer than 8 in charcters`;
//   }
// };
// // manual log before creating dummy array and data.
// console.log(userCheck("jhvhuvhbshj", "hbvhsbh"));

// console.log(userCheck(fullClass[1].name, fullClass[1].password));

// ### ARROW FUNCTION ASSIGNMENT (COde Refactor)
setTimeout(() => {
  console.log(`Hello`);
  setTimeout(() => {
    console.log("hey");
    setTimeout(() => {
      console.log("Namaste");
      setTimeout(() => {
        console.log(`Hi`);
        setTimeout(() => {
          console.log("Bonjour");
        }, 2000);
      }, 2000);
    }, 2000);
  }, 2000);
}, 2000);
