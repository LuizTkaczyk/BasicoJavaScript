//Funções include(retorna true ou false)
let lista1 = ['ovo', 'arroz', 'carne', 'bolo']

console.log(lista1.includes('aa'))

let nome = 'Luiz Antonio'
console.log(nome.includes('t'))

//repeat
console.log('*'.repeat(50))

//***************************************************************** */

//objects : Key, Values e Entries

let lista2 = ['casa', 'carro', 'moto', 'bicicleta', 'avião']
console.log(Object.keys(lista2))
console.log(Object.values(lista2))
console.log(Object.entries(lista2))

console.log('*'.repeat(50))

//****************************************************** */
let pessoa = {
    nome: 'Luiz',
    sobrenome: 'Antonio',
    idade: 30
}
console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

console.log('*'.repeat(50))
//************************************************************************* */


//String padStart, padEnd
let telefone = '4454'

console.log(telefone.padEnd(9, '*'))//no mínimo 9 caracteres, caso não tenha ele completa com *
console.log(telefone.padStart(9, '*'))//no mínimo 9 caracteres, caso não tenha ele completa com *

let cartao = '1234123412341234'
let lastDigits = cartao.slice(-4)
let cartaoMask = lastDigits.padStart(16, '*')

//console.log(lastDigits)

console.log(`O final do seu cartão é ${cartaoMask}`)