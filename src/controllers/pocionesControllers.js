const Op = require('Sequelize').Op;
const { modeloPociones } = require('../models/pociones')

const obtenerPociones = async(req, res) => {
    try {
        const pociones = await modeloPociones.findAll({
            include: [
                {
                    association: modeloPociones.Ingredientes
                }
            ]
        });
        res.json({pociones});
    } catch (error) {
        console.log(error.message);
    }
}

const obtenerPocionesPorParametros = async(req, res) => {
    try {
        const { nombre, descripcion, cantidad } = req.query;
     
        const pociones = await modeloPociones.findAll({
            include: [
                {
                    association: modeloPociones.Ingredientes
                }
            ],
            where: {
              [Op.or]: [{nombre}, {cantidad}, {descripcion}]
            }
          })
        res.json({pociones});
    } catch (error) {
        console.log(error.message);
    }
}

const crearPocion = async(req, res) => {
    try {
        const { nombre, descripcion, precio, cantidad, imagen, categoria, ingredienteId } = req.body;
        await modeloPociones.create({
            nombre,
            descripcion,
            precio,
            cantidad,
            categoria,
            imagen,
            ingredienteId
        });
        res.json({mensaje: 'El registro ha sido exitoso'});
    } catch (error) {
        console.log(error.message);
    }
}

const eliminarPocion = async(req, res) => {
    try {
        const { id } = req.body;
        await modeloPociones.destroy({where: {id}})
        res.json({mensaje: 'El registro ha sido eliminado exitosamente'});
    } catch (error) {
        console.log(error.message);
    }
}

const actualizarPocion = async(req, res) => {
    try {
        const { id, nombre, descripcion, precio, cantidad, imagen, categoria, ingredientes_relacionados } = req.body;
        await modeloPociones.update({nombre, descripcion, precio, cantidad, imagen, categoria, ingredientes_relacionados}, {where: {id}})
        res.json({mensaje: 'El registro ha sido actualizado exitosamente'});
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = {
    crearPocion,
    eliminarPocion,
    actualizarPocion,
    obtenerPociones,
    obtenerPocionesPorParametros
}