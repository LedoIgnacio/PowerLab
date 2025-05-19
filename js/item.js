// -----------------------------
// ITEM.JS
// -----------------------------

var carrito = [];

function obtenerIdDesdeURL() {
    var query = document.location.search;
    if (query.indexOf("id=") !== -1) {
        return parseInt(query.split("id=")[1]);
    }
    return null;
}

function buscarProductoPorId(id) {
    for (var i = 0; i < productos.length; i++) {
        if (productos[i].id === id) {
            return productos[i];
        }
    }
    return null;
}

function cargarProducto(prod) {
    // Imagen principal
    var imagenes = document.querySelector(".Imagenes");
    imagenes.innerHTML = ""; // limpiar

    var img = document.createElement("img");
    img.src = "../01-Index/" + prod.imagen;
    img.alt = prod.nombre;

    imagenes.appendChild(img);

    // Detalles
    var detalles = document.querySelector(".Detalles");
    detalles.querySelector("h2").innerText = prod.nombre;

    var parrafo = detalles.querySelectorAll(".Txt-Detalles")[0];
    parrafo.innerHTML = "Precio: $" + prod.precio + " / Envío: $3000";

    // Descripción
    var descripcion = detalles.querySelectorAll(".Txt-Detalles")[1];
    descripcion.innerHTML = "Descripción:<br><br>" + prod.descripcion;

    // Sabores
    var select = document.getElementById("Sabores");
    select.innerHTML = "<option value='Seleccionar'>Seleccionar</option>";
    for (var i = 0; i < prod.sabores.length; i++) {
        var opt = document.createElement("option");
        opt.value = prod.sabores[i];
        opt.text = prod.sabores[i];
        select.appendChild(opt);
    }

    // Botón
    var boton = detalles.querySelector("button");
    boton.addEventListener("click", function () {
        var saborElegido = select.value;
        if (saborElegido === "Seleccionar") {
            alert("Por favor seleccioná un sabor.");
            return;
        }

        var itemCarrito = {
            id: prod.id,
            nombre: prod.nombre,
            precio: prod.precio,
            imagen: prod.imagen,
            sabor: saborElegido,
            cantidad: 1
        };

        // Sin .push() → forma básica
        carrito[carrito.length] = itemCarrito;

        if (typeof actualizarCarrito === "function") {
            actualizarCarrito(carrito.length);
        }

        alert("Producto agregado al carrito.");
    });
}

function iniciarItem() {
    var id = obtenerIdDesdeURL();
    if (id !== null) {
        var producto = buscarProductoPorId(id);
        if (producto !== null) {
            cargarProducto(producto);
        }
    }
}

document.addEventListener("DOMContentLoaded", function () {
    iniciarItem();
});