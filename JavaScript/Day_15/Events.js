//Click event
const button =  document.getElementById('click1');
const button2 =  document.getElementById('click2');

button.onclick = changeColor;

button.onclick = function (){
    console.log("Hello World!");
}

button2.onclick = changeColor;

button.addEventListener('click', changeColor);
button.addEventListener('click', function (){
        console.log("Hello World!");
    });

function changeColor(){

    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);

    const body = document.getElementById("colorChange");

    body.style.backgroundColor = `rgb(${r},${g},${b})`;
}

//changeColor();

//mouseover event
const mouseover = document.getElementById('mouseover');

mouseover.addEventListener('mouseover',function(){
    mouseover.style.backgroundColor = 'red';
});

mouseover.addEventListener('mouseout',function(){
    mouseover.style.backgroundColor = 'green';
});

//page load event

window.onload = function () {
    mouseover.style.backgroundColor = 'red';
    console.log("hello world")
};

window.addEventListener('load', function () {
    mouseover.style.backgroundColor = 'red';
    console.log("hello world")
});

//scroll event
window.onscroll = function () {
    alert('Screen is Scrolled!');
}

window.addEventListener('scroll')

