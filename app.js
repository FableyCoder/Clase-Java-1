document.write("<h1> Hola Javascript </h1>")

// Comentarios de una Linea

/* Comentario de Bloque */

let nombre="Carlos"

// Array 

let datos=["Ana","Pablo","Carlos"]

let edades=[14,34,22]

let objetoDatos={
    nombre:"Carlos",
    edad:25,
    cuenta:"alumno",
    notas:[6.8,6.2,7.0]
}

console.log(datos)
console.log(edades)
console.log(objetoDatos)

// Operadores relacionales
/*
>
<
>=
<=
== comparacion contenido
!=
=== comparacion contenido y tipo
*/

let uno=1
let uno_string="1"

console.log(uno==uno_string)
console.log(uno===uno_string)


// Estructuras de control

if(uno==uno_string){
    console.log("Son Iguales ?")
}
if(uno===uno_string){
    console.log("Son iguales iguales")
}
else{
    console.log("No son iguales")
}

let datosAlumnos="diurno"

switch(datosAlumnos){
    case 'diurno':
        console.log("Es alumno del dia")
        break;
    case 'vespertino':
        console.log("Es Alumno de la noche")
        break;
    default:
        console.log("No es Alumno")
}

//Ciclos

//While

/* Mostrar los primeros 10 números positivos */

let cont=1;

while(cont <=10){
    console.log(cont)
    cont=cont+1
}

//For

let nombres=["Ana","Pablo","Carlos"]

for(let i=0;i<nombres.length;i++){
    console.log(nombres[i])
}

//Funciones

function mensaje(){
    console.log("Hola")
}

mensaje()

// Nota: if( numero % 2 == 0 )

// Muestre la cantidad de numeros pares que existen dentro de un arreglo
// Use una funcion que retorne si el numero es par o no.

let numeros=[45,33,22,14,8,24,3,12,1,44]

// Mi Solucion

function pares(){
    for(let i=0;i<numeros.length;i++)
        if(numeros[i]%2 == 0)
            console.log("par")
}

pares()

// Solucion Profesora

let contP=0;
function es_par(num){
    if(num % 2 == 0)
        return true
    return false
}

for(let i=0;i<numeros.length;i++){
    if(es_par(numeros[i]))
        contP++;
}

console.log(contP)

// Modificar Ejercicio anterior para que muestre la cantidad de impares