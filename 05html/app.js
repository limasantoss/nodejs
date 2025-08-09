// importar o express
const express = require('express');

// app
const app = express();

//especificar local do css e da imagem
app.use(express.static(__dirname + '/public'))

//Rotas
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});
//servidor
app.listen(8080);