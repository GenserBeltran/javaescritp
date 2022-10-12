class Persona {

    static contadorObjetosPersona = 0; //atributo de nuestra clase

    email = "Valor Default";//atributo de nuestros objetos
    constructor(nombre, apellido) {
        this._nombre = nombre;
        this._apellido = apellido;
        Persona.contadorObjetosPersona++;
        console.log("Se incrementa contador: " + Persona.contadorObjetosPersona);

    }

    get nombre() {
        return this._nombre;
    }

    set nombre(nombre) {
        return this._nombre = nombre;
    }

    get apeliido() {
        return this._apeliido;
    }

    set apeliido(apeliido) {
        return this._apeliido = apeliido;
    }

    static saludar() {
        console.log("Saludos desde este metodo static");
    }

    static saludar2(persona) {
        console.log(persona.nombre);
    }
    nombreCompleto(a, b) {
        return this._nombre + " " + this._apellido + " La suma es: " + (a + b);
    }
}

class Empleado extends Persona {

    constructor(nombre, apellido, departamento) {
        super(nombre, apellido); //Llamar al constructor de la clase padre
        this._departamento = departamento;
    }

    get departamento() {
        return this._departamento;
    }

    set departamento(departamento) {
        return this._departamento = departamento;
    }
}

let persona1 = new Persona("Juan", "perez");
console.log(persona1);

let empleado1 = new Empleado("Patrico", "Esponja", "Ventas");
console.log(empleado1);

Persona.saludar();//Correcto llamado
Persona.saludar2(persona1)
Empleado.saludar();
Empleado.saludar2(empleado1);
console.log(persona1.contadorObjetosPersona);
console.log(Persona.contadorObjetosPersona);
console.log(persona1.email);
console.log(Persona.email);
persona1.saludar(); //No es posible hacer el llamado al estatic con un metodo


