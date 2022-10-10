// Paso por Referencia en Funciones de JavaScript
const persona = {
    nombre: "Particia",
    apellido: "Perez"
}

function cambiarValorObjeto(p1) {
    p1.nombre = "Calosis";
    p1.apellido = "Mcl";
}

//Paso por referencia
cambiarValorObjeto(persona);
console.log(persona);

//Paso por Valor en Funciones de JavaScript
let x = 10;

function cambiarValor(a) {
    a = 20;
}
//Paso por valor x y a nunca tiene alguna relacion solo x le pasa la variable a a
cambiarValor(x);
console.log(x);
console.log(a);