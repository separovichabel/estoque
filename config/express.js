var express = require('express'),
    app = express(),
    consign = require('consign'),
    bodyParser = require('body-parser');

app.set('view', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

consign({ cwd: 'app'})
    .include('models')
    .then('api')
    .then('routes')
    .into(app)

module.exports = function(){
    return app;
};
