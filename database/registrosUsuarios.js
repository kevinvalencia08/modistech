use modistech_db

db.Usuarios.insertMany([
    { id: 1, nombre: "Kevin Valencia", correo: "Kevinexample@gmail.com", contraseña: "K454jsgd", fecha_registro: "2025-02-10", rol: "Gerente", direccion: "calle 50 sur" },
    { id: 2, nombre: "Laura Gómez", correo: "laura.gomez@gmail.com", contraseña: "L89kjsd2", fecha_registro: "2025-02-11", rol: "Administrador", direccion: "calle 45 norte" },
    { id: 3, nombre: "Carlos Pérez", correo: "carlos.perez@gmail.com", contraseña: "C123asd9", fecha_registro: "2025-02-12", rol: "Cliente", direccion: "avenida 68" },
    { id: 4, nombre: "Ana Martínez", correo: "ana.martinez@gmail.com", contraseña: "A98sdfg7", fecha_registro: "2025-02-13", rol: "Vendedor", direccion: "calle 30" },
    { id: 5, nombre: "Luis Rodríguez", correo: "luis.rodriguez@gmail.com", contraseña: "L567hjk1", fecha_registro: "2025-02-14", rol: "Cliente", direccion: "carrera 15" },
    { id: 6, nombre: "Sofía Torres", correo: "sofia.torres@gmail.com", contraseña: "S45dfg89", fecha_registro: "2025-02-15", rol: "Administrador", direccion: "calle 80" },
    { id: 7, nombre: "Mateo Ramírez", correo: "mateo.ramirez@gmail.com", contraseña: "M321poi7", fecha_registro: "2025-02-16", rol: "Cliente", direccion: "avenida suba" },
    { id: 8, nombre: "Valentina Castro", correo: "valentina.castro@gmail.com", contraseña: "V77asd23", fecha_registro: "2025-02-17", rol: "Vendedor", direccion: "calle 100" },
    { id: 9, nombre: "Daniel Herrera", correo: "daniel.herrera@gmail.com", contraseña: "D88kjh45", fecha_registro: "2025-02-18", rol: "Cliente", direccion: "carrera 7" },
    { id: 10, nombre: "Camila Vargas", correo: "camila.vargas@gmail.com", contraseña: "C99zxc11", fecha_registro: "2025-02-19", rol: "Administrador", direccion: "calle 26" },
    { id: 11, nombre: "Andrés López", correo: "andres.lopez@gmail.com", contraseña: "A11qwe22", fecha_registro: "2025-02-20", rol: "Cliente", direccion: "avenida boyacá" }
])

db.envioUsuarios.insertMany([
    { id_envio: 1, usuario_id: 1, pais: "Colombia", ciudad: "Bogota", codigoPostal: "100145", tipo_direccion_id: 1 },
    { id_envio: 2, usuario_id: 2, pais: "Colombia", ciudad: "Medellin", codigoPostal: "050001", tipo_direccion_id: 2 },
    { id_envio: 3, usuario_id: 3, pais: "Colombia", ciudad: "Cali", codigoPostal: "760001", tipo_direccion_id: 3 },
    { id_envio: 4, usuario_id: 4, pais: "Colombia", ciudad: "Barranquilla", codigoPostal: "080001", tipo_direccion_id: 4 },
    { id_envio: 5, usuario_id: 5, pais: "Colombia", ciudad: "Cartagena", codigoPostal: "130001", tipo_direccion_id: 4 },
    { id_envio: 6, usuario_id: 6, pais: "Colombia", ciudad: "Bucaramanga", codigoPostal: "680001", tipo_direccion_id: 3 },
    { id_envio: 7, usuario_id: 7, pais: "Colombia", ciudad: "Pereira", codigoPostal: "660001", tipo_direccion_id: 2 },
    { id_envio: 8, usuario_id: 8, pais: "Colombia", ciudad: "Santa Marta", codigoPostal: "470001", tipo_direccion_id: 1 },
    { id_envio: 9, usuario_id: 9, pais: "Colombia", ciudad: "Manizales", codigoPostal: "170001", tipo_direccion_id: 2},
    { id_envio: 10, usuario_id: 10, pais: "Colombia", ciudad: "Cucuta", codigoPostal: "540001", tipo_direccion_id: 4},
    { id_envio: 11, usuario_id: 11, pais: "Colombia", ciudad: "Ibague", codigoPostal: "730001", tipo_direccion_id: 1 }
])

db.tipoDirecciones.insertMany([
    {id_tipo_direccion: 1, descripcion:"casa"},
    {id_tipo_direccion: 2, descripcion: "Apartamento"},
    {id_tipo_direccion: 3, descripcion: "Oficina"},
    {id_tipo_direccion: 4, descripcion: "Hotel"}
    ])
    
db.productos.insertMany([
    {id_producto:1, descripcion:"camiseta hombre", precio:30000, categoria_id:1, marca_id:1, stock:30, estado_id:1, img:""},
     {id_producto:2, descripcion:"camiseta mujer", precio:28000, categoria_id:2, marca_id:2, stock:25, estado_id:2, img:""},
    {id_producto:3, descripcion:"jean hombre", precio:90000, categoria_id:3, marca_id:3, stock:15, estado_id:3, img:""},
    {id_producto:4, descripcion:"jean mujer", precio:85000, categoria_id:4, marca_id:4, stock:18, estado_id:4, img:""},
    {id_producto:5, descripcion:"chaqueta hombre", precio:120000, categoria_id:5, marca_id:5, stock:10, estado_id:5, img:""},
    {id_producto:6, descripcion:"chaqueta mujer", precio:115000, categoria_id:6, marca_id:6, stock:12, estado_id:6, img:""},
    {id_producto:7, descripcion:"sudadera hombre", precio:70000, categoria_id:7, marca_id:7, stock:20, estado_id:7, img:""},
    {id_producto:8, descripcion:"sudadera mujer", precio:68000, categoria_id:8, marca_id:8, stock:22, estado_id:8, img:""},
    {id_producto:9, descripcion:"camisa formal hombre", precio:75000, categoria_id:9, marca_id:9, stock:14, estado_id:9, img:""},
    {id_producto:10, descripcion:"blusa mujer", precio:65000, categoria_id:10, marca_id:10, stock:16, estado_id:10, img:""},
    {id_producto:11, descripcion:"short deportivo", precio:40000, categoria_id:11, marca_id:11, stock:30, estado_id:11, img:""}
    ])
    
db.estadoProductos.insertMany([
     {id_estado:1, descripcion:"Disponible"},
    {id_estado:2, descripcion:"Agotado"},
    {id_estado:3, descripcion:"En producción"},
    {id_estado:4, descripcion:"Descontinuado"},
    {id_estado:5, descripcion:"Preventa"},
    {id_estado:6, descripcion:"Reservado"},
    {id_estado:7, descripcion:"En oferta"},
    {id_estado:8, descripcion:"Nuevo"},
    {id_estado:9, descripcion:"Usado"},
    {id_estado:10, descripcion:"Dañado"},
    {id_estado:11, descripcion:"En tránsito"}
    ])
    
db.categorias.insertMany([
    {id_categoria:1, descripcion:"camisetas"},
    {id_categoria:2, descripcion:"Jeans"},
    {id_categoria:3, descripcion:"Chaquetas"},
    {id_categoria:4, descripcion:"Sudaderas"},
    {id_categoria:5, descripcion:"Camisas"},
    {id_categoria:6, descripcion:"Shorts"},
    {id_categoria:7, descripcion:"Vestidos"},
    {id_categoria:8, descripcion:"Faldas"},
    {id_categoria:9, descripcion:"Ropa deportiva"},
    {id_categoria:10, descripcion:"Ropa interior"},
    {id_categoria:11, descripcion:"Accesorios"}
    ])

db.marcas.insertMany([
    {id_marca:1, descripcion:"Adidas", pais_origen:"Alemania"},
    {id_marca:2, descripcion:"Nike", pais_origen:"Estados Unidos"},
    {id_marca:3, descripcion:"Puma", pais_origen:"Alemania"},
    {id_marca:4, descripcion:"Reebok", pais_origen:"Estados Unidos"},
    {id_marca:5, descripcion:"Under Armour", pais_origen:"Estados Unidos"},
    {id_marca:6, descripcion:"Zara", pais_origen:"España"},
    {id_marca:7, descripcion:"H&M", pais_origen:"Suecia"},
    {id_marca:8, descripcion:"Levi's", pais_origen:"Estados Unidos"},
    {id_marca:9, descripcion:"Tommy Hilfiger", pais_origen:"Estados Unidos"},
    {id_marca:10, descripcion:"Calvin Klein", pais_origen:"Estados Unidos"},
    {id_marca:11, descripcion:"Gucci", pais_origen:"Italia"}
])

db.carritos.insertMany([
    {id_carrito:1, usuario_id:1, fecha_creacion:"2026-03-20", estado_carrito_id:1},
    {id_carrito:2, usuario_id:2, fecha_creacion:"2026-03-21", estado_carrito_id:1},
    {id_carrito:3, usuario_id:3, fecha_creacion:"2026-03-22", estado_carrito_id:2},
    {id_carrito:4, usuario_id:4, fecha_creacion:"2026-03-23", estado_carrito_id:1},
    {id_carrito:5, usuario_id:5, fecha_creacion:"2026-03-24", estado_carrito_id:3},
    {id_carrito:6, usuario_id:6, fecha_creacion:"2026-03-25", estado_carrito_id:1},
    {id_carrito:7, usuario_id:7, fecha_creacion:"2026-03-26", estado_carrito_id:2},
    {id_carrito:8, usuario_id:8, fecha_creacion:"2026-03-27", estado_carrito_id:1},
    {id_carrito:9, usuario_id:9, fecha_creacion:"2026-03-28", estado_carrito_id:3},
    {id_carrito:10, usuario_id:10, fecha_creacion:"2026-03-29", estado_carrito_id:1},
    {id_carrito:11, usuario_id:11, fecha_creacion:"2026-03-30", estado_carrito_id:2}
])

db.estadoCarritos.insertMany([
    {id_estado_carrito:1, descripcion:"Pendiente por comprar"},
    {id_estado_carrito:2, descripcion:"Comprado"},
    {id_estado_carrito:3, descripcion:"Abandonado"}
])

db.carritoItems.insertMany([
    {id_carritoItem:1, carrito_id:1, producto_id:1, cantidad:2, total_pagar:60000},
    {id_carritoItem:2, carrito_id:2, producto_id:2, cantidad:1, total_pagar:28000},
    {id_carritoItem:3, carrito_id:3, producto_id:3, cantidad:1, total_pagar:90000},
    {id_carritoItem:4, carrito_id:4, producto_id:4, cantidad:2, total_pagar:170000},
    {id_carritoItem:5, carrito_id:5, producto_id:5, cantidad:1, total_pagar:120000},
    {id_carritoItem:6, carrito_id:6, producto_id:6, cantidad:1, total_pagar:115000},
    {id_carritoItem:7, carrito_id:7, producto_id:7, cantidad:2, total_pagar:140000},
    {id_carritoItem:8, carrito_id:8, producto_id:8, cantidad:1, total_pagar:68000},
    {id_carritoItem:9, carrito_id:9, producto_id:9, cantidad:1, total_pagar:75000},
    {id_carritoItem:10, carrito_id:10, producto_id:10, cantidad:2, total_pagar:130000},
    {id_carritoItem:11, carrito_id:11, producto_id:11, cantidad:3, total_pagar:120000}
])

db.pedidos.insertMany([
    {id_pedido:1, usuario_id:1, envio_id:1, fecha_pedido:"2026-04-06", estadoPedido_id:1, metodoPago_id:1, total_pedido:60000},
    {id_pedido:2, usuario_id:2, envio_id:2, fecha_pedido:"2026-04-06", estadoPedido_id:1, metodoPago_id:2, total_pedido:28000},
    {id_pedido:3, usuario_id:3, envio_id:3, fecha_pedido:"2026-04-06", estadoPedido_id:2, metodoPago_id:1, total_pedido:90000},
    {id_pedido:4, usuario_id:4, envio_id:4, fecha_pedido:"2026-04-06", estadoPedido_id:1, metodoPago_id:3, total_pedido:170000},
    {id_pedido:5, usuario_id:5, envio_id:5, fecha_pedido:"2026-04-06", estadoPedido_id:3, metodoPago_id:2, total_pedido:120000}
])

db.estadoPedidos.insertMany([
    {id_estadoPedido:1, descripcion:"Pendiente"},
    {id_estadoPedido:2, descripcion:"En proceso"},
    {id_estadoPedido:3, descripcion:"Entregado"}
])

db.metodo_pagos.insertMany([
    {id_metodoPago:1, descripcion:"Tarjeta de crédito"},
    {id_metodoPago:2, descripcion:"Transferencia bancaria"},
    {id_metodoPago:3, descripcion:"Pago contra entrega"}
])

db.pagos.insertMany([
    {id_pago:1, pedido_id:1, metodoPago_id:1, estadoPago_id:2, fecha_pago:"2026-04-06"},
    {id_pago:2, pedido_id:2, metodoPago_id:2, estadoPago_id:2, fecha_pago:"2026-04-06"},
    {id_pago:3, pedido_id:3, metodoPago_id:1, estadoPago_id:1, fecha_pago:"2026-04-06"},
    {id_pago:4, pedido_id:4, metodoPago_id:3, estadoPago_id:2, fecha_pago:"2026-04-06"},
    {id_pago:5, pedido_id:5, metodoPago_id:2, estadoPago_id:3, fecha_pago:"2026-04-06"}
])
    
db.estadoPagos.insertMany([
    {id_estadoPago:1, descripcion:"Pendiente"},
    {id_estadoPago:2, descripcion:"Aprobado"},
    {id_estadoPago:3, descripcion:"Rechazado"}
])

db.tipoMovimientos.insertMany([
    {id_tipoMovimiento:1, descripcion:"Entrada"},
    {id_tipoMovimiento:2, descripcion:"Salida"},
    {id_tipoMovimiento:3, descripcion:"Ajuste"}
])

db.inventario.insertMany([
    {id_inventario:1, producto_id:1, tipoMovimiento_id:1, cantidad:10, fecha_movimiento:"2025-12-31"},
    {id_inventario:2, producto_id:2, tipoMovimiento_id:1, cantidad:20, fecha_movimiento:"2025-12-31"},
    {id_inventario:3, producto_id:3, tipoMovimiento_id:2, cantidad:5, fecha_movimiento:"2026-01-05"},
    {id_inventario:4, producto_id:4, tipoMovimiento_id:1, cantidad:15, fecha_movimiento:"2026-01-10"},
    {id_inventario:5, producto_id:5, tipoMovimiento_id:2, cantidad:3, fecha_movimiento:"2026-01-15"},
    {id_inventario:6, producto_id:6, tipoMovimiento_id:1, cantidad:12, fecha_movimiento:"2026-01-20"},
    {id_inventario:7, producto_id:7, tipoMovimiento_id:2, cantidad:4, fecha_movimiento:"2026-01-25"},
    {id_inventario:8, producto_id:8, tipoMovimiento_id:1, cantidad:18, fecha_movimiento:"2026-02-01"},
    {id_inventario:9, producto_id:9, tipoMovimiento_id:3, cantidad:2, fecha_movimiento:"2026-02-05"},
    {id_inventario:10, producto_id:10, tipoMovimiento_id:1, cantidad:25, fecha_movimiento:"2026-02-10"},
    {id_inventario:11, producto_id:11, tipoMovimiento_id:2, cantidad:6, fecha_movimiento:"2026-02-15"}
])
