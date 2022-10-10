//Concepto de hosting
miFuntion1(1, 2);

//Declaracion de la Funcion
function miFuntion1(a, b) {
    console.log("Suma: " + (a + b));
}
//Llamando de la Funcion
miFuntion1(2, 4);

//Uso de la palabra return
function miFuntion2(c, d) {
    return c + d;
}

let resultado = miFuntion2(1, 7);
console.log(resultado);

//Funciones de Tipo Expresión en JavaScript
let x = function (a, b) { return a + b };
let resultado1 = x(1, 2);
console.log(resultado1);

//Funciones de tipo Self Invoking en JavaScript
(function () {
    console.log("Ejecutando la Funcion");
})();

(function (a, b) {
    console.log(("Ejecutando la Funcion y suma: ") + (a + b));
})(7, 8);

//Funciones como Objetos en JavaScript
function miFuntion3(a, b) {
    console.log(arguments);//Saber los argumentos de una funcion
    console.log(arguments.length);//Saber la cantidad de argumentos de una funcion
    console.log("Suma: " + (a + b));
}
miFuntion3(1, 4);

var miFuntionTexto = miFuntion3.toString();
console.log(miFuntionTexto);

//Funciones Flecha en JavaScript (No aplica  el concepto de hosntin)
const sumarFuncionTipoFlecha = (a, b) => a + b;
let resultado2 = sumarFuncionTipoFlecha(4, 5);
console.log(resultado2);

//Parámetros y Argumentos en Funciones de JavaScript
let sumar = function (a, b) {
    console.log(arguments[0]);  //Conozco el valor del argumento a
    console.log(arguments[1]); //Conozco el valor del argumento b
    return a + b
};
let resultado3 = sumar(6, 1);
console.log(resultado3);
//Agregando los argumentos directamente en la funcion
let sumar1 = function (a = 5, b = 2) {
    console.log(arguments[0]);  //Conozco el valor del argumento a
    console.log(arguments[1]); //Conozco el valor del argumento b
    return a + b
};
let resultado4 = sumar1();
console.log(resultado4);