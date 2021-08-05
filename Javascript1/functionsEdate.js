//Funções

function exibir(mensagem){
    console.log(mensagem)

}

exibir(55)

function soma (num1, num2){
    resultado = num1 + num2
    return console.log('O resultado é ',resultado)
}

soma(5,5)

console.log('****************************************')
console.log('Datas')
//datas
var dataAno = new Date()
var dia = dataAno.getDay()+1
var mes = dataAno.getMonth()+1
var ano = dataAno.getFullYear()

if(dia < 10){
    dia = "0"+ (dataAno.getDay()+1)
}
if(mes < 10){
    mes="0"+ (dataAno.getMonth()+1)
}

console.log(`A data de hoje é ${dia}/${mes}/${ano}`)
