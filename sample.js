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
34+""
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
// let html;
// html = `
//   <ul>
//     <li>FName: ${fName}</li>
//     <li>lName: ${lName}</li>
//   </ul>
// `;
// document.body.innerHTML = html;

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

console.log("\n");

//Constructor and new
const persObj = {
  fName: "Hasan",
  lName: "Shah"
}
// persObj.age = 30;
// delete persObj.age;
console.log(persObj);

function Person(firstName, lastName) {
  this.fName = firstName;
  this.lName = lastName;
  this.greeting = function () {
    return `Hello ${this.fName} ${this.lName}`;
  }
  console.log(this);
}
console.log(this);
const has = new Person("Hasan", "Shah");
console.log(has);
const brad = new Person("Brad", "Pitt");
console.log(brad);
console.log(has.greeting());
console.log(brad.greeting());

//Prototypes
function Person1(firstName, lastName) {
  this.fName = firstName;
  this.lName = lastName;
  console.log(this);
}
Person1.prototype.greeting = function() {
  return `Hello ${this.fName} ${this.lName}`;
}
const brad1 = new Person1("Brad", "Pitt");
const john = new Person1("John", "Doe");
console.log(brad1);
console.log(john);
console.log(brad1.greeting());
console.log(john.greeting());

//Prototypical inheritance
function Person2(firstName, lastName) {
  this.fName = firstName;
  this.lName = lastName;
}
Person2.prototype.greeting = function() {
  return `Hello ${this.fName} ${this.lName}`;
}
const brad2 = new Person2("John", "Doe");
console.log(brad2);
console.log(brad2.greeting());

function Customer(firstName, lastName, age) {
  Person2.call(this, firstName, lastName);
  this.age = age;
}

//Inherit the person prototype
Customer.prototype = Object.create(Person2.prototype);
Customer.prototype.constructor = Customer;

Customer.prototype.greeting = function () {
  return "Hello";
}

const cust1 = new Customer("tom", "smith", 30);
console.log(cust1);
console.log(cust1.greeting());

//Object.create
const personProps = {
  greeting: function () {
    return `Hello ${this.fName} ${this.lName}`;
  }
}
const mary = Object.create(personProps);
mary.fName = "Mary";
mary.lName = "Smith";
mary.age = 40;
console.log(mary);
console.log(mary.greeting());
const brad4 = Object.create(personProps, {
  fName: {value: "Brad"},
  lName: {value: "PITTT"}
});
console.log(brad4);
console.log(mary.__proto__);
// mary.__proto__ = brad2;
// console.log(mary.__proto__);

//__proto__
let animal = {
  eats: true,
  walk: function () {
    return "Animal walks"
  }
};
let rabbit = {
  jumps: true,
  __proto__: animal
};
console.log(rabbit.walk());
for(let key in rabbit) {
  console.log(key);
  // alert(key);
}

// console.log(rabbit);
// let x = "hello";
// delete x;

Object.defineProperty(rabbit, "jumps", {value: false});
console.log(rabbit);
console.log(Object.getOwnPropertyNames(rabbit));
Object.defineProperty(rabbit, "crawls", {value: true});
console.log(rabbit);

console.log("\n");

//this
console.log(this);
function helloThis() {
  console.log(this);
}
helloThis(); // undefined using use strict

console.log("\n");

// DOM examination
val = document;
val = document.all;
val = document.all[1];
val = document.all.length;
val = document.head;
val = document.body;
val = document.doctype;
val = document.domain;
val = document.URL;
val = document.characterSet;
val = document.contentType;

val = document.forms;
val = document.forms[0];
val = document.forms[0].id;
val = document.forms[0].method;

val = document.links;
val = document.links[0];
val = document.links[0].id;
val = document.links[0].className;
val = document.links[0].classList;

val = document.images;

val = document.scripts;
val = document.scripts[2].getAttribute('src');

let scripts = document.scripts;
let scriptArr = Array.from(scripts);

scriptArr.forEach(function(script) {
  console.log(script);
});

console.log(val);

console.log("\n");

//document.getElementById()
console.log(document.getElementById('task-title'));

//get things from element
console.log(document.getElementById('task-title').id);

//change styling
document.getElementById('task-title').style.background = "#333";
document.getElementById('task-title').style.color = "#fff";
document.getElementById('task-title').style.padding = "5px";
// document.getElementById('task-title').style.display = "none";

//change content
document.getElementById('task-title').textContent = "Task List";
document.getElementById('task-title').innerText = "My Lists";
document.getElementById('task-title').innerHTML = "<span style=\"color:red\">Task list</span>";

//document.querySelector
console.log(document.querySelector("#task-title"));
console.log(document.querySelector(".card-title"));
console.log(document.querySelector("h5"));

document.querySelector('li').style.color = "red";

document.querySelector('li:last-child').style.color = "blue";
document.querySelector('li:nth-child(2)').style.color = "yellow";
document.querySelector('li:nth-child(3)').textContent = "NEW TASK";
document.querySelector('li:nth-child(even)').style.background = "grey";

console.log("\n");

// DOM selectors for mulitple elements
function domSelectorMultipleElements() {
  const items = document.getElementsByClassName("collection-item"); // All elements with collection-list as classname
  console.log(items);
  console.log(items[1]);
  items[0].style.background = "orange";
  items[3].textContent = "Hello";

  const listItems = document.querySelector('ul').getElementsByClassName('collection-item'); // Collection items inside ul
  console.log(listItems);
  // listItems.reverse();

  //get elements by tagname
  let tagItems = document.getElementsByTagName('li');
  console.log(tagItems)
  console.log(tagItems[2]);

  //HTML Collection is not an array
  tagItems = Array.from(tagItems);
  tagItems.reverse(); //Won't work so convert to array
  console.log(tagItems);

  tagItems.forEach(function(li) {
    console.log(li.className);
    // li.textContent = "Hello";
  });

  //document.querySelctorAll
  const querySelectorAllItems = document.querySelectorAll('ul.collection li.collection-item');
  console.log(querySelectorAllItems);

  querySelectorAllItems.forEach(function(li) {
    console.log(li.style.color);
  });

  const liOdd = document.querySelectorAll("li:nth-child(odd)");
  console.log(liOdd);
  liOdd.forEach(function(li) {
    console.log(li.style.color);
  });
}
domSelectorMultipleElements();

console.log("\n");

const traversingDOM = function () {
  let val;
  const list = document.querySelector('ul.collection');
  const listItems = document.querySelector("li.collection-item:first-child");

  val = listItems;
  val = list;

  //get child nodes
  val = list.childNodes; //node list Text because of line break 
  val = list.childNodes[0];
  val = list.childNodes[0].nodeName;
  val = list.childNodes[0].nodeType;
  // val = list.childNodes[1].nodeValue;

  // 1 --> Element Node
  // 2 --> Attribute (depricated)
  // 3 --> text node
  // 8 --> Comment
  // 9 --> Document itself
  // 10 --> doctype

  //get children elements node
  val = list.children; //HTML Collection
  val = list.children[0];
  list.children[0].textContent = "SAP";

  //children of children
  list.children[1].children[0].id = "test-id";
  val = list.children[1].children[0];

  //first child
  val = list.firstChild; //with text and elements
  val = list.firstElementChild; //only element

  //last child
  val = list.lastChild;
  val = list.lastElementChild;

  //Count child elements
  val = list.childElementCount;

  //get parent node
  val = listItems.parentNode;
  val = listItems.parentElement;

  val = listItems.parentElement.parentElement;

  //get next sibling
  val = listItems.nextSibling;
  val = listItems.nextElementSibling;
  val = listItems.nextSibling.nextElementSibling;

  //get previous sibling
  val = listItems.previousSibling;
  val = listItems.previousElementSibling;

  console.log(val);
};
traversingDOM();

console.log("\n");

const createElements = function () {
  //create element
  const li = document.createElement('li');
  // add classname
  li.className = "collection-item";
  // add id
  li.id = "item-id";

  //add attribute
  li.setAttribute("title", "List Item");
  // li.setAttribute("class", "collection");

  //create text node and append
  li.appendChild(document.createTextNode("World"));

  //create new link element
  const link = document.createElement("a");
  link.className = "delete-item secondary-content";
  link.innerHTML = "<i class=\"fa fa-remove\"></i>";

  //append link to li
  li.appendChild(link);

  //append child li to ul
  document.querySelector("ul.collection").appendChild(li);

  console.log(li);
}
createElements();

console.log("\n");

//replacing and removing elements
const replaceAndRemove = function () {
  //Replace elements
  const newHeading = document.createElement("h2");
  newHeading.id = "task-title";
  newHeading.appendChild(document.createTextNode("Taskssssss"));
  // newHeading.textContent = "NEW TASK";
  console.log(newHeading);

  const oldHeading = document.getElementById("task-title");
  console.log(oldHeading);

  //Parent
  const cardAction = document.querySelector(".card-action");

  //replace
  cardAction.replaceChild(newHeading, oldHeading);
}
replaceAndRemove();