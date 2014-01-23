var http = require( "http" ),
    beta = require( "./beta" ); 

http.createServer(function (request, response) { 
   
    response.writeHead(200, {"Content-Type": "text/plain"}); 
    response.write( beta.js );
    response.end(); 

}).listen(8080);


console.log( "Server running at http://127.0.0.1:8080/" );
