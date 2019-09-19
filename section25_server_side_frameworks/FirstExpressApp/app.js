var express = require("express");

var app = express();

// "/" => "Hi there!"
app.get("/", function(req, res){
    res.send("Hi there!");
});

// "/" => "Bye"
app.get("/bye", function(req, res){
    res.send("Good bye");
});

// "/" => "Bye"
app.get("/dog", function(req, res){
    res.send("WOW");
    console.log("Someone made a request to DOG")
});

// How to use variables example 1
app.get("/r/:subredditName", function(req,res){
    var subreddit = req.params.subredditName;
    res.send("WELCOME TO THE " + subreddit.toUpperCase() + " SUBREDDIT!!!");
});

// How to use variables example 2
app.get("/r/:subredditName/comments/:id/:title", function(req,res){
    res.send("WELCOME TO THE COMMENTS PAGE");
});

// Every time user tries access page that is not valid. MUST PUT AT THE END!
app.get("*", function(req, res){
    res.send("YOU ARE A START");
});

// Tell Express to listen for requests (start server)
app.listen(3000, function() { 
    console.log('Server listening on port 3000'); 
});
