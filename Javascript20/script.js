//Fetch com post
async function inserirPost() {
    document.querySelector("#posts").innerHTML = 'Carregando...'

    let req = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'Titulo teste',
            body: 'Corpo do teste',
            userId: 2
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })

    let json = await req.json()

    console.log(json)
}