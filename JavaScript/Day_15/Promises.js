//Call back function

function getdata(name, callbackfunction) {
    setTimeout(() => {
        console.log(name);

        if (callbackfunction) {
            callbackfunction();
        }

    }, 2000);
}


function setData(){
    var add = 2 + 3;
    console.log(add);
}

//using callback 
getdata('Test',setData); // 4

//without using callback
getdata('Demo'); // 4
getdata('Demo2'); //4 

//Promises

const promise = new Promise((resolve, reject)=>{
    setTimeout(() => {
                    resolve(1 + 2);
                }, 4000);
    // console.log("success");
    // reject("error occured");
})

function getAddition(a, b) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(a + b);
            resolve("Success");
        }, 2000);
    });
}

//First way
getAddition(1, 2).then((res) => {
    console.log(res);
    getAddition(2, 3).then((res) => {
        console.log(res);
        getAddition(4, 5)
    });
})
.catch((err) => console.log(err));

//second way
getAddition(1, 2).then((res) => {
    console.log(res);
    return getAddition(2,3);
}).
then((res)=> {
    console.log(res); 
    return getAddition(4,5);
}).
then((res)=>console.log(res));

//async await 
async function getData() {
    await getAddition(1, 2);
    await getAddition(1, 2);
    await getAddition(1, 2);

    await getAddition(1, 2).then((res)=> console.log('Addition is:' + res));
    await getAddition(2, 3).then((res)=> console.log('Addition is:' + res));
    await getAddition(4, 3).then((res)=> console.log('Addition is:' + res));
}




