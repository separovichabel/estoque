module.exports = function(app){

    var api = app.api.produto


    app.get('/listar', api.listar);

    app.get('/achar/:titulo', api.achar);


    //app.delete('/produtos/:id', api.deletar);
};
