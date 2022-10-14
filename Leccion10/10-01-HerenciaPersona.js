class Persona {

    static contadorPersonas = 0;

    constructor(nombre, apellido, edad) {
        this._idPersona = ++idPersona.contadorPersonas;
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
