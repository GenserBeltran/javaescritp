class Persona {

    static contadorObjetosPersona = 0;

    static get MAX_OBJ() {
        return 3;
    };//Creación de Constantes Estáticas en JavaScript

    constructor(nombre, apellido) {
        this._nombre = nombre;
        this._apellido = apellido;
        if (Persona.contadorObjetosPersona < Persona.MAX_OBJ) {
            this.idPersona = ++Persona.contadorObjetosPersona;
        } else {
            console.log("Se superaron el limite de objetos permitidos")
        }
    }

    get nombre() {
        return this._nombre;
    }

    set nombre(nombre) {
        return this._nombre = nombre;
    }

    get apeliido() {
        return this._apeliido;
    }

    set apeliido(apeliido) {
        return this._apeliido = apeliido;
    }

    static saludar() {
        console.log("Saludos desde este metodo static");
    }

    static saludar2(persona) {
        console.log(persona.nombre);
    }
    nombreCompleto(a, b) {
        return this.idPersona + " " + this._nombre + " " + this._apellido + " La suma es: " + (a + b);
    }
    toString(a, b) {
        return this.nombreCompleto(a, b) + " Dpto: " + this._departamento;
    }
}

class Empleado extends Persona {

    constructor(nombre, apellido, departamento) {
        super(nombre, apellido); //Llamar al constructor de la clase padre
        this._departamento = departamento;
    }

    get departamento() {
        return this._departamento;
    }

    set departamento(departamento) {
        return this._departamento = departamento;
    }
}

let persona1 = new Persona("Juan", "perez");
console.log(persona1);

let empleado1 = new Empleado("Patrico", "Esponja", "Ventas");
console.log(empleado1);

let persona2 = new Persona("Jorge", "Pelez");
console.log(persona1);

let persona3 = new Persona("Evan", "Craf");
console.log(persona1);


console.log(Persona.MAX_OBJ);

console.log(persona3.toString(3, 2));