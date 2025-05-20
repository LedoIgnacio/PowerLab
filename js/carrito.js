// -----------------------------
// CARRITO.JS
// -----------------------------

var carrito = [];

function cargarCarritoDesdeURL() {
    var query = document.location.search;

    if (query.indexOf("id=") !== -1) {
        var datos = {};
        var partes = query.substring(1).split("&");

        for (var i = 0; i < partes.length; i++) {
            var par = partes[i].split("=");
            datos[par[0]] = decodeURIComponent(par[1]);
        }

        var item = {
            id: parseInt(datos.id),
            nombre: datos.nombre,
            precio: parseInt(datos.precio),
            imagen: datos.imagen,
            sabor: datos.sabor,
            cantidad: parseInt(datos.cantidad)
        };

        carrito[carrito.length] = item;
    }
}

function renderizarCarrito() {
    var lista = document.querySelector(".Lista-productos");
    lista.innerHTML = "";

    var resumen = document.querySelector(".Resumen");

    if (carrito.length === 0) {
        resumen.style.display = "none";
        return;
    } else {
        resumen.style.display = "block";
    }

    for (var i = 0; i < carrito.length; i++) {
        var prod = carrito[i];

        var item = document.createElement("div");
        item.className = "Item-carrito";

        var img = document.createElement("img");
        img.src = "../01-Index/" + prod.imagen;
        img.alt = prod.nombre;

        var info = document.createElement("div");
        info.className = "Info";

        var titulo = document.createElement("h3");
        titulo.innerText = prod.nombre;

        var precio = document.createElement("p");
        precio.innerText = "Precio: $" + prod.precio;

        var controles = document.createElement("div");
        controles.className = "Cantidad-control";

        var btnRestar = document.createElement("button");
        btnRestar.className = "btn-cantidad";
        btnRestar.innerText = "-";
        btnRestar.onclick = (function (index) {
            return function () {
                if (carrito[index].cantidad > 1) {
                    carrito[index].cantidad--;
                    renderizarCarrito();
                }
            };
        })(i);

        var input = document.createElement("input");
        input.type = "number";
        input.className = "input-cantidad";
        input.value = prod.cantidad;
        input.min = 1;
        input.disabled = true;

        var btnSumar = document.createElement("button");
        btnSumar.className = "btn-cantidad";
        btnSumar.innerText = "+";
        btnSumar.onclick = (function (index) {
            return function () {
                carrito[index].cantidad++;
                renderizarCarrito();
            };
        })(i);

        controles.appendChild(btnRestar);
        controles.appendChild(input);
        controles.appendChild(btnSumar);

        info.appendChild(titulo);
        info.appendChild(precio);
        info.appendChild(controles);

        var btnEliminar = document.createElement("button");
        btnEliminar.className = "Eliminar";
        btnEliminar.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
        btnEliminar.onclick = (function (index) {
            return function () {
                for (var j = index; j < carrito.length - 1; j++) {
                    carrito[j] = carrito[j + 1];
                }
                carrito.length--;
                renderizarCarrito();
            };
        })(i);

        item.appendChild(img);
        item.appendChild(info);
        item.appendChild(btnEliminar);

        lista.appendChild(item);
    }

    actualizarTotal();
}

function actualizarTotal() {
    var total = 0;
    for (var i = 0; i < carrito.length; i++) {
        total += carrito[i].precio * carrito[i].cantidad;
    }

    var resumen = document.querySelector(".Resumen p strong");
    resumen.innerText = "$" + total;

    var boton = document.querySelector(".Boton-pago");
    if (total > 0) {
        boton.href = "../17-Pago/Pago.html?total=" + total;
        boton.style.display = "inline-block";
    } else {
        boton.style.display = "none";
    }
}

document.addEventListener("DOMContentLoaded", function () {
    cargarCarritoDesdeURL();
    renderizarCarrito();
});