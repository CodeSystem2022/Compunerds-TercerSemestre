//DIFERENCIAS ENTRE TIPOS PRIMITIVOS Y OBJETOS

let x = 10; //variable de tipo primitiva
console.log(x.length); //undefined=no existen valores asociados porque es de tipo primitivo

//Objeto
let persona = {
  nombre: "Carlos",
  apellido: "Suarez",
  edad: 35,
  idioma: "ES",
  email: "carlossuarez@gmail.com",
  nombreCompleto: function () {
    //metodo o funcion en js
    return "Su nombre es: " + this.nombre + " y su apellido:" + this.apellido;
  },
  get nombreEdad() {
    //este es el metodo get
    return "El nombre es: " + this.nombre + " edad:" + this.edad;
  },
  get lang() {
    //obtenemos el valor del idioma
    return this.idioma.toUpperCase();
  },
  set lang(valor) {
    //modificamos el valor de el idioma
    this.idioma = valor.toUpperCase();
  },
};
console.log(
  "Su nombre es: " + persona.nombre,
  "y su apellido:" + persona.apellido
); //accedemos a la porcion en memoria donde se guardan estas propiedades
console.log(persona.nombreCompleto());
console.log(persona.nombreEdad);

let persona2 = new Object(); //Debe crear un nuevo objeto en memoria
persona2.nombre = "Juan";
persona2.direccion = "Salada 14";
persona2.telefono = 2920341575;
console.log(persona2);

console.log(persona["apellido"]); //Accedemos como si fuera un arreglo

//for in
for (propiedad in persona) {
  console.log(propiedad);
  console.log(persona[propiedad]);
}
persona.apellido = "Betancud"; //Cambiamos dinamicamente un valor del objeto

persona.apellida = "Betancud"; //si cometemos el error de asignar una nueva propiedad en lugar de modificar un valor, podemos eliminarlo
delete persona.apellida; //eliminamos el error
console.log(persona);

//Distintas formas de imprimir un objeto
//Numero 1: las mas sencilla: concatenar cada valor de cada propiedad
console.log(persona.nombre + ", " + persona.apellido);

//Numero 2:a traves del ciclo for in
for (nombrePropiedad in persona) {
  console.log(persona[nombrePropiedad]);
}

//Numero 3: la funcion Object.values()
let personaArray = Object.values(persona);
console.log(personaArray);

//Numero 4: Utilizaremos el metodo JSON.stringify()
let personaString = JSON.stringify(persona);

console.log("Comenzamos con el metodo get para idiomas");
console.log(persona.lang);
persona.lang = "en";
console.log(persona.lang);

function Persona3(nombre, apellido, email) {
  //constructor
  this.nombre = nombre;
  this.apellido = apellido;
  this.email = email;
  this.nombreCompleto = function () {
    return "Su nombre completo es " + this.nombre + " " + this.apellido;
  };
}
let padre = new Persona3("Leo", "Lopez", "leoL@gmail.com");
padre.nombre = "Luis"; //modificamos los datos de la variable nombre
padre.telefono = "2920456798";
console.log(padre);
let madre = new Persona3("Carolina", "Desar", "desar@gmail.com");
console.log(madre);
console.log(madre.nombreCompleto());
let hijo = new Persona3("Alaska", "Bras", "bras@gmail.com");
console.log(hijo);

//Diferentes formas de crear un OBJETOS
//caso objeto 1
let miObjeto = new Object(); ///Esta es una opcion formal
//caso objeto 2
let miObjeto2 = {}; //Esta opcion es breve y recomendada

//caso STRING
//caso string 1
let miCadena1 = new String("Hola"); //Sintaxis formal
//caso string 2
let miCadena2 = "Hola"; //Sintaxis simplificada y recomendada

//caso con NUMEROS
//caso con numeros 1
let miNumero1 = new Number(10); //Sintaxis formal
//caso con numeros 2
let miNumero2 = 10; //Sintaxis simplificada y recomendada

//caso con BOOLEANOS
//caso boolean 1
let miBoolean1 = new Boolean(true); //Sintaxis formal
//caso boolean 2
let miBoolean2 = true; //Sintaxis simplificada y recomendada

//caso ARRAYS
//caso array 1
let miArreglo = new Array(10); //Sintaxis formal
//caso array 2
let miArreglo2 = [10]; //Sintaxis simplificada y recomendada

//caso FUNCIONES
//caso function 1
let miFuncion1 = new (function () {
  console.log("Hola soy la funcion 1");
})();
//caso function 2
let miFuncion2 = function () {
  console.log("Hola soy la funcion 2");
};
miFuncion2();

//Uso de prototype
Persona3.prototype.telefono = "9202056347";
console.log(padre.telefono, madre.telefono, hijo.telefono); //como muestra la terminal asignamos una nueva propiedad con un valor asignado por default
madre.telefono = "920205669"; //modificamos el valor anteriormente asignado
console.log(madre.telefono);

//Uso de call
let persona4 = {
  nombre: "Carlos",
  apellido: "Suarez",
  nombreCompleto2: function (titulo, telefono) {
    return titulo + ": " + this.nombre + " " + this.apellido + " " + telefono;
  }
};

let persona5 = {
  nombre: "Dario",
  apellido: "Gomez",
};

console.log(persona4.nombreCompleto2("Lic.", "2920341575"));
console.log(persona4.nombreCompleto2.call(persona5, "Doc.", "2920348566"));


//metodo Apply
let arreglo=["Ing.",25647998]
console.log(persona4.nombreCompleto2.apply(persona5,arreglo));