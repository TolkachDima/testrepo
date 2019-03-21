var http = require("http");
var fs = require("fs");
var port = 3000;
var file1 = fs.statSync("index.txt"); 
var file2 = fs.statSync("index2.txt"); 
var fileSizeInBytes1 = file1["size"];
var fileSizeInBytes2 = file2["size"];
var fileInMB = fileSizeInBytes1 / 1000000.0;

//console.log(fileInMB)

if(fileSizeInBytes1 < fileSizeInBytes2){

    var sendSmFile =  "index.txt";
    var sendBgFile =  "index2.txt";

}else if(fileSizeInBytes1 > fileSizeInBytes2){

    var sendBgFile =  "index.txt";
    var sendSmFile =  "index2.txt";

}


http.createServer(function(req,res){
        console.log(req.url);

        if(req.url === "/"){
        res.write("first page");
        res.end();
    
    }else if(req.url === "/stream"){

    var readStream = fs.createReadStream(sendBgFile);
    readStream.pipe(res);

}else if(req.url === "/file"){

    fs.readFile(sendSmFile, function(err, data){ 
        if(err){console.log(err)};
        res.write(data);
        res.end();
    })

}else{

    res.write("EEEEEEEERRRRRRRRRoooooooooRRRRRRR");
    res.end();
}

}).listen(port, function(){
console.log("server on 3000 port")

});







