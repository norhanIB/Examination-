let form = document.forms[0]
let mail = document.querySelector("#email");
let pass = document.querySelector("#password")
let mailError = document.querySelector(".mailError")
let passError = document.querySelector(".passError")
let error = document.querySelector(".Error")
let mailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
let passwordPattern = /^[a-zA-Z0-9!@#$%^&*()_+]{8}$/;

let emailLocal = localStorage.getItem("Email")
let passwordLocal = localStorage.getItem("Password")

// history.pushState(null, null, location.href);
// window.onpopstate = function () {
//     history.go(1);
// };

form.addEventListener("submit", function(e){
    e.preventDefault();
    mailValidation(e);
    passValidation(e);

    if(mail.value && pass.value){
        if(!(mail.value === emailLocal && pass.value === passwordLocal)){
            error.innerHTML = "incorect mail or password";
        }else{
            localStorage.setItem("isLoggedIn", "true");
            window.location.href = '../htmlpages/home.html'; 
        }
    }
})

mail.addEventListener("blur", mailValidation)
function mailValidation(e){
    if(mail.value == ""){
        mail.style.border = "2px solid #ff3300";
        mailError.innerHTML = "this field is required";

    }else if(!mailPattern.test(mail.value)){
        mail.style.border = "2px solid #ff3300";
        mailError.innerHTML = "invalid mail address";

    }else{
        mail.style.border = "2px solid #5a57f1"
        mailError.style.display = "none";
}
}

pass.addEventListener("blur", passValidation)
function passValidation(e){
    if(pass.value == ""){
        pass.style.border = "2px solid #ff3300";
        passError.innerHTML = "This field is required";

    }else if(!passwordPattern.test(pass.value)){
        pass.style.border = "2px solid #ff3300";
        passError.innerHTML = "require 8 characters ";

    }else{
        pass.style.border = "2px solid #5a57f1"
    passError.style.display = "none";
}   
}




