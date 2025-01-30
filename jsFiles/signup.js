let form = document.forms[0]
let fname = document.querySelector('.Fname');
let lname = document.querySelector('.Lname');
let email = document.querySelector('.email');
let password = document.querySelector('.password');
let confirmpass = document.querySelector(".confirmpassword")
let mailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
let passwordPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[\W]).{1,8}$/ ;
let fnameError = document.querySelector(".fnameError")
let lnameError = document.querySelector(".lnameError")
let mailError = document.querySelector(".mailError")
let passError = document.querySelector(".passError")
let confirmPassError = document.querySelector(".confirmPassError")

// history.pushState(null, null, location.href);
// window.onpopstate = function () {
//     history.go(1);
// };

// if (localStorage.getItem("signedUp")) {
//     window.location.href = "../htmlpages/sign-in.html"; // إعادة التوجيه إلى تسجيل الدخول
// }

form.addEventListener("submit", function(e){
    let fError = fnameValidation()
    let lError = lnameValidation()
    let mError = mailValidation()
    let pError = passwordValidation()
    let cpError = confirmpassValidation()

    if(!(fError && lError && mError && pError && cpError)){
       e.preventDefault()
    }else{localStorage.setItem("Fname",fname.value)
    localStorage.setItem("Lname",lname.value)
    localStorage.setItem("Email",email.value)
    localStorage.setItem("Password",password.value) }
    localStorage.setItem("signedUp", "true"); 
    
}
)

function fnameValidation(e){
    if(fname.value == ""){
        fnameError.innerHTML = "This field is required";
        return false;
    }else if(isFinite(fname.value)){
        fnameError.innerHTML = "This field required characters only";
        return false;
    }
    fnameError.style.display = "none";
    return true;
}

function lnameValidation(e){
    if(lname.value == ""){
        lnameError.innerHTML = "This field is required";
        return false;
    }else if(isFinite(lname.value)){
        lnameError.innerHTML = "This field required characters only";
        return false;
    }
    lnameError.style.display = "none";
    return true;
}

function mailValidation(e){
    if(email.value == ""){
        mailError.innerHTML = "This field is required";
        return false;
    }else if(!mailPattern.test(email.value)){
        mailError.innerHTML = "invalid mail address"
        return false;
    }else if(email.value == localStorage.getItem("Email")){
        mailError.innerHTML = "This Mail is Olready Exist"
        return false;
    }
    mailError.style.display = "none";
    return true;
}

function passwordValidation(e){
    if(password.value == ""){
        passError.innerHTML = "This field is required";
        return false;
    }else if(!passwordPattern.test(password.value)){
        passError.innerHTML = "requires at least one uppercase letter,</br>one lowercase letter,one special character</br>and max length is 8"
        return false;
    }
    passError.style.display = "none";
    return true;
}

function confirmpassValidation(e){
    if(confirmpass.value == ""){
        confirmPassError.innerHTML = "This field is required";
        return false;
    }else
    if(confirmpass.value !== password.value ){
        confirmPassError.innerHTML = "Password dosn't match"
        return false;
    }
    confirmPassError.style.display = "none";
    return true;
}

// ///لما يعمل ساين اب ميعرفش يرجع تاني 
// window.onload = function () {
    
//     if (localStorage.getItem('registered') === 'true') {
    
//         window.location.href = '../htmlpages/login.html';
//     }
// };


// function handleSignUpSuccess() {
// console.log("hello");

//     localStorage.setItem('registered', 'true');

//     window.location.href = '../htmlpages/login.html';
// }
