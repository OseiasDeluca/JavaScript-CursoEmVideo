var a = document.getElementById('area') // Esse objeto faz interejação com a div ao clicar


a.addEventListener('click', clicar)
a.addEventListener('mouseenter', entrar)
a.addEventListener('mouseout', sair)

function clicar() {
    a.innerText = 'Clicou!'
}

function entrar() {
    a.innerText = 'Entrou!'
    a.style.background = 'blue'
}

function sair() {
    a.innerText = 'Saiu!'
    a.style.background = 'green'
}