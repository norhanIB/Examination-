let username = document.getElementById("username");
let score = document.getElementById("score");

username.innerText = localStorage.getItem("Fname");
score.innerText = localStorage.getItem("grad")