const express = require("express");
const router = express.Router();

const { 
    crearPocion,
    eliminarPocion,
    actualizarPocion,
    obtenerPociones,
    obtenerPocionesPorParametros
} = require("../controllers/pocionesControllers");


router.get('/obtener-pociones', obtenerPociones);
router.get('/obtener-pociones-por-parametros', obtenerPocionesPorParametros)
router.post('/crear-pocion', crearPocion);
router.put('/actualizar-pocion', actualizarPocion)
router.delete('/eliminar-pocion/:id', eliminarPocion);



module.exports = router;