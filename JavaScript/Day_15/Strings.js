
// let x = "text";
// let y =  "Text it's \"word\"";

// console.log(y);
// let z =  'text \'text\'';

// console.log(z);

// //template 

// let c = `hello world it's me "text"`;

// console.log(c);

// let d = 50;

// let j =  `The value is ${d}`;
//  j =  "The value is " + d;


// //console.log(j);

// let string1 = "Hello"; // 0 1 2 3 4
// let string2 = "World";

// let concattsring = string1.concat(string2);
// console.log(string1 + " " + string2);
// console.log(concattsring);

// //String Methods

// console.log(string1.charAt(3));
// console.log(string1.at(3));
// console.log(concattsring[6]);
// console.log(string1.charCodeAt(0));


// let slicString = "   Hello World       "; // 0 2 3 4 5 6 7  // -1, -2, -3...

// console.log(slicString.slice(3,7));

// console.log(slicString.slice(2));

// console.log(slicString.slice(-7, -4));

// //substring method always convert the index to zero that is less than 0 value

// console.log(slicString.substring(3, 7));

// console.log(slicString.substr(0, 4));

// console.log(slicString.length);

// console.log(slicString.trim());
// console.log(slicString.trimStart());
// console.log(slicString.trimEnd());

console.log("text".toUpperCase());
console.log("TEXT".toLowerCase());
console.log("Hello World ".repeat(3));
console.log("Hello World World".replace("World", "India"));
console.log("Hello World ".replace("world", "India"));
console.log("Hello World ".replace(/WORLD/i, "India"));
console.log("Hello World Hello".replaceAll("Hello","Javascript"));
console.log("Hello World hello".replaceAll(/Hello/gi,"Javascript"));

const stringArray =  [4, 2, 8]; // 0,1,2
console.log(stringArray[0]);

let str = "4:2:8";
let fruits = str.split(",");
console.log(fruits);

//The indexOf() method returns the index of the first occurrence of a string in a string, or it returns -1 if the string is not found

let text = "Please wait for a min wait"; // 0,1,2,3
let index = text.indexOf("wait");
//index = text.indexOf("wait", 11);
console.log(index);

//The lastIndexOf() method returns the index of the last occurrence of a specified text in a string:

let tex2 = "Please wait for a min wait";
let index2 = tex2.lastIndexOf("wait");
//index2 = tex2.lastIndexOf("wait", 6);
console.log(index2);

let tex3 = "Please wait for a min";
index = tex3.search("wait");
console.log(index);

// These are the differences:

// The search() method cannot take a second start position argument.
// The indexOf() method cannot take regular expressions.

//The match() method returns an array containing the results of matching a string against a string

text = "Hello World Hello";
//const arraytext = text.match("Hello");
const arraytext = text.match(/Hello/g);
console.log(arraytext.length);

//The includes() method returns true if a string contains a specified value

text = "Hello world text";
console.log(text.includes("world"));

if(text.includes("test")){
    console.log("Text contains the value");
}
else{
    console.log("Text not contains the value");
}
console.log(text.includes("world",7));

//matchAll
//startsWith
//endsWith
