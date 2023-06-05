const { DataTypes } = require("sequelize");
const { sequelize } = require("../dbconfig");

const modeloIngredientes = sequelize.define('ingredientes', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    nombre: DataTypes.STRING,
    descripcion: DataTypes.STRING,
    cantidad: DataTypes.INTEGER,
});


module.exports = { modeloIngredientes };