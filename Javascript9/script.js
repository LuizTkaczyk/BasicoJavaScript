let dia = 5;
let diaNome = ''
switch (dia) {
    case 1: diaNome = 'Segunda feira'
        break
    case 2: diaNome = 'Terça feira'
        break
    case 3: diaNome = 'Quarta feira'
        break
    case 4: diaNome = 'Quinta feira'
        break
    case 5: diaNome = 'Sexta feira'
        break
    case 6: diaNome = 'Sábado'
        break
    case 7: diaNome = 'Domingo'
        break
    default:
        diaNome = 'Data inválida'

}
if (dia <= 7) {
    document.querySelector('#dia').innerHTML = `Hoje é ${diaNome}`
} else {
    document.querySelector('#dia').innerHTML = `${diaNome}`
}

//******************************************************************************* */
//for
let texto = ''

for (let i = 1; i <= 10; i++) {
    texto = texto + i + '<br/>'
}

document.querySelector('#for').innerHTML = texto

//*********************************************** */

let carros = ['Palio', 'Uno', 'Celta', 'Gol']

let html = '<ul>'

for(let umCarro in carros){
    html += `<li> ${carros[umCarro]} </li>`
}

html += '</ul>'

document.querySelector('#for2').innerHTML = html