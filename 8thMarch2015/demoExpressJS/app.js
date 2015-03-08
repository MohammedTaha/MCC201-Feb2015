/**
 * Created by MTA on 3/8/2015.
 */


var express = require("express");
var app = express();

app.get("/", function(req, res){
    res.send("<h2>Welcome from express HTTP server</h2>");
});
app.get("/add", function(req, res){
    res.send("<h2>Requested to add something</h2>");
});
app.get("/remove", function(req, res){
    res.send("<h2>Requested to remove something</h2>");
});
app.get("/login", function(req, res){
    var htmlStr = "" +
    "<form>" +
        "<label> Your Name : <input type='text'></label>" +
    "</form>";
    res.send(htmlStr);
});

app.listen(7000, function(){
    console.log("Express' HTTP server listening on 7000");
});
