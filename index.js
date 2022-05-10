document.getElementById("nombre").value="buscador";

let boton=document.getElementById("btnPrincipal");
 boton.addEventListener("click", respuestaClick);
 function respuestaClick (){
     console.log ("respuestClick")



     
 }

 
const contenedor = document.getElementById ("productos")

const productos = [

    {id: 1, nombre: "herramienta1", precio: 100, imagen:"https://img.toolstud.io/240x240/3b5998/fff&text=+200x200+"},
    {id: 2, nombre: "herramienta2", precio: 110, imagen:"https://img.toolstud.io/240x240/3b5998/fff&text=+200x200+" },
    {id: 3, nombre: "herramienta3", precio: 150, imagen:"https://img.toolstud.io/240x240/3b5998/fff&text=+200x200+"},
    {id: 4, nombre: "herramienta4", precio: 200, imagen:"https://img.toolstud.io/240x240/3b5998/fff&text=+200x200+"},]

    const getCard = (item) => {
        return ( ` <div class="card" style="width: 18rem;">
        <img src=" ${item.imagen}" class="card-img-top" alt=" ${item.nombre}">
        <div class="card-body">
          <h5 class="card-title"=>${item.nombre}</h5>
          <p class="card-text">$${item.precio}</p>
          <a href="#" class="btn btn-primary">Agregar al carrito</a>
        </div>
      </div>`)
    }
 
    const cargarProductos = (datos, nodo) => {
        let acumulador = "";
        datos.forEach ((el) =>{
            acumulador += getCard (el);
        })
        nodo.innerHTML =acumulador;
    }

    cargarProductos(productos, contenedor);
   
