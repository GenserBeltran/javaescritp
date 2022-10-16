//Función setTimeout, Callback y Promesas en JavaScript

let promesas = new Promise((resolved) => {
    console.log("Inicio Promesa");
    setTimeout(() => resolved("saludos con promesa y timeout"), 3000);
    console.log("Fin Promesa");
});


promesas.then(valor1 => console.log(valor1));
