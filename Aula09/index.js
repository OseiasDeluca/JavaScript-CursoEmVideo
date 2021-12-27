var p1 = window.document.getElementsByTagName('p')[1]
var corpo = window.document.body

// var d = document.getElementById('xas')
var d = document.querySelector('div#xas')

document.write(p1.innerHTML) // Com innerHTML, trará o object formatado.
// document.write(p1.innerText) // Aqui não ficará formatado, pois não tem o negrito que colocamos. 

p1.style.color = 'blue'
corpo.style.background = 'black'
d.style.background = 'green'

alert(p1.innerText) // Sem formatação
// alert(p1.innerHTML) // Com formatação, ou seja c/ as tags filhas.


// window.document.write ('Está escrito assim: ' + p1.innerText)

/*

Selecionando:

por Marca:
getElementsByTagName()

por ID:
getElementByID()

Por Nome:
getElementsByName()

por Classe:
getElementsByClassName()

por Selector: // Método mais rescente, navegadores antigos não suportam! 
querySelector() // Ótimo para você que precisa alterar id's e classes ao longo de todo código.
querySelectorAll()
*/

/*
var n = document.getElementsByTagName('juca')
var c = document.getElementsByClassName('juca1')
*/