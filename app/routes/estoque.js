module.exports = function(app){

    var api = app.api.produto


    app.get('/listar', api.listar);

    app.get('/achar/:titulo', api.achar);

    app.get('/teste/:titulo', api.teste);

    //app.delete('/produtos/:id', api.deletar);
};
