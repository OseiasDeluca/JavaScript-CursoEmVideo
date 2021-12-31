// CONDIÇÃO MÚLTIPLA

var agora = new Date()
var diaSem = agora.getDay()

switch (diaSem){
        case 0:
                console.log('Domingo')   
                break
        case 1:
                console.log('Sexta')
                break   
        case 2:
                console.log('Sexta')
                break   
        case 3:
                console.log('Sexta')
                break   
        case 4:
                console.log('Sexta')
                break   
        case 5:
                console.log('Sexta')   
                break 
        case 6: 
                console.log('Sexta')  
                default:
}
/*
        Para o JavaScript, os dias são mostrados como: 0, 1, 2, 3, 4, 5, 6
        0 = Domingo
        1 = Segunda
        2 = Terça
        3 = Quarta
        4 = Quinta
        5 = Sexta
        6 = Sábado
*/
