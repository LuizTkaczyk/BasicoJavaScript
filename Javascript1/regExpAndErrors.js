//busca o termo na frase
var regExpLiteral = /Santos/
var regExpConstrutor = new RegExp("dos")

var stringNome = 'Luiz Antonio dos Santos'

console.log(regExpLiteral.test(stringNome))

console.log(regExpConstrutor.exec(stringNome))

console.log('*********************************')

//ERROR
console.log("linha 1") //a linha 2 não é executada devido ao erro
//throw new Error("erro na aplicação")
console.log('linha 2')
console.log('*********************************')


try {
    console.log(somar(10,new Array(2)))

} catch (error) {
    console.log(error.name)
    console.log(error.message)
    console.log(error.stack)
    
}finally{
    console.log("Sempre será executado")
}

function somar(a,b){
    return a.exec()
}