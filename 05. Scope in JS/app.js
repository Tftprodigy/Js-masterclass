// let textMessage = "hi"; //global variable
// console.log(textMessage);

// function showMessage() {
//   let textMessage = "Hello from a function";
//   //local varaible
//   console.log(textMessage);
// }
// showMessage();

// #2.0. METHODS IN JS
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

// ###JSON
// JSON: JavaScript Object Notation. is an open data interchange
// format that is both human and machine-readable.

//since this is a js file, it is converted back into being
// a regular object. we can also convert this regular object
// to json code and vice versa using two methods.
// const personJsonTest = {
//   name: "Universal Dev Ola",
//   age: 25,
//   email: null,
//   hobbies: ["coding", "sports", "Cooking"],
//   adress: {
//     city: "surulere",
//     House: 77,
//     confirmed: true,
//   },
// };

// //##JSON.stringify()
// const jsonString = JSON.stringify(personJsonTest);
// // this regular javascript object is now converted
// // into a json code.
// console.log(jsonString);

// //##JSON.parse
// const JsonParse = JSON.parse(jsonString);
// console.log(JsonParse);

// ###DATE CONTRUCTOR
// (year, month,day, hour, minute, seconds, milliseconds)
// for example
// const currentDate = new Date();
// console.log(currentDate);

// // now lets pass in our own date properties manually
// const manualDate = new Date(2024, 7, 25, 12, 15, 0, 0);
// console.log(manualDate);

// const myDate = new Date();
// // extracting each properties using their own methods from the
// // dtae constructor.

// const year = myDate.getFullYear();
// const month = myDate.getMonth();
// const hours = myDate.getHours();
// let minutes = myDate.getMinutes();
// const seconds = myDate.getSeconds();
// const milliseconds = myDate.getMilliseconds();

// console.log(`
// Year: ${year}
// Month: ${month}
// Hours: ${hours}
// minutes: ${minutes}
// Seconds: ${seconds}
// milliseconds: ${milliseconds}`);
// ------------------------------------------------------------

// ##SETINTERval IN JS
//  is used to execute a function or a block of
// code at a specified interval.
//   synax:
// setInterval(function(){
//     ...code of function block
// }, intervalBytime);

// setInterval(function() {
//   console.log('This function will execute every 2 secs');
// }, 2000)

// ##SETTIMEOUT (setTimeOut)
// is used to execute a function or a block of
// code after a specified delay.

// setTimeOut(function(){
// ...code of function block
// }, timeOutInMilliseconds);

// setTimeout(function () {
//   console.log("This function will be executed after 3 seconds");
// }, 3000);

// ##CLEAR INTERVAL (clearInterval())
// clearInterval() : is used to stop or break a setInterval format
//                  being in an infinite loop.
//                  it breaks out of the cycle of the setInterval.

// A code being run at interval
const intervalId = setInterval(function () {
  console.log("This code is being executed at the rate of 1000 mili sec");
}, 1000);

//Stop the code from running
setTimeout(function () {
  clearInterval(intervalId);
  console.log("this code is now stopped!");
},10000);
