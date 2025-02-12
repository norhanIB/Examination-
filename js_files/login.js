let form = document.forms[0]
let mail = document.querySelector("#email");
let pass = document.querySelector("#password")
let mailError = document.querySelector(".mailError")
let passError = document.querySelector(".passError")
let error = document.querySelector(".Error")
let mailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
let passwordPattern = /^[a-zA-Z0-9!@#$%^&*()_+]{8,}$/;
let usersArray = JSON.parse(localStorage.getItem("Users"))

// mail.value && pass.value
form.addEventListener("submit", function(e){
    e.preventDefault();
    let maill = mailValidation(e);
    let pasword = passValidation(e);

    if(maill && pasword){
        let loginUser = usersArray.find(user => user.email == mail.value && user.password == pass.value)
        
        if(!(loginUser)){
            error.innerHTML = "incorect mail or password";
        }else{
            window.location.replace('../html_pages/home.html'); 
            localStorage.setItem("userName" , `${loginUser.fname} ${loginUser.lname}`)
        }
    }
})

mail.addEventListener("blur", mailValidation)
function mailValidation(e){
    if(mail.value == ""){
        mail.style.border = "2px solid #ff3300";
        mailError.innerHTML = "this field is required";
        return false;
    }else if(!mailPattern.test(mail.value)){
        mail.style.border = "2px solid #ff3300";
        mailError.innerHTML = "invalid mail address";
        return false;
    }else{
        mail.style.border = "2px solid #5a57f1"
        mailError.innerHTML = ""
    }
    return true;
}

pass.addEventListener("blur", passValidation)
function passValidation(e){
    if(pass.value == ""){
        pass.style.border = "2px solid #ff3300";
        passError.innerHTML = "This field is required";
        return false;
    }else if(!passwordPattern.test(pass.value)){
        pass.style.border = "2px solid #ff3300";
        passError.innerHTML = "require 8 characters ";
        return false;
    }else{
        pass.style.border = "2px solid #5a57f1"
        passError.innerHTML = ""
    }
    return true;   
}




