let form = document.forms[0]
let mail = document.querySelector("#email");
let pass = document.querySelector("#password")
let mailError = document.querySelector(".mailError")
let passError = document.querySelector(".passError")
let error = document.querySelector(".Error")
let mailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
let passwordPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[\W]).{1,8}$/ ;

let emailLocal = localStorage.getItem("Email")
let passwordLocal = localStorage.getItem("Password")


form.addEventListener("submit", function(e){
    e.preventDefault();
    let inputM = mailValidation(e);
    let inputP = passValidation(e);
    // let isvisible = false;
    if(inputM && inputP){
        console.log(mail.value);
        console.log(emailLocal);
        console.log(pass.value);
        console.log(passwordLocal);
        
        if(mail.value === emailLocal && pass.value === passwordLocal){
            // isvisible = true;
            console.log("rew");
            window.location.href = '../htmlpages/home.html';

         return true;
            
        }else{
            
            // isvisible = false
            error.innerHTML = "incorect mail or password";
        }
        
    }

    // return isvisible;
    // if(mailValidation(e) && passValidation(e)){
    //     console.log(mail.value);
    //         console.log(emailLocal);
    //     if(mail.value !== emailLocal && pass.value !== passwordLocal){
    //         console.log("mada");
            
    //         // console.log(mail.value);
    //         // console.log(emailLocal);
            
            
    //     alert("incorect mail or pass")
    // }}
    
})

function mailValidation(e){
    if(mail.value == ""){
        mailError.innerHTML = "this field is required";
        return false;
    }else if(!mailPattern.test(mail.value)){
        mailError.innerHTML = "invalid mail address";
        return false;
    }
    mailError.style.display = "none";
    return true;
}

function passValidation(e){
    if(pass.value == ""){
        passError.innerHTML = "This field is required";
        return false;
    }else if(!passwordPattern.test(pass.value)){
        passError.innerHTML = "password requires at least one uppercase letter,</br>at least one lowercase letter, at least one special character</br>and max 8 characters";
        return false;
    }
    passError.style.display = "none";
    return true;
    
}




// form.addEventListener("submit", function(e){
//      mailValidation(e);
//      passValidation(e);
     
//     // let isValid = false;
//     //  if(mailValidation(e) && passValidation(e)){
//         // if(!(mail.value == emailLocal && pass.value == passwordLocal)){
//         //     // isValid = true;
//         //     // return true; 
//         //      error.innerHTML = "incorect mail or password"; 
//         // }
//     //     else{
            
//     //         // e.preventDefault();
//     //     }
//     //  }
//     // return isValid;
// })


// function mailValidation(e){
//     if(mail.value == ""){
      
//         mailError.innerHTML = "This field is required";
//         // return false;
//     }else if(!mailPattern.test(mail.value)){
//         mailError.innerHTML = "invalid mail address"
//         // return false;
//     }
//     mailError.style.display = "none";
//     // return true;
    
// }

// function passValidation(e){
//     if(pass.value == ""){
//         passError.innerHTML = "This field is required";
//         // return false;
//     }
//     else if(!passwordPattern.test(pass.value)){
//         passError.innerHTML = "password requires at least one uppercase letter,</br>at least one lowercase letter, at least one special character</br>and max 8 characters"
//         // return false;
//     }
//     passError.style.display = "none";
//     // return true;
// }



