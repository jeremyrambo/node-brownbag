var http = require( "http" ),
    fs = require( "fs" ); 

http.createServer(function (request, response) { 
   
    var url =  __dirname + "/public" + (request.url === "/" ?  "/index.html" : request.url );
    fs.exists( url, function( exists ){
        if( exists ){
            response.writeHead( 200, {"Content-Type": "text/html"} ); 
            var stream = fs.createReadStream(url);
            stream.pipe( response );    
            stream.on( "end", function(){
                response.end(); 
            });
        }else{
            response.writeHead( 404 );
            response.end();
        }
    });


}).listen(8080);

console.log( "Server running at http://127.0.0.1:8080/" );