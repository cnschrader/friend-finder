var express = require("express");
var path = require("path");

var friends = require("./data/friends.js");


// var friendsData = require("./app/data/friends.js");

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
    
    var newFriend = req.body;
  
    
    newFriend.routeName = newFriend.name.replace(/\s+/g, "").toLowerCase();
  
    console.log(newFriend);
  
    friends.push(newFriend);
  
    res.json(newFriend);
  });
  
  
  


  

  





// listening to the port
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  