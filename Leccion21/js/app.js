// Datos Duros de la app
const ingresos = [
    new Ingreso("Salario", 2500),
    new Ingreso("Pago Inter", 200),
    new Ingreso("Barbachas", 500)

];

const egresos = [
    new Egreso('Renta departamento', 650),
    new Egreso('Recibos', 150),
    new Egreso('Comida', 250)

];

//Arreglos para definir ingresos y egresos 
let cargarApp = () => {
    cargarCabecero();
    cargarIngresos();
    cargarEgresos();
}
let totalIngresos = () => {
    let totalIngreso = 0;
    for (let ingreso of ingresos) {
        totalIngreso += ingreso.valor;
    }
    return totalIngreso;
}
let totalEgresos = () => {
    let totalEgreso = 0;
    for (let egreso of egresos) {
        totalEgreso += egreso.valor;
    }
    return totalEgreso;
}

let cargarCabecero = () => {
    let presupuesto = totalIngresos() - totalEgresos();
    let porcentajeEgreso = totalEgresos() / totalIngresos();
    document.getElementById('presupuesto').innerHTML = formatoMoneda(presupuesto);
    document.getElementById('porcentaje').innerHTML = formatoPorcentaje(porcentajeEgreso);
    document.getElementById('ingresos').innerHTML = formatoMoneda(totalIngresos());
    document.getElementById('egresos').innerHTML = formatoMoneda(totalEgresos());

}

let formatoMoneda = (valor) => {
    return valor.toLocaleString('en-ES', { style: 'currency', currency: 'EUR', minimumFractionDigits: 2 });
}

let formatoPorcentaje = (valor) => {
    return valor.toLocaleString('en-ES', { style: 'percent', minimumFractionDigits: 1 });
}

const cargarIngresos = () => {
    let ingresosHtml = "";
    for (let ingreso of ingresos) {
        ingresosHtml += crearIngresosHTML(ingreso);
    }
    document.getElementById("lista-ingresos").innerHTML = ingresosHtml;
}

const crearIngresosHTML = (ingreso) => {
    let ingresosHtml = `
        <div class="elemento limpiarEstilos">
            <div class="elemento_descripcion">${ingreso.descripcion}</div>
            <div class="derecha limpiarEstilos">
                <div class="elemento_valor">${formatoMoneda(ingreso.valor)}</div>
                <div class="elemento_eliminar">
                    <button class="elemento_eliminar--btn">
                        <ion-icon name="close-circle-outline"
                        onclick="eliminarIngreso(${ingreso.id})"></ion-icon>
                    </button>
                </div>
            </div>
        </div>`;
    return ingresosHtml;
}

const eliminarIngreso = (id) => {
    let indiceEliminar = ingresos.findIndex(ingreso => ingreso.id === id);
    ingresos.splice(indiceEliminar, 1);
    cargarCabecero();
    cargarIngresos();
}

const cargarEgresos = () => {
    let egresosHtml = "";
    for (let egreso of egresos) {
        egresosHtml += crearEgresosHTML(egreso);
    }
    document.getElementById("lista-egresos").innerHTML = egresosHtml;
}

const crearEgresosHTML = (egreso) => {
    let egresoHtml = `
    <div class="elemento limpiarEstilos">
    <div class="elemento_descripcion">${egreso.descripcion}</div>
    <div class="derecha limpiarEstilos">
        <div class="elemento_valor">${formatoMoneda(egreso.valor)}</div>
        <div class="elemento_porcentaje">${formatoPorcentaje(egreso.valor / totalEgresos())}</div>
        <button class="elemento_eliminar--btn">
            <ion-icon name="close-circle-outline"
            onclick="eliminarEgreso(${egreso.id})"></ion-icon>
        </button>
    </div>
</div>`;
    return egresoHtml;
}

const eliminarEgreso = (id) => {
    let indiceEliminar = egresos.findIndex(egreso => egreso.id === id);
    egresos.splice(indiceEliminar, 1);
    cargarCabecero();
    cargarEgresos();
}

let agregarDato = () => {
    let forma = document.forms["forma"];
    let tipo = forma["tipo"];
    let descripcion = forma["descripcion"];
    let valor = forma["valor"];
    if (descripcion.value !== "" && valor.value !== "") {
        if (tipo.value === "ingreso") {
            ingresos.push(new Ingreso(descripcion.value, +(valor.value)));//el mas omite el formato numbre osea que en automatico detecta que Number es +
            cargarCabecero();
            cargarIngresos();
        } else if (tipo.value === "egreso") {
            egresos.push(new Egreso(descripcion.value, +(valor.value)));
            cargarCabecero();
            cargarEgresos();
        }

    }



}

