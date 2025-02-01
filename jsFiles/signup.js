
let form = document.forms[0]
let fname = document.querySelector('.Fname');
let lname = document.querySelector('.Lname');
let email = document.querySelector('.email');
let password = document.querySelector('.password');
let confirmpass = document.querySelector(".confirmpassword")
let mailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
let passwordPattern = /^[a-zA-Z0-9!@#$%^&*()_+]{8,}$/;
let fnameError = document.querySelector(".fnameError")
let lnameError = document.querySelector(".lnameError")
let mailError = document.querySelector(".mailError")
let passError = document.querySelector(".passError")
let confirmPassError = document.querySelector(".confirmPassError")
let users = JSON.parse(localStorage.getItem("Users")) || [];


form.addEventListener("submit", function(e){
    e.preventDefault();
    fnameValidation(e);
    lnameValidation(e);
    mailValidation(e);
    passwordValidation(e);
    confirmpassValidation(e);
    
    if(fname.value && lname.value && email.value && password.value && confirmpass.value){
        let user = {
            fname: fname.value,
            lname: lname.value,
            email: email.value,
            password: password.value,
          };
          let found=users.find(item =>item.email===user.email)
          if (!found){
            users.push(user);
            localStorage.setItem("Users", JSON.stringify(users)),
            window.location.replace("./login.html")
          }
        }
        })

fname.addEventListener("blur" , fnameValidation)
    function fnameValidation(e){
        if(fname.value == ""){

            fname.style.border = "2px solid #ff3300";
            fnameError.innerHTML = "This field is required";

        }else if(isFinite(fname.value)){
            fname.style.border = "2px solid #ff3300";
            fnameError.innerHTML = "This field required characters only";

        }else{
            fname.style.border = "2px solid #5a57f1";
            fnameError.style.display = "none";
        }
        
}

lname.addEventListener("blur", lnameValidation)
    function lnameValidation(e){
        if(lname.value == ""){
            lname.style.border = "2px solid #ff3300";
            lnameError.innerHTML = "This field is required";

        }else if(isFinite(lname.value)){
            lname.style.border = "2px solid #ff3300";
            lnameError.innerHTML = "This field required characters only";

        }else{
            lname.style.border = "2px solid #5a57f1";
            lnameError.style.display = "none";
        }
}

email.addEventListener("blur", mailValidation)
    function mailValidation(e){
        let found=users.find(item =>item.email=== email.value)
        if(email.value == ""){
            email.style.border = "2px solid #ff3300";
            mailError.innerHTML = "This field is required";

        }else if(!mailPattern.test(email.value)){
            email.style.border = "2px solid #ff3300";
            mailError.innerHTML = "invalid mail address";

        }else if(found){
            email.style.border = "2px solid #ff3300";
            mailError.innerHTML = "This Mail is Already Exist";

        }else{
            email.style.border = "2px solid #5a57f1";
            mailError.style.display = "none";
        }
}

password.addEventListener("blur", passwordValidation)
    function passwordValidation(e){
        if(password.value == ""){
            password.style.border = "2px solid #ff3300";
            passError.innerHTML = "This field is required";

        }else if(!passwordPattern.test(password.value)){
            password.style.border = "2px solid #ff3300";
            passError.innerHTML = "require 8 characters"

        }else{
            password.style.border = "2px solid #5a57f1";
            passError.style.display = "none";
        }
}

confirmpass.addEventListener("blur", confirmpassValidation)
    function confirmpassValidation(e){
        if(confirmpass.value == ""){
            confirmpass.style.border = "2px solid #ff3300";
            confirmPassError.innerHTML = "This field is required";

        }else
        if(confirmpass.value !== password.value ){
            confirmpass.style.border = "2px solid #ff3300"
            confirmPassError.innerHTML = "Password dosn't match"

        }else{
            confirmpass.style.border = "2px solid #5a57f1";
            confirmPassError.style.display = "none";
        }
}

