class Orden {
    static contadorOrdenes = 0;
    static get MAX_PRODUCTOS() {
        return 5;
    }
    Producto

    constructor() {
        this._idOrden = ++Orden.contadorOrdens;
        this._productos = [];
        this._contadorProductosAgregados = 0;

    }

    get idOrden() {
        return this._idOrden;
    }

    agregarProducto(producto) {
        if (this._productos.lenght < Orden.MAX_PRODUCTOS) {
            this._productos.push(producto);
            //this._productos[this._contadorProductosAgregados++] = producto //Sintasis valida  para agregar productos
        } else {
            console.log("No se pueden agregar mas productos");
        }
    }

    calularTotal() {
        let totalVenta = 0;
        for (let producto of this._productos) {
            totalVenta += producto.precio; // = totalVenta = totalVenta + producto.precio;
        }
        return totalVenta;
    }

    mostrarOrden() {
        let productoOrden = " ";
        for (let producto of this._productos) {
            productoOrden += producto.toString() + " ";
        }
        console.log("Orden: " + this._idOrden + " total: " + this.calularTotal() + " Productos: " + this.productoOrden);
    }
}