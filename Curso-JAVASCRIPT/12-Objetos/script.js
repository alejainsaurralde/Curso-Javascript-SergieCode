// let auto1 = {
//     marca: 'FIAT',
//     modelo: 'UNO',
//     peso: 1000,
//     color: 'Rojo'
// }
// let auto2 = {
    //CLAVE  //VALOR
//     marca: 'RENAULT',
//     modelo: '12',
//     peso: 1100,
//     color: 'Marron'
// }

// console.log('Auto 1: ', auto1);
// console.log('Auto 2: ', auto2);

// console.log('El color del auto 1 es : ', auto1.color);

//ASI SE PUEDE MODIFICAR UN VALOR
// const auto1 = {
//     marca: 'FIAT',
//     modelo: 'UNO',
//     peso: 1000,
//     color: 'Rojo'
// }

// auto1.marca = 'BMW'
// auto1.modelo = 'X5'

// console.log(auto1);
// OTRA OPCION:
// console.log(auto1["marca"]);

// auto1.marca
// auto1["marca"]

const vendedor = {
    nombre: 'Pedro',
    apellido: 'Gonzalez',
    empresa: 'Auto S.A',
    habilidadesBlandas: ['Carisma', 'Puntualidad'],
    vender: function () {
        return 'Pedro ah vendido un auto'
    },
    nombreCompleto: function () {
        return this.nombre + " " + this.apellido
    }
}

console.log(vendedor.vender());



