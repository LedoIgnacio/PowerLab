// -----------------------------
// INICIAR-SESION.JS
// -----------------------------

function validarEmail(idInput, idError) {
    var texto = document.getElementById(idInput).value.trim();
    var error = "";

    // Expresión regular simple para validar email
    var patronCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (texto === "") {
        error = "Debe ingresar un correo.";
    } else if (!patronCorreo.test(texto)) {
        error = "El formato del correo no es válido.";
    }

    var span = document.getElementById(idError);
    span.innerHTML = error;
    span.style.color = "red";

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

    var span = document.getElementById(idError);
    span.innerHTML = error;
    span.style.color = "red";

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
    // EMAIL
    if (!document.getElementById("errorEmail")) {
        var span = document.createElement("span");
        span.id = "errorEmail";

        var input = document.getElementById("Email");
        var padre = input.parentNode;
        if (input.nextSibling) {
            padre.insertBefore(span, input.nextSibling);
        } else {
            padre.appendChild(span);
        }
    }

    // CONTRASEÑA
    if (!document.getElementById("errorClave")) {
        var span = document.createElement("span");
        span.id = "errorClave";

        var input = document.getElementById("Clave");
        var padre = input.parentNode;
        if (input.nextSibling) {
            padre.insertBefore(span, input.nextSibling);
        } else {
            padre.appendChild(span);
        }
    }
}

document.addEventListener("DOMContentLoaded", function () {
    prepararMensajesDeError();
    var formulario = document.querySelector("form");
    formulario.addEventListener("submit", validarFormularioLogin);
});