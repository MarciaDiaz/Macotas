/*lista de productos*/
const productos = [
        {id: 1, producto: "motosierra", precio: 17000},
        {id: 2, producto: "amoladora", precio: 5000},
        {id: 3, producto: "Agujereadora", precio: 8000}
];

console.log (productos);

/*agregar un producto a la lista*/

productos.push  ({id: 4, producto: "Sierra circular", precio: 18000});

console.log (productos);

/*mostrar solo el producto y su precio*/
for (const producto of productos){
        console.log(producto.id)
        console.log (producto.producto)
        console.log (producto.precio)
}

/* muestro las herramientas con el valor del envio*/

class herramienta {
        constructor (nombre, precio) {
                this.nombre = nombre.toUpperCase();
                this.precio = parseFloat(precio);
                this.vendido = false;
        }


mostrarPrecioEnvio(){
console.log(this.precio +(this.precio + 500));
}
}

const herramientas = [] ;
herramientas.push(new herramienta ("AMOLADORA", "15000"))
herramientas.push(new herramienta ("SIERRA CIRCULAR", "17000"))
herramientas.push(new herramienta ("AGUJEREADORA", "8000"))

for (const herramienta of herramientas){
        herramienta.mostrarPrecioEnvio();
}


