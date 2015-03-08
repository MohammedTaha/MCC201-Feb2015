/**
 * Created by MTA on 3/8/2015.
 */


var connect = require("connect");
var app = connect();
/*app.use(function(request, response, next){
    response.write("Hello from connect server - 2.");
    //response.end();
    next();
});
app.use(function(request, response, next){
    response.write("Hello from connect server.");
    response.end();
});*/

app.use(function(req, res, next){
    res.write("From Common Middleware\n");
    if(req.url == "/"){
        res.end();
    } else {
        next();
    }
});
function checkIfAllowed(req, res, next){
    if(req.url.indexOf("/admin") != -1){
        res.end("Welcome");
    } else {
        res.write("Access denied");
        res.end();
    }
}

app.use("/add", checkIfAllowed);
app.use("/remove", function(req, res){
    res.end("requested to remove something");
});

app.listen(7000, function(){
   console.log("Server in listening state");
});
