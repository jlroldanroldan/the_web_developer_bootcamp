
var express = require("express");

var app = express();

// first part of exercise
app.get("/", function(req, res){
    res.send("Hi there, welcome to my assignment!");
});

// second part of exercise
// app.get("/speak/:animalType", function(req, res){
//     var animal = req.params.animalType;
//     if (animal === "pig"){
//         res.send("Oink");
//     } else if (animal === "cow"){
//         res.send("Moo");
//     } else if (animal === "dog") {
//         res.send("Woof woof")
//     }

// });

// second part solution
app.get("/speak/:animal", function(req,res){
    var sound = {
        pig: "Oink",
        cow: "Moo",
        dog: "Woof Woof!",
        cat: "I hate you human",
        goldfish: "...."
    }
    var animal =  req.params.animal.toLowerCase();
    var sound = sound[animal];
    res.send("The " + animal + " says " + sound);
});

// third part of exercise
// app.get("/repeat/:stringName/:timesToPrint", function(req, res){
//     var stringNames = req.params.stringName;
//     var timesToPrints = req.params.timesToPrint;
//     var stringToreturn = stringNames;

//     for (var i = 0; i < timesToPrints - 1; i++){
//         stringToreturn += " " + stringNames;
//     } 
//     res.send(stringToreturn);

// });

//third part of exercise solution
app.get("/repeat/:message/:times", function(req, res){
    var message = req.params.message;
    var times = Number(req.params.times);
    result = "";

    for (var i = 0; i < times; i++){
        result += message + " ";
    }
    res.send(result);
});


// Every time user tries access page that is not valid. MUST PUT AT THE END!
app.get("*", function(req, res){
    res.send("YOU ARE A START");
});

// Tell Express to listen for requests (start server)
app.listen(3000, function() { 
    console.log('Server listening on port 3000'); 
});
