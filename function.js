// Functions Practice Coode

// function greet(name) {
//   return "Hello, " + name;
// }

// const message = greet("Ali");
// console.log(message); // Hello, Ali

// Arrow Function
// const greet = (name) => {
//   return `Hello, ${name}`;
// };
// console.log(greet("Ali"));

// function bakeryBill(quantity, price, dc) {
//   return quantity * price + dc;
// }
// console.log(bakeryBill(5, 1500, 200));

// function spiltbill(totalbill, totalfriend) {
//   return totalbill / totalfriend;
// }
// console.log(spiltbill(14000, 10));
// let perPerson = spiltbill(14000, 10);
// console.log(perPerson);

// oprators in js

// let a = 5;
// let b = 2;
// console.log(a + b);
// console.log(" a + b = ", a + b);
// console.log(" a * b = ", a * b);
// console.log(" a / b = ", a / b);
// console.log(" a % b = ", a % b);
// console.log(" a ** b =", a ** b); // ye power kay liye hai

// +=. -= *= /= %=
// a += 4; // a = a +4

// console.log("a = ", a);
function calc(sign) {
  var num1 = +prompt("Enter num1");
  var num2 = +prompt("Enter num2");

  if (sign === "+") {
    var res = num1 + num2;
    console.log("addition", res);
  } else if (sign === "-") {
    var res = num1 - num2;
    console.log("minus", res);
  } else if (sign === "*") {
    var res = num1 * num2;
    console.log("multi", res);
  } else if (sign === "/") {
    var res = num1 / num2;
    console.log("div", res);
  } else {
    console.log("invalid sign");
  }
}
