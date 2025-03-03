//PROCEDIMIENTO EN JS
//1.Definir el procedimiento.
function saludar(mensaje){
    //cuerpo de la funcion o bloque de codigo
    console.log(`Mensaje: ${mensaje}`);
}
//2.Llamar el procedimiento
saludar('Hola mundox');

//FUNCIONES EN JS
//1.Definir una funcion
function sumar(a,b){
    let resultadoSuma = a + b;
    return resultadoSuma;
}
//2.Llamar o invocar a la funcion
let argumentoA = 1, argumentoB = 2;
let resultado = sumar(argumentoA, argumentoB);
console.log(`El resultado de la llamada a la funcion SUMA es: ${resultado}`);
