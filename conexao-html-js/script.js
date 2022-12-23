console.log("Tudo certo")
let post01 = document.getElementById("post01");
console.log(post01);
let postAutor = document.getElementsByClassName("post-autor");
console.log(postAutor)

let post02 = document.getElementById("post02");
console.log(post02);

let formulario = document.getElementById("formulario");
console.log(formulario);


let posts = document.getElementsByClassName("post");
console.log(posts)

let data = document.getElementsByClassName("post-data");
console.log(data)

let texto = document.getElementsByClassName("post-texto");
console.log(texto)

let redes = document.getElementsByClassName("lista_redes");
console.log(redes)

let textPost02 = document.querySelector("#post02 .post-texto");
console.log(textPost02)

let listRedes = document.querySelector("footer .lista_redes a");
console.log(listRedes)

let links = document.querySelector("#posts .post-texto a");
console.log(links)

let negrito = document.querySelector("#posts .post-texto strong");
console.log(negrito)

let nome = document.querySelectorAll("#formulario .forml #nome");
console.log(nome)

let listRedes1 = document.querySelector("footer .lista_redes");
console.log(listRedes1)

let nav = document.querySelectorAll("header .elementos_nav a");
console.log(nav)

let autorData = document.querySelectorAll("#posts .post .post-autor , .post-data");
console.log(autorData)

let elementoH1= document.querySelector("h1");
console.log(elementoH1);
console.log(elementoH1.innerText);
elementoH1.innerText="Letras de músicas"

let elementoMain= document.querySelector("main");
console.log(elementoMain);
console.log(elementoMain.innerText);
console.log(elementoMain.innerHTML);

elementoMain.innerHTML=`
<h2>Novo subtítulo </h2>
<ul classe="list">
   <li>Elemento de lista JS 01</li>
   <li>Elemento de lista JS 01</li>
   <li>Elemento de lista JS 01</li>

</ul>`

let elementoJava = document.createElement("li");
 elementoJava.innerText = " Asa de Àguia"
 elementoJava.id = "asa"
 let listagem = document.querySelector(".lista_redes")
 listagem.appendChild(elementoJava);
console.log(listagem)

let div=document.querySelector("div");
/*div.style.color="blue"
div.style.color=""
div.style.backgroundColor="blue"
div.style.fontSize="50px"*/
let incluiClasse=div.classList.contains("texto");
console.log(incluiClasse);




