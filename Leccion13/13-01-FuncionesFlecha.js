let miFuntion = function () {
    console.log("Saludos desde mi funcion");
}

const miFuncionFlecha = () => {
    console.log("Saludos desde mi funcion Flecha");
}

const miFuncionFlecha2 = () => console.log("Saludos desde mi funcion Flecha 2");

const saludar = () => {
    return "Saludos desde mi funcion Flecha 2";
}

const saludar2 = () => "Saludos desde mi funcion Flecha 3";

const regresarObjeto = () => ({
    nombre: "Juan",
    apellido: "Perez"
});

const fnConParamatros = (mensaje) => console.log(mensaje);

const fnConParamatrosClasico = function (mensaje) {
    console.log(mensaje);
}

miFuncionFlecha();
miFuncionFlecha2();
console.log(saludar());
console.log(saludar2());
console.log(regresarObjeto());
fnConParamatros("Fn con Parametros");
fnConParamatrosClasico("Fn Con Parametros Clasico");
