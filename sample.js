//Hello World
console.log("Hello World");

console.log("\n");

// Variables --> Named storage for data
let message; // Variable declaration
message = "Hello"; // Variable Definition
console.log(message);

let message2 = "Hello"; // Variable declaration and definition
console.log(message2);

console.log("\n");

let message3;
message3 = "Hello";
message3 = "World";
console.log(message3);

console.log("\n");

//Data Types
let aString = "Hello World";
let aNumber = 123456;
let aBoolean = true;
let user = {
  name: "Hasan",
  age: 22
}
let arr = [1, 2, 3, 4];
let nullValue = null;
let undefValue;
let id = Symbol("Id");

console.log(typeof(aString));
console.log(typeof(aNumber));
console.log(typeof(aBoolean));
console.log(typeof(user));
console.log(typeof(arr));
console.log(typeof(nullValue));
console.log(typeof(undefValue));
console.log(typeof(id));
console.log(typeof(alert));
console.log(typeof(Date));

console.log("\n");

//Difference between null and undefined
console.log(null == undefined);
console.log(null === undefined);

console.log("\n");

//const
// const PI;
// PI = 3.14; --> ERROR

const PI = 3.14; // Assign a value when they are declared
console.log(PI);

console.log("\n");

//Change properties of constant objects (Arrays)
const car = {
  type: "Fiat",
  model: "500",
  color: "Black"
}
console.log(JSON.stringify(car));
car.color = "Red";
console.log(JSON.stringify(car));

// const car = {type: "Fiat", color: "Black"};
// car = {type: "Fiat", color: "Red"}; -->ERROR

console.log("\n");

//Unary plus for string and numbers
let a = -1;
console.log(-a);
let b = "2";
let c = "3";
console.log(b + c);
console.log(+b + +c);

console.log("\n");

//Binary plus for string and numbers
let d = "my" + "String";
console.log(d);
console.log(1 + 2 + "H");
console.log("H" + 1 + 2);

console.log("\n");

//Increment operator
let count = 0;
let e = count++;
let f = ++count;
console.log(`e = ${e} f = ${f} count = ${count}`);

//decrement operator
e = --count;
f = count--;
console.log(`e = ${e} f = ${f} count = ${count}`);