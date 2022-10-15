//Cláusula throws en JavaScript

"use strict"

//Ejemplo 1

let resultado = "Hola Mundo";

try {
    if (isNaN(resultado)) throw "No es un numero";
}
catch (errorA) {
    console.log(errorA);
    console.log(errorA.name);
    console.log(errorA.message);
}

//Ejemplo 2

let resultado1 = "";

try {
    if (isNaN(resultado1)) throw "No es un numero";
    else if (resultado1 === "") throw "Es una cadena";
    else if (resultado1 >= 0) throw "Valor Positivo";
    else if (resultado1 < 0) throw "Valor Negativo";

}
catch (errorB) {
    console.log(errorB);
}
finally {
    console.log("Termina revision de errores");
}