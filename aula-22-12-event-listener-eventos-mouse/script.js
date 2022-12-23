let quantidadeSubtotal = document.getElementById("quantidade-subtotal");
let valorSubtotal = document.getElementById("valor-subtotal");
let valorProduct01 = 11.66

let subtotalInfo = {
  quantidade: 1,
  valor: 11.66,
};

quantidadeSubtotal.innerText = subtotalInfo.quantidade + " itens";
valorSubtotal.innerText = subtotalInfo.valor;

function addValor(){
  valorSubtotal.innerText=Number(valorProduct01* quantProdutos.value).toFixed(2)
}

// Capturar botão
let botaosomar= document.getElementById("btn-adicionar-produto-01");
let botaosubtrair= document.getElementById("btn-subtrair-produto-01");
let quantProdutos=document.getElementById("quantidade-produto-01");


//declarar função

function addProdutos(){
  quantProdutos.value = Number(quantProdutos.value) + 1
  quantidadeSubtotal.innerText =`${++subtotalInfo.quantidade} itens`
  subtotalInfo.valor +=valorProduct01
  addValor()
}

function subtProdutos(){
  quantProdutos.value = Number(quantProdutos.value) - 1
  quantidadeSubtotal.innerText=`${--subtotalInfo.quantidade} itens`
  subtotalInfo.valor -=valorProduct01
  addValor()
}
console.log(valorSubtotal)


// ação do botão

botaosomar.addEventListener("click",addProdutos);
botaosubtrair.addEventListener("click",subtProdutos);