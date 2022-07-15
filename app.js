//Arreglo de productos 
/* const arr1 = [
    {nombre: "paleta", precio: 15000, descripcion: "wilson"},
    {nombre: "paleta", precio: 30000, descripcion: "bullpadel"},
    {nombre: "paleta", precio: 45000, descripcion: "adiddas"},
    {nombre: "zapatillas", precio: 10000, descripcion: "fila"},
    {nombre: "zapatillas", precio: 9000, descripcion: "topper"},
    {nombre: "zapatillas", precio: 12000, descripcion: "adiddas"},
]; */
//Mostrar los productos de la lista completa
/*     for (const producto of arr1){
    console.log(producto.nombre);
    }



 */
//Consultar disponibilidad del producto
//const prodDisponible = prompt("Ingrese producto a verificar disponibilidad").toLowerCase();
//const result1 = arr1.some(elemento => elemento.nombre = prodDisponible);
 //       if(result1){
 //           alert("Producto disponible");
 //          //Filtrar para conocer el stock de ese producto
 //           const productoFiltrado = arr1.filter((elemento) => elemento.nombre == prodDisponible);
 //           alert(`El stock del prodcuto ${prodDisponible} es: ${productoFiltrado.length}`); /*error! si coloco zapatillas me sale que hay 4 en stock*/ //y si pongo .length-1 en paleta me sale 2
 //           console.log(productoFiltrado.length);
 //       }else{
 //           alert("Prodcuto no disponible");
 //       }

//Agregar productos 
/* const productosAgregados = parseInt(prompt("En caso de ser adm ingrese la cantidad de productos a agregar al listado"));
const mensaje2 = alert(`La cantidad de productos que vas a ingresar es de ${productosAgregados}`)
for(let i = 0; i < productosAgregados; i++){
    let nombre = prompt("Ingrese el nombre");
    let precio = prompt("Ingrese el precio");
    let descripcion = prompt("Ingrese la descripción");
    
    arr1.push({nombre: nombre, precio: precio, descripcion: descripcion});
    
}

 */


/*INTERECACCIÓN CON HTML****************************************************************************/
//seccion admin

let container = document.getElementById("divFormAdmin");
/* let prodcutoAgregar = prompt("Ingrese el nombre del producto para agregarlo"); */
let listaProductos = [
    {id: 1, nombre: "paleta", precio: 15000, descripcion: "wilson", imagen: "./img/wilson.png"},
    {id: 2, nombre: "paleta", precio: 30000, descripcion: "bullpadel", imagen: "./img/bullpadel.png"},
    {id: 3, nombre: "paleta", precio: 45000, descripcion: "adiddas", imagen: "./img/adiddas.png"},
    {id: 4, nombre: "zapatillas", precio: 10000, descripcion: "fila", imagen: "./img/fila.png"},
    {id: 5, nombre: "zapatillas", precio: 9000, descripcion: "topper", imagen: "./img/zapatillas toper.png"},
    {id: 6, nombre: "zapatillas", precio: 12000, descripcion: "adiddas", imagen: "./img/z-adidas.png"},
];


/* listaProductos.push(prodcutoAgregar); */
for(const producto of listaProductos){
    let item = document.createElement("div");
    item.innerHTML = `<h2>${producto.nombre}</h2>
                      <h4>${producto.descripcion}</h4>  
                    <b>Precio: ${producto.precio}</b>
                    <h6>ID: ${producto.id}</h6>
                    <img src="${producto.imagen}">
                    `;
    item.className += "productosCarrito";
    container.append(item);
    
}

const botonClickAca = document.getElementById("btnProducto1");
/* function respuestaClick(){
    console.log("respuesta click");
} */
botonClickAca.addEventListener("click", () => console.log("Hiciste click en ver ofertas"));

/* let nombre = document.getElementById("nombre"); */
/* nombre.addEventListener("keyup", (e) => {
    if(e.key != "Enter"){
        
    }else{
        alert("presiono enter")
        
    }
}); */


//evento change
//nombre.addEventListener("change", () => console.log("Te saliste del campo"));

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
        alert("El campo campo Email no contiene @");
        info.children[3].value = "";
        console.log("Correo electrónico incorrecto");
    }
})

