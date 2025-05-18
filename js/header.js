// -----------------------------
// HEADER.JS
// -----------------------------

var usuarioNombre = null;
var usuarioEmail = null;

function actualizarHeader() {
    var nodoLogin = document.querySelector(".Inicio-sesion");
    var padre = nodoLogin.parentNode;

    if (usuarioNombre !== null || usuarioEmail !== null) {
        var nuevoSpan = document.createElement("span");
        nuevoSpan.className = "Inicio-sesion"; // mantenemos estilos CSS

        if (usuarioNombre !== null) {
            nuevoSpan.innerHTML = "Hola " + usuarioNombre;
        } else {
            nuevoSpan.innerHTML = "Hola " + usuarioEmail;
        }

        padre.replaceChild(nuevoSpan, nodoLogin); // reemplaza el <a> por <span>
    }
}

function actualizarCarrito(numero) {
    var nodo = document.querySelector(".Contador");
    nodo.innerHTML = numero;
}

// ✅ Esperar que cargue el documento
document.addEventListener("DOMContentLoaded", function () {
    actualizarHeader();
});