const containerSweaters = document.querySelector("#containerCard-sweaters");



function mostrarIndumentarias (array) {
    array.forEach(elemento => {
        containerSweaters.innerHTML +=`
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

function filtrarSweaters () {
    const sweatersFiltrados = indumentaria.filter(item => item.categoria === "sweaters");
    console.log(sweatersFiltrados);
    containerSweaters.innerHTML = ""
    mostrarIndumentarias(sweatersFiltrados);

}
filtrarSweaters(indumentaria)