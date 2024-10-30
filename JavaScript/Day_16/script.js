// let button =document.getElementById('submit');
// button.onclick=validate;
function validate(){
    let fname=document.getElementById('fname').value;
    let lname=document.getElementById('lname').value;
    let phone=document.getElementById('phone').value;
    let email=document.getElementById('email').value;
    let password=document.getElementById('password').value;
    let cpassword=document.getElementById('cpassword').value;


    var formvalidate=true;
    if(fname == ''){
        formvalidate=false;
        document.getElementById('show').innerText="Name field is required!";
    }
    else{
        document.getElementById('show').innerText="";
    }
    if(lname == ''){
        formvalidate=false;
        document.getElementById('ln').innerText="Last Name field is required!";
    }
    else{
        document.getElementById('ln').innerText="";
    }

    // at least 4 Character not exactly 4 Character
    // First Character Uppercase
    // second Character either uppercase or lowercase 
    // one Special Symbol either @ or # or $
    // last atlist one digit 

    // /^([0-9]{4}[-][0-9]{4}[-][0-9]{4}[-][0-9]{4})$/ for adhar card

    let ckeck=/^([A-Z]+[a-zA-Z]+[@|#|$]+[0-9]+)$/;
    if(!ckeck.test(password)){
        formvalidate=false;
        document.getElementById('ps').innerText="Please Enter a Password in Given Format!";
    }
    else{
        document.getElementById('ps').innerText="";
    }
    if(password != cpassword){
        formvalidate=false;
        document.getElementById('cps').innerText="Password not match";
    }
    else{
        document.getElementById('cps').innerText="";
    }
    const pattern=/^(0|91)?([7-9]{1}[0-9]{9})$/;
    if(!pattern.test(phone)){
        formvalidate=false;
        document.getElementById('mobo').innerText="Please Enter the Valid Phone Number!";
    }
    else{
        document.getElementById('mobo').innerText="";
    }
    
    const emptr=/^([a-zA-Z0-9][a-zA-Z0-9_.]*@gmail[.]com)$/;
    if(!emptr.test(email)){
        formvalidate=false;
        document.getElementById('em').innerText="Please Enter the Valid Email Id!";
    }
    else{
        document.getElementById('em').innerText="";
    }

}