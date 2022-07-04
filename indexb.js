class Animales_veterinaria {

    constructor (nombre, apellido, edad, peso){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.peso= peso;
    }

    saludar (){
        console.log ("hola mi nombre es: ", this.nombre)
    }

    get_datos(){
        console.log ("--DATOS DE ANIMALES--");
        console.log ("nombre: ", this.nombre);
        console.log ("apellido: ", this.apellido);
        console.log ("edad: ", this.edad);
        console.log("peso", this.peso);
    }

    set_peso(su_dosis){
        this.peso = su_dosis;
    }
}


//ARRAY DE MASCOTAS

let mascotas = []

mascotas.push(new Animales_veterinaria("peca","perrito", 2, 20));
mascotas.push(new Animales_veterinaria("zeta","perrote", 3, 15));


console.log(mascotas);


mascotas[0].get_datos();
mascotas[1].get_datos();


function calcular_dosis (mascotas){
    // retorna dosis
    let dosis = mascotas.peso * 0.25;
    return {
        peso: mascotas.peso,
        dosis: dosis,
    }
}




let mascotas_dosis = mascotas.map(calcular_dosis);

console.log(mascotas);
console.log(mascotas_dosis);


