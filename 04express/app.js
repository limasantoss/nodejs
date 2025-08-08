// Importar o express

let express = require('express')

//Criando variavel para ter acesso as funcionalidades do Express
let app = express()

//Rota 
app.get('/',function(req , res){
    res.write('Utilizando o Express')
    res.end()
})

app.listen(8080);
