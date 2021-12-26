/*

Formatando Strings

s.length // Quantos caracteres a string tem
s.toUpperCase() // Tudo para 'MAIÚSCULAS
s.toLowerCase() // Tudo para 'minúsculas
*/
var nome = prompt("Qual é o seu nome?")

document.write(`Seu nome tem ${nome.length} letras. <br/>`)
document.write(`Seu nome em maiúsculas é ${nome.toUpperCase()}. <br/>A`)
document.write(`Seu nome em minúsculas ${nome.toLowerCase()}.`)

/*
FAZER NO NODE.JS

Formatando Number
var n1 = 1545.5

n1.toFixed(2) // Fixar números após a vírgula
>1545.50

n1.toFixed(2).replace('.' , ',') // Vou trocar uma coisa ('.') por outra (',')
>1545,50


//Formatar para R$

n1.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}) // Localizar (parte do parte) String e formatar no nosso sistema monetário

>R$ 1,545.50

n1.toLocaleString('pt-BR', {style: 'currency', currency: 'URL'}) // Formatar em dólar

>US$ 1,545.50

n1.toLocaleString('pt-BR', {style: 'currency', currency: 'EUR'}) // Em Euro

>€ 1,545,50 // No navegador ficará >€ 1.545,50

*/