
// En este archivo espero aprender a declarar variables 
/**
 * Ademas tambien espero aprender mas sobre comentarios y tipos de datos
 */


alert("¡Bienvenido al taller de JavaScript!");


let miNumero = 10;
console.log(miNumero);



let miBooleano = true;
console.log(typeof(miBooleano));



let miCadena = "juancalderon";
console.log(miCadena.length);



let miArray = ["hola",25,[1,2]];
console.log(miArray);



let miObjeto = {
    nombre: "juan",
    apellido: "calderon",
    email: "juancalderon@gmail.com"
}
console.log(miObjeto);



let nombreUsuario = prompt("Dame tu nombre porfa :)")
alert("Bienvenido " + nombreUsuario + "!");


let pregunta = confirm("te gusta JS?");
if(pregunta == true){
    console.log("Te gusta JS!");
}else{
    console.log("No te gusta JS!");
}


console.warn("Esto es solo una práctica");

console.error("TypeError")

let data = [
    {numero : 1},
    {numero : 2},
    {numero : 3},
    {numero : 4},
    {numero : 5},
    {numero : 6},
];

console.table(data);



