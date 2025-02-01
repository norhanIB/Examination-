let username = document.getElementById("username");
let score = document.getElementById("score");

username.innerText = localStorage.getItem("userName");
score.innerText = localStorage.getItem("grad")