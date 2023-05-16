class Persona{
    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
    }
    get nombre(){
        return this._nombre;
    }
}

let persona1= new Persona("Martin", "Perez");
console.log(persona1.nombre);