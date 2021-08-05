//Declarando objetos

var itens1 = {}
var itens2 = {nome:"Água", preco:5.50, ativo:true, ingredientes:{numero1:"h2O"}}

//construtor
var pessoa1 = new Object()
var pessoa2 = new Object()

pessoa1.nome ="Luiz"
pessoa1.idade = 32

//Acessando as propriedades
console.log(pessoa1.nome)
console.log(itens2.ingredientes.numero1)
console.log(itens2.ativo)

//Arrays
//1 - array literal
var produtos = []
var produtos2= ['Algo 1', 'algo 2', 'algo 3', 'algo 4', {nome:'LUIZ ANTONIO'}]
produtos.push(5.50)
console.log(produtos)


//2-construtor
var array1 = new Array()
var array2 = new Array('elemento 1', 'elemento 2', false)

//acessando
console.log(array2[1])
console.log(produtos2[4].nome)