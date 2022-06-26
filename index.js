//VARIABLES GLOBALES

let precio_1 = 0;
let precio_2 = 0;
let precio_total = 0;
let suma_total = 0;
let precio_iva = 0;
let total_iva = 0;
let cuotas = 4;


//ARRAY PRODUCTOS CON OBJETOS

class Producto{
    constructor(id , nombre , precio , stock){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }

    get_datos(){
        console.log("Datos del producto");
        console.log("Nombre:", this.nombre);
        console.log("Precio", this.precio);
        console.log("Stock", this.stock);
    }

    get_stock(){
        return this.stock
    }

    venta_stock(cantidad){
            this.stock = this.stock - cantidad        
    }
}


//VARIABLES PRODUCTO PATA EL CONSTRUCTOR


let suelto_gato = new Producto(1 , "Alimento Suelto Gato" , 150 , 30);
let suelto_perro = new Producto(2 , "Alimento suelto Perro" , 150 , 30);
let bolsa_gato= new Producto(3 , "Alimento por bolsa gato" , 200 , 30);
let bolsa_perro = new Producto(4 , "Alimento por bolsa Perro" , 200 , 30);


// CLASE USUARIO SALUDO

let nombre = prompt("Ingrese su nombre");
let nombre_mascota = prompt("Ingrese el nombre de su mascota");

class Usuario{

    constructor(nombre,nombre_mascota){

        this.nombre = nombre;
        this.nombre_mascota = nombre_mascota;

    }

    bienvenida(){

        alert("Bienvenido a la veterinaria : " + this.nombre + "y a su mascota " + this.nombre_mascota)
    }
}

let nuevo_usuario = new Usuario(nombre , nombre_mascota);


// FUNCION SUMA

function suma_precios (precio_1 , precio_2){

    suma_total = precio_1 + precio_2;
    parseInt(suma_total)
}

//FUNCION CON IVA

function iva_precios (precio_iva){
    total_iva = precio_iva * 0.21;
    total_iva = total_iva + suma_total;
    parseInt(total_iva)
}

//FUNCION CON CUOTAS

function precio_cuotas(){

    while (cuotas == 4){

      cuotas = prompt("ingrese: \n 1 - Un solo pago \n 2 - 3 cuotas");

      cuotas = parseInt(cuotas);  

      if (cuotas == 1){
        alert("Su pago es de: $" + suma_total + "\n Su pago con iva es de: $" + total_iva + "\n Gracias por su compra!" ); 
        break;
      }

      else if (cuotas == 2){
        alert("sus cuotas son de: $" + Math.trunc(total_iva / 3));
        alert("GRACIAS POR SU COMPRA!");
        break;
      }

      else{
        alert("no valido");
      }
    }
  }



// FUNCION AVISO

function productos (producto){
    alert("compró " + producto + " $" + suma_total);
}

//FUNCION COMPRAR

function comprar (){
    let opcion = 11;



//BUCLE DE OPCIONES DE PRODUCTOS

    while (opcion == 11){

        iva_precios(suma_total);
        parseInt(iva_precios);
        opcion = prompt(" ingrese: \n 1- Alimento suelto gato \n 2- Alimento suelto perro \n 3-Aliemento gato x bolsa\n 4- Alimento perro x bolsa  \n 5- desea pagar? \n  0- salir \n -- SU CARRITO ES DE: $"+suma_total +" \n --Precio + iva: $" + total_iva);
        parseInt(opcion)

        if (opcion == 1){

            opcion = suelto_gato;
            suma_precios(suma_total , suelto_gato.precio);
            parseInt(suma_total);
            productos("Alimento suelto gato");
            suelto_gato.venta_stock(1);
            console.log("Alimento suelto gato :" , suelto_gato.stock , "unidades");
            return comprar()
        }

        else if (opcion == 2){
            opcion =suelto_perro ;
            suma_precios(suma_total , suelto_perro.precio);
            parseInt(suma_total);
            productos("Alimento suelto perro");
            suelto_perro.venta_stock(1);
            console.log("Stock Actualizado alimento suelto perro :" , suelto_perro.stock , "unidades");
            return comprar()
        }

        else if (opcion == 3){
            opcion = bolsa_gato;
            suma_precios(suma_total , bolsa_gato.precio);
            parseInt(suma_total);
            productos("Bolsa gato");
            bolsa_gato.venta_stock(1);
            console.log("Stock Actualizado Bolsa gato :" , bolsa_gato.stock , "unidades");
            return comprar()
        }

        else if (opcion == 4){
            opcion = bolsa_perro;
            suma_precios(suma_total , bolsa_perro.precio);
            parseInt(suma_total);
            productos("Bolsa perro");
            bolsa_perro.venta_stock(1);
            console.log("Stock Actualizado bolsa perro:" , bolsa_perro.stock , "unidades");
            return comprar()
        }

       
        else if (opcion == 0){
            alert("Selecciono salir, vuelva pronto");
            break
        }
        else if (opcion == 5){
            alert("pagar");
            precio_cuotas()
        }
        else{
            alert("Ingreso no valido")
            return comprar()
        }

    }
}





// LLAMADOS

nuevo_usuario.bienvenida();
comprar();