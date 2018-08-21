var http = require('http'); //http incorpora biblioteca http
// cria um servidor
http.createServer( function(req,res){
    var categoria = req.url;

    if(categoria = "tecnologia"){
        //responsta do res como url localhost:3000/tecnologias
        res.end("<html><body>noticias de tecnologia</body></html>");
    }
    else if(categoria = 'moda'){
        //responsta do res como url localhost:3000/moda
        res.end("<html><body>noticias de moda</body></html>");
    }
    else if(categoria = 'beleza'){
        //responsta do res como url localhost:3000/beleza
        res.end("<html><body>noticias de beleza</body></html>");
    }
    else{
        //responsta do res
        res.end("<html><body>Portal de noticias</body></html>");
    }
}).listen(3000);

