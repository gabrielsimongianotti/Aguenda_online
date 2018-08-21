//o controller 
module.exports.formulario_inclusao_noticia = function(application, req, res){
    res.render('admin/form_add_noticia', { validacao : {},noticia :  {} });
}
module.exports.verificar_e_salvar = function(application, req, res){
    var noticia= req.body;
        //notEmpty torna o canpo obrigatorio
        //len faz com que o campo tenha um numero maximo e minimo de linhas
        //isDate verifica as datas com o formato aaaa-mm-dd
        console.log('controller '+ noticia);
        req.assert('titulo', 'Título é obrigatório').notEmpty();
        req.assert('resumo', 'Resumo é obrigatório').notEmpty();
        req.assert('resumo', 'Resumo deve conter entre 10 e 100 caracteres').len(10, 100);
        req.assert('autor', 'Autor é obrigatório').notEmpty();
        req.assert('data_n', 'Data deve ter ano, mes e dia').isDate({format: 'YYYY-MM-DD'});
        req.assert('data_n', 'Data é obrigatório').notEmpty()
        req.assert('noticias', 'Notícia é obrigatório').notEmpty();

        var erros = req.validationErrors();

        if(erros){
            res.render('admin/form_add_noticia', {validacao: erros,  noticia: noticia});
            return;
        }
        
        var connection = application.config.dbConnection();
        var noticiasModel = new application.app.models.noticiasModel(connection);

        noticiasModel.salvarNoticia(noticia, function(error, result){
            res.redirect('/noticias');
        });
}
module.exports.editar_noticias = function(application, req, res){
    //faz a requisição do banco so quando a pagina é aberta
    var connection = application.config.dbConnection();
    var noticiasModel = new application.app.models.noticiasModel(connection);
    var id = req.query;
    noticiasModel.getNoticia(id ,function(error, result){
        res.render("admin/form_editar_noticia", {validacao : {}, noticia:result})
    });
    //res.render('admin/form_add_noticias', { validacao : {},noticia :  {} });
}
module.exports.verificar_e_editar = function(application, req, res){
    var noticia= [];
    noticia[0] = req.body;
        //notEmpty torna o canpo obrigatorio
        //len faz com que o campo tenha um numero maximo e minimo de linhas
        //isDate verifica as datas com o formato aaaa-mm-dd

        req.assert('titulo', 'Título é obrigatório').notEmpty();
        req.assert('resumo', 'Resumo é obrigatório').notEmpty();
        req.assert('resumo', 'Resumo deve conter entre 10 e 100 caracteres').len(10, 100);
        req.assert('autor', 'Autor é obrigatório').notEmpty();
        req.assert('data_n', 'Data deve ter ano, mes e dia').isDate({format: 'YYYY-MM-DD'});
        req.assert('data_n', 'Data é obrigatório').notEmpty()
        req.assert('noticias', 'Notícia é obrigatório').notEmpty();

        var erros = req.validationErrors();

        if(erros){
            res.render('admin/form_editar_noticia', {validacao: erros,  noticia: noticia});
            return;
        }

        var connection = application.config.dbConnection();
        var noticiasModel = new application.app.models.noticiasModel(connection);
        var id = req.query;
        console.log(noticia[0]);
        console.log(req.query.id_noticia  +' id editar');

        noticiasModel.EditarNoticia(id , noticia[0], function(error, result){
            console.log(" erro "+error+", result "+result);
            res.redirect('/');
        });
}