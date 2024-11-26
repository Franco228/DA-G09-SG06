const express = require('express');
const bodyParser = require('body-parser'); 
const jwt = require('jsonwebtoken');
const app = express(); 
app.use(bodyParser.json());
// Clave secreta para JWT
const SECRET_KEY = 'mi_clave_secreta';
// Middleware para validar JWT
const verifyToken = (req, res, next) => {
const token = req.headers['authorization'];
if (!token) return res.status(403).send('Token requerido.');
jwt.verify(token.split(' ')[1], SECRET_KEY, (err, decoded) => {
if (err) return res.status(401).send('Token inválido o expirado.'); 
req.userId = decoded.id;
next();
});
};
// Ruta pública
app.get('/api', (req, res) => { 
res.send('API en ejecución');
});
// Ruta para obtener un token
app.post('/login', (req, res) => { 
const { username } = req.body;
if (!username) return res.status(400).send('Usuario requerido.');
const token = jwt.sign({ id: username }, SECRET_KEY, { expiresIn: '1h' }); 
res.json({ token });
});
// Ruta protegida
app.get('/protegido', verifyToken, (req, res) => { 
res.send(`Acceso permitido para el usuario: ${req.userId}`);
});
// Iniciar el servidor
app.listen(3000, () => {
console.log('Servidor corriendo en http://localhost:3000');
});





const express = require('express');
const bodyParser = require('body-parser'); 
const jwt = require('jsonwebtoken');
const app = express(); 
app.use(bodyParser.json());
// Clave secreta para JWT
const SECRET_KEY = 'mi_clave_secreta';
// Middleware para validar JWT
const verifyToken = (req, res, next) => {
const token = req.headers['authorization'];
if (!token) return res.status(403).send('Token requerido.');
jwt.verify(token.split(' ')[1], SECRET_KEY, (err, decoded) => {
if (err) return res.status(401).send('Token inválido o expirado.');
req.userId = decoded.id; 
next();
});
};
// Ruta pública
app.get('/api', (req, res) => { 
res.send('API en ejecución');
});
// Ruta para obtener un token
app.post('/login', (req, res) => { 
const { username } = req.body;
if (!username) return res.status(400).send('Usuario requerido.');
const token = jwt.sign({ id: username }, SECRET_KEY, { expiresIn: '1h' }); 
res.json({ token });
});
// Ruta protegida
app.get('/protegido', verifyToken, (req, res) => { 
res.send(`Acceso permitido para el usuario: ${req.userId}`);
});
// Iniciar el servidor
app.listen(3000, () => {
console.log('Servidor corriendo en http://localhost:3000');
});




const express = require('express'); 
const router = express.Router();
const db = require('../config/connection');
// Ruta para obtener todos los libros
router.get('/', (req, res) => {
db.query('SELECT * FROM books', (err, results) => { 
if (err) return res.status(500).send(err); 
res.json(results);
});
});
module.exports = router;
