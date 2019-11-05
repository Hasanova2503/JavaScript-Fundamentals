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
}
arrayMethods();

//String methods