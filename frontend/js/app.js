let carrito = [];

// ===============================
// 1. CARGAR PRODUCTOS DESDE API
// ===============================
async function cargarProductos() {
    try {
        const res = await fetch('http://localhost:3000/productos');
        const productos = await res.json();

        const contenedor = document.getElementById("contenedor-productos");

        contenedor.innerHTML = "";

        productos.forEach(p => {
            contenedor.innerHTML += `
                <div class="col-md-3 m-2">
                    <div class="card shadow">
                        <div class="card-body text-center">
                            <h5 class="card-title">${p.descripcion}</h5>
                            <p class="card-text">$${p.precio}</p>
                            <button class="btn btn-primary"
                                onclick="agregarCarrito('${p.descripcion}', ${p.precio})">
                                Agregar
                            </button>
                        </div>
                    </div>
                </div>
            `;
        });

    } catch (error) {
        console.error("Error cargando productos:", error);
    }
}

// ===============================
// 2. AGREGAR AL CARRITO
// ===============================
function agregarCarrito(nombre, precio) {
    carrito.push({ nombre, precio });
    renderCarrito();
}

// ===============================
// 3. MOSTRAR CARRITO + TOTAL
// ===============================
function renderCarrito() {
    const contenedor = document.getElementById("contenedor-carrito");
    const totalEl = document.getElementById("total");

    contenedor.innerHTML = "";

    let total = 0;

    carrito.forEach(item => {
        total += item.precio;

        contenedor.innerHTML += `
            <div class="col-md-4 m-2 p-2 border rounded">
                <p><strong>${item.nombre}</strong></p>
                <p>$${item.precio}</p>
            </div>
        `;
    });

    totalEl.innerText = "Total: $" + total;
}

// ===============================
// 4. INICIAR
// ===============================
cargarProductos();