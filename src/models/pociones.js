const { DataTypes } = require("sequelize");
const { sequelize } = require("../dbconfig");

const modeloPociones = sequelize.define('usuarios', {
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
    ingredientes_relacionados: DataTypes.STRING,
});


module.exports = { modeloPociones };