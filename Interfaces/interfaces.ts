interface Usuario{
    nombreUsuario:string;
    paasword:string;
    confirmarPassword?:string; //EL SIMBOLO DE INTERROGACION SIGNIFICA EL EL ATRIBUTO ES OPCIONAL
}

let usuario1:Usuario = {nombreUsuario: "Juan", paasword: "1234", confirmarPassword:"1234"}

console.log(usuario1);
console.log(usuario1);

interface Abordar{
abordarTransporte():void;
}

let avion:Abordar ={
    abordarTransporte: function(){
        console.log("Abordando");
    }
}

avion.abordarTransporte();