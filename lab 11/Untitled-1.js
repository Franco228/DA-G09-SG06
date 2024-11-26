const express = require("express"); 
const app = express();
const PORT = 3001; 
const users = [
{ name: "Osvaldo", rol: "Guitarrista", likes: ["heavy", "rock", "death"] },
{ name: "Ricardo", rol: "Vocalista", likes: ["hard", "grindcore", "heavy"] },
{ name: "Rowek", rol: "Baterista", likes: ["Trash", "heavy"] },
{ name: "Tony", rol: "Extra", likes: ["DeathM", "Black", "Heavy"] },
{ name: "Cabral", rol: "Vocaliste", likes: ["Trash", "Rock", "Heavy"] }
];
app.use(express.json());
app.get("/api/users", (req, res) => { 
res.json(users);
});
app.get("/api/user/:name", (req, res) => { 
const name = req.params.name.toLowerCase();
const user = users.find(user => user.name.toLowerCase() === name);
if (user) { 
res.json(user);
} else {
res.status(404).json({ error: No existe el usuario ${name} });
}
});
app.post("/api/users", (req, res) => { 
const newUser = req.body;
if (!newUser.name || !newUser.rol || !newUser.likes) {
return res.status(400).json({ error: "Faltan datos necesarios para crear el usuario." });
}
if (users.some(user => user.name === newUser.name)) {
return res.status(400).json({ error: El usuario con nombre '${newUser.name}' ya existe. });
}
users.push(newUser); 
res.status(201).json(newUser);
});
app.put("/api/user/:name", (req, res) => { 
const name = req.params.name.toLowerCase(); 
const updatedData = req.body;
const user = users.find(user => user.name.toLowerCase() === name);
if (!updatedData.rol && !updatedData.likes) {
return res.status(400).json({ error: "Debe proporcionar datos para actualizar." });
}
if (user) {
user.rol = updatedData.rol || user.rol; 
user.likes = updatedData.likes || user.likes; 
res.json(user);
} else {
res.status(404).json({ error: No existe el usuario ${name} });
}
});
app.delete("/api/user/:name", (req, res) => { 
const name = req.params.name.toLowerCase();
const userIndex = users.findIndex(user => user.name.toLowerCase() === name);
if (userIndex !== -1) {
const deletedUser = users.splice(userIndex, 1)[0]; 
res.status(200).json(deletedUser);
} else {
res.status(404).json({ error: No existe el usuario ${name} });
}
});
app.listen(PORT, () => {
console.log(Corriendo server en http://localhost:${PORT}/);
});
