class Persona {

    static contadorPersonas = 0;

    constructor(nombre, apellido, edad) {
        this._idPersona = ++Persona.contadorPersonas;
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;

    }
    get idPersona() {
        return this._idPersona;
    }
    set idPersona(idPersona) {
        this._idPersona = idPersona;
    }

    get nombre() {
        return this._nombre;
    }
    set nombre(nombre) {
        this._nombre = nombre;
    }
    get apellido() {
        return this._apellido;
    }
    set apellido(apellido) {
        this._apellido = apellido;
    }
    get edad() {
        return this._edad;
    }
    set edad(edad) {
        this._edad = edad;
    }
    toString() {
        return "Id Persona: " + this.idPersona + " Nombre: " + this.nombre + " Apellido: " + this.apellido + " Edad: " + this.edad;
    }

}

class Empleado extends Persona {

    static contadorEmpleados = 0;

    constructor(nombre, apellido, edad, sueldo) {
        super(nombre, apellido, edad);
        this._idEmpleado = ++Empleado.contadorEmpleados;
        this._sueldo = sueldo;
    }
    get idEmpleado() {
        return this._idEmpleado;
    }
    get sueldo() {
        return this._sueldo;
    }
    set sueldo(sueldo) {
        this._sueldo = sueldo;
    }
    toString() {
        return super.toString() + " Id Empleado: " + this.idEmpleado + " Sueldo: " + this.sueldo;
    }
}

class Cliente extends Persona {

    static contadorClientes = 0;

    constructor(nombre, apellido, edad, fechaRegistro) {
        super(nombre, apellido, edad);
        this._idCliente = ++Cliente.contadorClientes;
        this._fechaRegistro = fechaRegistro;
    }
    get idCliente() {
        return this._idCliente;
    }
    get fechaRegistro() {
        return this._fechaRegistro;
    }
    set fechaRegistro(fechaRegistro) {
        return this._fechaRegistro = fechaRegistro;
    }
    toString() {
        return super.toString() + " Id Cliente: " + this._idCliente + " Fecha Registro: " + this.fechaRegistro;
    }
}

let persona1 = new Persona("Michell", "Otii", 26);
console.log(persona1.toString());

let empleado1 = new Empleado("Karla", "Gomez", 26, 124);
console.log(empleado1.toString());

let cliente1 = new Cliente("Pepo", "Ramirez", 45, new Date());
console.log(cliente1.toString());
