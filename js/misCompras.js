// -----------------------------
// MIS-COMPRAS.JS
// -----------------------------

function obtenerTotalDesdeURL() {
    var query = document.location.search;
    if (query.indexOf("total=") !== -1) {
        return query.split("total=")[1];
    }
    return null;
}

function crearCompraBox(total) {
    var slate = document.querySelector(".Slate");

    var contenedor = document.createElement("div");
    contenedor.className = "Compra-box";

    var info = document.createElement("div");
    info.className = "Compra-info";

    var imagenes = document.createElement("div");
    imagenes.className = "Compra-imagenes";

    var img = document.createElement("img");
    img.src = "../01-Index/EnaCreatina.jpg";
    img.alt = "Producto 1";
    imagenes.appendChild(img);

    var datos = document.createElement("div");
    datos.className = "Compra-datos";

    var texto = document.createElement("p");
    texto.innerHTML = "<strong>Total:</strong> $" + total;

    datos.appendChild(texto);
    info.appendChild(imagenes);
    info.appendChild(datos);

    var estado = document.createElement("div");
    estado.className = "Estado-compra";
    estado.innerHTML = `
        <p><strong>Estado del pedido:</strong></p>
        <div class="Linea-tiempo">
            <span class="estado activo">Pagado</span>
            <span class="separador"></span>
            <span class="estado">En preparación</span>
            <span class="separador"></span>
            <span class="estado">Enviado</span>
            <span class="separador"></span>
            <span class="estado">Entregado</span>
        </div>
    `;

    contenedor.appendChild(info);
    contenedor.appendChild(estado);

    slate.appendChild(contenedor);
}

document.addEventListener("DOMContentLoaded", function () {
    var total = obtenerTotalDesdeURL();
    if (total !== null) {
        crearCompraBox(total);
    }
});