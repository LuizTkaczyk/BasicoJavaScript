
//Capturando por id, classe e querySelector
document.getElementById('titulo1').innerHTML = "Alterado via id !"
//no caso de class, deve se definir o array
document.getElementsByClassName('titulo2')[0].innerHTML = "Alterado via classe no array 0 !"
document.getElementsByClassName('titulo2')[1].innerHTML = "Alterado via classe no array 1!"
document.querySelector('#titulo3').innerHTML = "Alterado via querySelector com id"
document.querySelector('.titulo3').innerHTML = "Alterado via querySelector com classe"



//Number
var x = 20
//String
var y = "20"