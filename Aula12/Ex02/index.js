// CONDIÇÕES ANINHADAS!

var agora = new Date() // Variável para pegar hora, data, ano
var hora = agora.getHours() // Variável que receberá a hora do seu computador.

console.log(`São exatamente ${hora} horas.`)

if (hora < 6 ) {
        console.log('Boa madrugada')
}else if (hora <= 12 ) {
        console.log('Bom dia!')
}
else if (hora <= 18) {
        console.log('Boa tarde!')
} else if (hora < 23) {
        console.log('Boa noite!')
} 