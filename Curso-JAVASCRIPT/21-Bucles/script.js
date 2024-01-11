// INDICES          0        1         2           3          4

let tecnologias = ['HTML', 'CSS', 'JAVASCRIPT', 'REACT', 'ANGULAR']
for (let index = 0; index < tecnologias.length; index++) {
    console.log(tecnologias[index]);   
}


// FOR
let tecnologias = ['HTML', 'CSS', 'JAVASCRIPT', 'REACT', 'ANGULAR']

let seleccionable = document.getElementById('seleccionable')
let texto = ''
for (let index = 0; index < tecnologias.length; index++) {
    texto += tecnologias[index]
    if (index < tecnologias.length - 1) {
        texto += ', '
    }
    seleccionable.textContent = texto  
}

// FOR OF

let tecnologias = ['HTML', 'CSS', 'JAVASCRIPT', 'REACT', 'ANGULAR']


for (tecnologia of tecnologias) {
    console.log(tecnologia);
}



// FOR IN, BUCLE QUE RECORRE OBJETOS

const alumno = {
    nombre: 'Alejandra',
    edad: 38,
    tecnologias: ['HTML', 'CSS']
}

for (const key in alumno) {
    console.log(alumno[key]);
}

//FOREACH
let numeros = [1,2,3,4,5,6,7,8,9]

numeros.forEach(numero => {
    console.log(numero)
});


//WHILE, MIENTRAS SE CUMPLA LA CONDICION

let edad = 0

while (edad < 18) {
    console.log(`Tienes ${edad} años y aun eres un niño`);
    edad++;
}
console.log(`Tienes ${edad} años y ya eres mayor de edad`);

// DO WHILE: LA DIGERENCIA ES QUE PRIMERO EJECUTA EL CÓDIGO Y DESPUES WHILE ES LO QUE LO CIERRA, DO CUMPLE PRIMERO EL CÓDIGO, YA SE EJECUTO


let edad = 0
do {
    console.log(`Tienes ${edad} años y aún eres un niño`);
    edad++;
}
while (edad < 18)
console.log(`Tienes ${edad} años y ya eres mayor de edad`);

// BREAK ROMPE BLOQUES

let edad = 0
while (edad < 30) {
    console.log(edad);
    edad++;
    if (edad == 25) break;
}
console.log(`Saliste del bucle por que tienes ${edad} años`);

