

function calcular_dosis (peso){
// retorna dosis

let dosis = peso * 0.25;
return dosis
}

for (let i=1 ; i<5 ; i++){

 
alert ( "Hola  su turno es el numero: " + i)

console.log("bienvenido a la veterinaria");
let perro = prompt("ingrese el nombre de su perro");
let peso = parseInt(prompt("ingrese el peso de su perro"));
let su_dosis = calcular_dosis(peso);

console.log("nombre: ", perro);
console.log ("el peso de su perro es ", peso , "kg");
console.log("La dosis a tomar cada 12hs es: ",su_dosis, "ml")

}
