var express = require("express");
var path = require("path");

var friends = require("./data/friends.js");





// Sets up the Express App
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// GET requests
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "./public/home.html"));
  });

  app.get("/survey", function(req, res){
    res.sendFile(path.join(__dirname, "./public/survey.html"))
  });

  // displaying all the users
  app.get("/api/friends", function(req, res) {
    return res.json(friends);
  });
  
  // Post requests
  app.post("/api/friends", function(req, res) {
    
    // pushing to the friends array of objects.
    var newFriend = req.body;
  
    console.log(newFriend);
  
    friends.push(newFriend);
  
    res.json(newFriend);

    // logic for the comparison and matching
    for (let i = 0; i < friends.length; i++) {
      let currentFriend = (friends[i]);
      totalDifference = 0;

      let friendInt = parseInt(currentFriend.choice);

      console.log(currentFriend.name);
      console.log(currentFriend.choice);

      

      // We then loop through all the scores of each friend
      for (var j = 0; j < currentFriend.choice.length; j++) {

        // We calculate the difference between the scores and sum them into the totalDifference
        
        
        const sum = friendInt.reduce((partial_sum, a) => partial_sum + a,0); 
console.log(sum);


        
      }

      // If the sum of differences is less then the differences of the current "best match"
      // Reset the bestMatch to be the new friend.

  }});
  
 
  
  


  

  





// listening to the port
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  