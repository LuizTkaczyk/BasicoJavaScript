//operador spread
//juntando arrays
let numeros = [1, 2, 3, 4]
let outrosNumeros = [...numeros, 5, 6, 7, 8]

console.log(outrosNumeros.toString())

//******************************************** */
//juntando objetos

let info = {
    nome: 'Luiz',
    sobrenome: 'Tkaczyk',
    idade: 30
}

let novaInfo = {
    ...info,//uso do spread
    cidade: "Guarapuava",
    estado: 'Paraná',
    pais: 'Brasil'

}

console.log(novaInfo)

function addInfo(info) {
    let novasInfo = {
        ...info,
        status: 0,
        tokem: 'abcdefg999',
        dataCadastro: '20/20/2021'
    }
    return novasInfo
}
console.log(addInfo({ nome: 'Ana', sobrenome: 'Banana' }))

//************************************************************************* */
//operador Rest
function adicionar(...numeros) {//recebe varios parametros como um array
    console.log(numeros)
}

adicionar(9, 4, 5, 6, 9, 8)

//********************************************************** */

//spread junto com rest

function add(nomes, ...novosNomes) {
    let novoConjunto = [
        ...nomes,
        ...novosNomes
    ]
    return novoConjunto
}

let nomes = ['Luiz', 'Martineli', 'Vanessa']
let outros = add(nomes, 'Chico', 'Francisco', 'Maria')

console.log(outros)