//Palabra Async con Promesas en JavaScript Facilita el uso de promesas - Regresa Una promesa
async function miFuncionConPromesa() {
    return "Saludos con promesa y async";
}

miFuncionConPromesa().then(valor => console.log(valor));