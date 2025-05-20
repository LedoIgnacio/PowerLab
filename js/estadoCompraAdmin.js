// -----------------------------
// ESTADO-COMPRA-ADMIN.JS
// -----------------------------

function prepararCambioEstado() {
    var pagos = document.querySelectorAll(".Filtro-de-pago");
    var preparaciones = document.querySelectorAll(".Filtro-preparacion");
    var envios = document.querySelectorAll(".Filtro-envio");
    var entregas = document.querySelectorAll(".Filtro-entrega");

    for (var i = 0; i < pagos.length; i++) {
        pagos[i].addEventListener("change", function () {
            // No cambia estilo desde JS
        });
    }

    for (var i = 0; i < preparaciones.length; i++) {
        preparaciones[i].addEventListener("change", function () {
            // No cambia estilo desde JS
        });
    }

    for (var i = 0; i < envios.length; i++) {
        envios[i].addEventListener("change", function () {
            // No cambia estilo desde JS
        });
    }

    for (var i = 0; i < entregas.length; i++) {
        entregas[i].addEventListener("change", function () {
            // No cambia estilo desde JS
        });
    }
}

function filtrarTabla() {
    var input = document.getElementById("buscar");
    var filtro = input.value.toLowerCase();
    var filas = document.querySelectorAll("tbody tr");

    for (var i = 0; i < filas.length; i++) {
        var textoFila = filas[i].innerText.toLowerCase();
        if (textoFila.indexOf(filtro) !== -1) {
            filas[i].style.display = "";
        } else {
            filas[i].style.display = "none";
        }
    }
}

document.addEventListener("DOMContentLoaded", function () {
    prepararCambioEstado();
});