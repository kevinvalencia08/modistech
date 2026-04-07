const express = require("express");
const cors = require("cors");
const { MongoClient } = require("mongodb");

const app = express();

app.use(cors());
app.use(express.json());

const uri = "mongodb://127.0.0.1:27017";
const client = new MongoClient(uri);

let db;

async function conectarDB() {
    await client.connect();
    db = client.db("modistech_db"); // el nombre de tu NoSQLBooster
    console.log("Conectado a MongoDB ✔");
}

conectarDB();

app.get('/productos', async (req, res) => {
    try {
        const productos = await db.collection('productos').find().toArray();
        res.json(productos);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener productos" });
    }
});

app.listen(3000, () => {
    console.log("Servidor corriendo en http://localhost:3000");
});