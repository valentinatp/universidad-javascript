//ARREGLOS EN JS
let numerosArreglo = [];

//MODIFICAR VALORES
numerosArreglo[0] = 10;
numerosArreglo[1] = 20;
numerosArreglo[2] = 'hola';

console.log(numerosArreglo);

//IMPRIMIR VALORES
console.log(`Elemento 1, indice 0 su valor guardado es: ${numerosArreglo[0]}`);
console.log(`Elemento 2, indice 1 su valor guardado es: ${numerosArreglo[1]}`);


//SINTAXIS SIMPLIFICADA
let numeroArregloSimplificada = [100, 200, 300, 400, 500];

//LEER LOS VALORES DE FORMA MANUAL
console.log(`Elemento 1 [0]:  valor ${numeroArregloSimplificada[1]}`);

//LEER LOS VALORES DE FORMA AUTOMATICA
for( let i = 0; i < numeroArregloSimplificada.length; i++) {
    console.log(numeroArregloSimplificada[i]);
}