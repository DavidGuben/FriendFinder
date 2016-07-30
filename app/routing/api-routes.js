// This will be used to display a JSON of all possible friends.
app.get('/data/friends', function(req, res) {
  res.sendFile(path.join(__dirname, '../data/friends.js'));
});
// This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
app.post('/data/friends', function(req, res) {
  res.sendFile(path.join(__dirname, '../data/friends.js'));
});
