const containerAbrigo = document.querySelector("#containerCard-abrigos");


function mostrarIndumentarias (array) {
    array.forEach(elemento => {
        containerAbrigo.innerHTML +=`
        <div class="content-card">
                <div class="img-card">
                    <img src=${elemento.img}>
                </div>
                <div class="texto-card">
                    <h3>${elemento.nombre}</h3>
                    <span>$${elemento.precio.toFixed(3)}</span>
                </div>
                <div class="btn-card"><button  id="btn-agregar">Agregar al carrito</button>
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

   


