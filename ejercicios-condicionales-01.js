console.log('holamundo');
let x = 11;
console.log(x);

//SENTENCIAS IF CONDICIONALES
if (x == 1) {
    console.log('El numero es igual a 1');
}

//SENTENCIAS IF-ELSE CONDICIONALES
if ( x == 1) {
    console.log(`El numero ${x} igual a 1`);
} else if ( x < 1) {
    console.log(`El numero ${x} es menor a 1`)
} else {
    console.log(`El numero ${x} es mayor a 1`)
}

//SENTENCIAS OPERADOR TERNARIO CONDICONALES
(x > 0) ? console.log(`El numero ${x} es positivo`) : console.log(`El numero ${x} es Negativo`);

//ALGORITMO MAYOR EDAD CON CONDICIONALES
const mayoriaDeEdad = 18; //CONDICION BASE PARA CALCULAR LA CONDICION
let edadIngresada = 20; //EDAD INGRESADA PARA CALCUALR LA CONDICION

if ( edadIngresada < mayoriaDeEdad ) { //VALIDA SI LA EDAD INGRESADA ES MENOR A 18
    console.log('Usted es menor de edad');
} else if ( edadIngresada >= mayoriaDeEdad ) { //VALIDA SI LA EDAD INGRESADA ES MAYOR O IGUAL A 18
    console.log('Usted es mayor de edad');
}

//SENTENCIAS SWITCH CONDICIONALES
let diaDeSemana = 7;

switch ( diaDeSemana ) {
    case 1:
        console.log('Lunes');
        break;
    case 2:
        console.log('Martes');
        break;
    case 3:
        console.log('Miercoles');
        break;
    case 4:
        console.log('Jueves');
        break;
    case 5:
        console.log('Viernes');
        break;
    case 6:
        console.log('Sabado');
        break;
    case 7:
        console.log('Domingo');
        break;
    default:
        console.log('Dia de la semana incorrecto');
        break;
}
