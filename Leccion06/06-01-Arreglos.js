//Sintaxis antigua de declrara un arreglo
let autos = new Array("Bmw", "MerceB", "Audi");
console.log(autos);

//Sintaxis Comtemporanea
const autos1 = ["Bmw", "MerceB", "Audi"];
console.log(autos1);
console.log(autos1[0]);
console.log(autos1[2]);

for (let i = 0; i < autos1.length; i++) {
    console.log("Posicion " + i + ": " + autos1[i]);
}
//Modificar  el arrfglo
autos1[2] = "Lamborgini";
console.log(autos1);

//Agregar nuevos valores a un arreglo PUSH
autos1.push("Mclaren", "Volvo");
console.log(autos1);

//Agregar nuevos valores a un arreglo sin dejar indices Vacios
autos1[autos1.length] = "Cadilac";
console.log(autos1);

//Agregar indices en nuestro arreglo y dejar huecos en los elementos - ES MALA PRACTICA
autos1[7] = "Porshe";
console.log(autos1);

//Como preguntar en Js para saber si es un arrglo
console.log(Array.isArray(autos1));
console.log(autos1 instanceof Array);
