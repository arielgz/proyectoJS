const containerAbrigo = document.querySelector("#containerCard-abrigos");
const botonAgregar = document.getElementsByClassName("btn-agregar");

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
    containerCarrito.innerHTML = "";
    const boton = e.target;
    console.log(boton)
    const botonId = boton.getAttribute("id");
    const productoAgregado = indumentaria.find(elemento => elemento.id === botonId);
    productosAlCarrito.push(productoAgregado);
    console.log(productoAgregado)

    convertirAJsonSubirAlLs("carrito", productosAlCarrito);
    traerDelLs("carrito")

    
}
    
    


for (boton of botonAgregar) {
    boton.addEventListener("click" ,agregarItemACarrito)
}




