var mongoose = require('mongoose')

var api = {};
var model = mongoose.model('produtos');


//Listar todos os itens
api.listar = function(req, res){
    model.find(function(err, produto){
        if(err){res.status(500).json(err)};
        res.json(produto);
    })
};

//filtrar um item
api.achar = function(req, res){
    model.find({ titulo: req.params.titulo }, function(err, item) {
    if (err) throw err;

    res.json(item)
    });
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


api.adiciona = function(req, res) {

    model.insert(req.body, function(err, newDoc) {
        if(err) return console.log(err);
        console.log('Adicionado com sucesso: ' + newDoc._id);
        res.json(newDoc._id);
    });
};

api.busca = function(req, res) {
   model.findOne({_id: req.params.produtoId }, function(err, doc) {
        if (err) return console.log(err);
        res.json(doc);
    });
};

api.atualiza = function(req, res) {
    model.update({_id : req.params.produtoId }, req.body, function(err, numReplaced) {
        if (err) return console.log(err);
        if(numReplaced) res.status(200).end();
        res.status(500).end();
        console.log('Atualizado com sucesso: ' + req.body._id);
        res.status(200).end();
    });
};

api.lista = function(req, res) {
    model.find({}).sort({titulo: 1}).exec(function(err, doc) {
        if (err) return console.log(err);
        res.json(doc);
    });
};

api.remove = function(req, res) {

    model.remove({ _id: req.params.produtoId }, {}, function (err, numRemoved) {
        if (err) return console.log(err);
        console.log('removido com sucesso');
        if(numRemoved) res.status(200).end();
        res.status(500).end();
    });
};



module.exports = api;
