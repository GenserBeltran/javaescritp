//Tipos de Datos en JS
//String
var nombre = "Daniel";
console.log(nombre);
//numerico
var numero = 1000;
console.log(numero)
//Objeto
var objeccto = {
    nombre: "Juan",
    apellidos: "Perez",
    telefono: "5432134"
}
console.log(typeof objeccto)
//Boolean
var bandera = true;
console.log(typeof bandera);
//Funcion
function miFuncion() { }
console.log(typeof miFuncion)
//Simbolo
var simbolo = Symbol(" Mi sxmbxlx");
console.log(typeof simbolo);
//Clase
class Persona {
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }
}
console.log(typeof Persona)
//Undefine
var x;
console.log(typeof x);
//null
var y = null;
console.log(typeof y);
//array
var autos = ["BMW", "AUDI", "R8"];
console.log(autos);
console.log(typeof autos)
//Empty String
var z = "";
console.log(typeof z);