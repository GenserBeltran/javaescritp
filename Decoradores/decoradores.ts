function saludar(targer: Function):void{
    targer.prototype.saludos = function():void{
        console.log("Hola desde decoradores")
    }
}


@saludar
class Hola{
    constructor() {
        
    }
}

let hola1 = new Hola();
hola1.saludos();