//funcion normal
let suma = function (a:number, b:number){
    return a + b;
}

console.log(suma(7,6));

//Funcion Flecha ts
let sumaFlecha = (a:number, b:number) => {
    return a + b;
}

console.log(sumaFlecha(9,6));

//funcion simple
var obtenerNombre = function(){
    return "Juan Perez";
}
//funcion flecha para funcion simple
let obtenerNombreFlecha = () => "Jta Perez";

console.log(obtenerNombre());
console.log(obtenerNombreFlecha());
