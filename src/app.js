const express = require("express");
const routes = require("./routes");
const cors = require("cors")
const db = require("./database");
const handleErrors = require("./middlewares/handleErrors");

const app = express();

    app.use(express.json());
    app.use(cors());
    app.use(routes);
    db.possuiConexao();
    app.use(handleErrors);

app.listen(4000, ()=>{ console.log("Servidor rodando na porta 4000!"); });