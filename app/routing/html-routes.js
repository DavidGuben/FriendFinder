app.get('/survery', function(req, res) {

    var html = '<h1> Friend Finder Survey </h1>';

        html += '<select id ="q1">';
          html += '<input>option 1</input>';
          html += '<input>option 2</input>';
          html += '<input>option 3</input>';
          html += '<input>option 4</input>';
          html += '<input>option 5</input>';
        html += '</select>';
})

app.get('/', function(req, res){
	res.sendFile(path.join(__dirname, '/app/public/home.html'));
});

app.get('/survery', function(req, res) {
  res.sendFile(path.join(__dirname, '/app/public/survey.html'));
});
