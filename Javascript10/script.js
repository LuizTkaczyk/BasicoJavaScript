//Recuros string
let nome = 'Luiz Antonio Tkaczyk dos Santos'
console.log(nome.length)//tamanho da string
console.log(nome.indexOf('Antonio'))//onde começa a string
console.log(nome.slice(0, 4))//extrair da string com um intervalo
console.log(nome.toUpperCase())
console.log(nome.toLowerCase())
console.log(nome.slice(-6))//captura do fim da string, sendo o valor negativo
console.log(nome.substr(5, 10))//inicia da string 5 e caputura os proximos 10 caracteres
console.log(nome.replace('Luiz', 'Francisco'))//substituindo palavras na string
console.log(nome.concat(' tem 32 anos'))//concatenação wtf!?!?!?!
console.log(nome.trim())//remove os espaços do começo e do fim da string
console.log(nome.charAt(5))//localiza a posição de um caractere
console.log(nome[5])//ou esse
console.log(nome.split(' '))//transforma a string em array separados por espaço, mais pode ser virgula, ponto e virgula

//**************************************************************************************** */

//Recursos Numbers
let n1 = 42
let n2 = 1.987654
let n3 = '32'
let n4 = '5.69'

console.log(n1.toString())//transforma o número em string
console.log(n2.toFixed(2))//determinando o número de casas decimais
console.log(parseInt(n3))//transformando em número
console.log(parseFloat(n4))//transformando em número

//************************************************************************************** */
//Recursos Arrays

let lista1 = ['Ovo', 'Farinha', 'Oleo', 'Fermento']
let lista2 = ['Maçã', 'Banana', 'Uva', 'Laranja']
let lista3 = ['Palio', 'Uno', 'Corsa', 'Gol']

lista2.shift() //remove o primeiro item do array
lista2.pop() //remove o ultimo item do array
lista2.push('Chocolate')//adiciona um novo item ao array
lista2[0] = 'Ovo alterado' //altera algum valor da array, se a posição não existir ele adiciona
lista2[lista1.length] = 'Massas' //adicionando um item no final do array
lista3.splice(0, 1) //removendo itens no array


console.log(lista1.toString())//transforma o array em uma string
console.log(lista1.join('-'))//separa o array conforme o item declarado : - , ; , 
console.log(lista1.indexOf('Farinha'))//verifica a posição do item no array, se não encontrado retorna -1
console.log(lista2.toString())//remove o primeiro e o ultimo item do array com o uso do shift e do pop
console.log(lista3.concat(lista2).toString())//juntando arrays
console.log(lista1.sort().toString())//ordenando em ordem alfabética
console.log(lista1.reverse().toString())//ordenando em ordem alfabética reversa (primeiro coloca em ordem alfabética, e depois em ordem reversa !!!)
//************************************************************************************************** */
//Array de numeros
let listaNum1 = [10, 90, 20, 5, 66, 31]
let listaNum2 = []
let listaNum3 = []

//função em um array que multiplica casa um dos itens por 2
listaNum2 = listaNum1.map(function (item) {
    return item * 2
})

//ou
for (let i in listaNum1) {
    listaNum3.push(listaNum1[i] * 2)
}


console.log(listaNum2)
console.log(listaNum3)

//filtrando apenas numeros abaixo de 50
console.log(listaNum2.filter(function (item) {
    if (item < 50) {
        return true
    } else {
        return false
    }
}))

//retorna true ou false, todos os iten tem que estar de acordo com a condição dada na função
console.log(listaNum2.every(function (item) {
    return (item > 1) ? true : false
}))

//retorna true ou false, ao menos um item tem que estar de acordo com a condição dada na função
console.log(listaNum2.some(function (item) {
    return (item > 50) ? true : false
}))

//econtrar item em uma lista
console.log(lista3 = listaNum1.find(function (item) {
    return (item == 90) ? true : false
}))

//retorna a posição do item
console.log(lista3 = listaNum1.findIndex(function (item) {
    return (item == 90) ? true : false
}))

//encontrando nomes
listaNomes = [
    { id: 1, nome: 'Luiz Antonio', sobrenome: 'Tkaczyk' },
    { id: 2, nome: 'Martineli', sobrenome: 'Ribeiro' },
    { id: 3, nome: 'Francisco', sobrenome: 'Monteiro' }
]

let pessoa = listaNomes.find(function (item) {
    return (item.sobrenome == 'Ribeiro') ? true : false
})

console.log(pessoa.nome)