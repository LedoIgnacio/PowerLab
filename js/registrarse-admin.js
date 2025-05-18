// -----------------------------
// REGISTRARSE-ADMIN.JS
// -----------------------------

function validarNombreApellido(idInput, idError) {
    var input = document.getElementById(idInput);
    var texto = input.value.trim();
    var error = "";

    if (texto === "") {
        error = "Este campo es obligatorio.";
    } else if (texto.charAt(0) !== texto.charAt(0).toUpperCase()) {
        error = "Debe comenzar con mayúscula.";
    }

    document.getElementById(idError).innerHTML = error;
    document.getElementById(idError).style.color = "red";

    return error === "";
}

function validarPassword(id1, id2, idError) {
    var pass1 = document.getElementById(id1).value;
    var pass2 = document.getElementById(id2).value;
    var error = "";

    if (pass1 !== pass2) {
        error = "Las contraseñas no coinciden.";
    } else if (pass1.length < 6) {
        error = "Debe tener al menos 6 caracteres.";
    } else if (!/[A-Z]/.test(pass1)) {
        error = "Debe contener al menos una mayúscula.";
    } else if (!/[0-9]/.test(pass1)) {
        error = "Debe contener al menos un número.";
    }

    document.getElementById(idError).innerHTML = error;
    document.getElementById(idError).style.color = "red";

    return error === "";
}

function validarFormularioAdmin(evento) {
    var valido = true;

    if (!validarNombreApellido("NombreApellido", "errorNombre")) valido = false;
    if (!validarPassword("Clave1", "Clave2", "errorClave")) valido = false;

    if (!valido) {
        evento.preventDefault();
    } else {
        // Reemplazar login header con texto de admin
        var header = document.querySelector(".Inicio-sesion");
        var nuevo = document.createElement("span");
        nuevo.className = "Inicio-sesion";
        nuevo.innerHTML = "ADMIN: Hola " + document.getElementById("NombreApellido").value;
        header.parentNode.replaceChild(nuevo, header);
    }
}

function prepararMensajesDeError() {
    if (!document.getElementById("errorNombre")) {
        var span = document.createElement("span");
        span.id = "errorNombre";
        document.getElementById("NombreApellido").after(span);
    }
    if (!document.getElementById("errorClave")) {
        var span = document.createElement("span");
        span.id = "errorClave";
        document.getElementById("Clave2").after(span);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    prepararMensajesDeError();
    var formulario = document.querySelector("form");
    formulario.addEventListener("submit", validarFormularioAdmin);
});