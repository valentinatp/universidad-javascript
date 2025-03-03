//MATRICES EN JS

//DECLARACION DE UNA MATRIZ
let matrizPrincipal = [[],[]];
console.log(matrizPrincipal);

//INSERTAR VALORES DE FORMA MANUAL
//fila 1
matrizPrincipal[0][0] = 11;
matrizPrincipal[0][1] = 22;
matrizPrincipal[0][2] = 33;
//fila 2
matrizPrincipal[1][0] = 44;
matrizPrincipal[1][1] = 55;
matrizPrincipal[1][2] = 66;
console.log(matrizPrincipal);

//INSERTAR VALORES A MATRIZ DE SINTAXIS SIMPLIFICADA
let matrizPrincipalSimplificada = [[1,2,3],[4,5,6]];
console.log(matrizPrincipalSimplificada);


//ITERAR UNA MATRIZ 
//consultamos la cantidad de elementos de la variable matrizPrincipal
console.log(matrizPrincipalSimplificada.length);
//consultamos cantidad de elementos de la primera fila
console.log(matrizPrincipalSimplificada[0].length);
//consultamos cantidad de elementos de la segunda fila
console.log(matrizPrincipalSimplificada[1].length);

for( let i = 0; i < matrizPrincipalSimplificada.length; i++ ) {
    //recorre las filas
    console.log(matrizPrincipalSimplificada[i]);
    for ( let columnaFila = 0; columnaFila < matrizPrincipalSimplificada[i].length; columnaFila++ ) {
        //recorre las columnas de cada fila
        console.log(matrizPrincipalSimplificada[i][columnaFila]);
        console.log(`Elemento[${i}][${columnaFila}] = ${matrizPrincipalSimplificada[i][columnaFila]}`);
    }
}