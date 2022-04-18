let clientes=3;

for (let i = 1; i<=clientes ; i++){

    let nombre = prompt ("ingrese su nombre")

    alert ("su turno es el numero " + i)

    let sueldo1 = parseInt (prompt("Hola " + nombre + " ingrese promedio sueldo 2021"))
    let sueldo2 = parseInt (prompt("ingrese sueldo promedio 2022"))

    let promediosueldos = (sueldo1 + sueldo2)/2;

   
       

    if (promediosueldos > 1000) {

        alert("Aplica prestamo");

        let entrada = prompt ("Cree su contraseña")

        

                while (entrada != "pato"){

            
                        alert ("dato incorrecto");
                        entrada = prompt ("ingresar contraseña para continuar");
                        if ("pato" === "pato");
            
          
    
                }

                break

        }

        else if (promediosueldos < 1000){
        alert("no aplica prestamo");
        }

          
    
}
