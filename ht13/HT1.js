var fs = require("fs");


fs.appendFile("txt1.txt","\n"+ "hi", function(err,data){
    if(err) throw err;
    

})

fs.readFile("txt1.txt", "utf8", function(err,data){
    if(err) throw err;
    console.log(data);

})

