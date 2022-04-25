let clientes=3;

for (let i = 1; i<=clientes ; i++){

    let nombre = prompt ("ingrese su nombre");

    alert ("su turno es el numero " + i);

    let sueldo1 = parseInt (prompt("Hola " + nombre + " ingrese promedio sueldo 2021"));
    let sueldo2 = parseInt (prompt("ingrese sueldo promedio 2022"));

    let promediosueldos = (sueldo1 + sueldo2)/2;

   
       

    if (promediosueldos > 1000) {

        alert("Aplica prestamo!");

        function suma (sueldo1, sueldo2){
                return sueldo1 + sueldo2
        }

        let resultado = suma (sueldo1, sueldo2);
        alert ("Su prestamo es de " +  resultado);

        

               

        }

        else if (promediosueldos < 1000){
        alert("no aplica prestamo");
        }

          
    
}
