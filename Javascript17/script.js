//Assincrono e sincrono
//Sincrono: é executado linha a linha, aguardando cada umas ser terminada
//Assíncrono: é executada linha a linha, porem caso haja uma função em uma linha , todas são executas , mesmo que uma ou outra linha ainda não tenha sido terminada de ser executada.

//Sincrono
/*
1- let nome ='luiz'
2- let sobrenome = 'antonio'
3- let nomeCompleto = `${nome} ${sobrenome}`

*/
//Assincrono
/*
1- let nome ='luiz'
2- let sobrenome = 'antonio'
3- let comprar = dinheiro.pagar() ->assincrona
4- let nomeCompleto = `${nome} ${sobrenome}`

*/

//*************************************************************************** */
//Callback - chamada criada para uma função
//exemplo de codigo assincrono

/*
function alertar() {
    console.log('Alerta !!!!!!!')
}
let nome = 'LUIZ'
setTimeout(alertar, 2000);
let sobrenome = 'Antonio'
console.log(`Nome:${nome}, sobrenome:${sobrenome}`)
*/

//**************************************************************************** */

//Promises
//resolve: tudo ok
//reject: algo errado

function pegarTemperatura() {
    return new Promise(function (resolve, reject) {
        console.log('Pegando a temperatura....')

        setTimeout(function () {
            resolve('38 na chuva')
        }, 2000)
    })
}

//usando a promise, usa o then
let tmp = pegarTemperatura()
tmp.then(function(resultado){
    console.log(`A temperatura é de ${resultado}`)
})
tmp.catch(function(erros){
    console.log('Algo deu errado!')
})