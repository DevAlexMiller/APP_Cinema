//Importar biblioteca
const express = require('express');
const router = express.Router();

//Importar módulos
const salas = require ('../controllers/filmesControllers')

// define the home page route
router
    
    .get('/filmes/:id', salas.ver_filme)
    .get('/criar', salas.criar)
    .put('/atualizar/:id', salas.atualizar)

    
    // .get('/:id', funcionario.listaDado)
    // .post('/', funcionario.inserirDado)
    // .put('/:id', funcionario.atualizarDado)
    // .delete('/:id', funcionario.deletarDado)

module.exports = router;