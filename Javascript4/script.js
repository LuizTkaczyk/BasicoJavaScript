
//Capturando por id, classe e querySelector
document.getElementById('titulo1').innerHTML = "Alterado via id !"
//no caso de class, deve se definir o array
document.getElementsByClassName('titulo2')[0].innerHTML = "Alterado via classe no array 0 !"
document.getElementsByClassName('titulo2')[1].innerHTML = "Alterado via classe no array 1!"
document.querySelector('#titulo3').innerHTML = "Alterado via querySelector com id"
document.querySelector('.titulo3').innerHTML = "Alterado via querySelector com classe"
document.querySelectorAll('.titulo3').innerHTML = "Alterado todos via querySelector com classe"





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