 const botonAgregar = document.getElementsByClassName("btn-agregar")
const containerCarrito = document.getElementsByClassName("productoEnCarrito")
// console.log(botonAgregar,containerCarrito)


const productosAlCarrito = [];
console.log(productosAlCarrito)

const convertirAJsonSubirAlLs = (clave, valor) => {
    const arrayJson = JSON.stringify(valor)
    localStorage.setItem(clave, arrayJson)
}

const traerDelLs =  (clave) => {
    const arrayTraidoDelLs = localStorage.getItem(clave) || [];
    const parseArray = JSON.parse(arrayTraidoDelLs)
}


function mostrarProductosCarrito () {
productosAlCarrito.forEach(elemento =>{
    containerCarrito.innerHTML += `
    <div class="compra">
    <img src=${elemento.img} alt="abrigos">
        <h3>${elemento.nombre}</h3>  
        <h3>$ ${elemento.precio}</h3>
        <button class="bnt-borrar" id="${elemento.id}">X</button>
    </div>
    `
})

}






// const productosAlCarrito = [];



// function agregarItemAlCarrito (e) {
//     carritoElement.innerHTML = ""
//     const btn = e.target;
//     const idBtn = btn.getAttribute("id");
//     console.log(idBtn)
//     let productoAgregado = indumentaria.find(elemento => elemento.id === idBtn);
//     productosAlCarrito.push(productoAgregado);
//     console.log(productosAlCarrito)
//     console.log(productoAgregado)

//     localStorage.setItem("agregado al carrito", productosAlCarrito);

//     Toastify({

//         text: `Agregaste ${productoAgregado.nombre}  al carrito`,
        
//         duration: 3000
        
//         }).showToast();

//       mostrarProductosCarrito()  

// }

// for (btn of botonAgregar ) {
//     btn.addEventListener("click", agregarItemAlCarrito)
//     console.log("funciono")
// }



// function mostrarProductosCarrito () {
//     productosAlCarrito.forEach(elemento => {
//         carritoElement.innerHTML += `
//         <div class="compra">
//             <img src= ${elemento.img}>
//             <h3>${elemento.nombre}</h3>
//             <h3> ${elemento.precio.toficed(3)}</h3>
//             <button class="bnt-borrar" id="${producto.id}>X</button>
//         </div>
        
//     <div class="resumen-compra">
//         <p>Resumen de tu cuenta</p>
//         <button>Elegir más productos</button>

//     </div>
// </div>
//         `
//     });
// }







