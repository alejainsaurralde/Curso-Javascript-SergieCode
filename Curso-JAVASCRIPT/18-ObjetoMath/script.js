console.log(Math.PI);

Math.E             //Devuelve el nro de Euler
Math.PI            //Devuelve Pi
Math.SQRT2         //Devuelve la raíz cuadrada de 2
Math.SQRT1_2       //Devuelve la raíz cuadrada de 1/2
Math.LN2           //Devuelve el logaritmo natural de 2
Math.LN10          //Devuelve el logaritmo natural de 10
Math.LOG2E         //Devuelve el logaritmo de E en base 2
Math.LOG10E        //Devuelve el logaritmo de E en base 10

//PARA REDONDEAR UN NÚMERO (ROUND: EL MAS PROXIMO, FLOOR: HACIA ABAJO, CEIL: HACIA ARRIBA Y TRUNC: QUEDA FIJO)

const numero = 2.2

const redondeo = Math.round(numero)

console.log(redondeo);

//NÚMEROS AL AZAR
console.log(Math.random()* 100); 

//NÚMEROS REDONDEADOS
let numero = Math.random()*100
let redondeo = Math.round(numero)
console.log(redondeo);



