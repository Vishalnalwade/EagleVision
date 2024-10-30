// Part 1
const person={
    name:"Vishal",
    age:20,
    city:"Barshi"
}
console.log(person);
console.log(person.name);
person.age=30;
person.country="India";
console.log(person);

// Part 2
// Section 1
const students={
    sname:"Vishal",
    rollNo:101,
    grades:"Second Class"
}
console.log(Object.keys(students));
console.log(Object.values(students));
console.log(Object.entries(students));


// Section 2
const employee={
    id:101,
    name:"Jivan",
    salary:"80000/m"
}
const merge=Object.assign({},students,employee);
console.log(merge);

