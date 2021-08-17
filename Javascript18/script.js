//Feth - retorna uma promise
//Requisições
function loadPost() {

    document.querySelector('#posts').innerHTML = 'Carregando....'
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(function (resultado) {
            return resultado.json()
        })
        .then(function (json) {
            montarBlog(json)
            //document.querySelector('#posts').innerHTML = `${json.length} posts`
        })
        .catch(function (error) {
            console.log('Erro no sistema')
        })
}

function montarBlog(lista) {
    let html = ''
    for (let i in lista) {
        html += `<h3> ${lista[i].title} </h3>`
        html += `${lista[i].body} </br>`
        html += `<hr>`
    }
    document.querySelector('#posts').innerHTML = html
}