
//JSONplaceHolder

// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then(json => console.log(json))


//EL CÓDIGO ESCRITO CORRECTO:
let urlBase = 'https://jsonplaceholder.typicode.com'



//GET: Pedir información
let query = 'posts/1'
fetch(`${urlBase}/${query}`)
    .then(response => response.json())
    .then(json => console.log(json))



// let urlBase = 'https://jsonplaceholder.typicode.com'

//POST: enviar información
let query = 'posts/1'

let requestBody = {
    title: 'Ricardo comenta sobre tu foto',
    body: '¡Que bella foto prima, se te extraña!',
    userId: 1,
}

fetch(`${urlBase}/posts`, {
    method: 'POST',
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify(requestBody)
})
    .then(response => response.json())
    .then(json => console.log(json));


//PUT: editar información
let posteo = 5

let requestBody2 = {
    id: 3,
    title: 'Ricardo comenta sobre tu foto',
    body: '¡Que bella foto prima, se te extraña!',
    userId: 1,
}

fetch(`${urlBase}/posts/${posteo}`, {
    method: 'PUT',
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify(requestBody2)
})
    .then(response => response.json())
    .then(json => console.log(json));




//PATCH: editar información (solo se edita un atributo)
let post = 10
let modificacion = {
    title: 'Este título ha sido modificado'
}


fetch(`${urlBase}/posts/${post}`, {
    method: 'PATCH',
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify(modificacion)
})
    .then(response => response.json())
    .then(json => console.log(json));


//DELETE: borrar un item
let elementoAEliminar = 7
fetch(`${urlBase}/posts/${elementoAEliminar}`, {
    method: 'DELETE',
});