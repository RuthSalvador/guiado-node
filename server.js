//importar express y path
var express = require('express');
var path = require('path');

//inicializar express
var app = express();

//creando la ruta static
app.use('/static', express.static(path.join(__dirname, 'node_modules')));
app.use('/static', express.static(path.join(__dirname, 'assets')));

//declarar endpoint
app.get('/', (req, res) => {
  //si se desea regresar un html, debe pasrse el path hacia el archivo html
  res.sendFile(__dirname + '/index.html');
});

// inciar sevidor en 8080
app.listen(8080);