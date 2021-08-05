//criando objetos de forma literal
var objPessoa1= {nome:"Luiz"}
console.log(objPessoa1.nome)

//criando objetos por construtor
var objPessoa2 = new Object();
objPessoa2.nome = 'Antonio'

console.log(objPessoa2.nome)

//Object.create irá criar um objeto com prototipo
var objPessoa3 = Object.create(Object.prototype)
objPessoa3.nome = 'Marti'
console.log(objPessoa3.nome)

//Funções construtoras
var obj1 = new Object()
var obj2 = new Array(1,2,3,4,5)
var obj3 = new Date() //representa a data atual
var obj4 = new Error('Ocorreu um erro')
var obj5 = new RegExp(/teste/)
var obj6 = new Function('parametroNome', "return 'ola ' + parametroNome + '!' ")
console.log(obj6('Chico'))
