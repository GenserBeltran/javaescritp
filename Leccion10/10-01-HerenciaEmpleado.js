class Empleado extends Persona {

    static contadorEmpleados;

    constructor(nombre, apellido, edad, idEmpleado, sueldo) {
        super(nombre, apellido, edad);
        this._idEmpleado = ++idEmpleado.contadorEmpleados;
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
        return "Id Empleado: " + this.idEmpleado + " Sueldo: " + this.sueldo;
    }
}