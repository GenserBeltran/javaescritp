//Concepto de promesa

let miPromesa = new Promise((resolved, rejected) => { //aplicando callback
    let expresio = false;
    if (expresio) {
        resolved("Caso resuelto");
    } else {
        rejected("Caso no resuelto")
    }

});

miPromesa.then(valor => console.log(valor), error => console.log(error)); //Forma1 de ejecutar
miPromesa.then(valor => console.log(valor).catch(error => console.log(error))); //Forma2 de ejecutar

