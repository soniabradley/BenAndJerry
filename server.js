var express = require('express');
var exphbs = require('express-handlebars');

// Set-up express server
var app = express();
var PORT = 3000;

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });

