module.exports.receber_dados_noticias = function(application, req, res){
    //faz a requisição do banco so quando a pagina é aberta
    var connection = application.config.dbConnection();
    var noticiasModel = new application.app.models.noticiasModel(connection);

    noticiasModel.getNoticias(function(error, result){
        res.render("noticias/noticias",{ noticias : result});
    });
}

module.exports.recebe_dados_noticia = function(application, req, res){
    //faz a requisição do banco so quando a pagina é aberta
    var connection = application.config.dbConnection();
    var noticiasModel = new application.app.models.noticiasModel(connection);
    var id = req.query;
    noticiasModel.getNoticia(id ,function(error, result){
        res.render("noticias/noticia", {noticia:result})
    });
}