   class Animales_veterinaria {

        constructor(nombre, apellido, edad){
    
            this.nombre = nombre;
            this.apellido = apellido;
            this.edad = edad;
            this.peso;
            
    
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
    
        set_peso(su_dosis){

        this.peso = su_dosis;
        
        }

    
    
    }
    
        let animal_uno = new Animales_veterinaria ("peca", "perrito", 2);
        let animal_dos = new Animales_veterinaria ("zeta", "perrote", 3);

   
    let peso = parseInt(prompt("ingrese el peso de su perro",));
    
   

    animal_uno.set_peso(peso);
    animal_dos.set_peso(peso);
   
    
    
    animal_dos.get_datos();
    animal_uno.get_datos()
    
    

    animal_dos.set_peso();


    function calcular_dosis (peso){
        // retorna dosis
        
        let dosis = peso * 0.25;
        return dosis
        }

        let su_dosis = calcular_dosis(peso);

        console.log("su dosis es: ", su_dosis);


       
//FIND


let mascotas = [

    {nombre: "simon", apellido: "Mataderos", edad: 1},
    {nombre: "pirata", apellido: "Guillon", edad:4},
    {nombre:"cebra", apellido: "calle", edad: 4},
]
        function buscar_nombre (mascota){

            return mascota == "cebra";
        }

        mascotas.find()


