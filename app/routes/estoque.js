module.exports = function(app){

    var api = app.api.produto


   app.route('/produtos')
        .post(api.adiciona)
        .get(api.listar);

    app.route('/produtos/:produtoId')
        .delete(api.remove)
        .get(api.busca)
        .put(api.atualiza);
//========================================================


    app.get('/listar', api.listar);

    app.get('/achar/:titulo', api.achar);


    //app.delete('/produtos/:id', api.deletar);
};
