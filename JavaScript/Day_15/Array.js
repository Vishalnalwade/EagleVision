// Collection of multiple items under a single variable
// Javascript arrays are resizable and can contain a mix of different data types.
// Array emlement can be accesible through indexing.

const myArr =  [1,2,3,4,5];

console.log(myArr[4]);

myArr[2] = "Text";
console.log(myArr);

// array methods

myArr.push(9);
myArr.push(8);
console.log(myArr);

myArr.pop();
console.log(myArr);

// Time complexity is more in case of large data set
myArr.unshift(7);
myArr.shift();
console.log(myArr);

console.log(myArr.includes(9));
console.log(myArr.indexOf(2));
const newArr =  myArr.join();
console.log(newArr);

// slice or splice

const sliceArr =  myArr.slice(1,3);
console.log(sliceArr);
console.log("original array " + myArr);

const spliceArr =  myArr.splice(1,3);
console.log(spliceArr);
console.log("original array " +myArr);

const myArr2 = ["Text", "Text2", "Text3"]
const array2 = new Array(1,2,3,4,5);

myArr2.push(array2);
console.log(myArr2);

const concatArray = myArr2.concat(array2);
console.log(concatArray);

const spreadArray =  [...myArr, ...myArr2, "tfwe", true, 1221231];
console.log(spreadArray);

const nestedArray = [1,2,3, [0,2,3], 8 , 9 , [1,2,[2,3,4]]] ;
console.log(nestedArray.flat(Infinity));
console.log(nestedArray[3][1])

console.log(nestedArray.length);
console.log(nestedArray.at(0));

// Array Search 

const numbers = [4, 9, 16, 25, 29];
let first = numbers.find(name => name < 18 && name > 9);
let last = numbers.findLast(f=>f > 18);
first = numbers.findIndex(f=>f > 18);
last = numbers.findLastIndex(f=>f > 18);
console.log(last);
console.log(last);

// Array sorting

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
fruits.reverse();
console.log(fruits);

const months = ["Jan", "Feb", "Mar", "Apr"];

const sorted = months.toSorted();
console.log(months);
console.log(sorted);

months.sort();
console.log(months);

const reversed = months.toReversed();

// Sorting numeric values
// By default, the sort() function sorts values as strings.
// If numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1".

const points = [40, 100, 100, 1, 5, 25, 10];
points.sort(function(a, b){return b - a});
console.log(points);

// map, filter and reduce - we will discuss this later
