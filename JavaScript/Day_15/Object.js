//Object Declaration
const user = { 
    name : "Demo",
    age : 19,
    email : "Demo@gmail.com",
    IsLoggedIn : true,
    Marks: [10,20,50]
}


//Object value accessing 
console.log(user.name);
console.log(user.age);
console.log(user.Marks);
console.log(user["Marks"]);
//Object key declaration with space
user["User Name"]

//Inserting new property
user.role = "Admin";
console.log(user);

const user2 = new Object();

user2.name = "test";
user2.age = "23";
console.log(user2);



//Object key value updation and Object freeze

user.age = 18;
console.log(user);

//Freeze Method 
Object.freeze(user);

user.age = 50;
console.log(user);

//Define object method

user.Addition = function () {
    console.log(2 + 5);
}

console.log(user);
console.log(user.Addition());

//Nested object and accessing

const nestedObject = {
    username : {
        firstname: "Demo",
        lastname : "User"
    }
}

console.log(nestedObject.username.firstname);

//Object.assign() and spread operator;

const firstObject = {
    test1 : "7",
    test2 : "9"
}

const secondObject = {
   test3: "8",
   test4: "10"
}

//Using assign method
const combineObject = Object.assign({},firstObject, secondObject);
console.log(combineObject);

//Using spread operator
const spreadObject =  {...firstObject, ...secondObject}
console.log(spreadObject);

//Array of objects and accessing it
const arrayOfObject = [
    {name:"Demo", age:"18"}, 
    {name:"Demo2", age:"18"}, 
    {name:"Demo3", age:"18"}
]

console.log(arrayOfObject[0].name);

//Object Keys method
console.log(Object.keys(user));

//Object Values method
console.log(Object.values(user));

//Object hasOwnProperty method
console.log(user.hasOwnProperty("test"));

//Object de-structure

const {name, age} = user;

console.log(name);
console.log(age);