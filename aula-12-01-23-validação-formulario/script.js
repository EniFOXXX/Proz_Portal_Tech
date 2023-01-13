// ---------- VALIDAÇÃO USERNAME ---------- //
let usernameInput = document.getElementById("username");
let usernameLabel = document.querySelector('label[for="username"]');
let usernameHelper = document.getElementById("username-helper");

// Mostrar popup de campo obrigatório
usernameInput.addEventListener("focus",()=>{
usernameLabel.classList.add("required-popup");
})

// Ocultar popup de campo obrigatório
usernameInput.addEventListener("blur",()=>{
usernameLabel.classList.remove("required-popup");
})
// Validar valor do input
usernameInput.addEventListener("change",(e)=>{
let valor =  e.target.value.trim()
if(valor.length < 3 ){
    usernameInput.classList.add("error")
    usernameInput.classList.remove("correct")
    usernameHelper.innerText = ("Seu username precisa ser maior que 3 caractreres")
    usernameHelper.classList.add("visible")
}  else{
    usernameInput.classList.add("correct")
    usernameInput.classList.remove("error")
    usernameHelper.classList.remove("visible")
}
})

//validar email
let emailInput = document.getElementById("email");
let emailLabel = document.querySelector('label[for="email"]');
let emailHelper = document.getElementById("email-helper");

emailInput.addEventListener("change",(e)=>{
    let valor =  e.target.value
    console.log(valor.includes(".com"));

    if(valor.includes("@") && valor.includes(".com")){
        console.log(" Email válido");

        console.log(" Email inválido");
        emailInput.classList.add("correct")
        emailInput.classList.remove("error")
        emailHelper.classList.remove("visible")
        
    }  else{
        emailInput.classList.add("error")
        emailInput.classList.remove("correct")
        emailHelper.innerText = ("Digite o email correto com @ e .com")
        emailHelper.classList.add("visible")

    }
    })