var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send('Hello Katie! I have written this code by remotely accessing a linux machine and then pushed it onto an amazon web hosting service to deploy this text... next I will try to make something that looks like a web page ');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
