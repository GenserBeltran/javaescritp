"use strict";
class Persona {
    constructor(nombre) {
        this._nombre = nombre;
    }
    //SI quiero utilizar un atributo provvado en otra clase declaro su get y set
    // public get nombre() {
    //     return this._nombre;
    // }
    // public set nombre(nombre) {
    //     this._nombre = nombre;
    // }
    getNombre() {
        return this._nombre;
    }
    static metodoStatico() {
        return 10;
    }
}
let persona1 = new Persona("Juan");
console.log(persona1.getNombre());
console.log(Persona.metodoStatico());
