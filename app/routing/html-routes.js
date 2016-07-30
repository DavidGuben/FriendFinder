app.use('/', function(req, res){
	res.sendFile(path.join(__dirname, 'home.html'));
});

app.get('/survery', function(req, res) {
  res.sendFile(path.join(__dirname, 'survey.html'));
});
