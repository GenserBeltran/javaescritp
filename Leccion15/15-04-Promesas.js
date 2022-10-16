//Palabra Await y Async con Promesas en JavaScript
async function funcionConPromesaAwait() {
    let miPromesa = new Promise(resolver => {
        resolver("Promesa con Await");
    })
    console.log(await miPromesa)
}

funcionConPromesaAwait();

