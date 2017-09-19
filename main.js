var app = require('./config/express')(),
    rotasEstoque = require('./app/routes/estoque')(app);
require('./config/database')()

app.listen(8080, function(){
    console.log('Conected')
});
