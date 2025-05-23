function mostrarError(idInput, mensaje) {
    var span = document.getElementById("error-" + idInput);
    span.innerText = mensaje;
    span.style.color = "red";
}

function limpiarError(idInput) {
    var span = document.getElementById("error-" + idInput);
    span.innerText = "";
}

function validarNombreApellido() {
    var input = document.getElementById("NombreApellido");
    var texto = input.value.trim();

    if (texto === "") {
        mostrarError("NombreApellido", "Este campo es obligatorio.");
        return false;
    } else if (texto.charAt(0) !== texto.charAt(0).toUpperCase()) {
        mostrarError("NombreApellido", "Debe comenzar con mayúscula.");
        return false;
    }

    limpiarError("NombreApellido");
    return true;
}

function validarEmail() {
    var email = document.getElementById("Email").value.trim();
    var expresion = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {
        mostrarError("Email", "Debe ingresar un correo.");
        return false;
    } else if (!expresion.test(email)) {
        mostrarError("Email", "Correo inválido.");
        return false;
    }

    limpiarError("Email");
    return true;
}

function validarPassword() {
    var pass1 = document.getElementById("Clave1").value;
    var pass2 = document.getElementById("Clave2").value;

    if (pass1 === "" || pass2 === "") {
        mostrarError("Clave2", "Debe completar ambos campos.");
        return false;
    } else if (pass1 !== pass2) {
        mostrarError("Clave2", "Las contraseñas no coinciden.");
        return false;
    } else if (pass1.length < 6) {
        mostrarError("Clave2", "Debe tener al menos 6 caracteres.");
        return false;
    } else if (!/[A-Z]/.test(pass1)) {
        mostrarError("Clave2", "Debe contener al menos una mayúscula.");
        return false;
    } else if (!/[0-9]/.test(pass1)) {
        mostrarError("Clave2", "Debe contener al menos un número.");
        return false;
    }

    limpiarError("Clave2");
    return true;
}

function validarFormularioRegistro(evento) {
    evento.preventDefault();

    var ok1 = validarNombreApellido();
    var ok2 = validarEmail();
    var ok3 = validarPassword();

    if (ok1 && ok2 && ok3) {
        usuarioNombre = document.getElementById("NombreApellido").value;
        if (typeof actualizarHeader === "function") {
            actualizarHeader();
        }
        document.querySelector("form").reset();
    }
}

function prepararMensajesDeError() {
    var ids = ["NombreApellido", "Email", "Clave2"];
    for (var i = 0; i < ids.length; i++) {
        var campo = document.getElementById(ids[i]);
        if (!document.getElementById("error-" + ids[i])) {
            var span = document.createElement("span");
            span.id = "error-" + ids[i];
            span.style.display = "block";
            span.style.marginTop = "4px";
            campo.after(span);
        }
    }
}

document.addEventListener("DOMContentLoaded", function () {
    prepararMensajesDeError();
    var formulario = document.querySelector("form");
    formulario.addEventListener("submit", validarFormularioRegistro);
});