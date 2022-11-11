//Importar bibliotecas
const express = require('express');
const app = express();

//Importar módulos
const rota = require ('./Routes/routes')

//Set Info json
app.use(express.json());
app.use('/', rota);

//Variáveis
const porta = 3500;

app.listen(porta, () =>{
    console.log("funfando")
});