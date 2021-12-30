// Operadores condicionais (parte 2)
/*function calcular(){
var a = document.querySelector('input#Vel')
var b = document.querySelector('div#area')
var vel = Number(a.value)

area.innerText = `Sua velociadade atual é de ${vel}Km/h.`
}*/
function clicar() {

    var a = document.querySelector('input#Vel')
    var res = document.querySelector('div#area')
    var vel = Number(a.value)

    res.innerHTML = `Sua velocidade é de: <strong>${vel}Km/h</strong>`

    if (vel > 60){
        res.innerHTML += `<p>Você está MULTADO por excesso de velocidade!</p>`
    }
    res.innerHTML += `<p>Dirija sempre com cinto de segurança!`

}
