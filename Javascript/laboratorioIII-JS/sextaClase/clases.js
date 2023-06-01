class Persona {
  //clase padre
  constructor(nombre, apellido) {
    this._nombre = nombre;
    this._apellido = apellido;
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
    return this._nombre+" "+this._apellido;
  }
  
  //7.3 Clase Object, toString,sobreescritura y Polimorfismo
  
  //sobreescribiendo el metodo de la clase padre Object 
  toString(){//regresa un string
    //se aplica el polimorfismo que significa = multiples formas en tiempo de ejecuciòn.
    //el metodo que se ejecuta depende si es una referencia de tipo padre o hija
    return this.nombreCompleto();
  }
}

class Empleado extends Persona {
  //clase hija
  constructor(nombre,apellido,departamento) {
    super(nombre,apellido);//heredamos los campos de la clase padre
    this._departamento = departamento;
  }
  
  get departamento() {
    return this._departamento;
  }
  
  set departamento(departamento) {
    this._departamento = departamento;
  }
  // 7.2 Sobreescritura - Alumno: Giuliana Dealbera Etchechoury
     nombreCompleto(){
      return super.nombreCompleto() + ', ' + this._departamento;
  }
}

let persona1 = new Persona("Martin", "Perez");
console.log(persona1.nombre);
console.log(persona1.apellido);
persona1.nombre = "Juan";
persona1.apellido = "Mar";
console.log(persona1.nombre);
console.log(persona1.apellido);

let empleado1= new Empleado("Marcelo","Gimenez","Sistemas")
console.log(empleado1)
console.log(empleado1.nombreCompleto());

//Object.prototype.toString esta es la manera de acceder a atributos y metodos de manera dinamica
console.log(empleado1.toString());//se trabaja con el metodo de la clase hija.
console.log(persona1.toString());//se trabaja con el metodo de la clase padre.