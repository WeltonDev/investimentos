const db = require("../database");
const { DataTypes } = require("sequelize");

const Usuarios = db.define(
    "Usuarios",
    {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            notNull: true
        },
        nome: {
            type: DataTypes.STRING,
            notNull: true,
        },
        email: {
            type: DataTypes.STRING,
            notNull: true,
        },
        senha: {
            type: DataTypes.INTEGER,
            notNull: true,
        }
    },
    {
        tableName: "usuarios",
        timestamps: false,
    }
);

module.exports = Usuarios;