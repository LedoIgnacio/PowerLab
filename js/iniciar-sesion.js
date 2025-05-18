// -----------------------------
// INICIAR-SESION.JS
// -----------------------------

function validarEmail(idInput, idError) {
    var texto = document.getElementById(idInput).value.trim();
    var error = "";

    if (texto === "") {
        error = "Debe ingresar un correo.";
    }

    document.getElementById(idError).innerHTML = error;
    document.getElementById(idError).style.color = "red";

    return error === "";
}

function validarPassword(idInput, idError) {
    var pass = document.getElementById(idInput).value;
    var error = "";

    if (pass.length < 6) {
        error = "Debe tener al menos 6 caracteres.";
    } else if (!/[A-Z]/.test(pass)) {
        error = "Debe contener al menos una mayúscula.";
    } else if (!/[0-9]/.test(pass)) {
        error = "Debe contener al menos un número.";
    }

    document.getElementById(idError).innerHTML = error;
    document.getElementById(idError).style.color = "red";

    return error === "";
}

function validarFormularioLogin(evento) {
    var valido = true;

    if (!validarEmail("Email", "errorEmail")) valido = false;
    if (!validarPassword("Clave", "errorClave")) valido = false;

    if (!valido) {
        evento.preventDefault();
    } else {
        usuarioEmail = document.getElementById("Email").value;
        if (typeof actualizarHeader === "function") {
            actualizarHeader();
        }
    }
}

function prepararMensajesDeError() {
    if (!document.getElementById("errorEmail")) {
        var span = document.createElement("span");
        span.id = "errorEmail";
        document.getElementById("Email").after(span);
    }
    if (!document.getElementById("errorClave")) {
        var span = document.createElement("span");
        span.id = "errorClave";
        document.getElementById("Clave").after(span);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    prepararMensajesDeError();
    var formulario = document.querySelector("form");
    formulario.addEventListener("submit", validarFormularioLogin);
});