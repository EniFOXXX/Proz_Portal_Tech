var vel = 40

console.log(`A velocidade é ${vel} km/h`)

function calcular(){
    var txtv = window.document.querySelector('input#txtvel')
    var vel = Number(txtv.value)
    var res = window.document.querySelector('div#res')
    res.innerHTML = ` <p> Sua velocidade atual é de <strong>${vel} km/h</strong></p>`
    if(vel>60){
        res.innerHTML += `<p> Você está <strong>MULTADO</strong> por excesso de velocidade</p>`
    }
    res.innerHTML += `<p> Dirija sempre com cinto de segurança!</p>`
}