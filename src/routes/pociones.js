const express = require("express");
const router = express.Router();

const { 
    crearPocion,
} = require("../controllers/pocionesControllers");

router.post('/crear-pocion', crearPocion);




module.exports = router;