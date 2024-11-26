const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware para analizar datos JSON
app.use(express.json());
app.use(express.static('public'));

// Conexión a MongoDB
mongoose
    .connect('mongodb://127.0.0.1:27017/gestion_productos', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Conectado a MongoDB'))
    .catch(err => console.error('Error al conectar a MongoDB:', err));

// Esquema y modelo para productos
const productoSchema = new mongoose.Schema({
    nombre: String,
    precio: Number,
    descripcion: String,
});

const Producto = mongoose.model('Producto', productoSchema);

// Ruta para devolver el HTML principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Ruta POST para agregar un producto
app.post('/productos', async (req, res) => {
    const nuevoProducto = new Producto(req.body);
    try {
        const productoGuardado = await nuevoProducto.save();
        res.status(201).json(productoGuardado);
    } catch (error) {
        res.status(500).json({ error: 'No se pudo guardar el producto' });
    }
});

// Ruta GET para obtener todos los productos
app.get('/productos', async (req, res) => {
    try {
        const productos = await Producto.find();
        res.json(productos);
    } catch (error) {
        res.status(500).json({ error: 'No se pudo obtener los productos' });
    }
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});
