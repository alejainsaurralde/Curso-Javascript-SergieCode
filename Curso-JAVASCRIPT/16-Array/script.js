
// const array = ['Curso HTML', 'Curso CSS', 'Curso JS']

const array = new Array(5)

array[0] = 'Curso de HTML'
array[1] = 'Curso de CSS'
array[2] = 'Curso de JS'

document.getElementById('seleccionable').innerHTML = array

// console.log(array);


//No hay problemas en hacer otras variables
const array = new Array(3)

array[0] = 'Curso de HTML'
array[1] = [1, 2, 3, 4]
array[2] = { nombre: 'Pedro' }

console.log(array);

//Largo del Array
const array = ['Curso de HTML', [1, 2, 3, 4], { nombre: 'Pedro' }]
console.log(array.length);

//ORDENAR
const array = [9, 2, 5, 7, 1]
console.log(array.sort());

//PARA ENTRAR AL ÚLTIMO ELEMENTO
//               0           1          2         3 
const array = ['Zapato', 'Ricardo', 'Xilofón', 'Barba']
console.log(array[array.length - 1]);

//BUCLE
const array = ['Despertarse', 'Comer', 'Estudiar', 'Dormir']

let texto = ''
for (let index = 0; index < array.length; index++) {
    texto += "<li>" + array[index] + '</li>'
}

document.getElementById('seleccionable').innerHTML = texto

//PARA AGREGAR UNO AL QUE SIGUE
const array = ['HTML', 'CSS', 'JS']
array[array.length] = 'REACT'
array[array.length] = 'ANGULAR'

//POSICIÓN QUE DEJA VACIO EL RESTO
array[8] = 'SQL'

console.log(array);

//MANIPULACION DE ARREGLOS
let array = ['Manzana', 'Pera', 'Banana', 'Naranja', 'Manzana', 'Naranja']
console.log(array.length);//Da 6 frutas el resultado

//Filtro
const array = ['Manzana', 'Pera', 'Banana', 'Naranja', 'Manzana', 'Naranja']

const resultado = array.filter(x => x == 'Manzana')
console.log(resultado);

//Mas complejo...
const array = [
    { nombre: 'Pedro', apellido: 'Gonzalez'},
    { nombre: 'María', apellido: 'Gonzalez'},
    { nombre: 'Lucía', apellido: 'Gonzalez'},
    { nombre: 'Ricardo', apellido: 'Perez'},
    { nombre: 'Glottis', apellido: 'Juarez'},
    { nombre: 'Fernanda', apellido: 'Fernandez'},
]
const resultado = array.filter(x => x.apellido == 'Gonzalez')
console.log(resultado);

for (let index = 0; index < resultado.length; index++) {
    const element = resultado[index];
    console.log(element.nombre);   
}

//MAP
const array = ['Manzana','Manzana','Manzana','Manzana']

const resultado = array.map(x =>{
    if (x == 'Manzana') return 'Naranja'
})
console.log(resultado);

//FILL
const array = ['Manzana','Manzana','Manzana','Manzana']

const resultado = array.fill('Naranja',1)
console.log(resultado);

//FIND
const array = ['Manzana','Manzana','Manzana','Manzana','Pera','Manzana', 'Pera']

const resultado = array.find(x => x == 'Pera')

console.log(resultado);
//Con objetos...
const array = [
    { nombre: 'Pedro', apellido: 'Gonzalez'},
    { nombre: 'María', apellido: 'Gonzalez'},
    { nombre: 'Lucía', apellido: 'Gonzalez'},
]

const resultado = array.find(x => x.apellido == 'Gonzalez')

console.log(resultado);

//FIND INDEX OF
const array = ['Manzana','Manzana','Manzana','Manzana','Pera','Manzana', 'Pera']

const resultado = array.findIndex(x => x == 'Pera')

console.log(resultado);

//SOME
const array = ['Manzana','Manzana','Manzana','Manzana','Pera','Manzana', 'Pera']

const resultado = array.some(x => x == 'Pera')

console.log(resultado);

//EVERY
const array = ['Manzana','Manzana','Manzana','Manzana','Pera','Manzana', 'Pera']

const resultado = array.every(x => x == 'Pera')

console.log(resultado);

//POP
const array = ['Manzana','Naranja','Limón','Pera']

const resultado = array.pop()
console.log(resultado);
console.log(array);

//SHIFT
const array = ['Manzana','Naranja','Limón','Pera']

const resultado = array.shift()
console.log(resultado);
console.log(array);

//PUSH
const array = ['Manzana','Naranja','Limón','Pera']

array.push('Ciruela')
console.log(array);

//UNSHIFT
const array = ['Manzana','Naranja','Limón','Pera']

array.unshift('Ciruela')
console.log(array);

//SPLICE
//                0          1         2      3
const array = ['Manzana','Naranja','Limón','Pera']
//        Indice, cuantos quiero contar y que quiero agregar           
array.splice(2,1,'Ciruela')
console.log(array);

//SLICE
const array = ['Manzana','Naranja','Limón','Pera','Ciruela','Kiwi']
          
const resultado = array.slice(2,4)
console.log(resultado);

//DIFERENCIA ENTRE SPLICE Y SLICE: el splice corta el array, y el slice devuleve el 

//PARA SEPARAR EN LA WEB
const array = ['Manzana','Naranja','Limón','Pera','Ciruela','Kiwi']
document.getElementById('seleccionable').innerHTML = array.join('-')

//CONCAT
const frutas = ['Manzana','Naranja','Limón','Pera','Ciruela','Kiwi']
const verduras = ['Lechuga','Cebolla','Zapallo','Genjibre']
console.log(verduras.concat(frutas));

//PARA ORDENAR NÚMEROS
const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
console.log(numbers.sort((x,y) => x-y));

//ORDENAR OBJETOS
const numbers = [
    {auto: 'FIAT', año: 2020}
    {auto: 'BMW', año: 2019}
    {auto: 'RENAULT', año: 2021}
    {auto: 'FORD', año: 2023}
]
console.log(numbers.sort((x,y) => x.año-y.año));

//NO UTILIZAR CONST PARA DEFINIR ARRAY SINO NO SE PUEDE REDEFINIR, UTIÑIZAR LET

let array = [1,2,3,4]
array =  [5,6,7,8]
console.log(array);



