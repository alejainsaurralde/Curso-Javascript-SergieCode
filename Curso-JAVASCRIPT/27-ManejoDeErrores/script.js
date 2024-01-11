// MÉTODOS SÍNCRONOS
try {
    //LLAMADO AL BACKEND (a trvés de un API)
    console.log('llamado al backend');
} catch {
    //TOMAMOS EL ERROR Y HACEMOS LO QUE NOS PARECE CORRECTO
    console.log('Algo falló');
} finally {
    //Se ejecuta SIEMPRE por más que falle o no falle
    console.log('Se ejecuta siempre');
}



try {
    //LLAMADO AL BACKEND (a trvés de un API)
    console.log('llamado al backend');
    throw ('Este cliente no esta apto para la compra')
    console.log('Salió todo con éxito');
} catch (error) {
    //TOMAMOS EL ERROR Y HACEMOS LO QUE NOS PARECE CORRECTO
    console.log('Algo falló', error);
} finally {
    //Se ejecuta SIEMPRE por más que falle o no falle
    console.log('Se ejecuta siempre');
}



// MÉTODO ASÍNCRONO una acción a destiempo
try {
    //LLAMADO AL BACKEND (a trvés de un API)
    console.log('llamado al backend');
    setTimeout(() => {
        console.log('El backend nos responde: ');
        // console.log('Cliente apto para la compra');  
        throw ('Este cliente no esta apto para la compra')
    }, 1000);
} catch (error) {
    //TOMAMOS EL ERROR Y HACEMOS LO QUE NOS PARECE CORRECTO
    console.log('Algo falló', error);
} finally {
    //Se ejecuta SIEMPRE por más que falle o no falle
    console.log('Se ejecuta siempre');
}