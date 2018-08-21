
module.exports = function(application){
    application.get('/formulario', function(req,res){
        application.app.controllers.admin.formulario_inclusao_noticia(application, req, res);
    });

    application.post('/noticias/salvar', function(req,res){
        application.app.controllers.admin.verificar_e_salvar(application, req, res);
    });
    
    application.get('/editar',function(req,res){
        application.app.controllers.admin.editar_noticias(application,req,res);
    });

    application.post('/noticias/editar',function(req,res){
       application.app.controllers.admin.verificar_e_editar(application,req,res); 
    });

    
}