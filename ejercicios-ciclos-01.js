console.log('ejercicio ciclos');

// CICLO WHILE
// IMPRIMIR LOS VALORES DE 0 A 5
let contador = 0;
let repeticiones = 5;
while ( contador <= repeticiones ){
    console.log(contador++);    
}

//CICLO DO-WHIILE
let contadorDoWhile = 0;
let repeticionesDoWhile = 6;
do {
    console.log(contadorDoWhile++);
} while ( contadorDoWhile <= repeticionesDoWhile );

//CICLO FOR
let repeticionesFor = 7;
for (let contadorFor = 0; contadorFor <= repeticionesFor; contadorFor++ ) {
    console.log(contadorFor);
}

//IMPRIMIR LOS PRIMEROS 10 NUMEROS DE 3 EN 3 - EJERCICIO CICLOS 
//1 - 4 - 7 - 10
//1 -2 -5 -8
let contadorEjercicio = 1;
let limiteContadorEjercicio = 10;
for (contadorEjercicio; contadorEjercicio <= limiteContadorEjercicio; contadorEjercicio+=3 ) {
    console.log(contadorEjercicio);
}
//RESOLUCION PROFE
let maximoEjercicio = 10, minimoEjercicio = -10;
for (let numeroEjercicio = 1; numeroEjercicio <= maximoEjercicio; numeroEjercicio+=3 ) {
    console.log(numeroEjercicio);
}
for (let numeroEjercicio = 1; numeroEjercicio >= minimoEjercicio; numeroEjercicio-=3 ) {
    console.log(numeroEjercicio);
}
// do {
//     console.log(contadorEjercicio+=3)
// } while (contadorEjercicio <= limiteContadorEjercicio)

// while (contadorEjercicio <= limiteContadorEjercicio) {
//     contadorEjercicio+=3;
//     console.log(contadorEjercicio);
// }

//EJERCICIO SUMAR LOS PRIMEROS 5 NUMEROS CON FOR
let limiteEjercicio = 5;
let numeroAcumulativo = 0;
for ( let numero = 1; numero <= limiteEjercicio; numero++ ) {
    console.log(numero);
    numeroAcumulativo += numero;
    console.log(numeroAcumulativo);
}

let numeroWhile = 1, maximo = 5, acumuladorSuma = 0;
while( numeroWhile <= maximo ) {
    //CALCULO DE NUMERO + ACUMULADOR
    console.log(`${acumuladorSuma} + ${numeroWhile}`)

    //ALMACENO EL NUMERO EN LA VARIABLE ACUMULADOR X CADA VEZ QUE RECORRE EL BLOQUE
    acumuladorSuma += numeroWhile
    console.log(acumuladorSuma)
    //AUMENTO LA VARIABLE NUMERO EN 1 X CADA VEZ QUE RECORRE EL BLOQUE
    numeroWhile++; 
}
console.log(numeroWhile) //AL AGREGAR EL AUMENTO DEL NUMERO AL FINAL DEL BLOQUE LA VARIABLE AUTOMATICAMENTE QUEDA CON UN NUMERO+ EN ESTE CASO 6 XQ EL LIMITE ES 5
console.log(acumuladorSuma)

let numeroDoWhile = 1, maximoDoWhile = 5, acumuladorSumaDoWhile = 0;
do {
    //CALCULO DE NUMERO + ACUMULADOR
    console.log(`${acumuladorSumaDoWhile} + ${numeroDoWhile}`)

    //ALMACENO EL NUMERO EN LA VARIABLE ACUMULADOR X CADA VEZ QUE RECORRE EL BLOQUE
    acumuladorSumaDoWhile += numeroDoWhile
    console.log(acumuladorSumaDoWhile)
    //AUMENTO LA VARIABLE NUMERO EN 1 X CADA VEZ QUE RECORRE EL BLOQUE
    numeroDoWhile++; 
} while( numeroDoWhile <= maximoDoWhile ) 