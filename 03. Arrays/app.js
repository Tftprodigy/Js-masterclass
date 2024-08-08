// #01. ARRAYS
//empty Array
const myList = [];

//number array
// let numArr = [1, 2, 3, 5, 7];

// let stringArr = ["yam", "beans", "tolu", "Dev"];
// console.log(numArr);
// console.log(stringArr);

// nested array: is an array inside of an array
// let nestArr = ["one", [1, "two"], "real", true, false, "tame"];
// console.log(nestArr);
// console.log(nestArr[1]);

// 1.1 ARRAY ASSIGNMENT.

// let favSingers = ["Veenom Ng", "Wizkid", "Areece"];
// // create arrar of averote singers
// // console.log(favSingers[0]);
// // log first on the list to console
// let favNumber = ["14", "04", "88"];
// // cretae fave array and store fave number
// let mixedArr = ["yam", 1, true];
// // create mixed array and store different datatype
// console.log(mixedArr[1], mixedArr[0]);

// // #02. Array Methods
// const fruits = [
//   "ogede",
//   "osan",
//   "mango",
//   "strawberries",
//   "pineapple",
//   "grapefruit",
// ];

// fruits.push("agbalumo");
// fruits.pop();
// fruits.shift();
// fruits.unshift("cucumber");

// console.log(fruits);

// 03.  OBJECTS

// synatx:
// // let obj_name = {
//     key: 'property',
//    key: 'property',
// }

const person = {
  name: "Universal Dev",
  role: "backend Dev",
  age: 25,
  location: ["surulere", "Lagos"],
  isProgrammer: true,
};
// console.log(person);
// console.log(person.name);
// console.log(person["name"]);
// console.log(person.role);
// console.log(person["role"]);
// console.log(person.age);
// console.log(person["age"]);
// console.log(person.location);
// console.log(person["location"]);
// console.log(person.isProgrammer);
// console.log(person["isProgrammer"]);

//Adding new properties to an object
// person.working = true;
// person.lol = "qwery";
// console.log(person);

// // deleting existing properties to an object
// delete person.lol;
// console.log(person);

// 3.1 OBJECT ASSIGNMENT
let car = {
  type: "benz",
  model: "2002 convertable",
  color: "super red",
};

console.log(typeof car);

// update type
car.type = "toyota";
console.log(car);

// add wheels
car.wheels = "shinny";
console.log(car);
