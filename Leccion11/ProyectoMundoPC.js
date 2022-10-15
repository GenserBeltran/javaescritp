class DispositivoEntrada {
    constructor(tipoEntrada, marca) {
        this._tipoEntrada = tipoEntrada;
        this._marca = marca;
    }

    get tipoEntrada() {
        return this._tipoEntrada;
    }
    set tipoEntrada(tipoEntrada) {
        this._tipoEntrada = tipoEntrada;
    }
    get marca() {
        return this._marca;
    }
    set marca(marca) {
        this._marca = marca;
    }
    toString() {
        return `Tipo entrada -  ${this.tipoEntrada} - Marca -  ${this.marca}`;
    }
}

// let dispositivoEntrada1 = new DispositivoEntrada("Usb", "Hp");
// console.log(dispositivoEntrada1.toString());

class Raton extends DispositivoEntrada {
    static contadorRatones = 0;
    constructor(tipoEntrada, marca) {
        super(tipoEntrada, marca);
        this._idRaton = ++Raton.contadorRatones;
    }
    get idRaton() {
        return this._idRaton;
    }
    toString() {
        return `${super.toString()} - id Raton - ${this.idRaton}`;
    }
}

// let raton1 = new Raton("usb", "dell");
// console.log(raton1.toString());

class Teclado extends DispositivoEntrada {

    static contadorTeclados = 0;

    constructor(tipoEntrada, marca) {
        super(tipoEntrada, marca);
        this._idTeclado = ++Teclado.contadorTeclados;
    }
    get idTeclado() {
        return this._idTeclado;
    }
    toString() {
        return `${super.toString()} - id Teclado -  ${this.idTeclado}`;
    }
}

// let teclado1 = new Teclado("usb", "asus");
// console.log(teclado1.toString());

class Monitor {
    static contadorMonitor = 0;
    constructor(marca, tamaño) {
        this._idMonitor = ++Monitor.contadorMonitor;
        this._marca = marca;
        this._tamaño = tamaño;
    }
    get idMonitor() {
        return this._idMonitor;
    }
    get marca() {
        return this._marca;
    }
    set marca(marca) {
        this._marca = marca;
    }
    get tamaño() {
        return this._tamaño;
    }
    set tamaño(tamaño) {
        this._tamaño = tamaño;
    }

    toString() {
        return `Id Monitor - ${this.idMonitor} - marca -  ${this.marca} - tamaño - ${this.tamaño}`;
    }
}

// let monitor1 = new Monitor("rocks", "14''");
// console.log(monitor1.toString());

class Computadora {
    static contadorComputadora = 0;

    constructor(nombre, monitor, teclado, raton) {
        this._idComputadora = ++Computadora.contadorComputadora;
        this._nombre = nombre;
        this._monitor = monitor;
        this._teclado = teclado;
        this._raton = raton;

    }
    get idComputadora() {
        return this._idComputadora;
    }
    get nombre() {
        return this._nombre;
    }
    set nombre(nombre) {
        this._nombre = nombre;
    }
    get monitor() {
        return this._monitor;
    }
    set monitor(monitor) {
        this._monitor = monitor;
    }
    get teclado() {
        return this._teclado;
    }
    set teclado(teclado) {
        this._teclado = teclado;
    }
    get raton() {
        return this._raton;
    }
    set raton(raton) {
        this._raton = raton;
    }
    toString() {
        return "Id Computadora: " + this.idComputadora + " Nombre: " + this.nombre + "\n Monitor: " + this.monitor + "\n Teclado: " + this.teclado + "\n Raton: " + this.raton;
    }
}

class Orden {
    static contadorOrdenes = 0;

    constructor() {
        this._idOrden = ++Orden.contadorOrdenes;
        this._computadoras = [];
    }
    get idOrden() {
        return this._idOrden;
    }
    agregarComputadora(computadoras) {
        this._computadoras.push(computadoras);
    }
    mostrarOrden() {
        let computadorasOrden = " ";
        for (let computadora of this._computadoras) {
            computadorasOrden += "\n" + computadora.toString() + " ";
        }
        console.log("Orden: " + this._idOrden + " Computadoras: " + computadorasOrden);

    }
}

let monitor1 = new Monitor("rocks", "14''");
let teclado1 = new Teclado("usb", "asus");
let raton1 = new Raton("usb", "dell");

let monitor2 = new Monitor("benq", '24"');
let teclado2 = new Teclado("usb", "hp");
let raton2 = new Raton("usb", "logitech");


let computadora1 = new Computadora("Combo CompQ", monitor1, teclado1, raton1);
let computadora2 = new Computadora("Combo Gamer", monitor2, teclado2, raton2);

// console.log(computadora1.toString());
// console.log(computadora2.toString());

let orden2 = new Orden();
orden2.agregarComputadora(computadora1);
orden2.agregarComputadora(computadora2);
orden2.mostrarOrden();

let orden1 = new Orden();
orden1.agregarComputadora(computadora1);
orden1.agregarComputadora(computadora2);
orden1.mostrarOrden();