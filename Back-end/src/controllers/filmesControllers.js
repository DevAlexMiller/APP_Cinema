//Importar bibliotecas
const Controller = require('./relacionamento')
const bancodados = require('../config/dbConnect')
const Model = require('../models/model')
const { cinema } = require('./relacionamento')
const todasSalas = Model.Salas
const todosFilmes = Model.Filmes

class salas {
  //GET
  static async ver_filme(req, res) {
    try {
      await Controller.rodar()
      const { id } = req.params;
      const filmes = await todosFilmes.findOne({
        where: { id: id },
      }, { include: salas });

      if (!filmes)
        return res.status(404).json({ message: 'Usuário não encontrado' });
      return res.status(200).json(filmes);
    } catch (e) {
      console.log(e.message);
      res.status(500).json({ message: 'Algo deu errado' });
    };
  }
  //CRIAR TABELAS
  static async criar() {
    await Controller.cinema()
  }

  //PUT
  static async atualizar(req, res) {
    try {
      const index = req.params.id;
      const dados = req.body;
      todasSalas.update(dados, { where: { id: (index) } })
      res.status(200).send("ATUALIZADO")

    } catch (e) {
      console.log(e.message);
      res.status(500).json({ message: 'Algo deu errado' });
    };
  }

}
module.exports = salas;

