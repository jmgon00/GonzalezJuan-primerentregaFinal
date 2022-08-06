
/*INTERECACCIÓN CON HTML****************************************************************************/

//lista de prodcutos 

//let container = document.getElementById("divFormAdmin");
/*  listaProductos = [
    {id: 1, nombre: "paleta", precio: 15000, descripcion: "wilson", imagen: "./img/wilson.png"},
    {id: 2, nombre: "paleta", precio: 30000, descripcion: "bullpadel", imagen: "./img/bullpadel.png"},
    {id: 3, nombre: "paleta", precio: 45000, descripcion: "adiddas", imagen: "./img/adiddas.png"},
    {id: 4, nombre: "zapatillas", precio: 10000, descripcion: "fila", imagen: "./img/fila.png"},
    {id: 5, nombre: "zapatillas", precio: 9000, descripcion: "topper", imagen: "./img/zapatillas toper.png"},
    {id: 6, nombre: "zapatillas", precio: 12000, descripcion: "adiddas", imagen: "./img/z-adidas.png"},
]; */
/* 
for(const producto of listaProductos){
    let item = document.createElement("div");
    item.innerHTML = `<h2 class="titleProduct">${producto.nombre}</h2>
                      <h4 class="DescripcionProduct">${producto.descripcion}</h4>  
                    <b class="precioProduct">$ ${producto.precio}</b>
                    <h6 class="idProduct">ID DE PRODUCTO: ${producto.id}</h6>
                    <img  class="imgProduct" src="${producto.imagen}">
                    <button class="btnAgregarCarrito" id= ${producto.id}>Agregar al carrito</button>
                    `;
    item.className += "productosCarrito";
   
    container.append(item);
} */




//PRIMER PASO, INYECTAR HTML

const contenedorProductos = document.getElementById('contenedor-productos');
const contenedorCarrito = document.getElementById("carrito-contenedor");
const botonVaciar = document.getElementById("vaciar-carrito");
const botonFinalizar = document.getElementById("finalizar-compra");
const contadorCarrito = document.getElementById("contadorCarrito");
const precioTotal = document.getElementById("precioTotal");
/* const usuarioLogin = document.getElementById("form-usuario-acceso"); */

let carrito = [];

/* listaProductos.forEach((producto) =>{
  const div = document.createElement('div');
  div.classList.add('producto');
  div.innerHTML = `
                <img src=${producto.img} class="imgProducto">
                <h3>${producto.nombre}</h3>
                <p>${producto.descripcion}</p>
                <p class="precioProducto">Precio:$${producto.precio}</p>
                <button id="agregar${producto.id}" class="boton-agregar">Agregar</button>
  `
  contenedorProductos.appendChild(div);
  const botonAgregar = document.getElementById(`agregar${producto.id}`);
  botonAgregar.addEventListener('click', (e) =>{
    agregarCarrito(producto.id);
  })
  
}) */


//JSON

fetch("/js/stock.json")
.then(response => response.json())
.then(productos =>{
  productos.forEach((producto) =>{
    const div = document.createElement('div');
    div.classList.add('producto');
    div.innerHTML = `
                  <img src=${producto.img} class="imgProducto">
                  <h3>${producto.nombre}</h3>
                  <p>${producto.descripcion}</p>
                  <p class="precioProducto">Precio:$${producto.precio}</p>
                  <button id="agregar${producto.id}" class="boton-agregar">Agregar</button>
                  
                  `
    contenedorProductos.appendChild(div);
    const botonAgregar = document.getElementById(`agregar${producto.id}`);
    botonAgregar.addEventListener('click', (e) =>{
      agregarCarrito(producto.id);
    })
    
  })

//vaciar carrito 
botonVaciar.addEventListener("click", () =>{
  Swal.fire({
    title: 'Estas seguro/a?',
    text: "Estas a punto de vaciar el carrito de compras!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si, eliminar!'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'Eliminado!',
        'Tu carrito de compras ha sido vaciado',
        'Realizado con éxito'
      )
    }
  })
  carrito.length = 0;
  actCarrito();
  
})


const agregarCarrito = (prodId) => {
  const item = productos.find((prod) => prod.id === prodId);
  carrito.push(item);
  actCarrito();
  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })
  
  Toast.fire({
    icon: 'success',
    title: 'Producto agregado al carrito con éxito'
  })
}

//eliminar del carrito

const eliminarDelCarrito = (prodId) =>{
  const item2 = carrito.find((prod) => prod.id === prodId);
  const indice = carrito.indexOf(item2);
  carrito.splice(indice, 1);
  actCarrito();
}



//agregar al carrito

const actCarrito = () => {
  contenedorCarrito.innerHTML="";
  carrito.forEach((prod) => {
    const div2 = document.createElement("div");
    div2.className =  ("productoEnCarrito");
    div2.innerHTML = `
                    <p>${prod.nombre}</p>
                    <p>${prod.descripcion}</p>
                    <p>${prod.precio}</p>
                    <p>Cantidad: <span id="cantidad">${prod.cantidad}</span></p>
                    <button onclick ="eliminarDelCarrito(${prod.id})" class="boton-eliminar">X</button> 
                    `
                    contenedorCarrito.appendChild(div2);
                    
  })
  contadorCarrito.innerText = carrito.length;
  precioTotal.innerText = carrito.reduce((acc, prod) => acc + prod.precio, 0);
 
  
}


//*ERROR LINEA 155*//
//ERROR LINEA 161//

//finalizar compra

botonFinalizar.addEventListener("click", () =>{
  Swal.fire({
    title: 'Estas muy cerca de finalizar tu compra',
    
    icon: 'success',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Finalizar compra'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'Tus productos ya están en camino',
        'Te estará llegando un correo electrónico con toda la información',
        'Realizado con éxito'
      )
    }
  })
  carrito.length = 0;
  actCarrito();
 

})


//PRIMER MODELO para consultar productos a consultar disponibilidad
//edicion para colocar OPERADOR TERNARIO - LINEA 272 - 

const botonClickAca = document.getElementById("btnProducto1");

botonClickAca.addEventListener("click", (e) => {
   
  
   let mensaje1 = parseInt(prompt("¿Que producto deseas filtrar? 1-Paletas 2-Zapatillas"));
  
   if (mensaje1 === 1){
    alert("Hiciste click en Paletas");
   }else if (mensaje1 === 2){
    alert("Hiciste click en Zapatillas");
   }else {
    alert("No seleccionaste correctarmente, apretar F5");
   }
  //mensaje1 = mensaje1 === 1 ? alert("Hiciste click en Paletas") : alert("Hiciste click en Zapatillas");
//});




//funciones asincronas y localStorage

/* function cargarLocalStorage(){
  return new Promise ((resolve, reject)=>{
    console.log("Cargando productos..");
    setTimeout(()=>{
      resolve(productos);
      localStorage.getItem("productos");
    }, 1500)
  })
}

cargarLocalStorage().then(datos=>{
  console.log(datos);
});
 */

})})

