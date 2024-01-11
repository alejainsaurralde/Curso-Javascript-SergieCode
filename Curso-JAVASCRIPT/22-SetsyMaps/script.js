// SETS

let conjunto = new Set(['Pedro', 'Ricardo', 'Maria', 'Pedro'])

//AGREGAR
conjunto.add('Luciana')

//ELIMINAR
conjunto.delete('Pedro')


//PREGUNTA
let pregunta = conjunto.has('Maria')
let pregunta = conjunto.size

console.log(pregunta);
console.log(conjunto);


let array = ['Cama', 'Armario', 'Escritorio', 'Cama', 'Estante', 'Mesita de luz']

function comprar(muebles) {
    console.log(muebles);
}
function comprarSoloUnaUnidad(muebles) {
    let unicaUnidad = new Set(muebles)
    console.log(unicaUnidad);
}
comprarSoloUnaUnidad(array)

// MAPS
let mapa = new Map([
    ['Computadoras', 10],
    ['Tablets', 5],
    ['Celulares', 15]
])

mapa.set('Teclados', 20)

mapa.delete('Computadoras')

// let pregunta = mapa.size

let pregunta = mapa.has('Tablets')

console.log(mapa);
console.log(pregunta);

// COMO VOLVER A PONER UN SET EN UN ARRAY
let array = [1, 1, 2, 2, 3, 3, 3, 4, 4]
let unico = new Set(array)
let nuevoArray = [...unico]//operator
console.log(nuevoArray);
