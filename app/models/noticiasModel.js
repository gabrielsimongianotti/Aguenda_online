function Noticias(connection){
    this._connection = connection;
}
Noticias.prototype.getNoticias = function( callback){
    this._connection.query('SELECT * FROM noticias order by data_n desc', callback);
}

Noticias.prototype.getNoticia = function(id, callback){
    console.log(id.id_noticia+' id');
    //this._connection.query("SELECT id_noticia, autor, titulo, DATE_FORMAT(data_n,'%d/%c/%Y'),resumo FROM noticias WHERE id_noticia ="+id.id_noticia, callback);
    //console.log("model "+ this._connection.query('SELECT * FROM noticias WHERE id_noticia ='+id.id_noticia, callback));
    this._connection.query('SELECT * FROM noticias WHERE id_noticia ='+id.id_noticia, callback);
    
}
Noticias.prototype.salvarNoticia = function(noticia, callback){    
    console.log(noticia +" salvar noticiasModel");
    this._connection.query('insert into noticias set ? ', noticia, callback);
}
Noticias.prototype.get5UltimasNoticias = function(callback){
    
    this._connection.query('select * from noticias order by data_n desc limit 8',callback);
}
Noticias.prototype.EditarNoticia = function(id, noticia,callback){
    console.log(id.id_noticia +' id editar');
    console.log(noticia.titulo+' titulo');
    console.log(noticia.noticias+' Noticias');
    console.log(noticia.data_n+' data_n');
    
    console.log(noticia.resumo+' resumo');
    console.log(noticia.autor+' autor');
 
    console.log(noticia +" salvar noticiasModel");
    this._connection.query('UPDATE noticias SET titulo="'+ noticia.titulo +'", noticias= "'+noticia.noticias+'",data_n="'+noticia.data_n+'",resumo= "'+noticia.resumo+'",autor="'+noticia.autor+'"  where id_noticia = '+id.id_noticia, callback);
    //console.log(callback+"callback");
}
module.exports = function(){ 
    return Noticias;
}