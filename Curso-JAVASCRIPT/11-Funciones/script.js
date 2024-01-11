// SINTAXIS

// function nombreFuncion(parametro1, parametro2, parametro3) {
//     lineasDeCodigoQueHaraEstaFuncion;
//     lineasDeCodigoQueHaraEstaFuncion2;
//     lineasDeCodigoQueHaraEstaFuncion3;
//     lineasDeCodigoQueHaraEstaFuncion4;
// }

// function suma(x, y) {
//     return x + y
// }

// let respuesta = suma(5, 6)

// console.log(respuesta)



// let a = 5
// let b = 6

// function suma(x, y) {
//     return x + y
// }

// let respuesta = suma(a, b)

// console.log(`La respuesta de ${a} + ${b} es igual a: `, respuesta)


//NO RETORNA
const a = 5;
const b = 6;

function suma(x, y) {
    console.log(x + y);
}

const respuesta = suma(a + b);

// CONVERTIR TEMPERATURA

const temperatura = 76

function transformarACelcius(fahrenheit) {
    return (fahrenheit - 32) * (5 / 9)
}

const respuesta = transformarACelcius(temperatura);

console.log(`La temperatura en grados celsius es de :`, parseInt(respuesta);


//SUMAR EL STRING
let num = '10'
function sumarDecena(numero) {
    return numero + 12
}

const respuesta = sumarDecena(parseInt(num))

console.log(respuesta);

//FUNCION CLASICA
function sumarDecena(numero) {
    return numero + 12
}

//FUNCION FLECHA
let sumarDecena = numero => numero + 12


//FUNCION DE FLECHA // ARROW FUCTION
let funtion = () => console.log("Soy una función");

funcion()