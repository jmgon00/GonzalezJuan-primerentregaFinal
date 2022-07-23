
/*INTERECACCIÓN CON HTML****************************************************************************/


let container = document.getElementById("divFormAdmin");
let listaProductos = [
    {id: 1, nombre: "paleta", precio: 15000, descripcion: "wilson", imagen: "./img/wilson.png"},
    {id: 2, nombre: "paleta", precio: 30000, descripcion: "bullpadel", imagen: "./img/bullpadel.png"},
    {id: 3, nombre: "paleta", precio: 45000, descripcion: "adiddas", imagen: "./img/adiddas.png"},
    {id: 4, nombre: "zapatillas", precio: 10000, descripcion: "fila", imagen: "./img/fila.png"},
    {id: 5, nombre: "zapatillas", precio: 9000, descripcion: "topper", imagen: "./img/zapatillas toper.png"},
    {id: 6, nombre: "zapatillas", precio: 12000, descripcion: "adiddas", imagen: "./img/z-adidas.png"},
];

for(const producto of listaProductos){
    let item = document.createElement("div");
    item.innerHTML = `<h2>${producto.nombre}</h2>
                      <h4>${producto.descripcion}</h4>  
                    <b>Precio: $ ${producto.precio}</b>
                    <h6>ID DE PRODUCTO: ${producto.id}</h6>
                    <img src="${producto.imagen}">
                    `;
    item.className += "productosCarrito";
    container.append(item);
    
}

//seccion admin

//sessionStorage
let user;
const array = [];
let userStorage = sessionStorage.getItem("usuario");
let paisUserStorage = sessionStorage.getItem("pais");

if(userStorage){
    user = userStorage;
    pais = paisUserStorage;
    let response = `Bienvenido ${user}`;

    alert(response);
}else {
    user = prompt("Ingrese su nombre");
    pais = prompt("Ingrese su país")
   
   
} 
let nombreCompletoUser = sessionStorage.setItem("usuario", user);
let paisCompletoUser = sessionStorage.setItem("pais", pais);
/* console.log(nombreCompletoUser);
console.log(typeof(nombreCompletoUser)); */
//localStorage - guardar productos 
localStorage.setItem("listaProductos", JSON.stringify(listaProductos));

const h2divUsuario = document.getElementById("h2divUsuario");
const h4divUsuario = document.getElementById("h4divUsuario");
h2divUsuario.innerHTML += user;
h4divUsuario.innerHTML += pais;





//funcion para actualizar precio - admin
function actPrecio (id, precio){
    let productoStorage = JSON.parse(localStorage.getItem("listaProductos"));
    let productoEncontrado = productoStorage.find(elemento => elemento.id === id);
    productoEncontrado.precio = precio;

    localStorage.setItem("listaProductos", JSON.stringify(productoStorage));
}

actPrecio(2, 3000);

//primer modelo para consultar productos a consultar disponibilidad
const botonClickAca = document.getElementById("btnProducto1");

botonClickAca.addEventListener("click", (e) => {
   console.log("Hiciste click en ver disponibilidad del producto");
   let mensaje1 = parseInt(prompt("¿Que producto deseas filtrar? 1-Paletas 2-Zapatillas"));
   console.log(mensaje1);
   if (mensaje1 === 1){
    alert("Hiciste click en Paletas");
   }else if (mensaje1 === 2){
    alert("Hiciste click en Zapatillas");
   }else {
    alert("No seleccionaste correctarmente, apretar F5");
   }
});




//evento input
let maxDigitos = document.getElementById("maxDigitos");

//validacion para que no exceda el maximo de 15 caracteres
maxDigitos.addEventListener("input", () => {
    if (maxDigitos.value.length === 15){
        alert("Te excediste de los 15 digitos")
    }
});

/*Error no se valida en el segundo input con la misma clase la condicion******************/

//evento submit
let form = document.getElementById("form");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let info = e.target;
    console.log("El nombre ingresado es: " + info.children[1].value);
    console.log("El apellido ingresado es: " + info.children[2].value);
    if (info.children[3].value.includes("@") && info.children[3].value.includes(".")){
        alert("formulario enviado");
    }else if(!info.children[3].value.includes("@")){
        alert("El campo Email no contiene @");
        info.children[3].value = "";
        console.log("Correo electrónico incorrecto");
    }
})

