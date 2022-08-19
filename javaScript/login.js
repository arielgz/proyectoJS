const userFormulario = document.querySelector("#formulario-usuario");
const userEmail = document.querySelector("#email-user");
const userPassword = document.querySelector("#password-user");


const clientesRegistrados = JSON.parse(localStorage.getItem("nuevos clientes") || []);
console.log(clientesRegistrados);  


function loguear () {
    let nuevoUsuario = clientesRegistrados.find((element) => element.email === userEmail.value)
    if(nuevoUsuario == undefined){
        swal({
            title: " el Usuario no existe",
            icon: "error", 
         });
    }else if (nuevoUsuario.userPassword !== userPassword.value){
        swal({
            title: "Contraseña Incorrecta",
            icon: "error",
          });
           
         
    }else{
        window.location.href = "../index.html"
    }
}

userFormulario.onsubmit =(e) =>{
    e.preventDefault(e)
    loguear()
}




// const listaDeUsuarios = JSON.parse(localStorage.getItem("usuario")) || [];
// console.log(listaDeUsuarios);


// userFormulario.onsubmit = (e) => {
//     e.preventDefaulte(e)
//     if(userEmail.value !== "" && userPassword.value !== ""){
//         window.location.href = "../index.html"
//         swal({
//             title: "Usuario ingresado correctamente",
//             text: "",
//             icon: "success",
//         });

//     }else if (userEmail.value !== userEmail.value ){
//         swal("EL Email es incorrecto", "error");
//     }else if(userPassword.value !== userPassword.value )
//     swal("La contraseña es incorrecta", "error");


    
// }


