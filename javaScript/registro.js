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

const pushearClienteArray = (array, valor) =>{
        array.push(valor)

}
const aJsonYSubirLocalStorage = (clave, valor) => {
    const arrayAJson = JSON.stringify(valor)
    localStorage.setItem(clave, arrayAJson)
}

const devolverDelLocalStorage = (clave) => {
    const arrayDelLocalStorage = localStorage.getItem(clave) || "[]";
    const parseoDeArray = JSON.parse(arrayDelLocalStorage)
    return parseoDeArray
    
    
}

formularioRegistro.onsubmit = (e) => {
    e.preventDefault(e)
    if(nombreElemento.value !== "",apellidoElemento.value !== "",emailElemento.value !== "", passwordElemento.value !== ""){
        pushearClienteArray(listaDeClientes, new Cliente (nombreElemento.value, apellidoElemento.value, emailElemento.value, passwordElemento.value));
        console.log(listaDeClientes)
        aJsonYSubirLocalStorage("nuevos clientes", listaDeClientes);
        devolverDelLocalStorage("nuevos clientes");
        window.location.href = "../secciones/login.html"
        formularioRegistro.reset()
    }else {
        swal({
            title: "Por favor, complete todos los campos",
            text: "",
            icon: "warning",
            });
            formularioRegistro.reset();
    }
    
}








