//Introdução a Json
let pessoa = {
    nome: 'Luiz',
    sobrenome: 'Tkaczyk',
    idade: 32,
    caracteristicas: [
        'zero', 'um', 'dois', 'tres'
    ],
    dados: {
        cpf: '999.555.647-88',
        rg: '58.648.397-4'
    }
}

console.log(pessoa.nome)
console.log(pessoa.idade)
console.log(pessoa.caracteristicas[1])
console.log(pessoa.dados.cpf)

console.log('*'.repeat(40))

//************************************************************************* */

//tranformando strings em JSON
let pesssoa1 = JSON.parse('{"nome":"Luiz Antonio", "idade":30}')
console.log(pesssoa1.nome)

console.log('*'.repeat(40))
//*************************************************************************** */

//passando para string
let pessoa3 = {
    nome: 'LUIZ ANTONIO',
    idade: 50
}
let pessoaStringfy = JSON.stringify(pessoa3)
console.log(pessoaStringfy)

/*
Parse = transforma uma string em json
Stringfy = transforma um json em string

*/