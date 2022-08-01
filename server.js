const express = require('express');
const app = express();

//allows us to specify what happens when browser acceses our server and makes get request
app.get("/", function(request, response){
  response.send("<h3>Hello we are sending response now.</h3>");
});

//creating a get request for about web page with Express
app.get("/about", function(request, response){
  response.send("<h3>Here's a little information about me. I love drinks. Tea is my favourite.</h3>");
});

//creating a get request for contact web page with express
app.get("/contact", function(request, response){
  response.send("<h3>Feel free to reach me at <strong>kezama1231@gmail.com</strong></h3>");
});

//creating a get request for hobby web page with express
app.get("/hobby", function(request,response){
  response.send("<h3>My hobby is playing computer games and chilling out.</h3>");
});

//set server to start on port 3000
app.listen(3000, function(){
  console.log("Hello there. Express server has started on port 3000.");

});
