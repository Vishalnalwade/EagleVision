//Dynamic list manipulation
const ul =  document.querySelector("ul");

const arraystring = ["test1","test2","test3","test4"];

arraystring.forEach(element => {
    var li = document.createElement('li');
    li.innerText = element
    ul.append(li);
});

