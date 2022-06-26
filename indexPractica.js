

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

alert ("El nombre de su perro es: " + perro + "\n" + "El peso de su perro es: " + peso + "kg\n" + "La dosis a tomar cada 12hs es: " + su_dosis + "ml")

}

/*
//OBJETO LITERAL

let paciente_uno ={
    nombre : "Peca",
    apellido : "Perrito",
    edad: 2,

    ladrar: function (){
        console.log("peca: guau guau")
    }
};

let paciente_dos ={
    nombre : "Zeta",
    apellido : "Perrote",
    edad: 3,
};
//ACCEDER

console.log (paciente_uno.nombre);
console.log (paciente_dos.apellido);

//LLAMAR A LA FUNCION DENTRO DEL OBJETO

paciente_uno.ladrar();
*/

//FUNCION CONTRUCTORA

function pacientes (nombre, apellido, edad){

    this.nombre= nombre;
    this.apellido = apellido;
    this.edad = edad;
}

let paciente_uno = new pacientes ("peca", "perrito", 2);
let paciente_dos = new pacientes ("kimey", "Negra", 11);
let paciente_tres = new pacientes ("zeta", "perrote", 3);

console.log(paciente_uno.apellido);
console.log(paciente_tres.nombre);
console.log (paciente_dos.nombre);


//FOR IN
//RECORRER

console.log ("nombre" in paciente_dos);

for (let propiedades in paciente_dos){
    console.log (paciente_dos[propiedades])
}

//OBJETO CON CLASE/plano para construir un objeto

class Animales_veterinaria {

    constructor(nombre, apellido, edad){

        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.nota_uno;
        this.nota_dos;

    }


    saludar (){
        console.log ("hola mi nombre es: ", this.nombre)
    }

    get_datos(){
        console.log ("--DATOS DE ANIMALES--");
        console.log ("nombre: ", this.nombre);
        console.log ("apellido: ", this.apellido);
        console.log ("edad: ", this.edad);
    }

set_nota_uno(){
    this.nota_uno = nota;
}
set_nota_dos(){
    this.nota_dos = nota;
}

}

let animal_uno = new Animales_veterinaria ("peca", "perrito", 2);
let animal_dos = new Animales_veterinaria ("zeta", "perrote", 3);


let nota_uno = parseInt( prompt("ingrese la nota uno"));
let nota_dos = parseInt (prompt("ingrese la nota dos"));

animal_uno.set_nota_uno(nota_uno);
animal_uno.set_nota_dos(nota_dos);
animal_dos.set_nota_uno(nota_uno);
animal_dos.set_nota_dos(nota_dos);


animal_dos.get_datos();

animal_uno.saludar();
animal_dos.saludar();


//ARRAY

/*tienen oreden 0 1 2 3 4
for sirve para recorrer el array

ARRAY VACIO

Let lista_alumnos = [];

el array puede guardar cualquier tipo de objeto


//ACCEDER A UN ELEMENTO ESPECIFICO

console.log (lista_alumno [0]);

//RECORRER CON LO MAXIMO DE LA LISTA

for (let i = 0; < lista_alumno.lenght ; i++){

    console.log (lista_alumno [i]);
}



//AGREGAR ELEMENTOS //PUSH

lista_alumno.push("pepe");

se agrega al final de la lista

unshift //agregar al principio

shift // saca al primer elemento

pop // quita al ultimo elemento


splice // elimina de una posicion hacie adelante

(1,1) elimina uno puntual
 
slice// corta la lista

let corte = nueva_lista.slice(2,4);


//INDEXOF

console.log ( )

*/


//ARRAY DE OBJETOS


class Paciente{

    constructor(nombre, edad, peso, duenio){
    
        this.nombre = nombre;
        this.edad = edad;
        this.peso = peso;
        this.duenio= duenio;
    }
    
    }
    
    
    
    let lista_pacientes = [];
    
    
    for (let i = 0 ; i<4; i++){
    
        let nombre = prompt ("ingrese el nombre de su mascota");
        let edad = prompt("ingrese la edad de su mascota");
        let peso = prompt("ingrese el peso de su mascota");
        let duenio = prompt("ingrese el nombre del dueño");
    
        let nuevo_paciente = new Paciente(nombre, edad, peso, duenio);
    
        lista_pacientes.push(nuevo_paciente);
    }
    
    for (let paciente of lista_pacientes){
    
        console.log(paciente)
    }
    
