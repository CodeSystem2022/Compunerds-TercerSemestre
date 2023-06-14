/*
Clase 9 Herencia
Team: CompuNerds
Scrum Master: Carla Faes
Developer: Giuliana Dealbera Etchechoury
*/

class Cliente extends Persona{
    static contadorClientes = 0;

    constructor(nombre, apellido, edad, fecharegistro){
        super(nombre, apellido, edad);
        this._idCliente = ++Cliente.contadorClientes;
        this._fechaRegistro = fecharegistro;
    }

    get idCliente(){
        return this.__idCliente;
    }
    get fecharegistro(){
        return this._fecharegistro;
    }
    set fecharegistro(fecharegistro){
        this._fechaRegistro = fecharegistro;
    }

    toString(){
        return `
        ${super.toString()}
        ${this._idCliente}
        ${this._fechaRegistro}`;
    }
}
