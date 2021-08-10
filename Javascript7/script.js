//Arrays brabos
let carros = ['Corsa', 'Meriva', 'Montana', 'Celta']

let ingredientes = [
    ['trigo', 'oleo', 'fermento'],
    ['chocolate', 'confete', 'vela']
]



document.querySelector('.carros').innerHTML = (`${carros}`)
document.querySelector('.ingredientes').innerHTML = (`${ingredientes}`)

//console.log(carros[0])
//console.log(ingredientes[1][0])

//Objetos
let carro = {
    nome: 'Celta',
    marca: 'Chevrolet',
    portas: '4',
    motor: '1.4',
    ligado: false,
    ligar: function () { //função dentro de um objeto-> function ligar(){}
        console.log(`Ligando o ${this.nome}`)
        this.ligado = true

    },
    acelerar: function () {
        if (this.ligado == true) {
            console.log('Vrummm.....!')
            console.log('Saiu cantando pneu........')
        }else{
            console.log(`O ${this.nome} está sem gasolina`)
        }

    }
}


//console.log(`Nome : ${carro.nome}`)
console.log(carro.ligar())
console.log(carro.acelerar())

//*************************************************************************** */

let veiculos = [
    {marca:'Fiat', modelo:'Uno'},
    {marca:'Chevrolet', modelo:'Celta'},
    {marca:'Volkswagen', modelo:'Gol'}
]

console.log(veiculos[2].marca)