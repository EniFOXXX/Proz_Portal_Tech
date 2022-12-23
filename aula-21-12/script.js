let numero = document.querySelector("h2");
let botao = document.querySelector("button");
let contador = 0;

function adcionarUm(){
    contador = contador +1;
    numero.innerText= contador;
}

botao.addEventListener("click",adcionarUm);
console.log(numero)

let button = document.querySelector("button");
let span = document.querySelector("span");
let section = document.querySelector("section");

function mostrarSpan(){
    span.style.opacity="100";
}

button.addEventListener("mouseover",mostrarSpan);

function ocultarSpan(){

    span.style.opacity="0";
}

button.addEventListener("mouseout",ocultarSpan);

function fazerUmClick(){
    section.innerText="Fez um click simples!"
}
button.addEventListener("click",fazerUmClick);

function fazerDoisClicks(){
    section.innerText = "Fez duplo click!"
}

button.addEventListener("dblclick",fazerDoisClicks);