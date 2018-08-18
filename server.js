// Dependencies
var express = require('express');
var exphbs = require('express-handlebars');

// Create an instance of the express app.
var app = express();

// Specify the port.
var PORT = 3000;

// Set Handlebars as the default templating engine.
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Data
var icecreams = [
  {name:"vanilla",price:10, awesomeness:3},
  {name:"chocolate",price:4, awesomeness:7},
  {name:"banana",price:3, awesomeness:4},
]

// Routes
app.get('/',function(req,res){
  res.render('icecreams', {ics:icecreams});
  })

app.get('/:name', function(req,res){
  for(var i=0; i<icecreams.length; i++) {
    if(icecreams[i].name == req.params.name){
    return res.render("icecream",icecreams[i]);
  }
}
});

// Initiate the listener.
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
