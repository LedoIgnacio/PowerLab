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
    var imagenes = document.querySelector(".Imagenes");
    imagenes.innerHTML = "";

    var img = document.createElement("img");
    img.src = "../01-Index/" + prod.imagen;
    img.alt = prod.nombre;
    imagenes.appendChild(img);

    var detalles = document.querySelector(".Detalles");
    detalles.querySelector("h2").innerText = prod.nombre;

    var parrafo = detalles.querySelectorAll(".Txt-Detalles")[0];
    parrafo.innerHTML = "Precio: $" + prod.precio + " / Envío: $3000";

    var descripcion = detalles.querySelectorAll(".Txt-Detalles")[1];
    descripcion.innerHTML = "Descripción:<br><br>" + prod.descripcion;

    var select = document.getElementById("Sabores");
    select.innerHTML = "<option value='Seleccionar'>Seleccionar</option>";
    for (var i = 0; i < prod.sabores.length; i++) {
        var opt = document.createElement("option");
        opt.value = prod.sabores[i];
        opt.text = prod.sabores[i];
        select.appendChild(opt);
    }

    var boton = detalles.querySelector("button");
    boton.addEventListener("click", function () {
        var saborElegido = select.value;
        var mensajeError = document.getElementById("error-sabor");
        mensajeError.innerText = "";

        if (saborElegido === "Seleccionar") {
            mensajeError.innerText = "Por favor seleccioná un sabor.";
            return;
        }

        // Redirige a carrito con los datos por URL
        var link = "../16-Carrito/Carrito.html?";
        link += "id=" + prod.id;
        link += "&nombre=" + encodeURIComponent(prod.nombre);
        link += "&precio=" + prod.precio;
        link += "&imagen=" + prod.imagen;
        link += "&sabor=" + encodeURIComponent(saborElegido);
        link += "&cantidad=1";

        window.location.href = link;
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