"use strict";
const getText = document.getElementById("getTextAsync").addEventListener("click", asyncFunction);
const getJSON = document.getElementById("getJSONAsync").addEventListener("click", asyncJsonFunc);
const getTextFetch = document.getElementById("getTextFetch").addEventListener("click", asyncTextFetch);
const promiseBtn = document.getElementById("promiseButton").addEventListener("click", promiseFn);
const asyAw = document.getElementById("asyncAwait").addEventListener("click", asyncAwaitFn);

function asyncFunction() {
    const xhr = new XMLHttpRequest();

    xhr.open("GET", "data.txt", true);
    xhr.onload = function() {
        console.log(this);
        console.log(xhr.readyState);
        if(this.status === 200) {
            console.log(this.responseText);
            let outout = "";
            // document.getElementById("outputAsync").innerText = `<h3>${this.responseText}<h3>`;
            document.getElementById("outputAsync").innerHTML = `<h3>${this.responseText}</h3>`;
        }
    }

    xhr.send();
}
// asyncFunction();

function asyncJsonFunc() {
    const xhr = new XMLHttpRequest();

    xhr.open("GET", "http://api.icndb.com/jokes/random/3", true);

    xhr.onload = function() {
        if(this.status === 200) {
            console.log(JSON.parse(this.responseText));
        }
    }

    xhr.send();
}

function asyncTextFetch() {
    // fetch("data.txt")
    //     .then(response => response.text())
    //     .then(data => {
    //         console.log(data);
    //         document.getElementById("outputAsync").innerHTML = data;
    //     })
    //     .catch(err => console.log(err));

    // fetch("customer.json")
    //     .then(res => res.json())
    //     .then(data => console.log(data))
    //     .catch(err => console.log(err));

    fetch("customers.json")
        .then(res => res.json())
        .then(data => {
            const customers = data;
            customers.forEach((customer) => {
                console.log(customer.name);
            });
        })
        .catch(err => console.log(err));
}

function promiseFn() {
    // promiseSample().then(data => console.log(data))
    //     .catch(err => console.log(err));

    const data = {
        name: "HMS"
    }
    promiseSample().then(data => console.log(data))
        .catch(err => console.log(err));
}

function promiseSample() {
    // return new Promise((resolve, reject) => {
    //     fetch("http://api.icndb.com/jokes/random/3")
    //         .then(res => res.json())
    //         .then(data => resolve(data))
    //         .catch(err => reject(err));
    // })

    return new Promise((resolve, reject) => {
        fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => resolve(data))
        .catch(err => reject(err));
    })
}

function asyncAwaitFn() {
    awaitFn().then(data => console.log(data))
        .catch(err => console.log(err));
}

async function awaitFn() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");

    const data = await response.json();

    return data
}

class User {
    age = 22;
    constructor(name) {
        this.name = name;
    }
    get() {
        return `Hello ${this.name} ${this.age}`;
    }
}

const hash = new User("HASH");
console.log(hash.get());
console.log(hash);
console.log(Object.getOwnPropertyNames(User.prototype));

function UserFn(name) {
    this.name = name;
    this.age = 12;
}
UserFn.prototype.get = function() {
    return `Hello ${this.name} ${this.age}`;
}
const sap = new UserFn("Sap");
console.log(sap);