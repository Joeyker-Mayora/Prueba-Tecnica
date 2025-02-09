import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import process from 'process';
import data from './data.js'; // Importar el array de objetos desde data.js

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Para recibir JSON en las solicitudes

// Ruta de prueba
app.get('/', (req, res) => {
  res.send(data);
});

// Ruta para obtener los posts
app.get('/posts', (req, res) => {
  res.json(data); // Retornar el array de objetos como respuesta
});
app.get("/posts/:id", (req, res) => {
    const { id } = req.params; // Obtener el ID de los parámetros de la URL
    const post = data.find((p) => p.id === parseInt(id)); // Buscar el post por ID
  
    if (!post) {
      return res.status(404).json({ message: "Post no encontrado" }); // Si no lo encuentra, responde con un error 404
    }
  
    res.json(post); // Responder con el post encontrado
  });

// Puerto
const PORT = process.env.PORT || 5003;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
