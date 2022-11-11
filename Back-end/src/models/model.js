//Importar biblioteca
const Sequelize = require('sequelize')

//Importar módulos
const bancodados = require('../config/dbConnect')

const Salas = bancodados.define('salas', {
    id:{ type:Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    salaNum: Sequelize.INTEGER,
    capacidade: Sequelize.INTEGER,
    vendidos: Sequelize.INTEGER
}
)

const Filmes = bancodados.define('filmes', {
    id:{ type:Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    nome: Sequelize.STRING,
    sinopse: Sequelize.STRING,
    horario: Sequelize.STRING,
    duração: Sequelize.STRING,
    valor: Sequelize.STRING,
    id_sala:{
        type: Sequelize.INTEGER,
        allowNull: false,
        foreingkey: true
    }
}
)

module.exports = {Salas, Filmes};
