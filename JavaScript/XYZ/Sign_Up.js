document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("signup-name").value;
    const email = document.getElementById('signup-email').value;
    const phone = document.getElementById('signup-phone').value;
    const username = document.getElementById('signup-username').value;
    const password = document.getElementById('signup-password').value;
    const confirmPassword = document.getElementById('signup-confirm-password').value;

    const data = {
        Name: name,
        Email: email,
        Phone: phone,
        Username: username,
        Password: password,
        ConfirmPassword: confirmPassword
    }

    let isValid=Validate(data);

    if (isValid) {
        const users = JSON.parse(localStorage.getItem('users')) || [];
        if (users.find(user => user.username === username)) {
            alert('Username already exists');
            return;
        }

        users.push({ username, password });
        localStorage.setItem('users', JSON.stringify(users));
        alert('Signup successful!');
        window.location.href = 'LoginPage.html';
    } 
    else{
        alert("Error in Signup ....!");
    }


});

function Validate(item){
    let isValid = true;

    if (item.Name == '') {
        isValid = false;
        document.getElementById('signup-name').style.border = ("2px solid red");
    }
    else {
        document.getElementById('signup-name').style.border = ("2px solid green");
    }
    let pattern =/^([a-zA-Z0-9][a-zA-Z0-9_.]*@gmail[.]com)$/;
    if (!pattern.test(item.Email) || item.Email == '') {
        isValid = false;
        document.getElementById('signup-email').style.border = ("2px solid red");
    }
    else {
        document.getElementById('signup-email').style.border = ("2px solid green");
    }
    let nump=/^(0|91)?([7-9]{1}[0-9]{9})$/;
    if (!nump.test(item.Phone) || item.Phone=='') {
        isValid = false;
        document.getElementById('signup-phone').style.border = ("2px solid red");
    }
    else {
        document.getElementById('signup-phone').style.border = ("2px solid green");
    }
    if (item.Username == '') {
        isValid = false;
        document.getElementById('signup-usrename').style.border = ("2px solid red");
    }
    else {
        document.getElementById('signup-Username').style.border = ("2px solid green");
    }
    let check=/^([A-Z]+[a-zA-Z]+[@|#|$]+[0-9]+)$/;
    if (!check.test(item.Password) || item.Password =='') {
        isValid = false;
        document.getElementById('signup-password').style.border = ("2px solid red");
    }
    else {
        document.getElementById('signup-password').style.border = ("2px solid green");
    }
    if (item.Password != item.ConfirmPassword) {
        isValid = false;
        document.getElementById('signup-confirm-password').style.border = ("2px solid red");
    }
    else {
        document.getElementById('signup-confirm-password').style.border = ("2px solid green");
    }

    return isValid;
}