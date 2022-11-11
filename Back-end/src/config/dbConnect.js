//Importar biblioteca
const Sequelize = require('sequelize')

//Conectar banco
const bancodados = new Sequelize ('cinema', 'root', '',{
    host: 'localhost',
    port: 3306,
    dialect: 'mysql'
});

module.exports = bancodados