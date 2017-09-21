module.exports = function() {

    var mongoose = require('mongoose'),
        url = 'mongodb://localhost/mean';

    mongoose.connect(url, {
        useMongoClient: true,
    });

    var connection = mongoose.connection;

    connection.on('connected', function() {
        console.log('Conectado no DB');
    });

    connection.on('disconnected', function() {
        console.log('Disconectado do DB');
    });

    connection.on('error', function(error) {
        console.log('Erro na conecção com o DB', error);
    });

    process.on('SIGINT', function() {
        connection.close(function() {
            console.log('A conexão com o DB foi finalizada pela aplicação');
            process.exit(0);
        });
    });
};
