//Ciclo while
let contador = 0;
while (contador < 3) {
    console.log(contador);
    contador++;
}
console.log("Fin ciclo While");

//Ciclo Do while
let contador1 = 0;
do {
    console.log(contador1);
    contador1++;
} while (contador1 < 3);
console.log("Fin ciclo Do While");

//ciclo For
let valMax = 3;
for (let contador2 = 0; contador2 < valMax; contador2++) {
    console.log(contador2);
}
console.log("Fin ciclo For");

//Palabra break - ciclo For 
let valMaxm = 10;
for (let contador3 = 0; contador3 <= valMaxm; contador3++) {
    if (contador3 % 2 == 0) {
        console.log(contador3);
        console.log("Es un numero Par");
        break;
    }
    else if (contador3 % 2 == 1) {
        //el break realiza que se cumpla la condicion y ya teniendo el resultado finaliza todo el CICLO
        console.log(contador3);
        console.log("Es el primer numero impar");
    } else {
        console.log("No cumplio ninguna condicion");
    }
}
console.log("Fin ciclo For con palabra BREAK");

//Palabra continuo - ciclo For 
let valMax2 = 10;
for (let contador4 = 0; contador4 <= valMax2; contador4++) {
    if (contador4 % 2 !== 0) {
        console.log("Es impar: " + contador4);
        continue;
    } else {
        console.log("Es par: " + contador4);
    }
}
console.log("Fin ciclo For con la palabra continue");

//Etiquetas o labels
inicio:
for (let contador5 = 0; contador5 <= 10; contador5++) {
    if (contador5 % 2 !== 0) {
        console.log("Es impar: " + contador5);
        continue inicio;//Ir a la siguiente iteracion
    } else {
        console.log("Es par: " + contador5);
    }
}
console.log("Fin ciclo For utilizando etiquetas js");
