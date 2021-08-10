
function clicou() {
    document.querySelector('#titulo').innerHTML = "Ohh YES !!"
}

function digitou(evento) {
    if (evento.keyCode == 13 && evento.ctrlKey == true) { //tecla enter e control juntas
        let texto = document.querySelector('#campo').value
        console.log(texto)
    }
}

function azul() {
    //acessando as classes de um elemento
    limpar()
    document.querySelector('#titulo').classList.add('azul')

}

function vermelho() {
    limpar()
    document.querySelector('#titulo').classList.add('vermelho')

}

function verde() {
    limpar()
    document.querySelector('#titulo').classList.add('verde')

}

function limpar() {
    document.querySelector('#titulo').classList.remove('vermelho')
    document.querySelector('#titulo').classList.remove('azul')
    document.querySelector('#titulo').classList.remove('verde')
}

function mostrarTelefone(elemento){
    elemento.style.display = 'none'
    document.querySelector('#telefone').style.display = 'block'

}