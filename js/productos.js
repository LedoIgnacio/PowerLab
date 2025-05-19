// -----------------------------
// PRODUCTOS.JS
// -----------------------------

function obtenerFiltroDesdeURL() {
    var query = document.location.search;

    if (query.indexOf("categoria=") !== -1) {
        var valor = query.split("categoria=")[1];
        valor = decodeURIComponent(valor);

        // Match exacto con las categorías válidas
        var categoriasValidas = [
            "Recuperación",
            "Energía",
            "Creatina",
            "Proteina",
            "Preentreno",
            "Preparación-GanadorPeso",
            "Recetas"
        ];

        for (var i = 0; i < categoriasValidas.length; i++) {
            if (valor.toLowerCase() === categoriasValidas[i].toLowerCase()) {
                return categoriasValidas[i];
            }
        }
    }

    return null;
}

function renderizarProductos(lista) {
    var contenedor = document.querySelector(".Catalogo");
    contenedor.innerHTML = ""; // limpiar catálogo

    for (var i = 0; i < lista.length; i++) {
        var prod = lista[i];

        var div = document.createElement("div");
        div.className = "Producto";

        var imagen = document.createElement("img");
        imagen.src = "../01-Index/" + prod.imagen;
        imagen.alt = prod.nombre;

        var contImg = document.createElement("div");
        contImg.className = "Imagen";
        contImg.appendChild(imagen);

        var texto = document.createElement("p");
        texto.className = "Txt";
        texto.innerHTML = prod.nombre + "<br>Precio: $" + prod.precio + "<br>En stock";

        var boton = document.createElement("a");
        boton.href = "../15-Item/Item.html?id=" + prod.id;
        boton.className = "Boton-compra";
        boton.innerText = "Comprar";

        div.appendChild(contImg);
        div.appendChild(texto);
        div.appendChild(boton);

        contenedor.appendChild(div);
    }
}

function aplicarFiltros() {
    var categoria = document.getElementById("Categorias").value;
    var marca = document.getElementById("Marcas").value;
    var sabor = document.getElementById("Sabores").value;

    var filtrados = [];
    var contador = 0;

    for (var i = 0; i < productos.length; i++) {
        var p = productos[i];

        var coincideCategoria = (categoria === "Todos") || (p.categoria === categoria);
        var coincideMarca = (marca === "Todas") || (p.marca === marca);
        var coincideSabor = (sabor === "Todas") || (p.sabores.indexOf(sabor) !== -1);

        if (coincideCategoria && coincideMarca && coincideSabor) {
            filtrados[contador] = p;
            contador++;
        }
        console.log("Filtro actual:", categoria);
        console.log("Producto:", p.nombre, "| Categoría:", p.categoria);
    }

    renderizarProductos(filtrados);
}

function prepararFiltros() {
    document.getElementById("Categorias").addEventListener("change", aplicarFiltros);
    document.getElementById("Marcas").addEventListener("change", aplicarFiltros);
    document.getElementById("Sabores").addEventListener("change", aplicarFiltros);
}

function iniciarProductos() {
    var filtroDesdeURL = obtenerFiltroDesdeURL();
    prepararFiltros();

    if (filtroDesdeURL !== null) {
        var select = document.getElementById("Categorias");
        var opciones = select.options;
        var encontrado = false;

        for (var i = 0; i < opciones.length; i++) {
            if (opciones[i].value === filtroDesdeURL) {
                select.selectedIndex = i;
                encontrado = true;
                break;
            }
        }

        if (encontrado) {
            aplicarFiltros(); // solo si se encontró un filtro válido
            return;
        }
    }

    aplicarFiltros(); // fallback si no hay filtro por URL
}

document.addEventListener("DOMContentLoaded", function () {
    iniciarProductos();
});