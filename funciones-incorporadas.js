//Funciones incorporadas
// Cadenas en JS

//Obtener largo de una cadena.
let cadena1 = 'Hola';
console.log(cadena1.length);

//No podemos modificar los caracteres de una cadena
//Las cadenas son inmutables
cadena1[0] = 'x';
console.log(cadena1);

//Si podemos asignar una nueva cadeana
cadena1 = 'Adios';
console.log(cadena1);

//Subcadenas en JS
let cadenaPrincipal = 'Hola Mundo';
//substring(indice_inicio, indice_fin) donde retorna el total de los caracteres -1
//Por ende se debe considerar un espacio adicional en el indice_final para solicitar la palabra completa
//Ejemplo de substring imprimiendo palabra "Hola"
let extractoCadenaPrincipal1 = cadenaPrincipal.substring(0,4);
console.log(extractoCadenaPrincipal1); 
//Ejemplo de substring imprimiendo palabra "Mundo"
let extractoCadenaPrincipal2 = cadenaPrincipal.substring(5,10);
console.log(extractoCadenaPrincipal2);
//Tambien podemos extraer el restante de caracteres de una cadena completa 
//Indicando solamente el indice_inicio

//Contactenacion de Cadenas en JS
//Ejemplo de concatenacion formando palabra Hola Mundo
let concatenacionExtractosCadena = extractoCadenaPrincipal1 + ' ' + extractoCadenaPrincipal2;
console.log(concatenacionExtractosCadena);
//Ejemplo con String Interpolation
let cadenaHolaMundo = `${extractoCadenaPrincipal1} ${extractoCadenaPrincipal2}`;
console.log(cadenaHolaMundo);

//Convertir una cadena a numero en JS
let a = '10', b = '20';
//Si son cadenas se concatenan
console.log(a + b);

//Se debe convertir en numeros para que se sumen
let suma = parseInt(a) + parseInt(b);
console.log(suma);

//Convertir un numero a cadena en JS
let concatenacion = a.toString() + b.toString();
console.log(concatenacion);

//Valor Absoluto de un numero
let numero = -110;
let valorAbsoluto = Math.abs(numero);
console.log(valorAbsoluto);

//Redondeo y Truncado en JS
let numeroEjemplo = 8.5, redondeo, truncado;
//Redondeo
//Math.round(8.5) Redondea al valor entero más cercano 
// si es < 0.5 redondea hacia abajo = 0
// si es >= 0.5 redondea hacia arriba = 1
redondeo = Math.round(numeroEjemplo);
console.log(redondeo);
//Truncado
//Math.trunc(8.5) elimina la parte flotante (decimal)
truncado = Math.trunc(numeroEjemplo);
console.log(truncado);

