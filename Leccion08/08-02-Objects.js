//Método get en Objetos de JavaScript
let persona = {
    nombre: "Juan",
    apellido: "Perez",
    email: "Jpere@d.com",
    edad: 28,
    nombreCompleto: function (a, b) {
        return this.nombre + " " + this.apellido + " La suma es: " + (a + b);
    },
    //Opcion con el get - DESVENTAJA no se como parsarle parametros a la fn
    get nombreCompleto2() {
        return this.nombre + " " + this.apellido;
    },
    idioma: "Es_MX",
    set lang(lang) {
        this.idioma = lang.toLowerCase();
    },
    get lang() { //Este metodo convertira el atributo idioma en MAYUSCULA o MINUSCULA
        return this.idioma.toUpperCase();
    }
}

console.log(persona.nombre);
console.log(persona);
console.log(persona.nombreCompleto(4, 7));
console.log(persona.nombreCompleto2);
console.log(persona.lang);

persona.lang = "En_Uk";
console.log(persona.lang);
console.log(persona.idioma);


