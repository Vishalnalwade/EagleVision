console.log(1+2);
console.log(1+3);
console.log(1+4);
console.log(1+5);

function addTwoNumbers(num1, num2) {

    if (num1 != undefined && num2 != undefined) {
        var data = num1 + num2;
        return data;
    }
    else {
        return false;
    }
}

const x = addTwoNumbers(1,"4");

if(x==false){
    console.log("Please enter the values");
}
else{
    console.log("Addition is performed");
}
addTwoNumbers(6 , 8);
addTwoNumbers(8 , 9);
addTwoNumbers(10 , 11);
addTwoNumbers(11 , 12);

function getObject (demo){
    console.log(demo);
}

getObject();

const user = {
    name : "Test", 
    age : 23
}

const numbers = [1,2,3,4]

getObject(numbers);


const add = (num1, num2) => {num1 + num2};

console.log(add(1,2));

let age = 23;

const object1 = {
    name : "sandesh",
    age : 26,
    print : function () {
        console.log(this.age);
    }
}

object1.print();

function getArgumets(){
  console.log(arguments[1]);
}

getArgumets(1, "test", true);

const getArgumetsbyArrow = ()=>{
   console.log(arguments);
}

getArgumetsbyArrow(1, 3,"test");

function print(){
    console.log(arguments[0]);
}

print(1,"test", true);

