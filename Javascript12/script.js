//intervalos (timers)

let timer1

function iniciar() {
    //executando a função de tempos em tempos em ms
    timer = setInterval(showTime, 1000)
}
function parar() {
    clearInterval(timer)
}


function showTime() {
    let d = new Date()
    let hora = d.getHours()
    let minutos = d.getMinutes()
    let segundos = d.getSeconds()

    let txt = ''
    if (segundos < 10) {
        txt = `0${hora}:0${minutos}:0${segundos}`
    } else {
        txt = `${hora}:${minutos}:${segundos}`
    }


    document.querySelector('.demo').innerHTML = txt
}

//*************************************************************** */
//setTimeOut
//função que é executada apos 2s

let timer2
function timerOn() {
    let tempo = 2000
    timer2 = setTimeout(function () {

        document.querySelector('.demo').innerHTML = `Rodou após ${tempo / 1000} segundos`
    }, tempo)

}

//parar o timer
function timerOff() {
    clearTimeout(timer2)
}

//**************************************************************************************** */
//desconstruindo objetos
let pessoa = {
    nome: 'Luiz',
    sobrenome: 'Antonio',
    idade: 32,
    social: {
        facebook: 'luiz.antonio',
        instagran: {
            id: '@luiz',
            seguidores: 99999
        }
    },
    nomeCompleto: function () {
        return `${this.nome} ${this.sobrenome}`
    }
}

let {
    nome: nomePessoa = 'Nome não encontrado',
    sobrenome: sobrenomePessoa,
    idade: idadePessoa = 50 //caso não haja uma idade definida determina-se uma idade padrão
} = pessoa

console.log(nomePessoa, sobrenomePessoa, idadePessoa)
///************************************************************** */
let { facebook: face, instagran: insta } = pessoa.social

console.log(face, insta)
//**************************************************************** */
let { nome, sobrenome, idade, social: { instagran: { id: identificacao, seguidores: seguindo } } } = pessoa

console.log(nome, sobrenome, identificacao, seguindo)
console.log('*************************************************')

//função para pegar o nome completo
function pegarNomeCompleto({ nome, sobrenome, social: { instagran: { id } } }) {
    return `${nome} ${sobrenome} ${id}}`
}

console.log(pegarNomeCompleto(pessoa))
