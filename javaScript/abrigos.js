const containerAbrigo = document.querySelector("#containerCard-abrigos");
// const botonAgregar = document.getElementsByClassName("btn-agregar");
// const containerCarrito = document.getElementsByClassName("seccion-carrito")

console.log(botonAgregar);


function mostrarIndumentarias (array) {
    array.forEach(elemento => {
        containerAbrigo.innerHTML +=`
        <div class="content-card">
                <div class="img-card">
                    <img src=${elemento.img}>
                </div>
                <div class="texto-card">
                    <h3>${elemento.nombre}</h3>
                    <span>$ ${elemento.precio.toFixed(3)}</span>
                </div>
                <div class="btn-card"> 
                <button class="btn-agregar" id=${elemento.id}>Agregar al carrito</button>
                </div>
        </div> `
        
    });
}
mostrarIndumentarias(indumentaria);


function filtrarAbrigos (){
    const abrigosFiltrados = indumentaria.filter(item => item.categoria === "abrigos" )
    containerAbrigo.innerHTML = ""
    mostrarIndumentarias(abrigosFiltrados);
}
filtrarAbrigos(indumentaria);







function agregarItemACarrito (e) {
    const boton = e.target
    const botonId = Number(boton.id)
    const productoAgregado = indumentaria.find(elemento => elemento.id === botonId)
    productosAlCarrito.push(productoAgregado)

    convertirAJsonSubirAlLs("carrito", productosAlCarrito);
    traerDelLs("carrito")


    Toastify({
        text: `Agregaste ${productoAgregado.nombre}  al carrito`,
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "bottom", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #373B44, ,#4286f4)"
        },
        onClick: function(){} // Callback after click
      }).showToast();

    // Toastify({

    //             text: `Agregaste ${productoAgregado.nombre}  al carrito`,
                
    //             duration: 3000
                
    //             }).showToast();
        

    mostrarProductosCarrito()

}



for ( boton of botonAgregar) {
    boton.addEventListener("click", agregarItemACarrito)
}







