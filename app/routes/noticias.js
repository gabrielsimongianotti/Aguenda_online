module.exports = function(application){
    //chamada o express
    application.get('/noticias', function(req, res){
       application.app.controllers.noticias.receber_dados_noticias(application, req, res);
    });
    
    application.get('/noticia', function(req, res){
        application.app.controllers.noticias.recebe_dados_noticia(application, req, res);
    });
}