const formularioRegistro = document.querySelector("#formulario-registro");
const nombreElemento = document.querySelector("#nombre");
const apellidoElemento = document.querySelector("#apellido");
const emailElemento = document.querySelector("#email");
const passwordElemento = document.querySelector("#contrasenia");
const errorRegistro = document.querySelector("#registro-error");

// errorRegistro.style.display = "none";



const listaDeClientes = [];


class Cliente {
    constructor (nombre, apellido,email,contrasenia){
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.contrasenia = contrasenia;
    }
}


formularioRegistro.onsubmit = (e) =>{
    e.preventDefault()


    if(nombreElemento.value !== "", apellidoElemento.value!== "", emailElemento.value !== "",passwordElemento.value !== "" ) {
        listaDeClientes.push(new Cliente (nombreElemento.value,apellidoElemento.value, emailElemento.value,passwordElemento.value));
        const listaDeClientesJSON = JSON.stringify(listaDeClientes);
        localStorage.setItem("lista de clientes",listaDeClientesJSON);
        window.location.href = "../secciones/login.html"
        formularioRegistro.reset();
        console.log(listaDeClientes);
    }else {
        swal({
            title: "Por favor, completé todos los campos",
            text: "",
            icon: "warning",
        });
        formularioRegistro.reset();
    }

}






