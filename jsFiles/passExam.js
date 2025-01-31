let score = document.getElementById("score");
let username = document.getElementById("username");

username.innerText = localStorage.getItem("Fname");
score.innerText = localStorage.getItem("grad");

document.addEventListener("click" , function () {
    document.querySelector("audio").play()
})