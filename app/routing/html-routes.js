app.get('/', function(req, res){
	res.sendFile(path.join(__dirname, '/app/public/home.html'));
});

app.get('/survery', function(req, res) {
  res.sendFile(path.join(__dirname, '/app/public/survey.html'));
});
