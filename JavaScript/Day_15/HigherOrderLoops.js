const numbers = [1, 2, 3,4,5];

for (const item of numbers) {
    console.log(item);
}

const text = "Hello World";

for (const c of text) {
    console.log(c);
}

const object1 = {
    name : "sandesh",
    age : 26,
}

const arrayOfObject = [
    {
    name : "sandesh",
    age : 27,
},
{
    name : "vishal",
    age : 26,
}];

for (const item of arrayOfObject) {
    console.log(item.age);
}

for (const item in numbers) {
    console.log(`Index is ${item} qand value is ${numbers[item]}`);
}


var concatNumbers = numbers.forEach((element)=>{
   return element + 1 ;
});

console.log(concatNumbers);

concatNumbers = numbers.map((element)=>{
   return element + 2;
})

console.log(concatNumbers);


concatNumbers = arrayOfObject.filter((item)=>{
 return item.age > 26;
})

console.log(concatNumbers);

const additionOfarray = numbers.reduce((prev,current)=>{
   prev = prev + current;
   return prev;
},0);

console.log(additionOfarray);