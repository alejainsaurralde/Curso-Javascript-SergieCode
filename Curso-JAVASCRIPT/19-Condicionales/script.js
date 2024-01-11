// IF / ELSE / SWITCH

// ¿PUEDE ENTRAR ESTE CHICO/PERSONA AL BOLICHE?

let edadChico = 19

if (edadChico >= 18) {
    console.log("Puedes ingresar al boliche");
} else {
    console.log("No pudes ingresar al boliche");
}

//EJEMPLO 2
let edadPersona = 19

if (edadPersona >= 18 && edadPersona > 60) {
    console.log("Puedes ingresar al boliche");
} else if (edadPersona >= 18) {
    console.log("No pudes ingresar al boliche por que eres menor de edad");
} else {
    console.log("No puedes ingresar por que eres mayor y mo se recomienda");
}

//SWITCH
let estiloDeMusica = 'Punk'

switch (estiloDeMusica) {
    case 'Punk':
        console.log('Te recomiendo los Ramones');
        break;
    case 'Hard Rock':
        console.log('Te recomiendo los Guns and Roses');
        break;
    case 'Metal':
        console.log('Te recomiendo los Pantera');
        break;
    case 'Rock and Roll':
        console.log('Te recomiendo los Rolling Stones');
        break;
    case 'Pop':
        console.log('Te recomiendo los Michael Jackson');
        break;

    default:
        console.log('No conozco esa Úsica pero te recomiendo escuchar Mozart');
        break;
}

//IF ANIDADO
let edad = 18
let nacionalidad = 'Argentino'
let tienePasaporte = true

if (edad >= 18) {
    console.log('Tienes edad para viajar, aprobado trámite 1');
    if (nacionalidad == 'Argentino') {
        console.log('La documentación es correcta, aprbado trámite 2');
        if (tienePasaporte) {
            console.log('Usted puede viajar, buen viaje!!');
        } else {
            console.log('No puede viajar por que el pasaporte es obligatorio');
        }
    } else {
        console.log('Debes presentar la documentacion de tu país de origen');
    }
} else {
    console.log('Debes ser mayor de edad para viajar al exterior');
}

// VERSION SENCILLA
if (condicion) {
    codigo
}

// VERSION COMPLETA
if (condicion) {
    codigo
} else {
    codigo
}

// VERSION MULTIPLE
if (condicion) {
    codigo
} else if (otraCondicion) {
    codigo
} else {
    codigo
}