//Objetos en JS
//Los objetos pueden almacenar datos de todos los tipos ya sea string, number, float, bool, etc.
//Y tambien se pueden utilizar metodos para la manipulacion de los valores
let persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    email: 'jperez@mail.cl',
    edad: 28,
    //Para agregar una funcion dentro del objeto la sintaxis seria:
    nombreCompleto: function(){
        //la funcion al retornar concatena el nombre y apellido
        return this.nombre + ' ' + this.apellido;
    }
}
//Se imprime el objeto completo
console.log(persona);
//Se imprimen valores del objeto x separado
console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona.edad);
console.log(persona.email);
console.log(persona.nombreCompleto());

//Para crear un nuevo objeto se utiliza la palabra reservada 'new'
//Creamos un nuevo objeto con nombre 'persona2'
let persona2 = new Object();
//Se le agregan los atributos al objeto con sus respectivos valores
persona2.nombre = 'Carlos';
persona2.direccion = 'Saturno 154';
persona2.tel = '55544440';
//Se imprimen los valores
console.log(persona2.nombre);
console.log(persona2.direccion);
console.log(persona2.tel);

//Otra forma de consultar los datos de un objeto es a través de [] como en un arreglo/array
//pero en vez de indicar el indice del dato, se indica el nombre de la propiedad como cadena de texto
console.log(persona['apellido']);
//Tambien nos permite recorrer el objeto con un ciclo 'For In'
//primero se asigna una variable para indicar que propiedad se esta consultando
//y luego indica en que objeto se realizara la consulta
for( nombrePropiedad in persona ) {
    console.log( nombrePropiedad );
    console.log( persona[nombrePropiedad] );
}

//Como eliminar y agregar propiedades de objetos
//agregar una propiedad
persona.tel = '555533332';
console.log(persona.tel);

//para eliminar una propiedad
persona.tee11 = '555444223';
console.log(persona.tee11);
//utilizamos la palabra revervada y se indica el objeto + la propiedad
delete persona.tee11;
console.log(persona.tee11);

//Como imprimir los valores de un objeto
//for in
for( nombrePropiedad in persona ){
    console.log( persona[nombrePropiedad]);
}
//Array
let personaArray = Object.values( persona );
console.log( personaArray );
//Como String / Json
let personaString = JSON.stringify( persona );
console.log( personaString );

//Métodos GET y SET
//Se utiliza para transformar la funcion en propiedad 
let personaGet = {
    nombre: 'Juan',
    apellido: 'Perez',
    email: 'jperez@mail.cl',
    edad: 28,
    idioma: 'es',
    get lenguaje(){
        return this.idioma.toUpperCase();
    },
    set lenguaje(leng){
        this.idioma = leng.toUpperCase();
    },
    //Agregarmos GET para solicitar la informacion del objeto
    get nombreCompleto(){
        //la funcion al retornar concatena el nombre y apellido
        return this.nombre + ' ' + this.apellido;
    }
}
//se consulta el método GET de la siguiente forma
console.log(personaGet.nombreCompleto);
console.log(personaGet.idioma);
console.log(personaGet.lenguaje);
//Utilizacion de SET
personaGet.idioma = 'mx';
console.log(personaGet.idioma);
console.log(personaGet.lenguaje)

//Método constructor
//funcion constructor de objetos de tipo persona
function Persona(nombre, apellido, email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    //Se agrega método
    this.nombreCompleto = function(){
        return this.nombre + ' ' + this.apellido;
    }
}

let padre = new Persona('Oscar', 'Toledo', 'oscar@mail.com');
console.log(padre);

let madre = new Persona('Nelly', 'Porma', 'nelly@mail.com');
console.log(madre);

let hermano = new Persona('Axel', 'Cabrales', 'axel@mail.com');
console.log(hermano);

//Consultamos el método
console.log(padre.nombreCompleto());
console.log(madre.nombreCompleto());
console.log(hermano.nombreCompleto());

//Formas de crear Objetos
let miObjeto = new Object(); //forma más formal
let miObjeto2 = {}; //forma más común
//Formas de crear String
let miCadena1 = new String('Hola');
let miCadena2 = 'Hola';
//Formas de crear Numeros
let miNumero1 = new Number(1);
let miNumero2 = 1;
//Formas de crear Booleanos
let miBoolean1 = new Boolean(false);
let miBoolean2 = false;
//Formas de crear Arreglos
let miArreglo1 = new Array();
let miArreglo2 = [];
//Formas de crear Funciones
let miFuncion1 = new Function();
let miFuncion2 = function(){};

//Uso de Prototype
//Se utiliza para crear valores x default a todos los objetos
Persona.prototype.tel = '23232323';
console.log(padre.tel);
padre.tel = '031313131';
console.log(padre.tel);

//Uso de Call
//Permite llamar el método definido de un objeto a otro objeto
let persona11 = {
    nombre: 'Valentina',
    apellido: 'Toledo',
    // nombreCompleto: function(titulo, tel){
    //     return titulo + ' ' + this.nombre + ' ' + this.apellido + ' ' + tel;
    // }
    //se cambia codigo para utilizacion de Apply
    nombreCompleto: function(titulo, tel){
        // return this.nombre + ' ' + this.apellido;
        return titulo + ' ' + this.nombre + ' ' + this.apellido + ' ' + tel;
    }
}
let persona22 = {
    nombre: 'Nicole',
    apellido: 'Higueras'
}
console.log(persona11.nombreCompleto());
console.log(persona11.nombreCompleto('Programadora', '44445555'));
//Invocamos la funcion de Persona1 en Persona2
console.log(persona11.nombreCompleto.call(persona22));
//Paso de Argumentos x Call
console.log(persona11.nombreCompleto.call(persona22, 'Veterinaria', '55554444'));

//Uso de Apply / aplai
//Envia los valores a través de un arreglo
let arreglo = ['Veterinaria', '944443333']
console.log(persona11.nombreCompleto.apply(persona22, arreglo))

