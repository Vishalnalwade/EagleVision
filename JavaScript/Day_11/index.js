const button=document.getElementById("click");
const button2=document.getElementById("click2");
const button3=document.getElementById("click3");
// button.onclick=changeColor;

// function changeColor(){
//     const r=Math.floor(Math.random() *255);
//     const g=Math.floor(Math.random() *255);
//     const b=Math.floor(Math.random() *255);
//     const body=document.getElementById("color");
//     body.style.backgroundColor=`rgb(${r},${g},${b})`;
// }

button.onclick=setData;
button2.onclick=removeData;
button3.onclick=function(){
    console.log("Hello World");
}
function setData(){
    localStorage.setItem("userName","Kairos");
    localStorage.setItem("id","09");

}

const userName=document.getElementById("userName");
userName.innerHTML=localStorage.getItem("userName");

function removeData(){
    localStorage.removeItem("userName");
}
button3.addEventListener("mouseover", function(){
    
    const body=document.getElementById("color");
    body.style.backgroundColor='red';
})
button3.addEventListener("mouseout", function(){
    
    const body=document.getElementById("color");
    body.style.backgroundColor='white';
})