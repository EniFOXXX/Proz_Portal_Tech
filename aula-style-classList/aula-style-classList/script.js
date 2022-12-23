let titulo = document.querySelector("h2");
console.log(titulo);
titulo.style.color= "green";
titulo.style.fontSize= "3rem";

//interação do usuário: erro de username
let username = document.getElementById("login-usuario");
let errorText = document.querySelector(".error-text");

username.classList.add("error");
errorText.classList.add("visible");

console.log(errorText)

let senha = document.getElementById("login-senha");

username.classList.remove("error");
errorText.classList.remove("visible");


username.classList.add("correct");
senha.classList.add("error");

errorText.classList.add("visible");



