var fs = require("fs");
var format = require("node.date-time");
var readline = require("readline");




//читает строки в консоли
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//а тут должно записывать в файл

    rl.question('Who are you?', (answer) => {
        // TODO: Log the answer in a database
          
      console.log(answer);
        
        rl.close();
      });
      

      function(){
      fs.writeFile("logs.txt", "${answer}");
      });
   






console.log(new Date().format("H:m:S"));
















