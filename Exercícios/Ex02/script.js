function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById("ano")
    var res = document.querySelector('div#res')

    if(fano.value.length == 0 || fano.value > ano) {
        alert('Verifique os dados e tente novamente!')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if(fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 4){
                //Bebê
                img.setAttribute('src', 'bebe1.png')
            }else if(idade >= 5 && idade < 10){
                // Criança
            }else if (idade >=10 && idade < 16 ){
                //Jovem
            }else if (idade >= 16 && idade < 30){
                //Adulto
            }else{
                //Velho
            }
        }else if(fsex[1].checked){
            genero = 'Mulher'
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`.
        res.appendChild(img)
    }
}