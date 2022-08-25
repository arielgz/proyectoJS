const remerasContainer = document.querySelector("#containerCard-remeras");


const respuestaApi = () => {
    fetch("../indumentaria.json")
    .then(respuesta =>respuesta.json())
    .then(data => {
    mostrarAHtml(data.productos);

    })
    


}
respuestaApi()

const mostrarAHtml = (array) => {
    array.forEach(elemento => {
        remerasContainer.innerHTML += `
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
        
    })
}













