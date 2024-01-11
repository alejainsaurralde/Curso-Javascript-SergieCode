
// NO SE USA MAS VAR
var nombreDeLaVariable = 'Curso de Javascript'

const nombreVariable = 'Disponible en YouTube'
// USAR ESTE EN LO POSIBLE
let nombreDeVariable = 'Sergie Code'

// CON LET SE PUEDE DECLARAR VARIAS VARIABLES AL MISMO TIEMPO, 
// SEPARANDO ESTAMENTOS CON UNA COMA, Y EL PUNTO Y COMA LO CIERRA, NO ES OBLIGATORIO PERO SI RECOMNDABLE

let x, y, z;
x = 5;
y = 7;
z = x + y;

// MUCHO CUIDADO CON ASIGNAR LA MISMA VARIABLE, POR EL MISMO LUGAR DE MEMORIA
let x = 5
let y = x

// SE PUEDE DECLARAR LINEAL, CON PUNTO Y COMA. JS OMITE ESPACIOS
x = 5; y = 7; z = x + y;

// NOMBRE LARGO: SE PUEDE DAR ENTER
const datosQueVieneDeLaBaseDeDatosDelCliente =
    'Pedro';

// LAS LLAVES SON OTRO AMBIENTE DE TRABAJO, NO OLVIDAR CERRAR
function nombreDeFuncion() {
    const nombreVariable = 'Variable dentro de una Funcion'
}