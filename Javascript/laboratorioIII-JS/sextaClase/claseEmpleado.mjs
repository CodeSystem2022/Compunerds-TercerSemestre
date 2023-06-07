import Persona from "./clasePersona.mjs";

class Empleado extends Persona {
    //clase hija
    constructor(nombre, apellido, departamento) {
      super(nombre, apellido); //heredamos los campos de la clase padre
      this._departamento = departamento;
    }
  
    get departamento() {
      return this._departamento;
    }
  
    set departamento(departamento) {
      this._departamento = departamento;
    }
    // 7.2 Sobreescritura - Alumno: Giuliana Dealbera Etchechoury
    nombreCompleto() {
      return super.nombreCompleto() + ", " + this._departamento;
    }
  }
  let empleado1 = new Empleado("Marcelo", "Gimenez", "Sistemas");
console.log(empleado1);
console.log(empleado1.nombreCompleto());

//Object.prototype.toString esta es la manera de acceder a atributos y metodos de manera dinamica
console.log(empleado1.toString()); //se trabaja con el metodo de la clase hija.

//llamamos metodo saludar

Empleado.saludar();
Empleado.saludar2(empleado1);

//accedemos a los valores no estaticos
console.log(empleado1.email);

console.log(empleado1.toString());

export default Empleado;