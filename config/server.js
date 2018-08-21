//pacotes
var express = require('express');//http incorpora biblioteca http
var consign = require('consign');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator'); 

var app = express(); 
// a engine do ejs vai processar o html da pasta views  
app.set('view engine', 'ejs');
app.set('views','./app/views');
//express.static informa o local de todos os arquivos estaticos
app.use(express.static('./app/public'));

//inclui o bodyParser
app.use(bodyParser.urlencoded({extended: true}));

app.use(expressValidator());
//inclui modulos routes dentro do servidor
consign()
    .include('app/routes')
    .then('config/dbConnection.js')//chama o dbConnection.js
    .then('app/models')
    .then('app/controllers')
    .into(app);

module.exports = app;