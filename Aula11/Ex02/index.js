// Operadores condicionais (parte 1)

function clicar() {
var pais = document.querySelector('input#pais').value
var res = document.querySelector('div#area')

res.innerText = `Nasceu no país: ${pais}`


if (pais == "Brasil"){

        res.innerHTML += `<p>Você é brasileiro(a)!</p>`

    } else (pais != "Brasil");{
        res.innerHTML += `<p>Você é estrangeiro(a)!`
    }
    
}
    // EM MANUTENÇÃO...