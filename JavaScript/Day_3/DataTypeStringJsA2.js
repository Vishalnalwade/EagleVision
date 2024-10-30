// Assignment Operator
let x=5;
let y=3;

console.log('Assignment Operations');
x+=y;
console.log("x+=y :"+x);
x-=y;
console.log("x-=y :"+x);
x*=y;
console.log("x*=y :"+x);
x/=y;
console.log(`x/=y :${x}`);
x%=y;
console.log("x%=y :"+x);
x**=y;
console.log("x**=y :"+x);

// Logical Operators
console.log("Logical Operators");

let a=true;
let b=false;

console.log("a && b :",a && b);
console.log("a || b :",a || b);
console.log("!a :",!a);
console.log("a && !b :",a && !b);
console.log("a || !b :"+a || !b);

console.log("Data Types");
// Primitive
let num=5;
let s="Hello";
let z=true;
let n=null;
let ex;
console.log("Type of num :"+typeof num);
console.log("Type of s :"+typeof s);
console.log("Type of z :"+typeof z);
console.log("Type of n :"+typeof n);
console.log("Type of ex :"+typeof ex);

// non Primitive
let arr=[1,2,3];
let obj={name:"Jon",Age:30};
console.log("Type of arr :"+typeof arr);
console.log("Type of obj :"+typeof obj);

// String and String Methods
var str="  Hello World";
console.log("Length of the String :"+str.length);
console.log("First Character of the String :"+str.charAt(0));
console.log("First Character of the String :"+str.at(0));
console.log("First Character Unicode of the String :"+str.charCodeAt(2));
console.log("Slice of the String :"+str.slice(0,7));
console.log("Substring of the String :"+str.substring(0,7));
console.log("Concat of the String :"+str.concat(" India!"));
console.log("Concat of the String :"+str.concat(" India!"));
console.log("Concat of the String :"+str.trim());