var mongoose = require('mongoose');

var schema = mongoose.Schema({
    titulo: {
        type: String,
        required: true
    },
    descricao: {
        type: String,
        required: false
    },
    quantidade: {
        type: Number,
        required: false
    },
    valor: {
        type: Number,
        required: false
    }
});

mongoose.model('produtos', schema);
