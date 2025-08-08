// importar o express
const express = require('express');

// app

const app = express();

//Rotas
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});
//servidor
app.listen(8080);