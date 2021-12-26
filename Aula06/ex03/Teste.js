// Jeito antigo
/*
var n1 = Number.parseFloat(prompt("Digite um número:")) //prompt sairá como uma string
var n2 = Number.parseFloat(prompt("Digite outro número:"))//Agora feita a conversão com Number.
parseFloat, o prompt sairá como número!
*/

// Temos o parseInt = só passará para número interio.
// Temos o parseFloat = só passará número Real

// Versão atualizada ECMA6

var n1 = Number(prompt("Digite um número:")) // Com number o JS vai se virar para saber se é Inteiro ou Real
var n2 = Number(prompt("Digite outro número:"))

var n3 = (n1 + n2)

// alert("A soma dos valores é: " + n3)

alert(`A soma entre ${n1} + ${n2} é igual a ${n3}`)
// (number + number) para adição
// (string + string) para concatenação

//De Number para String

// String(n)
// n.toString()

/*
alert("A soma dos valorse é: " + n3.toString())
alert("A soma dos valore é: " + String(n3))
*/

var s = 'JavaScript'

console.log('Eu estou aprendendo s') // Não faz interpolação
console.log('Eu estou aprendendo' + s) // Faz concatenação
console.log(`Eu estou aprendendo ${s}`) // Usa template string

s.length // Quantos caracteres a string tem
s.toUpperCase // Tudo para 'MAIÚSCULAS
s.toLowerCase // Tudo para 'minúsculas