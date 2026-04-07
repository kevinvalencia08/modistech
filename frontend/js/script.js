async function cargarProductos() {
    try {
        const res = await fetch('http://localhost:3000/productos');
        const productos = await res.json();

        const contenedor = document.getElementById("productos");

        contenedor.innerHTML = "";

        productos.forEach(p => {
            contenedor.innerHTML += `
                <div class="producto">
                    <h3>${p.descripcion}</h3>
                    <p>Precio: $${p.precio}</p>
                    <p>Stock: ${p.stock}</p>
                </div>
            `;
        });

    } catch (error) {
        console.error("Error cargando productos:", error);
    }
}

cargarProductos();