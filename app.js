
/*INTERECACCIÓN CON HTML****************************************************************************/

//lista de prodcutos 

let container = document.getElementById("divFormAdmin");
let listaProductos = [
    {id: 1, nombre: "paleta", precio: 15000, descripcion: "wilson", imagen: "./img/wilson.png"},
    {id: 2, nombre: "paleta", precio: 30000, descripcion: "bullpadel", imagen: "./img/bullpadel.png"},
    {id: 3, nombre: "paleta", precio: 45000, descripcion: "adiddas", imagen: "./img/adiddas.png"},
    {id: 4, nombre: "zapatillas", precio: 10000, descripcion: "fila", imagen: "./img/fila.png"},
    {id: 5, nombre: "zapatillas", precio: 9000, descripcion: "topper", imagen: "./img/zapatillas toper.png"},
    {id: 6, nombre: "zapatillas", precio: 12000, descripcion: "adiddas", imagen: "./img/z-adidas.png"},
];
//iterador para crear producto
for(const producto of listaProductos){
    let item = document.createElement("div");
    item.innerHTML = `<h2>${producto.nombre}</h2>
                      <h4>${producto.descripcion}</h4>  
                    <b>Precio: $ ${producto.precio}</b>
                    <h6>ID DE PRODUCTO: ${producto.id}</h6>
                    <img src="${producto.imagen}">
                    <button class="btnAgregarCarrito" id= ${producto.id}>Agregar al carrito</button>
                    `;
    item.className += "productosCarrito";

    container.append(item);
    
}



//boton accion agregar al carrito

const array = [];

 let btnAgregar = document.querySelectorAll(".btnAgregarCarrito");
btnAgregar.forEach(add)











//seccion admin
//sessionStorage
let user;
let pais;
let userStorage = sessionStorage.getItem("usuario");
let paisUserStorage = sessionStorage.getItem("pais");

if(userStorage){
    user = userStorage;
    pais = paisUserStorage;
    let response = `Bienvenido de nuevo ${user}`;
 
    Swal.fire({
        title: response,
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      })
}else {
    user = prompt("Ingrese su nombre");
    pais = prompt("Ingrese su país")
   
} 

/* 
let nombreCompletoUser = sessionStorage.setItem("usuario", user);
let paisCompletoUser = sessionStorage.setItem("pais", pais); */
/* console.log(nombreCompletoUser);
console.log(typeof(nombreCompletoUser)); */

//localStorage - guardar productos 
localStorage.setItem("listaProductos", JSON.stringify(listaProductos));


//imprimir los datos que se ingresan por prompt en el html user
const h2divUsuario = document.getElementById("h2divUsuario");
const h4divUsuario = document.getElementById("h4divUsuario");
const btnRestablecerDatosUser = document.getElementById("btnRestablecerDatosUser");
h2divUsuario.innerHTML += user;
h4divUsuario.innerHTML += pais;



//boton accion  restablecer datos usuario en sesion
btnRestablecerDatosUser.addEventListener("click", (e) => {
    h2divUsuario.innerText = "";
    h4divUsuario.innerText = "";
    sessionStorage.clear();
    Swal.fire({
        title: 'Estas seguro/a?',
        
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Eliminado!',
            'Exliminado con exito, presiona F5',
            'success'
          )
        }
      })

});

//boton accion ingreso como admin
//funcion para actualizar precio - admin
/* function actPrecio (id, precio){
  let productoStorage = JSON.parse(localStorage.getItem("listaProductos"));
  let productoEncontrado = productoStorage.find(elemento => elemento.id === id);
  productoEncontrado.precio = precio;

  localStorage.setItem("listaProductos", JSON.stringify(productoStorage));
}; */


//boton acción ingreso admin
const btnLogin  = document.getElementById("btnLogin");
btnLogin.addEventListener("click", (e) => {
  e.preventDefault();
  sessionStorage.clear();
  let userAdmin = "admin";
  let claveAdmin = 12345;
  h2divUsuario.innerHTML = " ";
  h4divUsuario.innerText = " ";
  h2divUsuario.innerHTML += userAdmin;
  userAdmin = sessionStorage.setItem("usuarioAdmin", userAdmin);
  
  })


//primer modelo para consultar productos a consultar disponibilidad
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
  
});




//evento input
//let maxDigitos = document.getElementById("maxDigitos");

//validacion para que no exceda el maximo de 15 caracteres
/* maxDigitos.addEventListener("input", () => {
     if (maxDigitos.value.length === 15){
        alert("Te excediste de los 15 digitos")
    }

}); *//*Error no se valida en el segundo input con la misma clase la condicion******************/



//evento submit
//formulario contacto
let form = document.getElementById("form");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let info = e.target;
    console.log("El nombre ingresado es: " + info.children[1].value);
    console.log("El apellido ingresado es: " + info.children[2].value);
    if (info.children[3].value.includes("@") && info.children[3].value.includes(".")){
        /* alert("formulario enviado"); */
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Formulario enviado',
          showConfirmButton: false,
          timer: 1500
        })

    }else if(!info.children[3].value.includes("@")){
        alert("El campo Email no contiene @");
        info.children[3].value = "";
        console.log("Correo electrónico incorrecto");
        }
    
});

