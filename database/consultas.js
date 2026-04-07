db.RegistrosUsuarios.find()

db.RegistrosUsuarios.find({ rol: "Cliente" })

db.productos.find({ estado_id: 1 })

db.productos.find({ precio: { $gt: 50000 } })

db.productos.find({
    categoria_id: { $in: [1, 2, 3] }
})

db.RegistrosUsuarios.find({
    $or: [
        { rol: "Cliente" },
        { rol: "Vendedor" }
    ]
})

db.productos.find({
    $and: [
        { precio: { $gt: 28000 } },
        { estado_id: 1 }
    ]
})

db.pedidos.aggregate([
    {
        $group: {
            _id: null,
            total_ventas: { $sum: "$total_pedido" }
        }
    }
])

db.pedidos.aggregate([
    {
        $lookup: {
            from: "usuarios",
            localField: "usuario_id",
            foreignField: "id",
            as: "usuario"
        }
    }
])

db.pedidos.aggregate([
    {
        $lookup: {
            from: "usuarios",
            localField: "usuario_id",
            foreignField: "id",
            as: "usuario"
        }
    },
    {
        $lookup: {
            from: "detallePedidos",
            localField: "id_pedido",
            foreignField: "pedido_id",
            as: "productos"
        }
    }
])