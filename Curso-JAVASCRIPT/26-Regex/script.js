// /pattern/modificadores

let texto = 'Este curso es de Javascript y está dado por Sergie Code 6'

let busqueda = texto.search(/sergie/i)

// console.log(busqueda);

//MODIFICADORES DE BÚSQUEDA
// i: ignorar mayúsculas y minúsculas
//g: buscar en todo el texto pasado
//m: búsqueda multilínea

// let pattern = /sergie/i
// let resultado = pattern.test(texto)

//Búsqueda exacta
// let resultado = pattern.exec(texto)

//Búsqueda de nros
// let pattern = /[0-9]/
// let pattern = /\d/
// let resultado = pattern.test(texto)

// console.log(resultado);

// CORREOS ELECTRÓNICOS
//Validar un mail
// emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
let pattern = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
console.log(pattern.test('sergiecode@gmail.com'));