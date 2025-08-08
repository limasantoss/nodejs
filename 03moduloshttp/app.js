/// importar o modulo http

const http = require('http')

//criar o servidor 
http.createServer(
    function (req, res) {
    res.write('Aprendendo Node.js Com o Ralf')
    res.end()
}).listen(8080)