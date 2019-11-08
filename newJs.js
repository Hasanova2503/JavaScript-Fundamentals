'use strict';
import {sayHi, sayBye} from "./helloJs.js";
// Array methods
const arrayMethods = function() {
    // Array from
    let firstArray = Array.from("1, 2, 4, 3");
    firstArray = Array.from("float");
    console.log(firstArray);

    //isArray
    console.log(Array.isArray(firstArray));

    // Array.of ==> Array(7) creates an element of length 7 whereas Array.of(7) single element 7
    firstArray = Array.of(1, 2, 3);
    console.log(firstArray);
    firstArray = Array.of(7);
    console.log(firstArray);
    console.log(Array(7).length);

    //Array.concat
    firstArray = firstArray.concat(["a", "b", "c"], [{name: "HMS", age: 22}]);
    console.log(firstArray);

    //Array.copyWithin ==> copy element at different index ==> same length
    firstArray = [1, 2, 3];
    firstArray = firstArray.copyWithin(0, 1, 3);
    console.log(firstArray);

    // Array.entries
    firstArray = [1, 2, 3];
    let iterator1 = firstArray.entries();
    for(let keyValue of iterator1) {
        console.log(keyValue);
    }

    // Array.every
    function checkArrayEvery(elem) {
        return elem > 0;
    }
    console.log(firstArray.every(checkArrayEvery));

    // Array.fill ==> fill with value -1 from index 0 to 2(excluding)
    firstArray = firstArray.fill(-1, 0, 2);
    console.log(firstArray);

    // Array.filter ==> filter array content
    firstArray = [1, 2, 3];
    function filterArray(elem) {
        return elem < 3;
    }
    console.log(firstArray.filter(filterArray));

    //Array.find & Array.findIndex==> find first element which satisfy the cond
    function findElem(elem) {
        return elem < 3;
    }
    console.log(firstArray.find(findElem));
    console.log(firstArray.findIndex(findElem));

    // Array.flat ==> combint array in array
    firstArray = [1, 2, [3, 4, [5, 6]]];
    console.log(firstArray.flat());

    //array.flatMap and array.map
    firstArray = [1, 2, 3];
    console.log(firstArray.map(x => [x + x]));
    console.log(firstArray.flatMap(x => [x + x]));

    // array.forEach
    firstArray.forEach(function(elem) {
        console.log(elem * 2);
    });

    //array.includes & array.indexof
    console.log(firstArray.includes(2));
    console.log(firstArray.indexOf(2));

    //array.join ==> join array elements
    console.log(firstArray.join());
    console.log(firstArray.join("-"));

    //array.keys
    iterator1 = firstArray.keys();
    for(let key of iterator1) {
        console.log(key);
    }

    //array.lastIndexOf
    firstArray = [1, 2, 2];
    console.log(firstArray.lastIndexOf(2));

    //array push and pop
    firstArray.push(4);
    console.log(firstArray);
    firstArray.pop();
    console.log(firstArray);

    //array.reduce & reduceRight
    let sum = 0;
    function reduceArray(accumulator, currentValue) {
        return accumulator + currentValue;
    }
    console.log(firstArray.reduce(reduceArray));
    console.log(firstArray.reduceRight(reduceArray, 4));

    //array.reverse == change the array
    console.log(firstArray.reverse());

    //array.shift & unshift
    firstArray.unshift(4);
    console.log(firstArray);
    firstArray.shift();
    console.log(firstArray);

    //array.slice
    firstArray = [1, 2, 3, 4, 5];
    console.log(firstArray.slice(1, 4));

    //array.some
    function someArray(elem) {
        return elem < 3;
    }
    console.log(firstArray.some(someArray));

    //array.sort ==> change original array
    firstArray = [1, 2, 100, 23];
    console.log(firstArray.sort()); // sort as string
    console.log(firstArray.sort((a, b) => a - b)); //compare function

    //array.splice ==> change original array
    console.log(firstArray.splice(0, 2));
    console.log(firstArray);
    firstArray = [1, 2, 3, 4, 5];
    firstArray.splice(0, 2, "a", "b");
    console.log(firstArray);

    //array.toString
    console.log(firstArray.toString());

    //array.values
    iterator1 = firstArray.values();
    for(let value of iterator1) {
        console.log(value);
    }
};
arrayMethods();

console.log("\n");

//String methods
const stringMethods = function() {
    //fromCharCode
    console.log(String.fromCharCode(65, 66, 243));

    //fromCodePoint
    console.log(String.fromCodePoint(9731, 9999, 8888));

    let stringOne = "This is sentence.";

    //charAt, charCodeAt, codePointAt
    console.log(stringOne.charAt(6));
    console.log(stringOne.charCodeAt(6));
    console.log(stringOne.codePointAt(6));

    // concat
    console.log(stringOne.concat("Hello", " World."));
    console.log(stringOne);

    //endsWith & startWith
    console.log(stringOne.endsWith("tence."));
    console.log(stringOne.endsWith("i", 7));
    console.log(stringOne.startsWith("Th"));
    console.log(stringOne.startsWith("Thi", 2));

    //includes
    console.log(stringOne.includes("is"));

    //indexOf
    stringOne = "This is sentence1. This is another."
    console.log(stringOne.indexOf("is"));
    console.log(stringOne.lastIndexOf("is"));

    //match & matchAll
    let regEx = /[A-Z]/g;
    console.log(stringOne.match(regEx));
    regEx = /This/g;
    stringOne = "Th this Th";
    let array = [...stringOne.matchAll(regEx)];
    console.log(array);

    //padEnd & padStart
    stringOne = "Hello";
    console.log(stringOne.padEnd(10, "."));
    console.log(stringOne.padStart(10, "."));

    //repeat
    console.log(stringOne.repeat(5));

    //replace
    stringOne = "Hello";
    regEx = /Hello/gi;
    console.log(stringOne.replace(regEx, "World"));

    //search ==> index of first match
    console.log(stringOne.search(regEx));

    //slice
    console.log(stringOne.slice(1, 3));

    //split
    stringOne = "hello world";
    console.log(stringOne.split(" "));

    //substring
    console.log(stringOne.substring(1, 3));
    console.log(stringOne.slice(1, 3));

    //difference between substring and slice
    stringOne = "Mozilla";
    console.log(stringOne.substring(5, 2));
    console.log(stringOne.slice(5, 2));
    console.log(stringOne.substring(-5, 2));
    console.log(stringOne.slice(-5, 2));

    //tolowercase & to uppercase
    console.log(stringOne.toUpperCase());
    console.log(stringOne.toLowerCase());

    //trim, trimStart & trimEnd
    stringOne = "   Hello  ";
    console.log(stringOne.trim()+stringOne.trim().length);
    console.log(stringOne.trimStart()+stringOne.trimStart().length);
    console.log(stringOne.trimEnd()+stringOne.trimEnd().length);

    //toString
    stringOne = 5;
    console.log(typeof(stringOne));
    console.log(typeof((stringOne).toString()));

    //valueOf
    stringOne = new String("hello");
    console.log(stringOne);
    console.log(stringOne.valueOf());
};
stringMethods();

console.log("\n");

//destructuring assignment using rest parameter for ARRAY and OBJECTS
const destructureAssigment = function() {
    //Array destructurizing
    let firstArray = ["HMS", "Pune"];
    let [name, city] = firstArray;
    console.log(name + city);
    [name, city] = "HMS Pune".split(" ");
    console.log(name);
    console.log(city);

    //ignore elements by ,
    firstArray = ["A", "B", "C"];
    let [firstElem, , thirdElem] = firstArray;
    console.log(firstElem + thirdElem);

    //object
    let user = {};
    [user.name, user.surname] = "A B".split(" ");
    console.log(user);

    //...rest
    firstArray = ["A", "B", "C", "D"];
    // [firstEm, secondElem, ...rest] = firstArray;
    // console.log(firstEm + secondElem);
    // console.log(rest);

    //default values
    let [firstEm = "H", secondElem = "M"] = ["A"];
    console.log(firstEm + secondElem);

    const person = {
        firstName: "H",
        lastName: "M"
    };
    let {firstName, lastName} = person;
    console.log(firstName + " " + lastName);
    let {firstName: fName, lastName: lName} = person;
    console.log(fName + lName);

    //defualt values
    let {firstName: newName = "H", lastName: surName = "S"} = {firstName: "A"};
    console.log(newName + surName);
    
    // rest
    let options = {
        title: "Menu",
        height: 200,
        width: 100
    };
    let {title, ...rest} = options;
    console.log(title);
    console.log(rest);
};
destructureAssigment();

console.log("\n");

const restSpread = function() {
    //rest ==> function parameters
    const sum = function(...args) {
        console.log(args);
        let sum = 0;
        for(let elem of args) {
            sum += elem;
        }
        return sum;
    };
    console.log(sum(1));
    console.log(sum(1, 2));
    console.log(sum(1, 2, 3));

    const showName = function(firstName, lastName, ...rest) { // ...rest at the end
        console.log(firstName + " " + lastName);
        console.log(rest);
    };
    showName("H", "M", "TITLE", "Hell");
    showName("H", "M", "TITLE", "Hell", "G");

    //spread ==> function call
    let arrayFirst = [3, 5, 2, 8, 0];
    let arraySecond = [1, 5, 3, 9, 3];
    console.log(Math.max(...arrayFirst));
    console.log(Math.max(...arrayFirst, ...arraySecond));
    console.log(Math.max(...arrayFirst, 34, ...arraySecond, 54));

    let string = "Hello";
    console.log(...string);
    console.log(Array.from(string));
};
restSpread();

console.log("\n");

// this context
console.log(this);
console.log(window);
const thisContext = function() {
    console.log(this); //undefined using 'use strict', else window

    const person = {
        functionOne: function() {
            return this;
        },
        secondElem: {
            functionOne: function() {
                return this;
            }
        }
    }
    console.log(person.functionOne()); //person
    console.log(person.secondElem.functionOne()); //functionOne, it will not return person ==> 1
    console.log(person.secondElem); //functionOne ==> 2
    console.log(person.secondElem === person.secondElem.functionOne());

    //using a function inside method
    function hello() {
        return this;
    }
    let obj = {
        method: hello
    };
    console.log(obj.method()); //obj

    //this in arrow function
    var arrowFunc = () => {
        return this;
    }
    console.log(arrowFunc()); //return undefined using use strict, else window

    //object prototype
    const objectTwo = {
        func: function() {
            return this.x;
        }
    };
    let newObj = Object.create(objectTwo);
    newObj.x = 10;
    console.log(newObj.x); //10
    console.log(objectTwo.x); //undefined
    console.log(newObj.func());
    console.log(objectTwo.func());
    console.log(newObj);

    //constructor
    function Person(firstName = "Anony") {
        this.name = firstName;
        this.func = function() {
            return this;
        };
    }
    let john = new Person("John");
    let mike = new Person("Mike");
    console.log(john.name);
    console.log(mike.name);
    console.log(john.func()); //return john person
    console.log(mike.func()); //return mike person

};
thisContext();

console.log("\n");

//arrow functions this
const newArrowFunc = () => {
    return this;
};
console.log(newArrowFunc()); // window ==> with or without use strict

const person = {
    method: () => {
        console.log(this);
    }
};
person.method();
const myMethod = person.method; //inherit from parent one
myMethod();
console.log(myMethod() === person.method());

const newPerson = {
    newVar: null,
    myMethod: function() {
        this.newVar = () => {console.log(this)};
    }
};
newPerson.myMethod();
newPerson.newVar(); //newPerson
const newVar = newPerson.newVar;
newVar(); //newPerson

const admin = {
    name: null,
    func: function() {
        this.name = "H";
    }
};
console.log(admin.name);
admin.func();
console.log(admin.name);

console.log("\n");

//call and apply ==> executes immediately
//call calls a function with this value(object) and arguments provided
const callAndApply = function() {
    function Product(name, price) {
        this.name = name;
        this.price = price;
    }

    function Food(name, price) {
        Product.call(this, name, price);
        // Product.apply(this, [name, price]);
        this.category = "Food";
    }

    function Toy(name, price) {
        // Food.call(this, name, price);
        Product.call(this, name, price);
        // Product.apply(this, [name, price]);
        this.category = "Toy";
    }
    console.log(new Food("cheese", 55));
    console.log(new Toy("robot", 111));

    function greet(str) {
        var reply = [this.animal, "typically sleeps between", this.sleepDuration, str].join(" ");
        return reply;
    }
    var obj = {
        animal: "cats",
        sleepDuration: "12-16 hrs"
    };
    console.log(greet.call(obj, "HMS")); //argument list
    console.log(greet.call({animal: "dogs", sleepDuration: "14hrs"}, "SUSHI")); //called immediately
    console.log(greet.apply(obj, ["FOOD"])); //array of arguments

    //apply to append string
    var array = [1, 2, 3];
    var mixed = ["a", 4];
    array.push.apply(array, mixed);
    console.log(array);

    //apply in builtin functions
    array = [1, 3, 4, 2];
    console.log(Math.max.apply(null, array)); //obj null
    console.log(Math.max(...array));
}
callAndApply();

console.log("\n");

//bind() ==> creates a new function and can be called later
const bindFunc = function() {
    var module = {
        x: 42,
        getX: function() {
            return this.x;
        }
    }
    var unboundX = module.getX;
    // console.log(unboundX());
    var boundX = unboundX.bind(module);
    console.log(boundX());

    var poke = {
        firstName: "Pikachu",
        getName: function() {
            return this.firstName;
        }
    };

    var pokeName = function(snack) {
        console.log(this.getName() + " SELECTED" + snack);
    }
    var logPoke = pokeName.bind(poke);
    logPoke("PIZZA");
    console.log(logPoke);
    console.log(pokeName);
    console.log(logPoke == pokeName);

    // methods of objects
    var pokeGetName = poke.getName.bind(poke);
    console.log(pokeGetName());
};
bindFunc();

console.log("\n");

//Map operations
const mapMethods = function() {
    let mapOne = new Map([[1, "two"], [3, "three"], [2, "one"]]);
    console.log(mapOne);
    mapOne.set("1", "stringKeyValue");
    mapOne.set(4, "Numeric");
    mapOne.set(true, "Boolean");
    mapOne.set(true, "Bool"); //override true key
    console.log(mapOne);
    console.log(mapOne.size);
    console.log(mapOne.get(1)); //get the value of key

    //store object as keys
    const person = {
        name: "H"
    };
    let mapTwo = new Map();
    mapTwo.set(person, "objects");
    console.log(mapTwo);
    console.log(mapTwo.get(person));

    //map chaining
    mapTwo.set(1, "one")
        .set(2, "two")
        .set(3, "three");
    console.log(mapTwo);

    //map keys values entries
    let iterator1 = mapTwo.keys();
    for(let key of iterator1) {
        console.log(key);
    }

    iterator1 = mapTwo.values();
    for(let value of iterator1) {
        console.log(value);
    }

    iterator1 = mapTwo.entries();
    for(let keyValue of iterator1) {
        console.log(keyValue);
    }

    //forEach
    mapTwo.forEach((value, key, map) =>{
        console.log(`${key}: ${value}`);
    });

    // Map from object
    mapTwo = new Map(Object.entries(person)); //object.entries return array of number of arrays
    console.log(mapTwo.get("name"));

    //object from map
    let prices = new Map([["Apples", 100], ["Mango", 25], ["orange", 75]]);
    console.log(prices);
    let fruitsPrices = Object.fromEntries(prices.entries());
    console.log(fruitsPrices);

    console.log(prices.has("Apples")); //if key exists
    //clear to delete all key value
};
mapMethods();

console.log("\n");

//set operations
const setMethods = function() {
    let setOne = new Set();
    const mike = {name: "Mike"};
    const john = {name: "John"};
    const mary = {name: "Mary"};

    setOne.add(mike);
    setOne.add(john);
    setOne.add(mary);
    setOne.add(john);
    console.log(setOne);
    console.log(setOne.size);

    let setTwo = new Set([1, 2, 1, 4, 3]);
    console.log(setTwo);

    //iteration over set
    for(let value of setTwo) {
        console.log(value);
    }

    setTwo.forEach((value, valueAgain, set) => {
        console.log(value * 2);
    });
    
    console.log(setTwo);
    setTwo.delete(2);
    console.log(setTwo);
    setTwo.clear(); // clear everything
    console.log(setTwo);

    //set entries, values, keys
    setTwo.add(1).add(2).add(2).add(4);
    let iterator1 = setTwo.keys();
    for(let key of iterator1) {
        console.log(key);
    }
    iterator1 = setTwo.values();
    for(let value of iterator1) {
        console.log(value);
    }

    //array to set
    let array1 = [1, 2, 3, 4, 2, 3];
    setTwo = new Set(array1);
    console.log(setTwo);
};
setMethods();

console.log("\n");

//scheduling

const scheduling = function() {
    //setTimeout ==> executed only once
    console.log("First statement");
    function testFunction() {
        console.log("2nd statement");
    }
    setTimeout(testFunction, 3000);
    console.log("Third statment");

    function withArg(fName, lName) {
        console.log(`${fName} ${lName}`);
    }
    setTimeout(withArg, 2000, "H", "M"); //use of string is not recommended ==> use arrow function

    setTimeout(() => {
        console.log("4th statement");
    }, 4000);

    //cancelling timer
    let timerId = setTimeout(() => {
        console.log("5th statement"); //never executed
    }, 1000);
    console.log(timerId);
    clearTimeout(timerId);
    console.log(timerId);

    //setInterval
    timerId = setInterval(() => {
        console.log("Repeat after 2sec", 2000);
    }, 2000);

    function stopInt() {
        clearInterval(timerId); // ==> stop the setInterval
    }
    setTimeout(stopInt, 10000);
};
// scheduling();

console.log("\n");

//import and export
sayHi("John");
sayBye("mi");

console.log("\n");

//callbacks ==> function is executed after another function has finished
function hello() {
    console.log("Hello");
}
function helloAgain() {
    setTimeout(() => {
        console.log("Hello again");
    }, 4000);
}
function thirdFunction(callback) {
    console.log("Callback function");
    callback();
}
//callback in callback in callback ... ==> callback hell or pyramid of doom
const callbackFn = function() {
    helloAgain(); //first hello is printed
    hello(); //then hello again after 4 sec
    thirdFunction(hello); // ==> first complete thirdFunction then execute callback function
};
callbackFn();

let promise = new Promise(function(resolve, reject) {
    setTimeout(() => resolve("done"), 5000);
});
console.log(promise);

setTimeout(() => console.log("\n"), 5000);

//ajax call
const buttonClick = function() {
    document.getElementById("button").addEventListener("click", loadData);
};
buttonClick();

function loadData() {
    //create xhr object
    const xhr = new XMLHttpRequest();

    //open
    xhr.open("GET", "data.txt", true);
    // console.log("READY STATE: ", xhr.readyState);

    //optional ==> spinners or loaders
    xhr.onprogress = function() {
        console.log("READY STATE: " + xhr.readyState);
    }

    xhr.onload = function() {
        console.log("READY STATE: " + xhr.readyState);
        if(this.status === 200) {
            document.getElementById("output").innerHTML = 
            `<h1>${this.responseText}</h1>`
            console.log(this.responseText);
        }
    }

    //older code using ready state
    // xhr.onreadystatechange = function() {
    //     console.log("READY STATE: " + xhr.readyState);
    //     if(this.status === 200 && this.readyState === 4) {
    //         console.log(this.responseText);
    //     }
    // }

    //error
    xhr.error = function() {
        console.log("ERROR");
    }

    xhr.send();

    //HTTP Status ==> 200 -> OK,  403 -> forbidden, 404 -> not found

    //readyState values ==> 0->request not initialized, 1->server connection established, 2->request received, 3->processing request, 4->request finished and response in ready

}

console.log("\n");

//working with JSON and ajax
const getSingleCustomer = function() {
    document.getElementById("button1").addEventListener("click", onButton1Click);
    document.getElementById("button1").addEventListener("mouseover", overFunc);
    document.getElementById("button1").addEventListener("mouseout", outFunc);
    
    document.getElementById("button2").addEventListener("click", onButtonTwoClick);
};
getSingleCustomer();

function overFunc() {
    document.getElementById("button1").style.background = "red";
}

function outFunc() {
    document.getElementById("button1").style.background = "";
}

function onButton1Click(e) {
    const xhr = new XMLHttpRequest();

    xhr.open("GET", "customer.json", true);

    xhr.onload = function() {
        if(this.status === 200) {
            //To read the json values ==> object
            const customer = JSON.parse(this.responseText);
            const output = 
            `<ul>
                <li>ID: ${customer.id}</li>
                <li>Name: ${customer.name}</li>
                <li>Company: ${customer.company}</li>
            </ul>`;
            document.getElementById("customer").innerHTML = output;
            console.log(this.responseText);
        }
    }

    xhr.send();
}

//load array of customers
function onButtonTwoClick(e) {
    const xhr = new XMLHttpRequest();

    xhr.open("GET", "customers.json", true);

    xhr.onload = function() {
        if(this.status === 200) {
            //To read the json values ==> object
            const customers = JSON.parse(this.responseText);

            let output = "";

            customers.forEach(function(customer) {
                output += 
                `<ul>
                    <li>ID: ${customer.id}</li>
                    <li>Name: ${customer.name}</li>
                    <li>Company: ${customer.company}</li>
                </ul>`;
            });

            document.getElementById("customers").innerHTML = output;
            console.log(this.responseText);
        }
    }

    xhr.send();
}

//chuck norris jokes
const chuck = function() {
    document.querySelector(".get-jokes").addEventListener("click", getJokes);
};
chuck();

function getJokes(e) {
    const number = document.querySelector('input[type="number"]').value;

    const xhr = new XMLHttpRequest();

    xhr.open("Get", `http://api.icndb.com/jokes/random/${number}`, true);

    xhr.onload = function() {
        if(this.status === 200) {
            const response = JSON.parse(this.responseText);

            let output = "";
            if(response.type === "success") {
                response.value.forEach((joke) => {
                    output += `<li>${joke.joke}</li>`
                });
            }
            else {
                output +=`<li>Something went wrong!!!!!</li>`;
            }

            document.querySelector(".jokes").innerHTML = output;
        }
    }

    xhr.send();

    e.preventDefault();
}

//callback sync
const callBFn = function() {
    const posts = [
        {
            name: "First",
            topic: "Topic 1"
        },
        {
            name: "Second",
            topic: "Topic 2"
        }
    ];

    function createPosts(post) {
        setTimeout(() => {
            posts.push(post);
        }, 2000);
    }

    function getPosts() {
        setTimeout(() => {
            let output = "";
            posts.forEach((post) => {
                output += `<li>${post.name}</li>`;
            });
            document.getElementById("callbackPractice").innerHTML = output;
        }, 1000);
    }

    createPosts({name: "Three", topic: "Topic 3"});
    getPosts();
}
callBFn();

//callback async
const callbackAsync = function() {
    const posts = [
        {
            name: "First",
            topic: "Topic 1"
        },
        {
            name: "Second",
            topic: "Topic 2"
        }
    ];

    function createPosts(post, callback) {
        setTimeout(() => {
            posts.push(post);
            callback();
        }, 2000);
    }

    function getPosts() {
        setTimeout(() => {
            let output = "";
            posts.forEach((post) => {
                output += `<li>${post.name}</li>`;
            });
            document.getElementById("callbackAsync").innerHTML = output;
        }, 1000);
    }

    createPosts({name: "Three", topic: "Topic 3"}, getPosts);
};
callbackAsync();