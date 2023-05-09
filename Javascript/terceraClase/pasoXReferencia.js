const persona={
    nombre:"Juan",
    apellido:"Perez"
}
console.log(persona.nombre,persona.apellido)
function cambiarValorObjeto(persona1){
    persona1.nombre="Ignacio";
    persona1.apellido="Lepez";
    console.log(persona.nombre,persona.apellido)
}
cambiarValorObjeto(persona)