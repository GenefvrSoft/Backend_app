const { modeloIngredientes } = require('../models/ingredientes');

const crearRegistroIngredientes = async(req, res) => {
    try {
        const { nombre, descripcion, cantidad } = req.body;
        await modeloIngredientes.create({
            nombre,
            descripcion,
            cantidad
        });
        res.json({mensaje: 'El registro ha sido exitoso'});
    } catch (error) {
        console.log(error.message);
    }
}

const obtenerTodosLosIngredientes = async(req, res) => {
    try {
        const todosLosRegistros = await modeloIngredientes.findAll({});
        res.json({ingredientes: todosLosRegistros});
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = {
   obtenerTodosLosIngredientes,
   crearRegistroIngredientes
}