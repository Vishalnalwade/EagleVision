// Conditional statements are used to perform different actions based on different conditions.

// Comparision operator
// == , !=, < , > , <= , >= , ===

// logical operator
// &&, || , !

let x = 3;
let y = 5;

if (x == y) {
 console.log("condition is ture");
}

let userLoggedIn = false;

if (userLoggedIn) {
    console.log("");
    a + b 
}
else {

}

// if (2 > 5) {

// }
// else if(3 < 5){

// }
// else if(){

// }
// else if(){

// }
// else{

// }

let key = 2;

switch (key) {
    case 1:
        console.log("Jan");
        console.log("tex2");
        break;
    case 2:
        console.log("Feb");
        console.log("tex2");
        break;
    case 3:
        console.log("March");
        console.log("tex2");
        break;
    default:
        console.log("default code");
        break;
}

//Nullish Coalescing Operator (??)

const object1 = {
    name : "text",
    age : 18,
}

let z  = object1?.email ?? "Demo@gamil.com";

console.log(z);

//terniary operator

2 == 3 ? console.log("true") : console.log("false");