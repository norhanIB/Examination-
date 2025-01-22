let form = document.forms[0]
let mail = document.querySelector("#email");
let mailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
let mailError = document.querySelector(".mailError")

form.addEventListener("submit", function(e){
    mailValidation(e)
})

function mailValidation(e){
    if(email.value == ""){
     
        mailError.innerHTML = "This field is required";

    }else if(!mailPattern.test(email.value)){
        mailError.innerHTML = "invalid mail address"

    }else{
        mailError.style.display = "none";
    }
}