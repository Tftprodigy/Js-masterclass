let textMessage = "hi"; //global variable
console.log(textMessage);

function showMessage() {
  let textMessage = "Hello from a function";
  //local varaible
  console.log(textMessage);
}
showMessage();
