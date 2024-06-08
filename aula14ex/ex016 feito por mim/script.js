function calcular(){

var res = document.getElementById('res')
res.innerHTML = ``
var inicio = document.getElementById('inicio')
var chegada = document.getElementById('chegada')
var pass = document.getElementById('pass')

var comeco = Number(inicio.value)
var fim = Number(chegada.value)
var passos = Number(pass.value)

if (passos <= 0) {
    window.alert('[Erro] o valor de passos não pode ser 0 então sera contado com 1')
    passos++
}

for(comeco;comeco < fim; comeco += passos){
    res.innerHTML += ` 👉${comeco}`
 }
 res.innerHTML+=` 👉${comeco}`
}
