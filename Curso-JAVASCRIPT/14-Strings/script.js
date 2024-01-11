// STRINGS  
let string = 'Albert Einstein dijo que \'La relatividad esta re piola\''
console.log(string);

// SALTO DE LINEA(HAY MAS )
let string = 'Esto esta arriba \n esto esta abajo'
console.log(string);

// CONTADOR DE LETRAS
let contadorDeLetras = 'Murciélago'
console.log(contadorDeLetras.length);

// SLICE
let texto = 'Educación'
START COMIENZA DESDE EL 4(EN EL 5) HASTA 7(EL 7 LO TOMA)
let resultado = texto.slice(4, 7)
console.log(resultado);

//REMPLAZAR
const texto = 'La educación es muy importante en Argentina'

const resultado = texto.replace('Argentina', 'el mundo')
console.log(resultado);

//MAYUSCULA/MINUSCULA
const texto = 'La educación es muy importante en Argentina'
const resultado = texto.toUpperCase()
console.log(resultado);

//CONCATENAR
const texto = 'La educación es muy importante en '
const texto2 = 'Argentina'
const texto3 = 'el mundo'
const resultado = texto.concat(texto2)
console.log(resultado);

//SACAR ESPACIOS Y SE PUEDE CONCATENAR LUEGO DEL TRIMEAR    
const texto = '        La educación es muy importante en      '
const texto2 = ' Argentina'
const texto3 = ' el mundo'
const resultado = texto.trim().concat(texto3)
console.log(resultado);

//LA POCION DEL ELEMENTO
const texto = 'La educación es muy importante en '
OPCION A
const resultado = texto.charAt(5)
OPCION B
const resultado = texto[5]
console.log(resultado);

// SPLIT
const texto = 'Este texto te lo manda el backend. Este texto es importante. Dividi el texto.'
const texto2 = ' Argentina'
const texto3 = ' el mundo'
const resultado = texto.split('. ')
console.log(resultado);

// SEPARA LETRA POR LETRA
const texto = 'Separame'
const resultado = texto.split('')
console.log(resultado);