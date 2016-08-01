// Require npm packages
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();
var PORT = process.env.PORT || 3000;



// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

app.use(express.static(process.cwd() + '/public'));

var router = require('./app/routing/html-routes')(app);
var routerApi = require('./app/routing/api-routes')(app);

app.listen(PORT, function(){
	console.log('App listening on PORT ' + PORT);
});
