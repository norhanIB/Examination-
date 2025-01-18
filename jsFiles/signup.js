let form = document.forms[0]
let fname = document.querySelector('.Fname');
let lname = document.querySelector('.Lname');
let email = document.querySelector('.email');
let password = document.querySelector('.password');
let mailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
let sp=document.getElementsByClassName("Error");

// passpattern /^ and $: Ensure the entire string is matched.
// (?=.*[a-z]): At least one lowercase letter.
// (?=.*[A-Z]): At least one uppercase letter.
// (?=.*\d): At least one digit.
// (?=.*[@$!%*?&]): At least one special character (you can adjust this set based on your requirements).
// [A-Za-z\d@$!%*?&]{8,}: Ensures the password is at least 8 characters long and contains only allowed characters.

// form.addEventListener("submit", function(e){
//     //  e.preventDefault();
   
//     }
    
// )

// fname.addEventListener("input",function(e) {

//     // if(isFinite(fname.value)){
        
//     //     sp[0].innerText = "Only Characters required"
//     // }
//     // else
//     // {
//     //     sp[1].style.display="none";
//     // }
// })