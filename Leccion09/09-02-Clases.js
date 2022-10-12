import { Persona } from Persona;

class Empleado extends Persona {
    constructor(nombre, apellido, departamento) {
        super(nombre, apellido);
        this._departamento = departamento;
    }

    get departamento() {
        return this._departamento;
    }

    set departamento(departamento) {
        return this._departamento = departamento;
    }
}

let Persona3 = new Persona("Juan", "perez");
console.log(Persona3);
