const Ativos = require("../models/Ativos");

const ativosControllers = {
  async listar(req, res) {
    try {
      const listaAtivos = await Ativos.findAll();
      res.status(201).json(listaAtivos);
    } catch (error) {
      res.status(400).json("Falha ao listar ativos!");
      console.error(error);
    }
  },

  async cadastrar(req, res) {
    console.log(req.usuario);
    try {
      const { ticker, grupo, quantidade, preco_medio, investido, setor } =
        req.body;


      const novoAtivo = await Ativos.create({
        ticker,
        grupo,
        quantidade,
        preco_medio,
        investido,
        setor,
      });

      res.status(201).json(novoAtivo);
    } catch (error) {
      res.status(404).json("Falha ao cadastrar ativo!");
      console.error(error);
    }
  },

  async atualizar(req, res) {
    try {
      const { id } = req.params;
      const { ticker, grupo, quantidade, preco_medio, investido, setor } =
        req.body;

      const ativoExiste = await Ativos.count({ where: { id } });

      if (!ativoExiste) {
        return res.status(400).json("Ativo não cadastrado!");
      }

      const ativoAtualizado = await Ativos.update(
        { ticker, grupo, quantidade, preco_medio, investido, setor },
        {
          where: { id },
        }
      );

      res.status(201).json("Ativo atualizado!");
    } catch (error) {
      res.status(400).json("Falha ao atualizar ativo!");
    }
  },

  async excluir(req, res) {
    try {
      const { id } = req.params;

      await Ativos.destroy({
        where: { id }
      });

      res.status(201).json("Ativo removido com sucesso!");
      
    } catch (error) {
      res.status(400).json("Falha ao remover ativo!");
      console.error(error);
    }
  }
};

module.exports = ativosControllers;
