// -----------------------------
// INDEX.JS
// -----------------------------

function inicializarTarjetas() {
    var tarjetas = document.querySelectorAll(".Tarjeta1, .Tarjeta2");

    for (var i = 0; i < tarjetas.length; i++) {
        tarjetas[i].addEventListener("click", function (evento) {
            evento.preventDefault();

            // Mapeo manual del texto visual a categoría real
            var texto = this.querySelector("span").innerText.trim().toLowerCase();

            var Categorias = {
                "recuperación": "Recuperación",
                "fuerza y resistencia": "Creatina",
                "energía": "Energía",
                "preparación y +peso": "Preparación-GanadorPeso",
                "pancakes proteicos": "Recetas",
                "keto pancakes": "Recetas",
                "cupcakes proteicos": "Recetas"
            };

            var categoriaReal = Categorias[texto];

            if (categoriaReal) {
                var url = "../14-Productos/Productos.html?categoria=" + encodeURIComponent(categoriaReal);
                window.location.href = url;
            } else {
                // fallback: ir sin filtro
                window.location.href = "../14-Productos/Productos.html";
            }
        });
    }
}

document.addEventListener("DOMContentLoaded", function () {
    inicializarTarjetas();
});