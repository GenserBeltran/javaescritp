let persona = {
    nombre: "Juan",
    apellido: "Perez",
    email: "Jpere@d.com",
    edad: 28,
    nombreCompleto: function (a, b) {
        return this.nombre + " " + this.apellido + " La suma es: " + (a + b);
    }
}

console.log(persona.nombre);
console.log(persona);
console.log(persona.nombreCompleto(4, 7));

//Creación de Objetos en JavaScript - modo antiguo
let persona2 = new Object();
persona2.nombre = "Luis";
persona2.apellido = "Ramirez";
persona2.edad = 12;
console.log(persona2);

// Acceder a las propiedades de los Objetos en JavaScript - modo antiguo
console.log(persona["apellido"]);
//For in
for (nombrePropiedad in persona) {
    console.log(nombrePropiedad);
    console.log(persona[nombrePropiedad]);
}

//Agregar y Eliminar Propiedades de un Objeto
persona.tel = "23135421"; //Agregar
persona.te1 = "41515"; //Ejemplo apra eliminar
delete persona.te1;
console.log(persona);

//Distintas Formas de Imprimir un Object en JavaScript
//Concatenar cada valor de cada propiedad
console.log(persona.nombre + " " + persona.apellido + " ...");
for (nombrePropiedad in persona) {
    console.log(persona[nombrePropiedad]);
}

// otro modo
let personaArray = Object.values(persona);
console.log(personaArray);

let personaString = JSON.stringify(persona);
console.log(personaString);