const Sequelize = require("sequelize");

const DB_NAME = "investimentos";
const DB_USER = "root";
const DB_PASS = "password";
const DB_CONFIG = {
    dialect: "mysql",
    host: "localhost",
    port: "3306"
};

let db = {};

try {
    db = new Sequelize(DB_NAME, DB_USER, DB_PASS, DB_CONFIG);
} catch (error) {
    console.error(error);
};

async function possuiConexao(){
    try {
        await db.authenticate();
        console.log("Banco de Dados Conectado!");
    } catch (error) {
        console.log("Falha ao conectar Banco de Dados!");
        console.error(error);
    }
};

Object.assign(db, { possuiConexao });

module.exports = db;