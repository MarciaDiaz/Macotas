

class Producto {
    
    constructor(id, nombre, precio) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
    }

    toString() {
        return `${this.id}. ${this.nombre}, ${this.precio} $`;
    }
} 

const arrayProductos = [];

arrayProductos.push(new Producto(1, "Sierra", 8000));
arrayProductos.push(new Producto(2, "Hidrolavadora", 17000));
arrayProductos.push(new Producto(3, "Taladro", 6500));
arrayProductos.push(new Producto(4, "PPinza Amperometrica", 5400));
arrayProductos.push(new Producto(5, "Agujereadora", 13000));
arrayProductos.push(new Producto(6, "Soldadora", 19000));
arrayProductos.push(new Producto(7, "Atornilladora", 12000));

const mensaje = (listaProductos) => {
    let auxMensaje = [];
    auxMensaje.push("Elija el producto que quiera comprar: ");
    for (let i = 0; i < listaProductos.length; i++){
        auxMensaje.push(listaProductos[i].toString());
    }
    auxMensaje.push("Para finalizar su selección ingrese 0.");
    return auxMensaje.join("\n");
}

let elegirProductos; 
let buscarProducto;
const carrito = [];
let precio = 0;

// Ejecución
elegirProductos = parseInt(prompt(mensaje(arrayProductos)));

while ((elegirProductos > 0) && (elegirProductos <= arrayProductos.length) && (!isNaN(elegirProductos))) {
    buscarProducto = arrayProductos.find((el) => el.id === elegirProductos);
    carrito.push(buscarProducto);
    elegirProductos = parseInt(prompt(mensaje(arrayProductos)));
}

if (carrito.length > 0) {
    carrito.forEach((el) => (precio += el.precio));
    alert(`Usted seleccionó:\n${carrito.join("\n")}\nEl total a abonar es: ${precio} $`);
} else {
    alert("¡Que pena, no seleccionaste nada!");
}
