// -----------------------------
// CARGAR-PRODUCTO.JS
// -----------------------------

function validarTexto(idInput, idError) {
    var valor = document.getElementById(idInput).value.trim();
    var error = "";

    if (valor === "") {
        error = "Este campo es obligatorio.";
    }

    var span = document.getElementById(idError);
    span.innerHTML = error;
    span.style.color = "red";

    return error === "";
}

function validarPrecio(idInput, idError) {
    var valor = document.getElementById(idInput).value.trim();
    var error = "";

    if (valor === "") {
        error = "Debe ingresar un precio.";
    } else if (isNaN(valor) || parseFloat(valor) <= 0) {
        error = "Ingrese un número válido mayor a cero.";
    }

    var span = document.getElementById(idError);
    span.innerHTML = error;
    span.style.color = "red";

    return error === "";
}

function validarImagen(idInput, idError) {
    var archivo = document.getElementById(idInput).value;
    var error = "";

    if (archivo === "") {
        error = "Debe seleccionar una imagen.";
    } else {
        var permitido = /\.(jpg|jpeg|png)$/i;
        if (!permitido.test(archivo)) {
            error = "Solo se permiten archivos JPG o PNG.";
        }
    }

    var span = document.getElementById(idError);
    span.innerHTML = error;
    span.style.color = "red";

    return error === "";
}

function prepararMensajesDeError() {
    var ids = ["NombreMarca", "Precio", "Descripcion", "Imagen"];
    var errores = ["errorNombre", "errorPrecio", "errorDescripcion", "errorImagen"];

    for (var i = 0; i < ids.length; i++) {
        if (!document.getElementById(errores[i])) {
            var span = document.createElement("span");
            span.id = errores[i];
            var input = document.getElementById(ids[i]);
            var padre = input.parentNode;
            if (input.nextSibling) {
                padre.insertBefore(span, input.nextSibling);
            } else {
                padre.appendChild(span);
            }
        }
    }
}

function validarFormularioCargar(evento) {
    var valido = true;

    if (!validarTexto("NombreMarca", "errorNombre")) valido = false;
    if (!validarPrecio("Precio", "errorPrecio")) valido = false;
    if (!validarTexto("Descripcion", "errorDescripcion")) valido = false;
    if (!validarImagen("Imagen", "errorImagen")) valido = false;

    if (!valido) {
        evento.preventDefault();
    } else {
        evento.preventDefault(); // Simulación de envío
        var exito = document.createElement("p");
        exito.innerText = "Producto cargado correctamente.";
        exito.style.color = "green";
        document.querySelector("form").appendChild(exito);
        document.querySelector("form").reset();
    }
}

document.addEventListener("DOMContentLoaded", function () {
    prepararMensajesDeError();
    var form = document.querySelector("form");
    form.addEventListener("submit", validarFormularioCargar);
});