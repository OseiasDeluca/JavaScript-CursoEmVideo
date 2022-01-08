function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours()
    var hora = 17
    msg.innerHTML = `Agora são ${hora} horas `
    
if(hora >= 0 && hora < 12){
    //BOM DIA!
    img.src = '../../ImagensSiteJS/Manhã.png'
    document.body.style.background = 'rgb(255, 239, 92)'
}else if (hora >= 12 && hora < 16){
    //BOA TARDE!
    img.src = '../../ImagensSiteJS/Tarde2.png'
    document.body.style.background = '#d64e0f'
}else if (hora >= 16 && hora < 18){
    //BOA TARDE!
    img.src = '../../ImagensSiteJS/Tarde.png'
    document.body.style.background = '#f58c2a'
}else{
    //BOA NOITE!
    img.src = '../../ImagensSiteJS/Noite.png'
    document.body.style.background = '#100c47'
}

}
