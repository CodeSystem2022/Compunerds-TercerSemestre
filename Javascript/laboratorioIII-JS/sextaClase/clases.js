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
}

class Empleado extends Persona {
  //clase hija
  constructor(departamento) {
    this._departamento = departamento;
  }

  get departamento() {
    return this._departamento;
  }

  set departamento(departamento) {
    this._departamento = departamento;
  }
}

let persona1 = new Persona("Martin", "Perez");
console.log(persona1.nombre);
console.log(persona1.apellido);
persona1.nombre = "Juan";
persona1.apellido = "Mar";
console.log(persona1.nombre);
console.log(persona1.apellido);
