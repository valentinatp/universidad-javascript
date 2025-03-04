//Ejercicio de Herencia en JS
/*
- Crear Clase Persona, Empleado, Cliente
- La Clase Persona debe contener:
    - los siguientes tributos:
        - _idPersona: number.
        - _nombre: string.
        - _apellido: string.
        - _edad: number
        -contadorPersonas - Static = este atributo debe asignarle el numero al atributo _idPersona.
    - los siguientes métodos:
        - getIdPersona(): number.
        - getNombre(): string.
        - setNombre(string): string.
        - getApellido(): string.
        - setApellido(string): string
        - getEdad(number): number.
        - setEdad(): number.
        - toString()     
- la Clase Empleado debe contener:
    - los siguientes atributos:
        - _idEmpleado: Long. = se podria agregar una variable Static para contabilizar/inicializar solamente los objetos de tipo Empleado (los IDs propios)
        - _sueldo: number.
    - los siguientes métodos():
        - getIdEmpleado(): number.
        - getSueldo(): number.
        - setSueldo(number): number.
        - toString() = utilizar el concepto de sobrecarga o Polimosfismo.
- la Clase Cliente debe contener:
    - los siguientes atributos:
        - _idCliente: number. = se podria agregar una variable Static para contabilizar/inicializar solamente los objetos de tipo Cliente (los IDs propios)
        - _fechaRegistro: Date. = utilizar método 'new Date();'
    - los siguientes métodos():
        - getIdCliente(): number.
        - getFechaRegistro(): Date.
        - setFechaRegistro(Date): Date.
        - toString() = utilizar el concepto de sobrecarga o Polimosfismo.
*/

class Persona{
    static contadorPersonas = 0;
    constructor(nombre, apellido, edad){
        this._idPersona = ++Persona.contadorPersonas;
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
    }
    get getIdPersona(){
        return this._idPersona;
    }
    get getNombre(){
        return this._nombre;
    }
    set setNombre(nombre){
        this._nombre = nombre;
    }
    get getApellido(){
        return this._apellido;
    }
    set setApellido(apellido){
        this._apellido = apellido;
    }
    get getEdad(){
        return this._edad;
    }
    set setEdad(edad){
        this._edad = edad;
    }
    //se elimina el metodo nombre completo
    // nombreCompleto(){
    //     return this._nombre + ' ' + this._apellido;
    // }
    toString(){
        //return this.nombreCompleto();
        return this._idPersona + ' ' + this._nombre + ' ' + this._apellido + ' ' + this._edad;
        //return `${this._idPersona}
        //        ${this._nombre}
        //        ${this._apellido}
        //        ${this._edad}
        // `;
    }
}

class Empleado extends Persona {
    //se agrega el contador propio para IDs Empleados a traves de una variable STATIC
    static contadorEmpleados = 0;
    constructor(nombre, apellido, edad, sueldo){
        super(nombre, apellido, edad)
        this._idEmpleado = ++Empleado.contadorEmpleados;
        this._sueldo = sueldo;
    }
    get getIdEmpleado(){
        return this._idPersona;
    }
    get getSueldo(){
        return this._sueldo;
    }
    set setSueldo(sueldo){
        this._sueldo = sueldo;
    }
    toString(){
        //return this.nombreCompleto();
        //se utiliza la herencia para utilizar el metodo toString() de la clase Persona
        return super.toString() + ' ' + this._idEmpleado + ' ' + this._sueldo;
    }
}

class Cliente extends Persona{
    static contadorClientes = 0;
    static fechaRegistro = new Date();
    constructor(nombre, apellido, edad, fechaRegistro){
        super(nombre, apellido, edad);
        this._idCliente = ++Cliente.contadorClientes;
        this._fechaRegistro = fechaRegistro;
    }
    get getIdCliente(){
        return this._idPersona;
    }
    get getFechaRegistro(){
        return this._fechaRegistro;
    }
    set setFechaRegistro(fechaRegistro){
        this._fechaRegistro = fechaRegistro;
    }
    toString(){
        //return this.nombreCompleto();
        return super.toString() + ' ' + this._idCliente + ' ' + this._fechaRegistro;
        //`${super.toString()}`
    }
}

//Pruebas de desarrollo
//se crea nuevo Objeto Persona.
let personaHerencia1 = new Persona('Oscar', 'Toledo', 60);
console.log(personaHerencia1.toString());
let personaHerencia2 = new Persona('Nelly', 'Porma', 67);
console.log(personaHerencia2.toString());
//se crea nuevo objeto Empleado
let empleadoHerencia1 = new Empleado('Tomasa', 'Porma', 30, 50000);
console.log(empleadoHerencia1.toString());
let empleadoHerencia2 = new Empleado('Valentina', 'Toledo', 28, 50000);
console.log(empleadoHerencia2.toString());