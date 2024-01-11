// Acá el juego selecciona un numero al azar para que adivines
let nemeroAzar = Math.floor(Math.random() * 100) + 1

let numeroEntrada = document.getElementById('numeroEntrada')
let mensaje = document.getElementById('mensaje')
let intento = document.getElementById('intento')
let intentos = 0


//Esta acción se va a ejecutar cuando se toque el botón chequear
function chequearResultado() {
    intentos ++
    intento.textContent = intentos
    let numeroIngresado = parseInt(numeroEntrada.value)

    if (numeroIngresado < 1 || numeroIngresado > 100 || isNaN(numeroIngresado)) {
        mensaje.textContent = 'Por favor introduci un número válido entre el 1 y el 100'
        return
    }

    if (numeroIngresado === nemeroAzar) {
        mensaje.textContent = '¡Felicitaciones! ¡Haz adivinado el número!';
        mensaje.style.color = 'green';
        numeroEntrada.disabled = true;
    } else if (numeroIngresado > nemeroAzar) {
        mensaje.textContent = '¡Más alto! ¡El número es mayor al que dijiste!';
        mensaje.style.color = 'red';
    } else {
        mensaje.textContent = '¡Más bajo! ¡El número es menor al que dijiste!';
        mensaje.style.color = 'red';
    }
}
