//ESTO AGREGA A LA PANTALLA EL VALOR DEL BOTON DE LA CALCU QUE TOQUEMOS
function agregar(valor) {
    document.getElementById('pantalla').value += valor
}

//ESTA ACCIÓN VACIA LA PANTALL
function borrar() {
    document.getElementById('pantalla').value = ''
}

//ESTA ACCIÓN TOMA EL VALOR DE LA PANTALLA Y EJECUTA LOS CÁLCULOS
function calcular() {
    const valorPantalla = document.getElementById('pantalla').value
    const resultado = eval(valorPantalla)
    document.getElementById('pantalla').value = resultado
}