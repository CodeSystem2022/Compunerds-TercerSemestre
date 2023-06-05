//Se realizo la modificacion de las extensiones de los archivos ClasePadre y ClaseEmpleado (de js a mjs), para que fueran tomados como modulos y poder realizar importaciones y exportaciones de clases. Y asi poder modularizar ambas clases

class Persona {
  //clase padre

  //8.2 Atributos estáticos
  //static contadorObjetosPersona = 0;
  //8.4 Uso de la palabra static:
  static contadorPersonas = 0;
  //8.3 Atributos estáticos vs No estáticos
  //email="Valor default email";

  //8.5 Creación de constantes estáticas
  static get MAX_OBJ() {
    //este metodo simula una constante
    return 3;
  }

  constructor(nombre, apellido) {
    this._nombre = nombre;
    this._apellido = apellido;
    if(Persona.contadorPersonas < Persona.MAX_OBJ){
      this.idPersona = ++Persona.contadorPersonas;
    }
    else{
      console.log("Se ha superado el maximo de objetos permitidos")
    }
    //Persona.contadorObjetosPersona++;
    //console.log("Se incrementa el contador; "+ Persona.contadorObjetosPersona);
  }
  get nombre() {
    return this._nombre;
  }
  set nombre(nombre) {
    this._nombre = nombre;
  }
  get apellido() {
    return this._apellido;
  }
  set apellido(apellido) {
    this._apellido = apellido;
  }
  // 7.1 Heredar métodos - Alumno: Kevin Sosa
  nombreCompleto() {
    return this.idPersona + " " + this._nombre + " " + this._apellido;
  }

  //7.3 Clase Object, toString,sobreescritura y Polimorfismo

  //sobreescribiendo el metodo de la clase padre Object
  toString() {
    //regresa un string
    //se aplica el polimorfismo que significa = multiples formas en tiempo de ejecuciòn.
    //el metodo que se ejecuta depende si es una referencia de tipo padre o hija
    return this.nombreCompleto();
  }
  //8.1 Palabra static con metodos

  static saludar() {
    console.log("Saludos desde el metodo static");
  }

  static saludar2(persona) {
    console.log(persona.nombre + " " + persona.apellido);
  }
}

let persona1 = new Persona("Martin", "Perez");
console.log(persona1.nombre);
console.log(persona1.apellido);
persona1.nombre = "Juan";
persona1.apellido = "Mar";
console.log(persona1.nombre);
console.log(persona1.apellido);

//Object.prototype.toString esta es la manera de acceder a atributos y metodos de manera dinamica
console.log(persona1.toString()); //se trabaja con el metodo de la clase padre.

//llamamos metodo saludar
//persona1.saludar();//da error ya que debe usarse desde la misma clase y no desde el objeto, ya que es static
Persona.saludar(); // se ejecuta correctamente
Persona.saludar2(persona1);

//console.log(persona1.contadorObjetosPersona); undefined
//console.log(Persona.contadorObjetosPersona);
//console.log(Empleado.contadorObjetosPersona);

//accedemos a los valores no estaticos
//console.log(persona1.email);
//console.log(Persona.email)  no se puede acceder desde la clase porque no es estatic

console.log(persona1.toString());

console.log(Persona.MAX_OBJ);
//Persona.MAX_OBJ=19 // No se puede modificar ni alterar

let persona4 = new Persona("Franco","Diaz");
console.log(persona4.toString());
export default Persona;
