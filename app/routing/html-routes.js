var routes = require('./server');
app.use('/', routes)

app.get('/survey', function(req, res) {
  res.sendFile(path.join(__dirname, '../public/survey.html'));
});
