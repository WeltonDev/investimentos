const Usuarios = require("../models/Usuarios");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const secret = require("../configs/secret");

const autuControllers = {
    async login(req, res){
        const { email, senha } = req.body;
        const usuario = await Usuarios.findOne({
            where: { email }
        });

        if(!usuario){
            return res.status(400).json("Usuário não encontrado!");
        };

        if(!bcrypt.compareSync(senha, usuario.senha)){
            return res.status(400).json("Senha inválida!");
        };

        const token = jwt.sign({
            id: usuario.id,
            nome: usuario.nome,
            email: usuario.email
        }, 
        secret.key
        )

        res.status(201).json(token);

    }
};

module.exports = autuControllers;