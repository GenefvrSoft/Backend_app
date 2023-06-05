const express = require("express");
const router = express.Router();

const { 
   crearRegistroIngredientes,
   obtenerTodosLosIngredientes
} = require("../controllers/ingredientesController");


router.post('/crear-ingredientes', crearRegistroIngredientes);
router.get('/obtener-ingredientes', obtenerTodosLosIngredientes);


module.exports = router;