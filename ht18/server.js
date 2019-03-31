var express = require("express");
var app = express();

app.get("/", function (req, res) {
    res.send()
});

app.use(express.static(path.join(__dirname, "public")));

app.get('/', function(request, response) {
    response.sendFile(__dirname + '/views/index.html');
  });
  
  // listen for requests :)
  const listener = app.listen(process.env.PORT, function() {
    console.log('Your app is listening on port ' + listener.address().port);
  });
  

// app.listen(3000);