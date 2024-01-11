// STRING A NUMBER
let a = Number('3.14')
//Entero
let a = parseInt('3.14')
//Mantiene coma
let a = parseFloat('3.14')
// + (lo convierte a number)
let a = +'1'

// NUMBER A STRING
let b = String(1)
let c = 1

let d = c.toString()

// DATES A NUMBERS

let e = new Date()
let f = Number(e)

// DATES A STRING

let g = String(e)

// NUMBER A BOOLEAN
let h = Boolean(0)
let i = Boolean(1)

// BOOLEAN A STRING

let j = String(true)
let k = true.toString()


// console.log(i);
console.log(j, typeof j);

// CUIDADO! EL 0 (CERO) SE LEE COMO DATO FALSE O SEA NULO, SI ESPERAMOS RECIBIR UN NRO REALIZAR LO SIGUIENTE...

let ricardo = 0

if (ricardo || ricardo == 0) {
    console.log('Vino un dato');
}else{
    console.log('Es null o undefined');
}
