// let textMessage = "hi"; //global variable
// console.log(textMessage);

// function showMessage() {
//   let textMessage = "Hello from a function";
//   //local varaible
//   console.log(textMessage);
// }
// showMessage();

// 2.0. METHODS IN JS
// these are functions inside an object.

// const person = {
//   name: "Universal Dev",
//   age: 25,
//   greet: function () {
//     let greetPrompt = `Hello, my name is ${person.name} And i am ${person.age} years old`;
//     return greetPrompt;
//   },
//   //declaring the greet method as a function to be accessed
//   //as a method from the object person.
// };

// console.log(person.greet());

// // worker information with dummy data.
// let worker = {
//   name: "Ola",
//   role: "Backend Developer",
//   height: "197cm",
//   country: "Nigeria",
//   single: false,
//   ethnic: "yoruba",
//   workerRecap: function () {
//     return `Hello again ${this.name} kindly confirm your information.
//    Name: ${this.name}
//    Role: ${worker.role}
//    Height: ${worker.height}
//    Country: ${this.country}
//    Single: ${worker.single}
//    Ethnic: ${this.ethnic} `;
//   },
// };

// console.log(worker.workerRecap());

// JSON
// JSON: JavaScript Object Notation. is an open data interchange
// format that is both human and machine-readable.

//since this is a js file, it is converted back into being
// a regular object. we can also convert this regular object
// to json code and vice versa using two methods.
const personJsonTest = {
  name: "Universal Dev Ola",
  age: 25,
  email: null,
  hobbies: ["coding", "sports", "Cooking"],
  adress: {
    city: "surulere",
    House: 77,
    confirmed: true,
  },
};

//JSON.stringify()
const jsonString = JSON.stringify(personJsonTest);
// this regular javascript object is now converted
// into a json code.
console.log(jsonString);

//JSON.parse
const JsonParse = JSON.parse(jsonString);
console.log(JsonParse);