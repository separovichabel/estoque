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
        required: false
    },
    valorUnitario: {
        type: Number,
        required: false
    }
});

mongoose.model('Produto', schema);
