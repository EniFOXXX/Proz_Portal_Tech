

 
function calcular(){
    var pais = window.document.querySelector('input#txtps')
     var p = pais.value
    var resul = window.document.querySelector('div#resultado')
    
    if (p != 'Brasil'){
        resul.innerHTML = `<p>Você é <strong>Estrangeiro</strong></p>`
    } else {
        resul.innerHTML = `<p>Você é <strong>Brasileiro</strong></p>`
    }
}
