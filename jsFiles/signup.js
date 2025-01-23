let form = document.forms[0]
let fname = document.querySelector('.Fname');
let lname = document.querySelector('.Lname');
let email = document.querySelector('.email');
let password = document.querySelector('.password');
let confirmpass = document.querySelector(".confirmpassword")
let mailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
let fnameError = document.querySelector(".fnameError")
let lnameError = document.querySelector(".lnameError")
let mailError = document.querySelector(".mailError")
let passError = document.querySelector(".passError")
let confirmPassError = document.querySelector(".confirmPassError")
console.log(form);



// passpattern /^ and $: Ensure the entire string is matched.
// (?=.*[a-z]): At least one lowercase letter.
// (?=.*[A-Z]): At least one uppercase letter.
// (?=.*\d): At least one digit.
// (?=.*[@$!%*?&]): At least one special character (you can adjust this set based on your requirements).
// [A-Za-z\d@$!%*?&]{8,}: Ensures the password is at least 8 characters long and contains only allowed characters.

form.addEventListener("submit", function(e){
    
    fnameValidation(e);
    lnameValidation(e);
    mailValidation(e);
    }
    
)

function fnameValidation(e){
    if(fname.value == ""){
        e.preventDefault();
        fnameError.innerHTML = "This field is required";

    }else if(isFinite(fname.value)){
        e.preventDefault();
        fnameError.innerHTML = "This field required characters only"
    }else{
        fnameError.style.display = "none";
    }
}

function lnameValidation(e){
    if(lname.value == ""){
        e.preventDefault();
        lnameError.innerHTML = "This field is required";
      console.log(lnameError);
      
    }else if(isFinite(lname.value)){
        e.preventDefault();
        lnameError.innerHTML = "This field required characters only"
    }else{
        lnameError.style.display = "none";
    }
}


function mailValidation(e){
    if(email.value == ""){
        e.preventDefault();
        mailError.innerHTML = "This field is required";

    }else if(!mailPattern.test(email.value)){
        e.preventDefault();
        mailError.innerHTML = "invalid mail address"

    }else{
        mailError.style.display = "none";
    }
}

function passwordValidation(e){
    if(password.value.length < 8){
        passError.innerHTML = "The password length must not be less than 8"
    }
}

// function  passwordValidation(e){
//     if(password.value == ""){
//         e.preventDefault(e)
//         passError.innerHTML = "This field is required"
//     }if()
// }

