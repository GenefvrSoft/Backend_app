const { DataTypes } = require("sequelize");
const { sequelize } = require("../dbconfig");
const { modeloIngredientes } = require('./ingredientes')


const modeloPociones = sequelize.define('pociones', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    nombre: DataTypes.STRING,
    descripcion: DataTypes.STRING,
    precio: DataTypes.INTEGER,
    cantidad: DataTypes.INTEGER,
    categoria: DataTypes.STRING,
    imagen: DataTypes.STRING,
});

modeloPociones.Ingredientes = modeloPociones.belongsTo(modeloIngredientes)
module.exports = { modeloPociones };