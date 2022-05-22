const express = require("express");
const routes = express.Router();

const ativosControllers = require("../controllers/ativosControllers");
const usuariosControllers = require("../controllers/usuariosControllers");
const authControllers = require("../controllers/authControllers");

const loginValidate = require("../validations/auth/login");
const auth = require("../middlewares/auth");

routes.get("/carteira", auth, ativosControllers.listar);
routes.post("/carteira", auth, ativosControllers.cadastrar);
routes.put("/carteira/:id", auth, ativosControllers.atualizar);
routes.delete("/carteira/:id", auth, ativosControllers.excluir);

routes.get("/usuarios", usuariosControllers.listar);
routes.post("/usuarios", usuariosControllers.cadastrar);

routes.post("/login", loginValidate, authControllers.login);


module.exports = routes;