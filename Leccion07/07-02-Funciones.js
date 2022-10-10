let resultado = sumarTodo(5, 7, 5, 8, 11, 1);
console.log(resultado);

function sumarTodo() {
    let suma = 0;
    for (let i = 0; i < arguments.length; i++) {
        suma += arguments[i];
    }
    return suma
}