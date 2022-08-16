const userFormulario = document.querySelector("#formulario-usuario");
const userEmail = document.querySelector("#email-user");
const userPassword = document.querySelector("#password-user");


const listaDeUsuarios = JSON.parse(localStorage.getItem("usuario")) || [];
console.log(listaDeUsuarios);


userFormulario.onsubmit = (e) => {
    e.preventDefaulte(e)
    if(userEmail.value !== "" && userPassword.value !== ""){
        window.location.href = "../index.html"
        swal({
            title: "Usuario ingresado correctamente",
            text: "",
            icon: "success",
        });

    }else if (userEmail.value !== userEmail.value ){
        swal("EL Email es incorrecto", "error");
    }else if(userPassword.value !== userPassword.value )
    swal("La contraseña es incorrecta", "error");


    
}


