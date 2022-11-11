const Model = require('../models/model')
const salas = Model.Salas
const filmes = Model.Filmes

class Controller{
    static async cinema(){
        Controller.relacionamentoSalaFilmes();
        salas.sync({force:true})
        filmes.sync({force:true})
    }
    static async rodar(){
        this.relacionamentoSalaFilmes();
    }

    static async relacionamentoSalaFilmes(){
        salas.hasMany(filmes,{foreignKey:{allowNull:false}});
        filmes.belongsTo(salas,{foreignKey:{allowNull:false}});
    }
}
module.exports = Controller;
