//For 

let array =  ["a","b","c"];

for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

//break and continue

for (let i = 0; i < array.length; i++) {

    if(i==2){
        break;
    }

    console.log(array[i]);
}

for (let i = 0; i < array.length; i++) {

    if(i==1){
        console.log("This is index: " + i)
        continue;
    }

    console.log(array[i]);
}


for (let index = 0; index < array.length; index++) {
    
    for (let j = 0; j < array.length; j++) {
        
        
    }
    
}


// Pattern printing

// *
// **
// ***
// ****
// *****

for (let i = 0; i < array.length; i++)  {
    let star = " ";

    for (let j = 1; j <= i; j++) {
        star += "*";  
   }
   
   console.log(star);
}

let count = 1;

while (count < array.length) {
    console.log(count);
    count++;
}

do {
    console.log("run the code fist time");
    count ++;
} while (count <= 2);
