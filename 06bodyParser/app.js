//
const express = require('express');

//bodyParser
const bodyParser = require('body-parser')

//app
const app = express();

//configurar o bodyParser
app.use((bodyParser.json))
app.use(bodyParser.urlencoded({ extended: false }))

//rotas
app.get('/', function (req, res) {
    res.sendFile(__dirname + 'formulario.html')

});

app.post('/receber', function (req, res) {
    res.write(' O nome informado é  ' + req.body.nome);
    res.end();
})
app.listen(8080)