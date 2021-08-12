//recursos de datas
let d1 = new Date()

console.log(d1.toDateString())
console.log(d1.toUTCString())
console.log(d1.toString())
console.log(d1.getFullYear())//capturando o ano
console.log(d1.getMonth()+1)//capurando o mes+1pois o javascript o mes de janeiro é o zero
console.log(d1.getDay())//capturando o dia (domingo = 0 e sabado = 6)
console.log(d1.getDate())//captura o dia do mes
console.log(d1.getHours())//captura a hora
console.log(d1.getMinutes())//captura os minutos
console.log(d1.getSeconds())
console.log(Date.now())

d1.setHours ( d1.getHours() + 50) //alterando horas a frente
console.log(d1)

/*
console.log('***********************************************************')


let d2 = new Date('2021-08-12 19:21:30') //ano/mes(array 0)/dia/hora/minuto/segundo

console.log(d2.toString())

*/
//****************************************************************************** */

//recursos matemáticos
let n1 = Math.PI // Captura o numero pi
let n2 = Math.round(3.40)//arrendonda o valor para o maior valor antes ou apos 50
let n3 = Math.floor(3.57)//arrendonda o valor para o menor valor
let n4 = Math.ceil(3.57)//arrendonda o valor para o maior valor
let n5 = Math.abs(-3.57)//captura o valor positivo
let n6 = Math.min(2, 4, 6, 9, 1)//retorna o menor número
let n7 = Math.max(2, 4, 6, 9, 1)//retorna o maior número
let n8 = Math.random()//retorna um número aleatorio entre 0 e 1
let n9 = Math.floor(Math.random() * 101) //capturando um numero aleatorio entre 0 e 100


console.log(n1)
console.log(n2)
console.log(n3)
console.log(n4)
console.log(n5)
console.log(n6)
console.log(n7)
console.log(n8)
console.log(n9)