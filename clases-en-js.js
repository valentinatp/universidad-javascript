//Clases en JS
//Se crea clase Persona con su respectivo constructor.
class Persona{
    constructor(nombre, apellido){
        //se les agrega '_' a las propiedades ya que en los métodos GET y SET
        //no se les puede agregar una propiedad con el mismo nombre
        this._nombre = nombre;
        this._apellido = apellido;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
}
//Creamos los nuevos objetos (new) instanciando la Clase (Persona)
let persona1 = new Persona('Juan', 'Porma');
console.log(persona1);
let persona2 = new Persona('Tomasa', 'Alonso');
console.log(persona2);

//Métodos GET y SET
//Es una buena practica agregarlos en las clases
//imprimimos el nombre con el método GET
console.log(persona1.nombre);
//imprimimos el nombre luego de cambiarlo con el método SET
persona1.nombre = 'Juan Carlos';//automaticamente utiliza el método SET
console.log(persona1.nombre);

//HOISTING Y CLASES 
//NO SE PUEDE APLICAR EL TERMINO HOISTING EN LAS CLASES , YA QUE NO SE PUEDE CREAR UN OBJETO ANTES DE CREAR UNA CLASE

//HERENCIAS DE CLASES
//Para heredar las propiedades de una Clase 'padre' se utiliza la palabra reservada 'Extends'
//

//Creamos clase Persona2
class PersonaHerencia {
    //se crea variable STATIC que solo puede ser utilizada por la Clase y su herencia
    static contadorObjetosPersonaHerencia = 0;
    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
        //Para acceder a un
        PersonaHerencia.contadorObjetosPersonaHerencia ++;
        console.log('Se crea un nuevo objeto ' + PersonaHerencia.contadorObjetosPersonaHerencia);
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    get apellido(){
        return this._apellido;
    }
    set apellido(apellido){
        this._apellido = apellido;
    }
    nombreCompleto(){
        return this._nombre + ' ' + this._apellido;
    }
    //Sobreescribiendo el método de la clase Padre (Object)
    toString(){
        //Se aplica polimorfismo (multiples formas en tiempo de ejecucion)
        //el método que se ejecuta depende si es una referencia de tipo padre
        //o de tipo hijo (Línea 112)
        return this.nombreCompleto();
    }
    //Método STATIC
    static saludar(){
        console.log('Saludos desde el metodo STATIC');
    }
    static saludar2(persona){
        console.log(persona._nombre + ' ' + persona._apellido);
    }
}
//Creamos clase hija
class Empleado extends PersonaHerencia{
    constructor(nombre, apellido, departamento){
        //Se utiliza la palabra reservada 'super' para llamar al constructor de la clase Padre
        //Y asi heredar las propiedades y reutilizarlas
        super(nombre, apellido);
        this._departamento = departamento;
    }
    get departamento(){
        return this._departamento;
    }
    set departamento(departamento){
        this._departamento = departamento;
    }
    //Se debe utilizar y escribir el método de la misma forma que esta escrito en la clase Padre para aplicar la Sobreescritura (Linea.98)
    nombreCompleto(){
        //return this._nombre + ' ' + this._apellido + ', ' + this._departamento;
        //forma correcta de heredar las propiedades del método de la clase Padre
        return super.nombreCompleto() + ', ' + this._departamento;
    }

}
//Agregamos objetos a la clase padre
let _personaHerencia = new PersonaHerencia('Oscar', 'Toledo');
//Imprimimos valores
console.log(_personaHerencia);
//Aplicamos método SET
_personaHerencia.apellido = 'Gomez';
_personaHerencia.nombre = 'Oscarito';
console.log(_personaHerencia);

//Agregar objetos a la clase hija
let _empleadoPersonaHerencia = new Empleado('Valentina', 'Toledo', 'Sistemas');
console.log(_empleadoPersonaHerencia);
//Utilizamos el método de la clase Padre
console.log(_empleadoPersonaHerencia.nombre);
//Comprobamos que la clase hija puede acceder a la funcion de la clase padre
console.log(_empleadoPersonaHerencia.nombreCompleto());

//Sobreescritura en Clases
//Desde la clase hija se modificara el comportamiento definido de la clase Padre
//Modificar el comportamiento de un método en la clase padre

//Clase Object, método String, sobreescritura y polimorfismo.
console.log(_empleadoPersonaHerencia.toString());
console.log(_personaHerencia.toString());

//Palabra STATIC
//Es el método que se va asociar con la Clase y no con los objetos de la clase EJ. Línea 66.
//se llama el método STATC de la clase
//Se llama método desde Objeto:
//_personaHerencia.saludar(); //no es posible llamar un método STATIC desde un objeto
//Se llama método desde CLASE
PersonaHerencia.saludar();

//Se le pasa argumento a un método static (línea 70)
PersonaHerencia.saludar2(_empleadoPersonaHerencia);
Empleado.saludar2(_empleadoPersonaHerencia);
//Imprimir valores de variable Static
console.log(PersonaHerencia.contadorObjetosPersonaHerencia);
//Tambien se puede consultar la variable Static desde una clase hija
console.log(Empleado.contadorObjetosPersonaHerencia);