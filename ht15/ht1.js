var http = require("http");
var fs = require("fs");
var port = 3000;


http.createServer(function(req,res){
        console.log(req.url);

        if(req.url === "/"){
        res.write("first page");
        res.end();
}else if(req.url === "/stream"){

    var readStream = fs.createReadStream(__dirname + "/index.txt");
    readStream.pipe(res);


}else if(req.url === "/file"){
    fs.readFile('index2.txt', 'utf8', function(err, data){ 
        if(err){console.log(err)};
        res.write(data);
        res.end();
    })
}else{
    res.write("ERROR");
    res.end();
}



});







