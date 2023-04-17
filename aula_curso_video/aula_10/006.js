let modo = window.document.querySelector('#modo')
modo.addEventListener('click',clicar)
modo.addEventListener('mouseenter',entrar)
modo.addEventListener('mouseout',sair)

function clicar(){
   
    modo.innerText = 'CLICOU!!'
}

function entrar(){
   
    modo.innerText = 'Entrou!!'
    modo.style.background = "black"
    modo.style.color = "white"
}

function sair(){
   
    modo.innerText = 'Saiu!!'
    modo.style.background = "yellow"
    modo.style.color = "blue"
}