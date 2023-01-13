let linkProz =  document.getElementById("link-proz");
let btnSubmit = document.querySelector("button");
let inputEmail = document.getElementById("email");
let inputIdade = document.getElementById("idade");
let formulario = document.querySelector("form");


//preventDefault()--> desativa o comportamento padrão de algum elemento html
//alert()--> mostra um alerta na tela.
linkProz.addEventListener("click",(e)=>{
    e.preventDefault()
    alert("Não é possível acessar o link");
});

btnSubmit.addEventListener("click",(e)=>{
   e.preventDefault()
    alert("Não é possível enviar os dados do formulário")
});
//ganhou foco
inputEmail.addEventListener("focus",()=>{
    
   inputEmail.style.backgroundColor = "lightgreen" 
   
})
//perdeu o foco
inputEmail.addEventListener("blur",(e)=>{
    
    e.target.style.backgroundColor = "" 
    
 })

 // sofreu alteração de valor
 inputIdade.addEventListener("change",()=>{
    
  alert("Confirma as alterações")

 })

 //confirmar formulário

 formulario.addEventListener("submit",()=>{
    alert("Dados enviados com sucesso!!")
    
 });
