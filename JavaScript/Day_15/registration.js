
function Submit(){
    let NameValue = document.getElementById('Name').value;
    let EmailValue = document.getElementById('Email').value;
    let PasswordValue = document.getElementById('Password').value;
    let ConfirmPasswordValue = document.getElementById('ConfirmPassword').value;
    const SkillsArray= ["HTML","CSS","JS"];

    const userRegister = { 
        Name : NameValue, 
        Email : EmailValue, 
        Password : PasswordValue, 
        ConfirmPassword :ConfirmPasswordValue,
        Skills : SkillsArray,
        nestesObject : {
            
        }
    }

    localStorage.setItem('User',JSON.stringify(userRegister));
}