var nome = document.getElementById('nome')
var email = document.getElementById('email')

// console.log(typeof nome)
// console.log(Object.prototype.toString.call(nome))

// console.log(nome.value)

function showVar(){
    console.log(nome.value, email.value)
}

showVar()