//Funciones de tipo recursivas
//Es la funcion que se llama por si sola en el mismo bloque de codigo
//Lo más importante es tener un limite o condicion para evitar caer en un bucle
//Cuando se vuelve a llamar la funcion en la condición se le debe restar 1

//Imprimir 3,2,1
function funcionRecursiva(numero){
    //caso base
    if(numero == 1){
        console.log(numero);
    } else {
        console.log(numero);
        funcionRecursiva(numero-1);
    }
}

funcionRecursiva(3);