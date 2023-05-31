/*
Clase 7: Clases Parte 2
Laboratorio III: JavaScript
Team: CompuNerds
Scrum Master: Nicolas Segovia
*/

// 7.1 Heredar métodos - Alumno:

class Empleado extends Persona{



    // 7.2 Sobreescritura - Alumno: Giuliana Dealbera Etchechoury
    nombreCompleto(){
        return super.nombreCompleto() + ', ' + this._departamento;
    }
}
console.log(empleado1.nombreCompleto());

// 7.3 Clase Object, toString, sobreescritura y Polimorfismo - Alumno: