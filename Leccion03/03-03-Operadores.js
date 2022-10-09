//Ejercicio numero impar 
// divisible entr dos e impar qeu no es divisible entre dos o el resutado de la division es 0
let a = 10;

let z = a % 2;
console.log(z);

if (a % 2 == 0) {
    console.log("Es un numero par");
} else {
    console.log("Es un numero impar");
}

let edad = 10, adulto = 18, c = 8, d = 9;

if (edad >= adulto) {
    console.log("Es un adulto");
} else {
    console.log("No es un adulto")
}
if (c && d != 0) {
    console.log("son numeros naturales");
} else {
    console.log("No son numeros naturales");
}
if (a >= c && a <= d) {
    console.log("Esta en el rango de edades");
} else {
    console.log("No esta en el rango de edades");

}
let vacaciones = false, diaDescanso = true;
if (vacaciones == true || diaDescanso == true) {
    console.log("El padre puede asistir al juego")
} else {
    console.log("El padre NO puede asistir al juego")
}

let resulta = (3 > 2) ? "Verdadero" : "Falso";
console.log(resulta);

let valor = 10;
resulta = (valor % 2 == 0) ? "Numero par" : "Numero impar";
console.log(resulta);

let edadVotantate = "20";
resulta = (edadVotantate > 18) ? "Puede votar" : "No puede votar"; //Como vemos no realiza la operacion por que el numero de entrada es un string y se esta comparando contrra un entero se debe hacer la conversion
console.log(resulta);

if (isNaN(edadVotantate)) {
    console.log("No es un numero");
} else {
    let edadVotantateEntero = Number(edadVotantate);
    resulta = (edadVotantateEntero >= 18) ? "Puede votar" : "No puede votar";
    console.log(resulta);
}



