var express = require('express')
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var campgrounds = [
    {name: "Mountain Goat's Rest", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyJgngsmedekZgB2lWLuTV4XzE1MhB0hkzv2l90wxQBFyQ8Ghi"},
    {name: "Mountain Goat's Rest", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyJgngsmedekZgB2lWLuTV4XzE1MhB0hkzv2l90wxQBFyQ8Ghi"},
    {name: "Mountain Goat's Rest", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyJgngsmedekZgB2lWLuTV4XzE1MhB0hkzv2l90wxQBFyQ8Ghi"}
];

app.get("/", function(req, res){
    res.render("landing");
});

app.get("/campgrounds", function(req, res){


    res.render("campgrounds", {campgrounds, campgrounds});
});

app.post("/campgrounds", function(req, res){
    res.send("YOU HIT THE POST ROUTE!");
    // get data form form and add to campgrounds array
    var name = req.body.name
    var image = req.body.image
    var newCampground = {name:name , image:image}
    campgrounds.push(newCampground);
    // redirect back to campgrounds
    res.redirect("/campgrounds")
});

app.get("/campgrounds/new", function (req, res){
    res.render("new.ejs");
});

app.listen(3001, function(){
    console.log("The YelpCamp Hast Started");
});