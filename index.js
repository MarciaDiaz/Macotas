
function calcular_dosis (peso){
// retorna dosis

    let dosis = peso * 0.25;
    return dosis
}


console.log("Bienvenido a la veterinaria");
let perro = prompt("Ingrese el nombre de su perro");
let peso = parseInt(prompt("Ingrese el peso de su perro"));
let su_dosis = calcular_dosis(peso);

console.log("Nombre: ", perro);
console.log ("El peso de su perro es ", peso , "kg");
console.log("La dosis a tomar cada 12hs es: ",su_dosis, "ml")


