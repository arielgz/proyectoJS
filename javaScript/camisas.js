const containerCamisas = document.querySelector("#containerCard-camisas");

function mostrarIndumentarias (array) {
    array.forEach(elemento => {
        containerCamisas.innerHTML +=`
        <div class="content-card">
                <div class="img-card">
                    <img src=${elemento.img}>
                </div>
                <div class="texto-card">
                    <h3>${elemento.nombre}</h3>
                    <span>$${elemento.precio.toFixed(3)}</span>
                </div>
                <div class="btn-card">
                <button class="btn-agregar">Agregar al carrito</button>
                </div>
            </div> `
        
    });
}
mostrarIndumentarias(indumentaria);


function filtrarCamisas () {
    const camisasFiltradas = indumentaria.filter(item => item.categoria === "camisas");
    console.log(camisasFiltradas);
    containerCamisas.innerHTML = ""
    mostrarIndumentarias(camisasFiltradas);

}
filtrarCamisas(indumentaria)