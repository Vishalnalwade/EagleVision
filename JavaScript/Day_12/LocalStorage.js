
const button=document.getElementById("button");
// const button2=document.getElementById("data");
const button3=document.getElementById("remove");

button.onclick = addData;
// button2.onclick = showData;
button3.onclick = removeData;

function addData() {
    let id = document.getElementById("sk").value;
    let ele = document.getElementById("element").value;
    const arr=ele.split(",");
    var key=JSON.stringify(id);
    var value=JSON.stringify(arr);
    localStorage.setItem(key,value);
}

function removeData(){
    let remove = document.getElementById("delete").value;
    const key=JSON.stringify(remove);
    localStorage.removeItem(key);
}


// let keyto='1';
// function showData() {
//     // let keyto = document.getElementById("key").value;
//     // alert("method call");
//     // if(localStorage.getItem(keyto) !== null){
//         const value=localStorage.getItem("1");

//         // const list=document.getElementById("list");
//         // list.innerHTML="";
//         let ul=document.createElement("ul");
//         let li=document.createElement("li");
//         li.innerText=value;
//         ul.appendChild(li);
//         document.body.appendChild(ul);
//         // li.innerHTML=localStorage.getItem(key);
//     // }
// }