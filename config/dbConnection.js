 //ultiliza os recurso do modulo
var mysql = require('mysql');

module.exports = function(){
    //com essa varriavel o auto login não fica abrindo conexões com o banco de dados
    console.log("autoload carregou o modulo de conexão com bd");
    return connMySQL;
    
}
var connMySQL = function(){
    //conexão com mysql
    console.log("conexao com banco foi estabelecida");
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '123g',
        database: 'portal_noticias'
    });
    
}
