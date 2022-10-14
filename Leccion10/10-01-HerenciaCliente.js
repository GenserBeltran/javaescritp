class Cliente extends Persona {

    static contadorClientes = 0;

    constructor(nombre, apellido, edad, idCliente, fechaRegistro) {
        super(nombre, apellido, edad);
        this._idCliente = ++idCliente.contadorClientes;
        this._fechaRegistro = fechaRegistro;
    }
    get fechaRegistro() {
        return this._fechaRegistro;
    }
    set fechaRegistro(fechaRegistro) {
        return this._fechaRegistro = fechaRegistro;
    }
    toString() {
        return "Id Cliente: " + this._idCliente + " Fecha Registro: " + this.fechaRegistro;
    }


}