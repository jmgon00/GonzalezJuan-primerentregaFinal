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