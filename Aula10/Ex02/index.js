function somar() {

var tn1= document.getElementById('txt1') // Jeito antigo, mas certo.
var tn2 = document.querySelector('input#txt2') // Jeito novo, mas certo também.
var res = document.querySelector('div#res')

var c = Number(tn1.value)
var d = Number(tn2.value)

var s = c + d
res.innerHTML = `A soma dos valores ${c} + ${d} é: <strong>${s}</strong>`
}