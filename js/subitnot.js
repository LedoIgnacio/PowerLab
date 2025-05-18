document.addEventListener("DOMContentLoaded", iniciarValidacion);

function iniciarValidacion() {
    const form = document.getElementById("miFormulario");
    const btnPublicar = document.getElementById("btnPublicar");
    const btnCancelar = document.getElementById("btnCancelar");
    btnPublicar.addEventListener("click", validarFormulario);
    btnCancelar.addEventListener("click", limpiarMensajesError);
}

function validarFormulario() {
    limpiarMensajesError();

    const titulo = document.getElementById("tit01").value.trim();
    const descripcion = document.getElementById("des01").value.trim();
    const archivo = document.getElementById("arch01").files[0];
    const categoria = document.getElementById("selcat").value;

    let errores = 0;

    if (titulo === "") {
        mostrarError("error-tit01", "El título es obligatorio.");
        errores++;
    } else if (!/^[A-Z]/.test(titulo)) {
        mostrarError("error-tit01", "El título debe comenzar con una letra mayúscula.");
        errores++;
    }

    if (descripcion === "") {
        mostrarError("error-des01", "La descripción es obligatoria.");
        errores++;
    } else if (!/^[A-Z]/.test(descripcion)) {
        mostrarError("error-des01", "La descripción debe comenzar con una letra mayúscula.");
        errores++;
    } else if (!/\.$/.test(descripcion)) {
        mostrarError("error-des01", "La descripción debe terminar con un punto.");
        errores++;
    }

    if (!archivo) {
        mostrarError("error-arch01", "Debe seleccionar una imagen.");
        errores++;
    } else if (!["image/jpeg", "image/png"].includes(archivo.type)) {
        mostrarError("error-arch01", "La imagen debe ser de tipo JPG o PNG.");
        errores++;
    } else if (archivo.size > 2 * 1024 * 1024) {
        mostrarError("error-arch01", "La imagen no debe superar los 2 MB.");
        errores++;
    }

    if (categoria === "0") {
        mostrarError("error-selcat", "Debe seleccionar una categoría.");
        errores++;
    }

    if (errores === 0) {
        document.getElementById("miFormulario").submit();
    }
}

function limpiarMensajesError() {
    const errores = document.querySelectorAll(".error-message");
    errores.forEach(function (error) {
        error.textContent = "";
    });
}

function mostrarError(idElemento, mensaje) {
    const elemento = document.getElementById(idElemento);
    elemento.textContent = mensaje;
}
