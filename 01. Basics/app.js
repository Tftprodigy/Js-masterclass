// // #1. CONSOLE

// console.log("Hello Developer");
// console.log("lets keep writing code");
// let userName = "Dev";
// console.log(userName);
// console.log("Hello there", userName);

// console.error("404 not found");
// console.table({ name: "Olayiwola", age: 25, role: "leadDev" });

// console.warn('this is a test warning');

// #02. Variables
// (reserved keyword) (var name) (type of var)

// let name = "Ol";

// let age; // declared variable but undefined or unassgned.
// age = 25;

// console.log(age, name);
// console.log("Hello", name);

// const youtubeChannel = "mrbeast";

//# 2.1 Assignment
// 1. create a var name (name) & store your name.
// 2. create var name (whatDOYoWannaBecomeInLife) & store
//    programmer.
// 3. create var name (gender) & store your gender
// 4. create var name (twitterHandle) & store your handle.
// 5. log all variable to the console.

// let name = "Ola";
// let whatDOYoWannaBecomeInLife = "programmer";
// const gender = "male";

// let twitterHandle = "@young_vee_";

// console.log(
//   "Hello",
//   name,
//   "i can see you want to be a",
//   whatDOYoWannaBecomeInLife
// );
// console.log(name);
// console.log(whatDOYoWannaBecomeInLife);
// console.log(gender);
// console.log(twitterHandle);

// #03. primitive types.

// let num = 10.01;
// let name = "Simi";
// console.log(num);
// console.log(typeof name);

// basic Math
// console.log(1+1);
// console.log(1-1);
// console.log(1*1);
// console.log(3**2); // to the power
// console.log(2/1);
// console.log(2%1);

// // ++ : for increment a variable by one number
// let counter = 0; //counter initialised
// counter++;
// counter++;
// counter++;
// counter++;
// console.log(counter);

// // -- : for decrement a variable by one number
// let counter = 10; //counter initialised
// counter--;
// counter--;
// counter--;
// counter--;
// console.log(counter);

// #3.1 Assignment
// create var name (firstFaveNum) & store
// create var name (secondFaveNum) & store
// add (first and secondfave num)
// subtract
// multiply
// divide
// first mod second
// power of firstnum

//
// 04.Comparison operator

// 4.1 Relational operator
//   > greater than
//   < less than
//  >= greater than or equal to
//  <= less than or equal to

// 4.2
//  equality operators
// === strict equality (type + value)
// !== strict non equality (type + value)
// == lose equality operator (value)
// != lose not equality operator (value)

// 4.3 Assignment
// create var (firstFavenum) & store no.
// create var (secondFavenum) & store no.
// check (firstfavenum is greater than second)
// check (firstfavenum is less than second)

// let firstFaveNum = 14;
// let secondFaveNum = 4;

// console.log(firstFaveNum > secondFaveNum);
// console.log(firstFaveNum < secondFaveNum);
// console.log(firstFaveNum >= secondFaveNum);
// console.log(firstFaveNum <= secondFaveNum);

// console.log(firstFaveNum === secondFaveNum);
// console.log(firstFaveNum == secondFaveNum);
// console.log(firstFaveNum !== secondFaveNum);
// console.log(firstFaveNum != secondFaveNum);

// #05. Strings
let firstName = "Universal ";
let secondName = "Dev ";

// 5.1 String Concatination

// console.log(firstName + secondName);
// console.log("My name is " + firstName + secondName);

// let fullName = firstName + secondName;
// console.log("welcome back" + " " +  fullName);

// can also use .concat method
// console.log(firstName.concat(secondName));

//  5.2 Append

//     secondName += "Youtube Channel"
//     console.log(firstName.concat(secondName));

// // 5.3 length
//     console.log(secondName.length);
//     console.log(firstName.length);

// 5.4 Cases

// console.log(firstName.toLowerCase());
// console.log(firstName.toUpperCase());

// 5.5 Slice Methods in Strings
// console.log(firstName.slice(0, 1));
// console.log(firstName.slice(0, 2));
// console.log(firstName.slice(0, 3));
// console.log(firstName.slice(0, 4));
// console.log(firstName.slice(0, 5));
// console.log(firstName.slice(0, 6));
// console.log(firstName.slice(0, 7));
// console.log(firstName.slice(0, 8));
// console.log(firstName.slice(5, 10));

// console.log("HAHA, IM messing around with my code");

// 5.6 Split & Join method

// 5.6 Includes

// console.log(firstName.toLowerCase().includes("w"));
// console.log(firstName.includes("U"));
// N/B : this method is case sensitive, U is not u.

// // 5.7 Trim
// let trimTest = "     lets Goooooo     ";
// console.log(trimTest.trim());
//
//------------------------------------------
// let newName = "universal";
// let lastName = "webDev";

// let ytChannel = `${newName} ${lastName} welcome  `;
// console.log(ytChannel);
// //----------------------------------------------------
// // 5.7 Assignment

// let favActorFN = "Ryan ";
// let favActorLN = "Reynold";
// let fullActorName = favActorFN.concat(favActorLN);

// let uppercase = fullActorName.toUpperCase();
// let message = `my favorite actor is ${fullActorName} he acts well`;

// message += ` his best show is silicon vally `;
// console.log(message);

// #06. Type Conversion
let money = "50";

console.log(typeof parseInt(money));
console.log(typeof money);
