const fecha = new Date()

console.log(fecha);

// FORMA DE PONER LA FECHA : AAAA-MM-DD (ISO)

// const fecha = new Date("2021-05-21")
// console.log(fecha);

// const fecha = new Date()
// console.log(fecha.getFullYear());

//SHORT 12/11/1985
//LONG Dic 11 1985

const fecha = new Date()
fecha.setFullYear(2029)
fecha.setMonth(9)
fecha.setDate(29)


let meses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre']
let resultado = fecha.getDate() + ' ' + meses[fecha.getMonth()] + ' de ' + fecha.getFullYear() 

// let mes = fecha.getMonth() + 1
// let resultado = fecha.getDate() + ' /' + mes + ' /' + fecha.getFullYear() 
console.log(resultado);