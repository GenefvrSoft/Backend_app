const { modeloPociones } = require('../models/pociones')

const crearPocion = async(req, res) => {
    try {
        const { nombre, descripcion, precio, cantidad, imagen, categoria, ingredientes_relacionados } = req.body;
        await modeloPociones.create({
            nombre,
            descripcion,
            precio,
            cantidad,
            categoria,
            imagen,
            ingredientes_relacionados
        });
        res.json({mensaje: 'El registro ha sido exitoso'});
    } catch (error) {
        console.log(error.message);
    }
}


module.exports = {
    crearPocion
}