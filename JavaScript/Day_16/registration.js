
function Submit() {
    let NameValue = document.getElementById('Name').value;
    let PhoneValue = document.getElementById('Phone').value;
    let EmailValue = document.getElementById('Email').value;
    let PasswordValue = document.getElementById('Password').value;
    let ConfirmPasswordValue = document.getElementById('ConfirmPassword').value;


    const SkillsArray = ["HTML", "CSS", "JS"];

    const userRegister = {
        Name: NameValue,
        PhoneNumber: PhoneValue,
        Email: EmailValue,
        Password: PasswordValue,
        ConfirmPassword: ConfirmPasswordValue,
        Skills: SkillsArray
    }

    let ValidationIsValid = IsValidation(userRegister);

    if (ValidationIsValid) {

        localStorage.setItem('User', JSON.stringify(userRegister));
    }
}

function IsValidation(data) {

    let ValidationIsValid = true;

    if (data.Name == '') {
        ValidationIsValid = false;
        document.getElementById('NameVal').innerText = 'Name field is required!'
    }
    else {
        document.getElementById('NameVal').innerText = ''
    }

    const phoneNumberPattern = /^\d{10}$/;

    if (!phoneNumberPattern.test(data.PhoneNumber)) {
        ValidationIsValid = false;
        document.getElementById('PhoneVal').innerText = 'Please Enter the Valid Phone Number!'
    }
    else {
        document.getElementById('PhoneVal').innerText = ''
    }

    if (data.Email) {

    }

    if (data.Password) {

    }

    if (data.Password != data.ConfirmPassword) {
        ValidationIsValid = false;
        document.getElementById('PhoneVal').innerText = 'Please Enter the Valid Phone Number!'
    }

    return ValidationIsValid;
}