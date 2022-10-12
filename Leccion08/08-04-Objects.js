let persona1 = {
    nombre: "Juan",
    apellido: "Perez",
    email: "Jpere@d.com",
    edad: 28,
    nombreCompleto: function (a, b) {
        return this.nombre + " " + this.apellido + " La suma es: " + (a + b);
    }
}

let persona2 = {
    nombre: "Carlos",
    apellido: "Lara"
}
//Uso de Call en JavaScript Para usar nombreCOmpleto en persona2
console.log(persona1.nombreCompleto(4, 5));

console.log(persona1.nombreCompleto.call(persona2));


//Paso de Argumentos a Call en JavaScript
console.log(persona1.nombreCompleto.call(persona2, 2, 5));

