
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

async function ejecutarPromesas() {
    let respuestaProm1 = await promesa1
    console.log(respuestaProm1);
    let respuestaProm2 = await promesa2
    console.log(respuestaProm2);
    let respuestaProm3 = await promesa3
    console.log(respuestaProm3);
}

ejecutarPromesas()