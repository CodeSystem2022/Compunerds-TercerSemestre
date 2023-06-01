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
