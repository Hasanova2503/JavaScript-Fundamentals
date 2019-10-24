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
console.log(Boolean("0"));
console.log(Boolean("asd"));
console.log(Boolean(5));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));
console.log(Boolean(""));

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
console.log(7.3e8);
console.log(0xff);
console.log(0b11111111 == 0o377);
console.log(0.1 + 0.2 == 0.3);
console.log(parseInt("100def"));
console.log(typeof(+"5"));
console.log(isNaN("str"));
console.log(isNaN(5));
console.log(isFinite("5"));
console.log(isFinite(6));
console.log(isFinite(undefined));

console.log("\n");

//String --> Immutable
const fName = "Hasan";
const lName = "Mo";
val = fName + lName;

//Concatencation
val = fName + ' ' + lName;

//Append
val = "Apple";
val += "Mango";

//Escaping
val = 'That\'s awesome. Let\'s wait';

//Length
val = fName.length;
console.log(val);

//Concat
val = fName.concat(' ', lName);
console.log(val);

//change case
val = fName.toLowerCase();
console.log(val);

//Index
val = fName[0];
console.log(val);

//indexOf
console.log(lName.indexOf('o'));
console.log(fName.lastIndexOf('a'));

//charAt
console.log(fName.charAt(1));

//get last char
console.log(fName.charAt(fName.length - 1));

//substring
console.log(fName.substr(1, 3));

//search
console.log(fName.search('a'));

//slice
console.log(fName.slice(0, 3));
console.log(fName.slice(-2));

//split
console.log(("Hello I am HMS").split(' '));

//replace
console.log(fName.replace("asan", "ajra"));

//unicode
console.log("\u{1F60D}");

console.log("\n");

//Template literals
let html
html = `
  <ul>
    <li>FName: ${fName}</li>
    <li>lName: ${lName}</li>
  </ul>
`;
document.body.innerHTML = html;

//Arrays
const nums = [1, 5, 3, 6, 7];
const nums2 = new Array(2, 435, 5, 546 ,654);
const fruits = ["apple", "pear", "mango", "orange"];
const mixedArray = [32, "happy", null, undefined, "sad", true, {name: "hms", age: 6}]

console.log(mixedArray);

//get array length
console.log(nums.length);

//check if array
console.log(Array.isArray(fruits));

//get particular element
console.log(nums2[3]);

//insert into array
nums[2] = 10;

//index of value
console.log(fruits.indexOf("pear"));

//mutating arrays
//adding at the end
nums2.push(100);
console.log(nums2);
//adding on front
nums2.unshift(150);
console.log(nums2);

//delete from end
nums2.pop();
console.log(nums2);
//delete from front
nums2.shift();
console.log(nums2);

//splice
console.log(nums2.splice(1, 3));

//reverse
console.log(nums.reverse());

//concatenate array
console.log(nums.concat(nums2));

//sorting
console.log(fruits.sort());
console.log(nums.sort());

//compare function
console.log(nums.sort(function(x, y) {
  return x - y;
}));

//reverse sort
console.log(nums.sort(function(x, y){
  return y - x;
}))

console.log("\n");

//Object literals
const pers = {
  fName: 'Hasan',
  lName: 'Shahid',
  age: 22,
  hobbies: ["music", "sports", "coding"],
  address: {
    city: 'Delhi',
    state: "Delhi"
  },
  getNumber: function() {
    return 2019 - this.age;
  }
}
console.log(pers);
console.log(pers.fName);
console.log(pers['fName']);
console.log(pers["hobbies"][0]);
console.log(pers.address.city);
console.log(pers.getNumber());

//Arrays of objects
const personNew = [
  {name: 'hasan', age:22},
  {name: 'raj', age:23, city: "Delhi"}
];
console.log(personNew);
console.log(personNew.length);
for(let i in personNew) {
  console.log(personNew[i]);
}

console.log("\n");

//Date and objects
const today = new Date();
let dob = new Date('3-25-1997');
dob = new Date("March 25 1997");
console.log(today);
console.log(typeof(today));
console.log(dob);
console.log(today.getMonth()); //starting from 0-11
console.log(today.getDate());
console.log(today.getDay());
console.log(today.getFullYear());
console.log(today.getHours());
console.log(today.getMinutes());
console.log(today.getSeconds());
console.log(today.getTime()); // Timestamp

dob.setMonth(1);
dob.setDate(24);
console.log(dob);
console.log(new Date(Date.parse("1997-01-26")));
console.log(new Date("1997-01-26 3:12"));

console.log("\n");

//Test if undefined
if(typeof(hell) === 'undefined') {
  console.log("Not defined");
}

console.log("\n");

//Function declarations
function greet(fName = "XYZ", lName = "ABC") {
  // console.log("Hello");
  return `Hello ${fName} ${lName}`;
}
console.log(greet());
console.log(greet("hasan"));
console.log(greet("hasan", "shahid"));

//Function Expressions --> Hoisting and Closure
const sqr = function (x) {
  return x * x;
}
console.log(sqr(3)); 

// Immidiately invokable function expressions -->IIFE --> Run at same time
(function (fName = "XYZ") {
  console.log("IIFE");
  console.log(`Hello ${fName}`);
})("Hasan");

//Property Methods
const toDo = {
  add: function () {
    console.log("Add");
  },
  edit: function () {
    console.log("Edit");
  }
};
toDo.delete = function () {
  console.log("Delete");
}
toDo.add();
toDo.edit();
toDo.delete();

console.log("\n");

// Symbol type --> unique identfier
val = Symbol("val");
console.log(val.toString());
console.log(val.description);
console.log(val == Symbol("val"));

//Hidden properties
val = {
  name: "HMS"
};
id = Symbol("Id");
val[id] = 1;
console.log(val[id]);

val = {
  name: "hasan",
  [id]: 123
};
console.log(val);
for(let key in val) {
  console.log(key);
  console.log(val[key]);
}

//ForEach
const cars = ["Toyota", "Honda", "Hyundai"];
cars.forEach(function (car, index, array) {
  console.log(`${car} : ${index}`);
  console.log(array);
});

//Map
const personN = [
  {name: 'hasan', age:22},
  {name: 'raj', age:23, city: "Delhi"}
];
let names = personN.map(function (person) {
  return person.name;
});
console.log(names);
for(let i in pers) {
  console.log(i);
  console.log(pers[i]);
}

console.log("\n");

//Window Object
window.console.log(123); //Already top of window

//Alert
// alert("Hello");

//Prompt
// val = prompt("Enter the value");
// alert(val);

//confirm
// if(confirm('Are you sure?')) {
//   console.log("Yes");
// }
// else {
//   console.log("No");
// }

//Outer height and width
console.log(window.outerHeight);
console.log(window.outerWidth);

//Inner height and width
console.log(window.innerHeight);
console.log(window.innerWidth);

//Scrolls
console.log(window.screenX);
console.log(window.scrollY);

//Location object
console.log(window.location);
console.log(window.location.href);
console.log(window.location.hostname);
console.log(window.location.search);

//Window redirect
// window.location.href = 'http://google.com';

//window reload
// window.location.reload();

//history object
// window.history.go(-1);

console.log(window.history.length);

//Navigator objects
console.log(window.navigator);
console.log(window.navigator.appName);
console.log(window.navigator.appVersion);
console.log(window.navigator.platform);

//scope
//Global scope
var ab = 1;
let bc = 2;
const cd = 3;

function test() {
  var ab = 4;
  let bc = 5;
  const cd = 6;
  console.log("Local scope:", ab, bc, cd);
}
test();

if(true) {
  var ab = 4;
  let bc = 5;
  const cd = 6;
  console.log("If block:", ab, bc, cd);
}

console.log("Global scope:", ab, bc, cd);