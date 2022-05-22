const Usuarios = require("../models/Usuarios");
const bcrypt = require("bcryptjs");

const usuariosControllers = {
    async listar(req, res){
        try {
            const listarUsuarios = await Usuarios.findAll();
            res.status(201).json(listarUsuarios)
        } catch (error) {
            res.status(400).json("Falha ao listar usuários");
            console.error(error);
        }
    },

    async cadastrar(req, res){
        try {
        const {nome, email, senha } = req.body;
        const usuarioExiste = await Usuarios.count({ where:{ email } });
        const cripto = bcrypt.hashSync(senha, 10);
        
        if(usuarioExiste){
            return res.status(400).json("Email já cadastrado!");
        };

        const novoUsuario = await Usuarios.create({
            nome, email, senha: cripto,
        });

        res.status(201).json(novoUsuario);

        } catch (error) {
            res.status(400).json("Falha ao cadastrar Usuário!");
            console.error(error);
        }
    }
};

module.exports = usuariosControllers;