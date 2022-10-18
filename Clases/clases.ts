class Persona{
    private _nombre:string;

    constructor(nombre: string){
        this._nombre = nombre;
    }
    //SI quiero utilizar un atributo provvado en otra clase declaro su get y set
    // public get nombre() {
    //     return this._nombre;
    // }
    // public set nombre(nombre) {
    //     this._nombre = nombre;
    // }

    getNombre():string{
        return this._nombre;
    }

    static metodoStatico():number{
return 10;
    }
}

let persona1 = new Persona("Juan");

console.log(persona1.getNombre());
console.log(Persona.metodoStatico());