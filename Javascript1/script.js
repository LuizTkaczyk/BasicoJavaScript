/*
var contaStatus = false

//console.log(typeof contaStatus)

if(contaStatus == true){
    console.log("Conta ok")
}else{
    console.log("Conta errada")
}

console.log(!contaStatus)
console.log('*****************************************')
var nome = 'LUIZ'
var preco = 9.99
var vazio =''

console.log(!!nome)
console.log(!!preco)
console.log(!!vazio)

console.log("***********************************************")
console.log("Valores falsos")

console.log(!!"")
console.log(!!0)
console.log(!!-0)
console.log(!!null)
console.log(!!undefined)
console.log(!!NaN)

console.log("**********************************************")
console.log("Valores true")
console.log(!!Object)
console.log(!!Function)
console.log(!!Array)

console.log("**************************************************")

var idade1 =32
var nome2 = "Luiz"
var pessoa = {nome : nome2, idade : idade1}

console.log(pessoa.idade +" " +pessoa.nome)

console.log("*******************************")
console.log("Literais")
var nomeCurso = "um curso qualquer"
var nomeCurso2 = "Outro curso qualquer"
var nomeCurso3 = new String("Mais um curso qualquer")

console.log(nomeCurso)
console.log(nomeCurso2)
console.log(nomeCurso3.toString())

var idade = 32
var preco = 1.99
var numero = new Number(9.99)

console.log(idade)
console.log(preco)
console.log(numero.toString())

var boolean = true
var boolean2 = new Boolean(true)
console.log(boolean)
console.log(boolean2.toString())

console.log("*************************")

console.log('Quebrando uma linha agora \n e agora na outra linha, e este é o simbolo de copyright \u00AE \uA728')
*/

//***************************************************************************************** */

var cliente = 'Luiz Antonio' //variavel global (não está dentro de nenhum escopo)
//console.log(window.cliente)

function realizarVenda(item, valor){
    //se a variavel não estiver definida (exemplo: var , const ou let) o javascript irá interpretar ela como uma variável global, podendo ser usada no restante do codigo
    var msg='Venda realizada para :'
    console.log(msg,cliente + ` ,itens adquiridos : ${item} com valor de R$ ${valor}`)
}

realizarVenda("tenis", 99.99)
