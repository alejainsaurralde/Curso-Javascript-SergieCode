let promesa = new Promise((response, reject) => {
    let resp = 'Esta es la respuesta del servicio'
    let resp = {
        response: 200,
        description: 'Esta información es importante'
    }
    response(resp)
    reject('Falló')
})

promesa.then(res => {
    console.log(res.description);
}).catch(error => {
    console.error(error);//warn(amarillo)
})


//ASÍNCRONICO
let promesa = new Promise((response, reject) => {
    // let resp = 'Esta es la respuesta del servicio'
    setTimeout(() => {
        let resp = {
            response: 200,
            description: 'Esta información es importante'
        }
        response(resp)
        reject('Falló')

    }, 3000);
})

promesa.then(res => {
    console.log(res.description);
}).catch(error => {
    console.error(error);//warn(amarillo)
})


//VARIAS PROMESAS QUE SE DEBAN CUMPLIR UNA ATRÁS DE OTRA
let promesa1 = new Promise((response) => {
    setTimeout(() => {
        let resp = {
            response: 200,
            description: '1 Esta información es importante'
        }
        response(resp)
    }, 3000);
})

let promesa2 = new Promise((response) => {
    setTimeout(() => {
        let resp = {
            response: 200,
            description: '2 Esta información es importante pero suele demorar mucho'
        }
        response(resp)
    }, 5000);
})

let promesa3 = new Promise((response) => {
    setTimeout(() => {
        let resp = {
            response: 200,
            description: '3 Información rápida'
        }
        response(resp)
    }, 2500);
})

//PIRÁMIDE DE LA PERDICIÓN(buen nombre)
promesa1.then(res => {
    console.log(res.description);
    promesa2.then(res => {
        console.log(res.description);
        promesa3.then(res => {
            console.log(res.description);
        }).catch(error => {
            console.warn(error);
        })
    }).catch(error => {
        console.warn(error);
    })
}).catch(error => {
    console.warn(error);
})