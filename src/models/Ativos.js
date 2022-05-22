const db = require("../database");
const { DataTypes } = require("sequelize");

const Ativos = db.define(
    "Ativos",
    {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            notNull: true
        },
        ticker: {
            type: DataTypes.STRING,
            notNull: true,
        },
        grupo: {
            type: DataTypes.STRING,
            notNull: true,
        },
        quantidade: {
            type: DataTypes.INTEGER,
            notNull: true,
        },
        preco_medio: {
            type: DataTypes.FLOAT,
            notNull: true,
        },
        investido: {
            type: DataTypes.FLOAT,
            notNull: true,
        },
        setor: {
            type: DataTypes.STRING,
            notNull: true,
        }

    },
    {
        tableName: "ativos",
        timestamps: false,
    }
);

module.exports = Ativos;