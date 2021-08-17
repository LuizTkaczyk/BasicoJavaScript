//upload de arquivos com JS

async function enviar(){
    let arquivo = document.querySelector('#arquivo').files[0]
    let body = new FormData()
    body.append('title','imagem n1')
    body.append('arquivo', arquivo)

    let req = await fetch('https://www.luiz.com.br/fotos',{
        method:'POST',
        body:body,
        headers:{
            'Content-Type':'multipart/form-data'
        }
    })
}