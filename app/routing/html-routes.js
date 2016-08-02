<<<<<<< HEAD
app.get('/survery', function(req, res) {
=======
var path = require('path');
>>>>>>> 99fecc5206dfa9b09a6389da03d17043d5725bbe

module.exports = function (app) {
    app.get('/', function(req, res){
			res.sendFile(path.join(__dirname, '../public/home.html'));
   });

<<<<<<< HEAD
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
=======
    app.get('/survey', function(req, res) {
      res.sendFile(path.join(__dirname, '../public/survey.html'));
    });
};
>>>>>>> 99fecc5206dfa9b09a6389da03d17043d5725bbe
