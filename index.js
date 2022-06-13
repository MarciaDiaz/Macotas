
   alert ("Bienvenido a veterinaria online")

   let nombre = prompt ("Ingrese su nombre");
   

for (let i=1 ; i<6 ; i++){

 
alert ( "Hola " + nombre + " su turno es el numero: " + i)

let mascota = prompt ("Ingrese mascota" + "\n" + "1- Gato" + "\n" +  "2-Perro" + "\n" + "3-Ninguna de las anteriores");



    if ( mascota == 1){

   alert ("Su mascota sera atendido por especialistas en michis")
    }
    else if (mascota == 2){
    alert ("Su mascota sera atendida por especialista en perritos")
    }
    else if (mascota == 3) {
    alert ("Sera derivado con una veterianaria de exoticos")
    }
    else{
    alert ("la opcion no es valida intentelo nuevamente")
    break
    }
}