// Premitive Data types in js
// String, number, boolean, undefined, null, BigInt;

let x = 'text'// 
let y =  20 
let z = true
let c; 
let v = null;
let h = 9999999999999999999n;

console.log(typeof v);

let j = x;
j = 3;

console.log(x);
console.log(j);

//console.log(h);

// Not- premitive Data Types in js
// Object, Array and function

const test =  {
    name : "demo",
    age : 34
}

const test2 = test;

test2.name = "demo2";

console.log(test);
console.log(test2);

