// -----------------------------
// CARRITO.JS
// -----------------------------

var carrito = [
    {
        id: 3,
        nombre: "Creatina Micronizada",
        precio: 38000,
        imagen: "EnaCreatina.jpg",
        cantidad: 1
    }
];

function renderizarCarrito() {
    var lista = document.querySelector(".Lista-productos");
    lista.innerHTML = ""; // limpiar

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
                // Quitar producto sin .splice
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
}

function guardarTotal() {
    alert("Simulación: compra por $" + document.querySelector(".Resumen p strong").innerText);
}

document.addEventListener("DOMContentLoaded", function () {
    renderizarCarrito();
});