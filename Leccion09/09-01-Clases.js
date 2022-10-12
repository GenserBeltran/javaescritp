class Persona {
    constructor(nombre, apellido) {
        this._nombre = nombre;
        this._apellido = apellido;
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

    nombreCompleto(a, b) {
        return this._nombre + " " + this._apellido + " La suma es: " + (a + b);
    }
}

let Persona1 = new Persona("Juan", "perez");
console.log(Persona1);

let Persona2 = new Persona("Ramos", "Joto");
console.log(Persona2);

//Llamado al GET
console.log(Persona1.nombre);
//Modificando con SET
Persona1.nombre = "Juan Carlos";
console.log(Persona1.nombre);


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
    //Sobreescritura del metodo nombreCOmpleto PADRE
    nombreCompleto(a, b) {
        return super.nombreCompleto(a, b) + " - Dpto: " + this._departamento;
    }
    //Sobreescritura del metodo toString PADRE clase OBJECT
    toString(a, b) {
        //Poliformismo (Multiples formas en tiempo de ejecucion DE PADRE o HIJO)
        return this.nombreCompleto(a, b);
    }

}

console.log(Persona1);
let empleado1 = new Empleado("Patrico", "Esponja", "Ventas");
console.log(empleado1);


//Heredar Métodos en JavaScript - agg la linea 23
console.log(empleado1.nombreCompleto(4, 2));


// Sobreescritura en JavaScript
console.log(empleado1.toString(1, 3));
