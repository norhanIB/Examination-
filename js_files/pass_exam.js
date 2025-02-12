let score = document.getElementById("score");
let username = document.getElementById("username");

username.innerText = localStorage.getItem("userName");
score.innerText = localStorage.getItem("grad");

