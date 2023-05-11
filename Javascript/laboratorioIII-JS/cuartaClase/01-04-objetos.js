//DIFERENCIAS ENTRE TIPOS PRIMITIVOS Y OBJETOS

let x=10;//variable de tipo primitiva
console.log(x.length)//undefined=no existen valores asociados porque es de tipo primitivo

//Objeto
let persona={
    nombre: "Carlos",
    apellido:"Suarez",
    edad:35,
    email: "carlossuarez@gmail.com",
    nombreCompleto: function(){//metodo o funcion en js
        return "Su nombre es: "+this.nombre+" y su apellido:"+this.apellido;
    }
}
console.log("Su nombre es: "+persona.nombre,"y su apellido:"+persona.apellido)//accedemos a la porcion en memoria donde se guardan estas propiedades
console.log(persona.nombreCompleto())

let persona2= new Object();//Debe crear un nuevo objeto en memoria
persona2.nombre="Juan";
persona2.direccion="Salada 14";
persona2.telefono=2920341575
console.log(persona2)

console.log(persona["apellido"])//Accedemos como si fuera un arreglo

//for in
for(propiedad in persona){
    console.log(propiedad);
    console.log(persona[propiedad])
}
persona.apellido="Betancud";//Cambiamos dinamicamente un valor del objeto

persona.apellida="Betancud"; //si cometemos el error de asignar una nueva propiedad en lugar de modificar un valor, podemos eliminarlo
delete persona.apellida; //eliminamos el error
console.log(persona)