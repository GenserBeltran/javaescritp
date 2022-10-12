//Método Constructor Objetos en JavaScript
function persona(nombre, apellido, email) {
    this.apellido = nombre;
    this.nombre = apellido;
    this.email = email;
    this.nombreCompleto = function (a, b) {
        return this.nombre + " " + this.apellido + " La suma es: " + (a + b);
    }



}

let padre = new persona("Juan", "Perez", "jpe@ga.com");
console.log(padre);

let madre = new persona("Maria", "jota", "mare@ga.com");
console.log(madre);

padre.nombre = "Patricio";
console.log(padre);

// Agregar Métodos a un Método Constructor de Objetos
//agreggo la linea 6
console.log(padre.nombreCompleto(4, 5));
console.log(madre.nombreCompleto(4, 5));

//Distintas Formas de Crear Objetos en JavaScript

let miObjecto = new Object(); //Forma Ambigua     
let miObjecto2 = {}; //Forma Nueva

let miCadena1 = new String("Hola");//Forma Ambigua  
let miCadena2 = "Hola";//Forma Nueva

let miNuemero1 = new Number(1);//Forma Ambigua  
let miNuemero2 = 1;//Forma Nueva

let miBooleam1 = new Boolean(false);//Forma Ambigua  
let miBooleam2 = false;//Forma Nueva

let miArreglo1 = new Array();//Forma Ambigua  
let miArreglo2 = [];//Forma Nueva

let miFuntion1 = new Function();//Forma Ambigua  
let miFuntion2 = function () { };//Forma Nueva

//Uso de Prototype en JavaScript
persona.prototype.tel = "4255144";

console.log(padre.tel);
console.log(madre.tel);

madre.tel = "745656";
console.log(madre.tel);
