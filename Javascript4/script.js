
//Capturando por id, classe e querySelector
document.getElementById('titulo1').innerHTML = "Alterado via id !"
//no caso de class, deve se definir o array
document.getElementsByClassName('titulo2')[0].innerHTML = "Alterado via classe no array 0 !"
document.getElementsByClassName('titulo2')[1].innerHTML = "Alterado via classe no array 1!"
document.querySelector('#titulo3').innerHTML = "Alterado via querySelector com id"
document.querySelector('.titulo3').innerHTML = "Alterado via querySelector com classe"
document.querySelectorAll('.titulo3').innerHTML = "Alterado todos via querySelector com classe"
document.getElementsByTagName('input')[0].value = 'Preenchido!'



//*************************************************************************************** */

//Number
var a = 20 // tem acesso em qualquer area do codigo
let b = 20 // disponível apenas no escopo em que está declarada (se declarada em escopo global ela podera ser usada normalmente)
const c = 20 //Não muda
//String
var d = "20"
/*
let exemplo = 'luiz'

let algo = 3
if( algo == 3){
    console.log(exemplo)
}
*/

//************************************************************************************* */

//manipulando classes de um elemento
function vermelho() {
    document.querySelector('#exemplo').classList.remove('verde')//removendo classes 
    document.querySelector('#exemplo').classList.remove('azul')
    document.querySelector('#exemplo').classList.add('vermelho') //adiciona a classe vermelho na classe com a id=exemplo
    document.querySelector('#exemplo').innerHTML = 'Mudou para vermelho'

}

function verde() {
    document.querySelector('#exemplo').classList.remove('vermelho')//removendo classes 
    document.querySelector('#exemplo').classList.remove('azul')
    document.querySelector('#exemplo').classList.add('verde')//adiciona a classe verde na classe com a id=exemplo
    document.querySelector('#exemplo').innerHTML = 'Mudou para verde'
}

function azul() {
    document.querySelector('#exemplo').classList.remove('verde')//removendo classes 
    document.querySelector('#exemplo').classList.remove('vermelho')
    document.querySelector('#exemplo').classList.add('azul')//adiciona a classe azul na classe com a id=exemplo
    document.querySelector('#exemplo').innerHTML = 'Mudou para azul'
}

//********************************************************************************* */

function trocar() {

    //contains verifica se existe a tag no elemento, neste exemplo 'verde'
    if (document.querySelector('#btn1').classList.contains('verde')) {
        document.querySelector('#btn1').classList.remove('verde')
        document.querySelector('#btn1').classList.add('vermelho')
    } else {
        document.querySelector('#btn1').classList.remove('vermelho')
        document.querySelector('#btn1').classList.add('verde')
    }

}