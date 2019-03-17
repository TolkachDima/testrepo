var Event = require("events").EventEmitter;
var evt = new Event;
var date = require("node.date-time");

var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


evt.on("login", function(){
    
    console.log("Login " + new Date().format("H:m:S"));
});

rl.on('line', (input) => {
    console.log(`uzer type: ${input}`);

//         evt.on("smthdoin",function(){
//             console.log("smthdoin" + "Uzer type smth" + input)
// })
rl.close();
});



evt.on("logout", function(){
    console.log("\n" + "Logout " + new Date().format("H:m:S"));
    });

evt.emit("login");
evt.emit("smthdoin");


    setTimeout(function(){
        evt.emit("logout")
},3000)












































// var fs = require("fs");
// var format = require("node.date-time");
// var readline = require("readline");




// //читает строки в консоли
// var rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// //а тут должно записывать в файл

//     rl.question('Who are you?', function(answer){
//         // TODO: Log the answer in a database
          
//       console.log(answer);
//       // var a = answer;
        
//       //   return a;
//       //   rl.close();
//       }())
      

//       // function(){
//       // fs.writeFile("logs.txt", "${answer}");
//       // });
   
//       //answer();





// console.log(new Date().format("H:m:S"));














