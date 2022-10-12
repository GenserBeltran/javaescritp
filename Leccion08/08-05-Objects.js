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

console.log(persona1.nombreCompleto());

//Método Apply en JavaScript igul al metodo call
console.log(persona1.nombreCompleto.apply(persona2));

//Apply con argumentos
let arreglo = [8, 1];
console.log(persona1.nombreCompleto.apply(persona2, arreglo));

