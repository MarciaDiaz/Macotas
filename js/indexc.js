let botones_compra = document.querySelectorAll(".botonCompra");
let carrito = [];
let carrito_storage = [];




for (let boton of botones_compra){
    boton.addEventListener("click", agregar_carrito);
}

console.log(botones_compra);

function agregar_carrito(e){

    let hijo = e.target;
    let padre = e.target.parentNode
    let abuelo = e.target.parentNode.parentNode;

    let nombre_producto = abuelo.querySelector("h5").textContent;
    //console.log (nombre_producto);

    let img = abuelo.querySelector("img").src;
    //console.log(img);

    let precio = abuelo.querySelector("span").textContent;
    //console.log(precio);


    let producto = {

        nombre : nombre_producto,
        img: img,
        precio: precio,
        cantidad: 1,
    };
    

    carrito.push(producto);

    let producto_JSON = JSON.stringify(producto);
    carrito_storage.push(producto_JSON);

    localStorage.setItem("producto", carrito_storage);
    
    mostrar_carrito (producto);
}

function mostrar_carrito (producto){

    let fila = document.createElement("tr");

    fila.innerHTML = `<td><img src="${producto.img}"></td>
                      <td>${producto.nombre}</td>
                      <td>${producto.cantidad}</td>
                      <td>${producto.precio}</td>
                      <td><button class="btn-danger borrar_elemento">Borrar</button></td>
                     ` 

    let body_tabla = document.getElementById("tbody");
    body_tabla.append(fila);


    let botones_borrar = document.querySelectorAll(".borrar_elemento");

    for( let boton of botones_borrar){

        boton.addEventListener("click", borrar_producto)
        
                     
}

function borrar_producto(e){

    let hijo = e.target;
    let abuelo = hijo.parentNode.parentNode;

    abuelo.remove();
}

 
updateShoppingCartTotal();
}

function updateShoppingCartTotal (){

    let total = 0;
    const shoppingCartTotal = document.querySelector('.shoppingCartTotal');
   const shoppingCartItem = document.querySelectorAll ('.shoppingCartItem');
   console.log(shoppingCartItem);
    
}


