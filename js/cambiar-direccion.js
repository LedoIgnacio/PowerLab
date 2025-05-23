function mostrarMensaje(idInput, mensaje, color) {
    var span = document.getElementById("error-" + idInput);
    span.innerText = mensaje;
    span.style.color = color;
}

function validarDireccion() {
    var valor = document.getElementById("direccion").value.trim();
    if (valor === "") {
        mostrarMensaje("direccion", "Debe ingresar una dirección.", "red");
        return false;
    }
    mostrarMensaje("direccion", "", "red");
    return true;
}

function validarCiudad() {
    var valor = document.getElementById("ciudad").value.trim();
    if (valor === "") {
        mostrarMensaje("ciudad", "Debe ingresar una ciudad.", "red");
        return false;
    }
    mostrarMensaje("ciudad", "", "red");
    return true;
}

function validarCodigoPostal() {
    var valor = document.getElementById("codigo-postal").value.trim();
    if (!/^\d{4,8}$/.test(valor)) {
        mostrarMensaje("codigo-postal", "Debe tener solo números (Min 4 - Max 8).", "red");
        return false;
    }
    mostrarMensaje("codigo-postal", "", "red");
    return true;
}

function prepararMensajesDeError() {
    var ids = ["direccion", "ciudad", "codigo-postal"];
    for (var i = 0; i < ids.length; i++) {
        var campo = document.getElementById(ids[i]);
        if (!document.getElementById("error-" + ids[i])) {
            var span = document.createElement("span");
            span.id = "error-" + ids[i];
            campo.after(span);
        }
    }
}

function validarFormulario(evento) {
    evento.preventDefault(); 

    var ok1 = validarDireccion();
    var ok2 = validarCiudad();
    var ok3 = validarCodigoPostal();

    var exito = document.getElementById("mensaje-exito");
    if (exito) exito.remove(); 

    if (ok1 && ok2 && ok3) {
        var span = document.createElement("span");
        span.id = "mensaje-exito";
        span.innerText = "Dirección guardada correctamente.";
        span.style.color = "green";
        span.style.display = "block";
        span.style.marginTop = "10px";
        document.querySelector("form").appendChild(span);
        document.querySelector("form").reset();
    }
}

document.addEventListener("DOMContentLoaded", function () {
    prepararMensajesDeError();
    var form = document.querySelector("form");
    form.addEventListener("submit", validarFormulario);
});