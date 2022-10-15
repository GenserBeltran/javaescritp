function miFuncion1() {
    console.log("Funcion1");
}

function miFuncion2() {
    console.log("Funcion2");
}

miFuncion1();
miFuncion2();

//Funcion de Tipo Callback

function imprimir(mensaje) {
    console.log(mensaje)
}

function sumar(a, b, funcionCallback) {
    let res = a + b;
    funcionCallback(res);
}

sumar(5, 3, imprimir);

//Función setTimeout en JavaScript - Llamadas Asincronas
function miFuncionCallback() {
    console.log("Saludo asincrono desdeúes de 5s");
}
setTimeout(miFuncionCallback, 5000); //Forma1

setTimeout(function () { console.log("Saludo Asincrono 2") }, 7000); //Forma2

setTimeout(() => console.log("Saludo Asincrono 3"), 9000); //Forma3
