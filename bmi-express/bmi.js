const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
  extended: true
}));

app.post("/", function(request, response) {

  var weight = parseFloat(request.body.weight);
  var height = parseFloat(request.body.height);
  var bmi = weight / Math.pow((height/100), 2);
  response.send("Your bmi is " + bmi);

  console.log("POST request served");
});

app.get("/", function(request, response) {
  response.sendFile(__dirname + "/bmi.html");
  console.log("GET request served.");
});

app.listen(3000, function() {
  console.log("Express server has been set up for bmi challenge at port 3000.");
});
