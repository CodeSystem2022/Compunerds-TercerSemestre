//DIFERENCIAS ENTRE TIPOS PRIMITIVOS Y OBJETOS

let x=10;//variable de tipo primitiva
console.log(x.length)//undefined=no existen valores asociados porque es de tipo primitivo

//Objeto
let persona={
    nombre: "Carlos",
    apellido:"Suarez",
    edad:35,
    email: "carlossuarez@gmail.com",
}
console.log("Su nombre es: "+persona.nombre,"y su apellido:"+persona.apellido)//accedemos a la porcion en memoria donde se guardan estas propiedades

