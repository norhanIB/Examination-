let form = document.forms[0]
let fname = document.querySelector('.Fname');
let lname = document.querySelector('.Lname');
let email = document.querySelector('.email');
let password = document.querySelector('.password');
let mailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
let sp=document.getElementsByClassName("Error");

console.log(form);
console.log(sp[0]);



// passpattern /^ and $: Ensure the entire string is matched.
// (?=.*[a-z]): At least one lowercase letter.
// (?=.*[A-Z]): At least one uppercase letter.
// (?=.*\d): At least one digit.
// (?=.*[@$!%*?&]): At least one special character (you can adjust this set based on your requirements).
// [A-Za-z\d@$!%*?&]{8,}: Ensures the password is at least 8 characters long and contains only allowed characters.

form.addEventListener("submit", function(e){
     e.preventDefault();
    fnameValidation(e)
    }
    
)

function fnameValidation(e){
    if(fname.value == ""){
        e.preventDefault(e)
        sp[0].innerHTML = "This field is required"
        console.log(sp)
    }if(isFinite(fname.value)){
         sp[0].innerHTML = "This field required characters only"
    }
}

// fname.addEventListener("input",function(e) {

//     // if(isFinite(fname.value)){
        
//     //     sp[0].innerText = "Only Characters required"
//     // }
//     // else
//     // {
//     //     sp[1].style.display="none";
//     // }
// })