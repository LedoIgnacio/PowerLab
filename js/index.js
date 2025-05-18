// -----------------------------
// INDEX.JS
// -----------------------------

function inicializarTarjetas() {
    var tarjetas = document.querySelectorAll(".Tarjeta1, .Tarjeta2");

    for (var i = 0; i < tarjetas.length; i++) {
        tarjetas[i].addEventListener("click", function (evento) {
            evento.preventDefault();

            var textoCategoria = this.querySelector("span").innerText;
            var categoriaURL = encodeURIComponent(textoCategoria.trim());

            window.location.href = "../14-Productos/Productos.html?categoria=" + categoriaURL;
        });
    }
}

document.addEventListener("DOMContentLoaded", function () {
    inicializarTarjetas();
});