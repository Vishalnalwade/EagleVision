
// 1. Dynamic Full Name Generation 
// - Check if the first character of firstname or lastname is capital or not if not then Dynamically concatenate the two inputs into a full name, ensuring the first character of names are properly capitalized.

//   *Hints:*
//   - Convert the first character of each name to uppercase while making the rest of the name lowercase.

const name = "vIshal nalwade";
const splitname = name.split(" ");
console.log("Question 1 ");

if (splitname[0] == splitname[0].at(0).toUpperCase() + splitname[0].slice(1).toLowerCase()) {

    console.log(splitname[0]);
}
else {
    let us = splitname[0].at(0).toUpperCase() + splitname[0].slice(1).toLowerCase();
    console.log(us);
}
if (splitname[1] == splitname[1].at(0).toUpperCase() + splitname[1].slice(1).toLowerCase()) {

    console.log(splitname[1]);
}
else {
    let us = splitname[1].at(0).toUpperCase() + splitname[1].slice(1).toLowerCase();
    console.log(us);
}

// 2. Reversing a String Dynamically*
// - Write a program that reverses the word and prints it.

//   *Hint:*
//   - Convert the string into an array of characters using .split(), then reverse the array and join it back into a string.

//   *Example Input:*  
//   JavaScript  
//   *Example Output:*  
//   tpircSavaJ

console.log("\nQuestion 2 ");
let str="JavaScript";
console.log(str);
let r=str.split("").reverse().join("");
console.log(r);


// 3. Count Occurrences of a Character*
// - Write a program that dynamically counts how many times the character occurs in the sentence.

//   *Example Input:*  
//   Sentence: JavaScript is awesome! 

console.log("\nQuestion 3");
let occ="JavaScript is awesome!";
let mat=occ.match(/a/gi);
console.log("The Character Found "+mat.length+" Times");

// *4. Word Search*

// - Write a program that finds whether the word exists in the sentence and return the word's index within the sentence.

//   *Example Input:*  
//   Sentence: Learning JavaScript is fun  
//   Word: JavaScript  
//   *Example Output:*  
//   The word 'JavaScript' starts at index 9.

console.log("\nQuestion 4 ");
let sen="Learning JavaScript is fun";
// const arr=sen.split("");
// let indx=arr.indexOf("J");
// console.log("The Word 'JavaScripr' starts at index "+indx);
const ser=sen.search("JavaScript");
// console.log(ser);
console.log("The Word 'JavaScript' starts at index "+ser);


// 5. Check if a String is a Palindrome 
// - Write a program that checks if the word is a palindrome (a word that reads the same forwards and backwards, like "racecar").

//   *Hint:* 
//   - Reverse the word and compare it to the original.

//   *Example Input:*  
//   madam  
//   *Example Output:*  
//   true
console.log("\nQuestion 5 ");
let w="madama";
let rev=w.split("").reverse().join("");
if(w==rev){
    console.log("True");
}
else{
    console.log("False");
}


// 6. Replace All Vowels with a Special Character 
// - Ask the user to input a sentence.
// - Replace all the vowels in the sentence with a special character, such as *.

//   *Hint:*
//   - Use .replace() in combination with a regular expression (/[aeiou]/gi) to find and replace vowels.

//   *Example Input:*  
//   I love programming!  
//   *Example Output:*  
//   * l*v* pr*gr*mm*ng!

console.log("\nQuestion 6 ");
let st="I love programming!";
let rep=st.replace(/[aeiou]/gi ,"$");
console.log(rep);
