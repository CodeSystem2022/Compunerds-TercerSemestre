/*
Clase 7: Clases Parte 2
Laboratorio III: JavaScript
Team: CompuNerds
Scrum Master: Nicolas Segovia
*/

// 7.1 Heredar métodos - Alumno: Kevin Sosa

nombreCompleto(){
    return this._nombre+' '+this._apellido;
}

console.log(empleado1.nombreCompleto());

class Empleado extends Persona{



    // 7.2 Sobreescritura - Alumno: Giuliana Dealbera Etchechoury
    nombreCompleto(){
        return super.nombreCompleto() + ', ' + this._departamento;
    }
}
console.log(empleado1.nombreCompleto());

// 7.3 Clase Object, toString, sobreescritura y Polimorfismo- Alumno: Giuliana Paola Diaz Luna

// Object.prototype.toString // esta es la manera de acceder a atributos y metodos de manera dinamica
// Sobrescribiendo el metodo de la clase padre (object) de clase persona
toString(){ // regresa un string
    return this.nombreCompleto();
}
console.log(empleado1.toString()); // se ejecuta el metodo de la clase hija
console.log(persona1.toString()); // se ejecuta el metodo de la clase padre
