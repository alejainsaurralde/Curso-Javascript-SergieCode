import { barcelona, roma, paris, londres, } from "./ciudades.js";  // DESESTRUCTURAR

// OBTENER LOS ELEMENTOS DEL DOM (Document Object Model)
let enlaces = document.querySelectorAll('a')
let tituloElemento = document.getElementById('titulo')
let subTituloElemento = document.getElementById('subtitulo')
let parrafoElemento = document.getElementById('parrafo')
let precioElemento = document.getElementById('precio')

// console.log(enlaces);

//AGREGAR EVENTO CLICK A CADA ENLACE
enlaces.forEach(function (enlace) {
    enlace.addEventListener('click', function (params) {
        //REMOVER LA CLASE "ACTIVE" DE TODOS LOS ENLACES
        enlaces.forEach(function (enlace) {
            enlace.classList.remove('active')
        });
        //AGREGAR ACTIVE AL QUE CORRESPONDA
        //Agregar la clase "ACTIVE" al enlace actual
        this.classList.add('active')

        //TRAER LA INFORMACION CORRESPONDIENTE A LA ELLECCION
        //Obtener el contenido correspondiente segun el enlace
        let contenido = obtenerContenido(this.textContent)

        //MOSTRAR EL CONTENIDO EN EL DOM
        tituloElemento.innerHTML = contenido.titulo
        subTituloElemento.innerHTML = contenido.subtitulo
        parrafoElemento.innerHTML = contenido.parrafo
        precioElemento.innerHTML = contenido.precio
    })

});

//FUNCION PARA TRAER LA INFORMACION CORRECTA DESDE CIUDADES.JS
function obtenerContenido(enlace) {
    let contenido = {
        'Barcelona': barcelona,
        'Roma': roma,
        'París': paris,
        'Londres': londres
    };
    return contenido[enlace];
}

