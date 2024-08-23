// 1.0 Ternary Operator
// function passwordChecker(password) {
//   return password.length <= 5 ? "Strong password" : "Not strong enough";
// }

// const password1 = "yummmy";
// console.log(passwordChecker(password1));

// const password2 = 123458910;
// console.log(passwordChecker(password2));

// const age = 20;
// const isAdult = age >= 18 ? `Adult` : `Minor`;
// console.log(isAdult);

// // #1.1 Assignment
// // if person have money buy products, else bring more money
// const haveMoney = false;
// const pesrson = (haveMoney == true ? `Buy Products` : `Bring more money`);
// console.log(pesrson);

// ###2.0 For..in Loop
// syntax :
// for (let key in object) {...}

// let person = {
//   name: "Dev",
//   age: 25,
//   gender: "Male",
// };

// for (let keys in person) {
//     // console.log(keys);
//     // and it will iterate over all the keys the object has
//     // in this case, name, age, genger
//     console.log(keys, person[keys])
// }

// now let iterate through an array data structure.
// let list = ["one", "two", "three", "four"];
// for (let index in list) {
//     console.log(`${index} ${list[index]}`);
// }

// changing the varaible name to see if key will work in
// arrays also
// let list = ["one", "two", "three", "four"];
// for (let key in list) {
//   //   console.log(`${key} ${list[key]}`);
// }

// // ##2.1 ASSIGNment For in loop
// // iterate over the object & log property and values.
// const obj = {
//   a: 1,
//   b: 2,
//   c: 3,
// };
// for (let keys in obj) {
//   //   console.log(keys, obj[keys]);
// }

// // ##3.0 For...of loop
// // syntax:
// // for (variable of iterable) {...}
// let peoples = ["jon", "sam", "brad", "quin"];
// for (let person of peoples) {
// //   console.log(person);
// }

// ##3.1 Assignment FOr...of loop
// iterate over 'array1' & log its value.
// const array1 = ["a", "b", "c"];
// for (const index of array1) {
//     console.log(index);
// }

// #4.0 forEach helper

// const colors = ["red", "teal", "blue", "grey"];
// colors.forEach(function(color) {
//     console.log(color);
// })

// // simply the code by using arrow function
// colors.forEach((color) => {
//   console.log(color);
// });

// // ###5.0 map method
// let numbers = [1, 2, , 3];
// // let double = numbers.map(function (num) {
// //   return num * 2;
// // });

// // console.log(double);

// // lets try to write it better with a arrow function
// let double = numbers.map((num) => num * 2);
// console.log(double);

// let peoples = [
//   { firstName: "ken", lastName: "Bet" },
//   { firstName: "Becky", lastName: "node" },
//   { firstName: "git", lastName: "Hub" },
// ];

// const res = peoples.map(function(person) {
//     return [person.firstName, person.lastName]
// })
// console.log(res);

// #5.1 Assingment
// create array with random number
// map over each item & multiply them by 10.
// const numbers = [1, 4, 5, 6, 7];
// const res = numbers.map((num) => num * 10);
// console.log(res);
