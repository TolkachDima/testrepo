var http = require("http");
var fs = require("fs");
var port = 3000;

//(res, req) то ошибка почему?
http.createServer(function(req, res){
    console.log(req.url);
    
    if(req.url === "/"){
        res.write("hiiiiii");
        res.end();
        }else if(req.url === "/contact"){
            var readStream = fs.createReadStream(__dirname + '/index.html');
            readStream.pipe(res);
            
        }else{
            res.write("server is OK");
            res.end();
        }
    
    }).listen(port, function(){
        console.log("server at http://localhost:3000");
    })


// var http = require('http');
// var fs = require('fs');
// var port = 3000;

// http.createServer(function (req, res) {
//     var stream = fs.createReadStream(__dirname + "/index.html");

//     stream.pipe(res);
// }).listen(port, function () {
//     console.log('Server at http://localhost:3000');
// });



