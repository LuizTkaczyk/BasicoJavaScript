//desconstruindo arrays
let array = ['Luiz', 'Antonio', 'Tkaczyk Dos Santos', '@luiz']

//todos os dados
//let [ nomeCompleto, nome, sobrenome, face ] = array

//somente alguns dados
let [nomeCompleto, , , face] = array


//console.log(nomeCompleto, nome, sobrenome, face)
console.log(nomeCompleto, face)


//*************************************** */

let [primeiroNome, segundoNome] = ['Luiz', 'Antonio']
console.log(primeiroNome, segundoNome)

function criar() {
    let a = [1, 2, 3]
    return a
}
let [a, b, c] = criar()
console.log(a, b, c)

//************************************************************************************* */
//Arrow functions

//funções normais
function somar(x, y) {
    return x + y
}

console.log(somar(5, 6))

let somar2 = function (a, b) {
    return a + b
}

console.log(somar2(8, 1))

//arrow function
//opção 1
let somar3 = (k, z) => {
    return k + z
}

console.log(somar3(7, 7))


//opção 2
let somar4 = (x, y) => x + y

console.log(somar4(6, 6))


//opção 3 - somente um parametro
let letrasNome = (nome) => {
    return nome.length
}

console.log(letrasNome('Luiz'))

//ou
let letrasDoNome = (nome) => nome.length
console.log(letrasDoNome('Antonio'))

//ou
letrasDeUmNome = nome => nome.length
console.log(letrasDeUmNome('Santos'))