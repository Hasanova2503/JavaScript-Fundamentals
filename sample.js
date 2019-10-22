'use strict';

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
// console.log(JSON.stringify(car));
console.log(car);
car.color = "Red";
console.log(car);

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

console.log("\n");

// if-else
count = 0;
if(e == f) {
  count = e + f;
}
else {
  count = 0;
}
console.log(count);

//Using ternary operator
count = 0;
count = (e == f)? count + 2: 0;
console.log(count);

//switch
count = 0;
let count1 = count++ + ++count;
console.log(count1);
switch(count1) {
  case 0:
    console.log("Count1 is 0");
    break;
  case 1:
    console.log("Count1 is 1");
    break;
  case 2:
    console.log(`Count is ${count1}`);
    break;
  default:
    console.log("Not expected output");
    break;
}

console.log("\n");

//for loop
console.log("FOR LOOP");
for(let i = 0; i < 3; i++) {
  console.log(i);
}

//while loop
console.log("WHILE LOOP");
let i = 0;
while(i < 3) {
  console.log(i);
  i++;
}

//do-while loop --> exit controlled loop(executed at least once)
console.log("DO WHILE LOOP");
i = 0;
do {
  console.log(i);
  i++;
} while(i < 3);

// const person = {
//   name: "HMS",
//   age: 22
// }
// console.log(person);

//Use strict will throw error here --> Reference Type --> g is not defined
// g = 50;

let g = 50;

//Assigning to NaN will throw exception in strict mode --> TypeError--> non-writable global & property
// undefined = 5;

//TypeError deleting undeletable properties
// delete Object.prototype;

//Duplicate parameter not allowed in function

//Simplify variable uses
var evalG = eval("'use strict'; let g = 42; g;");
console.log(g === 50);
console.log(evalG === 42);

//delete undefined names result in error
let h;
// delete h; //SYNTAX ERROR
//writing secure code

console.log("\n");

//TYPE Conversion
h = 5;
console.log(h);
console.log(typeof(h));
console.log(h.length);

//Number to String
h = String(5);
console.log(h);
console.log(typeof(h));
console.log(h.length);

//Boolean to String
h = String(true);

//Array to String
h = String([1, 2, 3, 4]);

//toString
h = (5).toString();

//String to Number
h = Number('5');
console.log(h);
console.log(typeof(h));
console.log(h.toFixed(2)); // decimal points

console.log("\n");

// Number and math object
const num1 = 100
const num2 = 50;
let val;
val = num1 + num2;
val = num1 - num2;
val = num1 * num2;
val = num1 / num2;
val = num1 % num2;

//Math Object
val = Math.PI;
val = Math.E;
val = Math.round(2.8);
val = Math.ceil(2.8);
val = Math.floor(2.8);
val = Math.sqrt(64);
val = Math.abs(-3);
val = Math.max(1, 5 ,324 ,325, 45, 56);
val = Math.floor(Math.random() * 20 + 1);

console.log(val);