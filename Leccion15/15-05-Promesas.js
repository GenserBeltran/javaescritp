//Promesas con Async, Await y setTimeout en JavaScript

async function funcionConPromesaAwaitTimeouy() {
    console.log("Inicio de funcion");
    let miPromesa = new Promise(resolver => {
        setTimeout(() => resolver("Promesa con await y timeout"), 4000);
    });
    console.log(await miPromesa);
    console.log("Fin de funcion");
}

funcionConPromesaAwaitTimeouy();
