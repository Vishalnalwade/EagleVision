function setdata(){
    localStorage.setItem("Username" , "Firstname LastName");
    localStorage.setItem("UserId" , "1");
}

const Username = document.getElementById('UserName');

Username.innerText = localStorage.getItem('Username');

const removeButton = document.getElementById('remove');
removeButton.onclick = removeItem;

function removeItem(){
    localStorage.removeItem("Username");
}

function setArrayAndObject(){

    // const numbers = [1,2,3,4];

    // var numbersString = JSON.stringify(numbers);

    // localStorage.setItem("Numbers" , numbersString);

    const user = {
        userId : 1,
        userName : 'Demo User'
    }

    var jsonString = JSON.stringify(user);

    localStorage.setItem("user" , jsonString);
}

function getUser(){

   var userString = localStorage.getItem('user');

   var user = JSON.parse(userString);

   console.log(user.userName);
}