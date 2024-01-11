// STRING
let a = typeof 'Alejandra'

// NUMBER
let b = typeof 3.14

// NUMBER (caso especial)
let c = typeof NaN

// BOOLEAN
let d = typeof true

// ARRAY/OBJETO (Caso especial. Nos devuelve objeto, es objeto de javascript)
let e = typeof ['Ricardo', 'Pedro', 'Maria']

// OBJETO
let f = typeof { Curso: 'Javascript' }

// OBJETO (Caso especial)
let g = typeof new Date()

// FUNCTION
let h = typeof function () { }

// UNDEFINED (Por error)
let i = typeof Alejandra

// OBJETO (Caso especial)
let j = typeof null

console.log(i);


let datoQueVieneDeBackend = 'Curso SergieCode'
if (typeof datoQueVieneDeBackend === 'string') {
    console.log('Lo que viene de backend es string');
} else {
    console.log('Reclamale a tu compañero que te mande un string');
}


// OBJETO (Array)
// let e = typeof ['Ricardo', 'Pedro', 'Maria']
// OBJETO
// let f = typeof { Curso: 'Javascript' }
// OBJETO (Caso especial)
// let g = typeof new Date()
// OBJETO (Caso especial)
// let h = typeof null

// INSTANCE OF

let e = [1,2,3,4,5]
let f = new Date()
let g = new Set()
let h = new Map()
let i = null

console.log(e instanceof Array);

if (e instanceof Array) {
    console.log('Gracias Backend por enviarme un array'); 
}else{
    console.log('Mandame un array por favor');
}

// NULL VA A DAR ERROR NO ES UN OBJETO