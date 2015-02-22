/**
 * Created by MTA on 2/22/2015.
 */


var http = require('http');
http.createServer(function(req, res) {
    var message = "";
    if(req.url == "/"){
        message = "Welcome";
    } else if(req.url == "/exit"){
        message = "Bye";
    } else {
        message = "404 page not found";
    }

    res.writeHead(200, {
        'Content-Type': 'text/html'
    });
    res.end('<h2>'+ message  +'</h2>');

}).listen(3000);
console.log('Server running at http://localhost:3000/');