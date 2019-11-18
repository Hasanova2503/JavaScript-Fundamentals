const question1Button = document.getElementById("question1");
question1Button.addEventListener("mouseenter", getQuestion1Function);
question1Button.addEventListener("click", removeHandlerFunction);

const question2Button = document.getElementById("question2");
question2Button.addEventListener("click", getData);

const question3Button = document.getElementById("question3");
question3Button.addEventListener("click", swapKeyValue);

const question5Button = document.getElementById("question5");
question5Button.addEventListener("click", showString);

const question6Button = document.getElementById("question6");
question6Button.addEventListener("click", getBrowserData);

const question7Button = document.getElementById("question7");
question7Button.addEventListener("click", removeDuplicate);

const question7SetsButton = document.getElementById("question7Sets");
question7SetsButton.addEventListener("click", removeArrayDuplicates);

const question7FilterButton = document.getElementById("question7Filter");
question7FilterButton.addEventListener("click", filterArray);

const toggleSwitch = document.getElementById("customSwitch");
// toggleSwitch.addEventListener("click", switchFunction);
toggleSwitch.addEventListener("click", usingDiv);

const uniqueButton = document.getElementById("question8Unique");
const uniqueFilterButton = document.getElementById("question8Filter");
uniqueButton.addEventListener("click", getUnique);
uniqueFilterButton.addEventListener("click", getUniqueFilter);

const question9Button = document.getElementById("question9");
question9Button.addEventListener("click", maxLetter);

const question10Button = document.getElementById("question10");
question10Button.addEventListener("click", playSong);

const question11Button = document.getElementById("question11");
question11Button.addEventListener("click", concatenateString);

const question12Input = document.getElementById("question12");
question12Input.addEventListener("keyup", storeLocal);

function getQuestion1Function(e) {
    console.log("ENTERED");
    e.target.style.background = "red";
}

function removeHandlerFunction(e) {
    console.clear();
    e.target.style.background = "blue";
    question1Button.innerText = "Disabled Q1";
    question1Button.removeEventListener("mouseenter", getQuestion1Function);
    question1Button.removeEventListener("click", removeHandlerFunction);
}

function getData(e) {
    console.clear();
    console.log("Promise");
    getText()
        .then(data => console.log(data))
        .catch(err => console.log(err));

    getJson()
        .then(data => console.log(data))
        .catch(err => console.log(err));

    getFromAPI()
        .then(data => console.log(data))
        .catch(err => console.log(err));
}

function getText() {
    return new Promise((resolve, reject) => {
        fetch("../data.txt")
            .then(res => res.text())
            .then(data => resolve(data))
            .catch(err => reject(err));
    });
}

async function getJson() {
    const response = await fetch("../customer.json");

    const data = await response.json();

    return data;
}

function getFromAPI() {
    return new Promise((resolve, reject) => {
        fetch("https://jsonplaceholder.typicode.com/posts/1", {
            method: "GET",
            headers: {
                "Content-type": "application/json"
            }
            // body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => resolve(data))
        .catch(err => reject(err));
    })
}

function swapKeyValue(e) {
    console.clear();
    const person = {
        name: "HMS",
        age: 22,
        1: 34
    };
    const newPerson = {};
    let keys = Object.keys(person);
    for(let key of keys) {
        console.log(key);
        newPerson[person[key]] = key;
    }
    console.log(person);
    console.log(newPerson);
}

function removeDuplicate(e) {
    console.clear();
    const arr = [1, 22, 45, 32, 1, 22, 100, 1];

    let sortedArray = arr.sort((a, b) => {
        return a - b;
    });
    console.log(sortedArray);

    for(let i = 0; i < sortedArray.length; i++) {
        console.log("Loop" + i);
        let count = 0;
        let j = i + 1;
        while(j < sortedArray.length) {
            if(sortedArray[i] === sortedArray[j]) {
                count++;
            }
            else {
                break;
            }
            j++;
        }
        sortedArray.splice(i + 1, count);
    }
    console.log(sortedArray);
}

function removeArrayDuplicates(e) {
    const array = [1, 22, 45, 32, 1, 22, 100, 1];

    array.sort((a, b) => {
        return a - b;
    });

    const uniqueArray = [...new Set(array)];
    console.log(uniqueArray);
}

function filterArray(e) {
    const array = [1, 22, 45, 32, 1, 22, 100, 1];

    array.sort((a, b) => {
        return a - b;
    });

    const result = array.filter(function(number, i, arr) {
        if(arr.indexOf(number) === i) {
            return number;
        }
    });
    console.log(result);
}

function switchFunction(e) {
    console.clear();
    let shapeBorder = "1px solid black";
    let width = height = "100px";
    const shape = document.getElementById("shape");

    console.log(shape);

    if(toggleSwitch.checked === false) {
        console.log("DISABLED");
        shape.innerHTML = `
        <canvas width=${width} height=${height} style="border:${shapeBorder}; border-radius: 50%"></canvas>`
    }
    else {
        shape.innerHTML = `
        <canvas width=${width} height=${height} style="border:${shapeBorder}""></canvas>`;
        console.log("Enabled");
    }
}

function usingDiv(e) {
    console.clear();
    const shape = document.getElementById("shape");
    shape.style.height = "100px";
    shape.style.width = "100px";
    shape.style.border = "1px solid black";
    if(toggleSwitch.checked === false) {
        console.log("Disabled");
        shape.style.display = "inline-block";
        shape.style["border-radius"] = "";
    }
    else {
        console.log("Enabled");
        shape.style.display = "inline-block";
        shape.style.borderRadius = "50%";
    }
}

function getUnique(e) {
    console.clear();
    const array = [1, 2, 4, 5, 6, 8, 1, 2, 3, 6];
    const uniqueArray = [];
    const nonUniqueArray = [];
    const sortedArray = array.sort((a, b) => {
        return a - b;
    });
    console.log(sortedArray);

    for(let i = 0; i < sortedArray.length; i++) {
        console.log(sortedArray[i]);
        let j = i + 1;
        let count = 1;

        while(j < sortedArray.length) {
            if(sortedArray[i] === sortedArray[j]) {
                count++;
            }
            else {
                break;
            }
            j++;
        }
        console.log(`Count ${count}`);
        if(count !== 1) {
            sortedArray.splice(i, count - 1);
            nonUniqueArray.push(sortedArray[i]);
        }
        else {
            uniqueArray.push(sortedArray[i]);
        }
    }
    console.log(sortedArray);
    console.log(uniqueArray);
    console.log(nonUniqueArray);
}

function getUniqueFilter(e) {
    const array = [1, 2, 4, 5, 6, 8, 1, 2, 3, 6];
    const uniqueArray = [];
    const nonUniqueArray = [];

    array.sort((a, b) => {
        return a - b;
    });

    array.filter((number, i, arr) => {
        if(arr.indexOf(number) === arr.lastIndexOf(number)) {
            uniqueArray.push(number);
        }
        else {
            if(!nonUniqueArray.includes(number)) {
                nonUniqueArray.push(number);
            }
        }
    });
    console.log(uniqueArray);
    console.log(nonUniqueArray);

}

function maxLetter(e) {
    console.clear();
    const str = "How do you do";

    let splitArray = str.split(" ");
    console.log(splitArray);

    let max = "";
    let charObject = {};

    for(let i = 0; i < str.length; i++) {
        let key = str[i];

        if(!charObject[key]) {
            charObject[key] = 0;
        }
        charObject[key]++;

        if(max === "" || charObject[key] > charObject[max]) {
            max = key;
        }
    }
    console.log(max + " " + charObject[max]);

    let maxWord = "";
    let wordObject = {};
    for(let i = 0; i < splitArray.length; i++) {
        let key = splitArray[i];

        if(!wordObject[key]) {
            wordObject[key] = 0;
        }
        wordObject[key]++;

        if(maxWord === "" || wordObject[key] > wordObject[maxWord]) {
            maxWord = key;
        }
    }
    console.log(maxWord + " " + wordObject[maxWord]);
}

function getBrowserData(e) {
    console.clear();
    let browserObject = {}
    browserObject["platform"] = window.navigator.platform;
    browserObject["application name"] = window.navigator.appName;
    browserObject["vendor"] = window.navigator.vendor;
    browserObject["userAgent"] = window.navigator.userAgent;
    browserObject["url"] = window.location.href;
    browserObject["port"] = window.location.port;

    let today = new Date();
    browserObject["date"] = today.getDate() + "/" + today.getMonth() + "/" + today.getFullYear();
    browserObject["time"] = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    
    console.log(browserObject);
    console.log(window.location);
}

function concatenateString(e) {
    console.clear();
    console.log(mergeString(1, "hello", 2));
    console.log(mergeString(1, "hello", "world", "I know you", 84));
}

function mergeString(...args) {
    return (args.join("_"));
}

function storeLocal(e) {
    localStorage.setItem("textValue", e.target.value);
}

(function getLocalStorage() {
    document.getElementById("question12").value = localStorage.getItem("textValue");
    console.log(localStorage.getItem("textValue"));
})();

function playSong(e) {
    console.clear();
    let song1 = new Songs("ABCD", 5);
    let song2 = new Songs("XYZ", 2);
    let song3 = new Songs("PQR", 3);
    Songs.addSong(song1, song2, song3);
    console.log(Songs.songArray);

    let offset = 0;
    for(let i = 0; i < Songs.songArray.length; i++) {
        setTimeout(() => {
            if(i === Songs.songArray.length - 1) {
                console.log("Last Song");
            }
            console.log(Songs.songArray[i].playSong());
        }, offset);
        offset += Songs.songArray[i]["duration"]*1000;
    }
}

class Songs {
    static songArray = [];
    constructor(song, duration) {
        this.song = song;
        this.duration = duration;
    }
    static addSong(...songToBeAdded) {
        return Songs.songArray.push(...songToBeAdded);
    }
    playSong() {
        return `Playing Song:${this.song}`;
    }
}

function showString(e) {
    console.clear();
    let string = "hellohowareyou";

    console.log(replaceNChar(string, 4));
}

function replaceNChar(string, n) {
    let output = "";
    for(let i = 0; i < string.length - n; i++) {
        output+= "*";
    }
    output+=string.substring(string.length - n, string.length);
    return output;
}