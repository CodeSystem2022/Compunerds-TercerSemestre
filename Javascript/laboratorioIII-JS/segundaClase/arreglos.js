//let aytos = new Array("Audi","Ferrari","Twingo") Sintaxis obsoleta
let autos = ["Audi", "Ferrari", "Twingo"];
console.log(autos)

//Recorrer un array de a un resultado por vez
console.log(autos[0]);
console.log(autos[1]);
console.log(autos[2]);

//Recorrer el array y devolcer todos los elementos
//con el ciclo for
for(let i=0; i<autos.length;i++){
    console.log(i +":"+autos[i]);
}

//modificamos los elementos del arreglo
autos[1]="Volvo";
console.log(autos[1])

//agregamos elementos al array
autos.push("Jeep")
console.log(autos)
