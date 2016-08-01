var path = require('path');

var friends = [
  {
  name: "Dummy",
  scores: [3,2,4,5,1,2,4,5,3,2]
  },
]

module.exports = function (app) {
// This will be used to display a JSON of all possible friends.
app.get('/data/friends', function(req, res) {
  res.sendFile(path.join(__dirname, '../data/friends.js'));
});

// This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
app.post('/data/friends', function(req, res) {

  var newFriend = req.body;
  console.log(req.body);
  friends.push(newFriend);
  res.json(newFriend);
  console.log(friends);

});
};
