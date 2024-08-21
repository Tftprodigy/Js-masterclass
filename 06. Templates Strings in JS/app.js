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

// // ### ARROW FUNCTION ASSIGNMENT (COde Refactor)
// setTimeout(() => {
//   console.log(`Hello`);
//   setTimeout(() => {
//     console.log("hey");
//     setTimeout(() => {
//       console.log("Namaste");
//       setTimeout(() => {
//         console.log(`Hi`);
//         setTimeout(() => {
//           console.log("Bonjour");
//         }, 2000);
//       }, 2000);
//     }, 2000);
//   }, 2000);
// }, 2000);

// ### 3.0. ENHANCED OBJECT LITERALS
// function user(name, age, work, clearance, classi) {
//   return {
//     name: name,
//     age: age,
//     work: work,
//     Access: clearance,
//     classification: classi,
//   };
// }
// // console.log(user("Femi", 25, "Develeoper"));

// const user1 = user("bukky", 27, "B-E Developer", true, 'High');
// const user2 = user("kemmi", 21, "F-E Developer", false, "High");
// const user3 = user("Kafffy", 39, "Designer", true, "Medium");

// console.log(user1.Access);
// console.log(user2.Access);
// console.log(user2.classification);

// console.log(user3.work, user3.Access, user3.name);

//The above code is a regular function returning returing
// properties of a user object.
// Now Lets make use of Enhance Object literals to reform
// the Code.
// Enhance object makes the object code shorter by taking out
// one out, if the property and the value are the same
// i.e name: name

// function userPrompt(name, age, work) {
//   return {
//     name,
//     age,
//     work,
//     // methods are functions available inside objects only
//     intro: () => {
//       return `Hello my name is ${name}, i am ${age} years
//       old and my job is a ${work}`
//     }
//   };
// }
// const userAlex = userPrompt("Alex", 25, "Engineer");
// const userBen = userPrompt("Ben", 27, "Rapper");

// console.log(userAlex);
// console.log(userBen.intro());

// ##3.1 ENHANCED lITERAL ASSIGNMENT
//convert es5 to es6
// let a = 1;
// let b = 2;
// let c = 3;

// let obj = {
//   a,
//   b,
//   c,
// };
// // console.log(obj);
// // --------------------------------------

// // let lib = {
// //   sum: (a, b) => a + b,
// //   mult: (a, b) => a * b,
// // };
// // console.log(lib.sum(2, 3));
// // console.log(lib.mult(2, 3));
// // // -----------------------------------------

// // const getPerson = (name, age, height) => {
// //   return {
// //     name,
// //     age,
// //     height,
// //   };
// // };
// // console.log(getPerson("kkk", 25, 300));
// // --------------------------------------------------

// // ###4.0 DEFAULT FUNCTION PARAMEETERS
// // ## ASSIGNMENT

// const mult = (a, b = 1) => {
//   return a * b;
// };
// console.log(mult(5));
// // ............................................

// // ###5.0 SPREAD OPERATOR
// ##Spread Operators Arrays
// const strNums = ["one", "two", "three"];
// const moreStrNums = ["four", "five", "six"];
// // lets use the spread operator to add/combine/ spread
// //  these two arrays
// const strNumConcat = [...strNums, ...moreStrNums];
// console.log(strNumConcat);

// // more spread operator using array example
// let peoples = ["nukky", "kemi", "oyo"];
// const morePeople = ["lelle", "lily", ...peoples, "becky"];
// console.log(morePeople);

// ##Spread Operators Objects
// const obj1 = { x: 1, y: 2 };
// const obj2 = { z: 3 };
// const obj3 = { ...obj1, ...obj2 };

// console.log(obj3);

// // #more example
// const person = {
//   name: "Kemi",
//   age: 19,
//   gender: "female",
// };

// const clonePerson = { ...person };
// // console.log(clonePerson);
// const moreCloneProperties = { ...clonePerson, work: "Dev", location: "Lsg" };
// // console.log(moreCloneProperties);

// #Spread OPERATOR ASSIGNMENT.
// let arr = [1, 2, 3];
// let arr2 = [4, 5];
// const clone = [...arr, ...arr2];

// console.log(clone);

// let user = {
//   name: "Jen",
//   age: 22,
// };
// const userClone = {...user};
// console.log(userClone);

// ###6.0 REST OPERATOR
// BOTH rest and spread operators are denoted using '...'
// lets declare an anonymous function that will take in userdata as
// an arg and clg userdata
// function user(userdata) {
//     console.log(userdata);
// }
// if we pass a parameter into this arg, it is only meant to hold one
// per variable or arguement in this case we need to pass multiple user
// data as methods in the objects but should all be stored in the userdata.
// we can use the rest operator '...' at the initial declaration

// function user(...userData) {
//   console.log(userData);
// }
// // user("Ola", 25, "Dev, Backend-Dev,");

// function person(firstName, lastName, ...hobbies) {
//   console.log("First Name: ", firstName);
//   console.log("Last Name: ", lastName);
//   console.log('Hobbies: ', hobbies);
// }

// person('Nike', 'Segun', 'coding', 'praying', 'reading')

// 6.1 ASSIGNMENT (rEST OPERATOR)
//create a function to take unlimited parameters & log it
// function unlimited(...container) {
// console.log(container);
// }
// unlimited('dog', 'shark', 'food', 'bed', 'emoji', 'etc')

// ###7.0 DESTRUCTURING'
// DESTRUCTURING: allows us to unppsck vslues from data structures (arrays,
// objects) into seperate distinct variables

// ##7.1Destrucing with Arrays
// const count = ["one", "two", "three"];
// we can destructure the array by assigning it to individual
// varaibles like.
// const [green, blue, red] = count;

// console.log(green);
// console.log(blue);
// console.log(red);

// const nums = [1, 2, 3, 4];
// const [element1, element2, element3, element4] = nums;
// console.log(element1, element2, element3, element4);

// const letter = ["ape", "bee", "cat", "dog"];
// const [a, b, c, d] = letter;
// console.log(a, b);
// console.log(d, c);
// console.log(a, c);
// console.log(a, c);
// console.log(d, b);

// ##7.2Destrucing with Arrays ASSIGNMENT
// const colors = ["red", "green", "blue", "yellow", "orange"];
// // lets destructure this array
// const [color1, color2, color3, ...otherColors] = colors;
// console.log("Color 1: ", color1);
// console.log("color 2: ", color2);
// console.log("color 3: ", color3);
// console.log("others: ", otherColors);

// ##7.3 Destructuring Objects
// syntax:
// let obj = {
// prop: 'value'
// prop: 'value'
//
// }
/*
let {prop, prop} = obj;
*/

// let person = {
//   firstName: "Camile",
//   lastName: "Angel",
// };

// let { firstName, lastName } = person;
// console.log(firstName);
// console.log(lastName);

// // setting default values in destructing
// let person1 = {
//   fName: "Chike",
//   lName: "Emeka",
//   age: 28,
// };

// let {fName, lName, middlename = "''", age} = person1;
// console.log(middlename);
// console.log(fName, age);

// const student = {
//     name: 'Buki',
//     position: 'First',
//     age: 16
// }

// const {name, position, age} = student;
// console.log(name);
// console.log(position);
// console.log(age);
// if (age <= 17) {
// console.log(`${name}, you are still a minor`);
// }else{
//     console.log(`${name}, you are old enough`);
// }

// #7.4 Destrucing Objects ASSIGNMENT
// const person = {
//   name: "John Doe",
//   age: 30,
//   gender: "male",
//   country: "NGN",
// };

// const {name, age, country} = person;
// console.log(name);
// console.log(age);
// console.log(country);

// # 7.5 Renaming variables in object destructuring.
// const num = {
//   x: 100,
//   y: 200,
// };
// const {x: newX, y: newY} = num;
// console.log(newX);
// console.log(newY);

// // Assignment 
// const person = {
//   name: "John Doe",
//   age: 30,
//   gender: "male",
//   country: "NGN",
// };
// const {name: personName, age: personAge, country: personCountry} = person;
// console.log(personName);
// console.log(personAge);
// console.log(personCountry);


// #7.8. FUNCTION DESTRUCTURING.
function printPersonInfo(person) {
    

}