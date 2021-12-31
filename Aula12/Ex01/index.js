/*var idade = 22;

if (idade < 18) {
    console.log('Menor de idade')
} else {
    console.log('Maior de idade')
}
*/

// CONDIÇÕES ANINHADAS!

var idade = 67;
console.log(`Você tem ${idade} anos.`)

if (idade < 16){
        console.log('Não vota')
} else if(idade < 18 || idade > 65) { // Podemos  adiconar idade > 16 &&, mas sem ele é uma linha de raciocínio, se idade menor que 16, por que colocar idade maior que 16? Basta deixar apenas idade menor que 18.
        console.log('Voto opcional')
} else {
        console.log('Voto obrigatório')
}