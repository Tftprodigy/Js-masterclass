// 1.0 Ternary Operator
function passwordChecker(password) {
  return password.length <= 5 ? "Strong password" : "Not strong enough";
}

const password1 = "yummmy";
console.log(passwordChecker(password1));

const password2 = 123458910;
console.log(passwordChecker(password2));

const age = 20;
const isAdult = age >= 18 ? `Adult` : `Minor`;
console.log(isAdult);

// #1.1 Assignment
// if person have money buy products, else bring more money
const haveMoney = false;
const pesrson = (haveMoney == true ? `Buy Products` : `Bring more money`);
console.log(pesrson);