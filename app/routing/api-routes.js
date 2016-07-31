var path = require('path');

module.exports = function (app) {
// This will be used to display a JSON of all possible friends.
app.get('/data/friends', function(req, res) {
  res.sendFile(path.join(__dirname, '../data/friends.js'));
});

// This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
app.post('/data/friends', function(req, res) {

	// * Convert each user's results into a simple array of numbers (ex: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]).
	//* With that done, compare the difference between current user's scores against those from other users, question by question. Add up the differences to calculate the totalDifference.
	//*
	//	* Example:
	//	*
	//		* User 1: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]
	//		* User 2: [3, 2, 6, 4, 5, 1, 2, 5, 4, 1]
	//		* Total Difference: 2 + 1 + 2 = 5
	// * Remember to use the absolute value of the differences. Put another way: no negative solutions! Your app should calculate both 5-3 and 3-5 as 2, and so on.
	// * The closest match will be the user with the least amount of difference.

  // Add a click event for the submit button
  $("#submit").on("click", function(){

    // Store users response in an object
    var userRes = {

    }



  })










});
};
