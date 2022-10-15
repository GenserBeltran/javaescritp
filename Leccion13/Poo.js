//Sobreescritura en JavaScript
"use strict"

class Empleado {

    constructor(nombre, sueldo) {
        this._nombre = nombre;
        this._sueldo = sueldo;

    }
    obtenerDetalles() {
        return "Empleado nombre: " + this._nombre + " sueldo: " + this._sueldo;
    }
}

class Gerente extends Empleado {
    constructor(nombre, sueldo, departamento) {
        super(nombre, sueldo);
        this._departamento = departamento;
    }

    obtenerDetalles() {
        return "Gerente Nombre: " + this._nombre + "Sueldo: " + this._sueldo + "Departamento: " + this._departamento;

    }
}



// Polimorfismo en JavaScrip Multiples Formas de hacer un proceso
function imprimir(tipo) {
    console.log(tipo.obtenerDetalles());
    if (tipo instanceof Gerente) { //Palabra instanceof en JavaScript lo MEJOR ES COLOCAR LA CLASE DE MENOR JERARQUIA
        console.log("Es un objeto de tipo empleado")
    } else {
        console.log("Es un objeto de tipo Gerente")
    }

}

let empleado1 = new Empleado("Pepo", "Clavelo");
let gerente1 = new Gerente("Pepo", "Clavelo", "Sistemas");

imprimir(empleado1);
imprimir(gerente1);



