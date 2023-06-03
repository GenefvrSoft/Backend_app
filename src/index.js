const express = require('express');
const app = express();

require('dotenv').config()
require('./conexionDB');

const rutasPociones = require('./routes/pociones');
const rutasIngredientes = require('./routes/ingredientes');
const PORT = process.env.PORT;

app.use(express.json());
app.use('/api', rutasPociones);
app.use('/api', rutasIngredientes);

app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));