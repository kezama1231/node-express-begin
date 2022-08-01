const express = require('express');
const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended : true}));

app.get("/", function(request, response){
  response.sendFile(__dirname + "/index.html");
});

app.post("/", function(request ,response){

  var num1  = Number(request.body.num1);
  var num2  = Number(request.body.num2);
  var result = num1 + num2;

  console.log(request.body);
  response.send("The total is " + result);

});

app.listen(3000, function(){
  console.log("Express server for calculator-express has started on port 3000.");
});
