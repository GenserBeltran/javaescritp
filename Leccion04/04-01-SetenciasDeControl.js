let condition = true;

if (condition) {
    console.log("Condicion Verdadera");
} else {
    console.log("Condicion Flasa")
}
//Asignar un numero y convertirlo a texto
//del 1 al 4 con 4 opciones de respuesta
let numero = "Holas";
if (numero == 56) {
    console.log("El numero es cincuenta y seis")
} else if (numero < 0) {
    console.log("Numero negativo");
} else {
    console.log("Ingrese un numero")
}
//Ejemplo mes del año
let ingreMes = "agosto";

if (ingreMes == "enero" || ingreMes == "febrero" || ingreMes == "marzo") {
    console.log("Estacion es primavera");
} else if (ingreMes == "abril" || ingreMes == "mayo" || ingreMes == "junio") {
    console.log("Estacion es Verano");
} else if (ingreMes == "julio" || ingreMes == "agosto" || ingreMes == "septiemvre") {
    console.log("Estacion es Otoño");
} else if (ingreMes == "octubre" || ingreMes == "noviembre" || ingreMes == "diciembre") {
    console.log("Estacion es Invierno");
} else {
    console.log("Ingrese un mes correcto");
}

//Horario del dia
let ingreHora = 0;
let mensaje;
if (ingreHora >= 6 && ingreHora <= 11) {
    mensaje = "Muy buenos dias son las " + ingreHora + "am.";
} else if (ingreHora >= 12 && ingreHora <= 18) {
    mensaje = "Muy buenos tardes son las " + ingreHora + "pm.";
} else if (ingreHora >= 19 && ingreHora <= 24) {
    mensaje = "Muy buenos noches son las " + ingreHora + "pm.";
} else if (ingreHora >= 0 && ingreHora <= 6) {
    mensaje = "Muy buenos dias son las " + ingreHora + "am.";
} else {
    mensaje = "Ingrese un valor valido";
}
console.log(mensaje);

//Caso SWITCH
let numero2 = 15;
let numeroTexto;
switch (numero2) {
    case 1:
        numeroTexto = "Es 1";
        break;
    case 2:
        numeroTexto = "Es 2";
        break;
    case 15:
        numeroTexto = "Es 15";
        break;
    default:
        numeroTexto = "Ingrese un valor correcto";

}
console.log(numeroTexto);

let mesNumerico = "11";
let estacionMes;
switch (mesNumerico) {
    case 1: case 2: case 12:
        estacionMes = "Invierno";
        break;
    case 3: case 4: case 5:
        estacionMes = "Primavera";
        break;
    case 6: case 7: case 8:
        estacionMes = "Verano";
        break;
    case 9: case 10: case 11:
        estacionMes = "Otoño";
        break;
    default:
        estacionMes = "Ingrese un valor correcto";

}
console.log(estacionMes);
