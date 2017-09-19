module.exports = function(app){

    var api = app.api.produto

    app.route('/produtos')
        .get(api.filtrar);
        //.post(api.post);

    //app.delete('/produtos/:id', api.deletar);


};
