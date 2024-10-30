// Part 1
const fruits=["Banana", "Watermelon", "Orange", "Apple", "Papaya"];
console.log(fruits);
console.log("The length of array is "+fruits.length);
console.log("The Third element is "+fruits[2]);
fruits[1]="Mango";
console.log(fruits);

// Part 2
// Section 1
const number=[2,4,5,3,1];
number.push(6);
number.push(7);
console.log(number);
number.unshift(1);
number.unshift(0);
console.log(number);
number.pop();
console.log(number);
number.shift();
console.log(number);

// Section 2
const colors=["Red","Green","Blue","Yello","White"];
console.log("The index of Green is : "+colors.indexOf("Green"));
console.log("Yello color is in array: "+colors.includes("Yello"));
console.log("Array from index 1 to 3: "+colors.slice(1,3));

