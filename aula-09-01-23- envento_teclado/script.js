let keyText = document.querySelector("#key-text");
let codeText = document.querySelector("#code-text");
let quadrado = document.querySelector("#quadrado");
let distanciaDaEsquerda = 0

document.addEventListener("keyup",(e)=> {
    keyText.innerText = e.key;
    codeText.innerText = e.code;
    })

document.addEventListener("keydown",(e)=>{
    if(e.code == "ArrowRight"){
        distanciaDaEsquerda = distanciaDaEsquerda + 10
        console.log(distanciaDaEsquerda);

        quadrado.style.left=distanciaDaEsquerda + "px"
    }

    
})

document.addEventListener("keydown",(e)=>{
    if(e.code == "ArrowLeft"){
        distanciaDaEsquerda = distanciaDaEsquerda - 10
        console.log(distanciaDaEsquerda);

        quadrado.style.left=distanciaDaEsquerda + "px"
    }

    
})

let elementoClicado = document.getElementById("elemento-clicado");
let botaoTempo = document.getElementById("botao-tempo");
let tempo = document.getElementById("tempo");

botaoTempo.addEventListener("click",function(evento){
 console.log(evento.timeStamp);
tempo.innerText = evento.timeStamp;
 
});
    