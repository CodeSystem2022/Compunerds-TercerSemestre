miFuncion(8, 2)

function miFuncion(a, b) {
    //console.log("Sumamos: "+(a + b));
    return a + b;
}

//llamando a la funcion
miFuncion(4, 5)

let resultado = miFuncion(3, 70)
console.log(resultado)

//Declaramos una funcion de tipo expresion
let x = function (a, b) {
    return a + b;
}
resultado = x(5, 6)
console.log(resultado)

    // //funciones de tipo self e invoking
    // (function (a, b) {
    //     console.log("Ejecutando la funcion: " + (a + b));
    // })(9, 6);


function miFuncion2(a,b){
    console.log(arguments)
}
miFuncion2(2,5)

// funciones flechas
const sumarFuncionFlecha= (a,b)=>a+b;
resultado=sumarFuncionFlecha(3,7);//asignamos el valor a una variable
console.log(resultado);

let sumar=function(a,b){
    console.log(arguments[0]);//muestra el parametro de a
    return a+b;
}
resultado=sumar(3,5)
console.log(resultado);

let respuesta= sumarTodo(3,6,15,10,9);
console.log(respuesta)
function sumarTodo(){
    let suma=0;
    for(let i=0; i < arguments.length; i++){
        suma += arguments[i]
    }
    return suma;
}