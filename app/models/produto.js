var mongoose = require('mongoose');

var schema = mongoose.Schema({
    titulo: {
        type: String,
        required: true
    },
    descrição: {
        type: String,
        required: false
    },
    quantidadeDisponivel: {
        type: Number,
        required: true
    },
    valorUnitario: {
        type: Number,
        required: true
    }
});

mongoose.model('Produto', schema);
