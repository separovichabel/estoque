var mongoose = require('mongoose')

var api = {};
var model = mongoose.model('Produto');


//Listar todos os itens
api.listar = function(req, res){

    model.find(function(err, produtos){
        if(err){
            res.status(500).json(err);
        }
        res.json(produtos);
    })
};

//filtrar um item
api.achar = function(req, res){
    model.find({ titulo: req.params.titulo }, function(err, item) {
    if (err) throw err;

    res.json(item)
    });
};

api.teste = function(req, res){
    res.send(req.params.titulo)
};

//Criando um item
api.criar = function(req, res){

/*    model
        .create(req.body)
        .then(function(produto){
            res.json(produto);
        }, function(err){
            console.log(err);
            res.status(500).json(err);
        })
*/
};

//atualizando um item
api.atualizar = function(req, res){
    res.send('atualisando')
};

//deletar
api.deletar = function(req, res){
/*    model
        .remove({_id: req.params.id})
        .then(function(){
            res.status(204);
        }, function(err) {
            console.log(err);
            res.status(500).json(err);
        }); */
};
module.exports = api;
