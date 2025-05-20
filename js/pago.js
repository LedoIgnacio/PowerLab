// -----------------------------
// PAGO.JS
// -----------------------------

function obtenerTotalDesdeURL() {
    var query = document.location.search;
    if (query.indexOf("total=") !== -1) {
        return query.split("total=")[1];
    }
    return null;
}

function cargarPago() {
    var total = obtenerTotalDesdeURL();

    if (total !== null) {
        document.getElementById("Total-pagar").innerText = "$" + total;

        // Redirigir a MisCompras con el mismo total
        var boton = document.querySelector(".Boton-Redireccion");
        boton.href = "../18-MisCompras/MisCompras.html?total=" + total;
    }
}

document.addEventListener("DOMContentLoaded", function () {
    cargarPago();
});