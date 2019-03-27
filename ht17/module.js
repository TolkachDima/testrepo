var Converter = require("./converter");
var request = require("request")
var baseCurrencyUs = 27;


// function f (callback) {
  
// request('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=3&fbclid=IwAR0__pQECzSU-WrckQqcQilKCJekyUNMjbtwVCXJZyllBSlZgE1M_RCKr8M', function (error, response, body) {
// if (!error && response.statusCode == 200) {
//     var baseCurrencyUs = JSON.parse(body);  
//         var a = (data[2].buy);
//         console.log(a);
        
//         var baseCurrencyUs = data[2].buy;
//         return baseCurrencyUs;
//         //callback(baseCurrencyUs);
//   } else {
//     console.warn(error);
//     }
//     callback(baseCurrencyUs);
//   });
  


// // console.log(f());

// var converter = new Converter(baseCurrencyUs);
// console.log(converter.convertToUa(1000));
// console.log(converter.convertToUs(1000));
// }


// console.log(f());


//function f (callback) {
  
  request('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=3&fbclid=IwAR0__pQECzSU-WrckQqcQilKCJekyUNMjbtwVCXJZyllBSlZgE1M_RCKr8M', function (error, response, body) {
  if (!error && response.statusCode == 200) {
      var data = JSON.parse(body);  
          var a = (data[2].buy);
          console.log(a);
          
          // var baseCurrencyUs = null;  
           //return data[2].buy;
          
          
    } else {
      console.warn(error);
      }
      callback(baseCurrencyUs);
      return a;
    });
    //return a;
  
  
  //f();
 console.log(a);
  var b = function () {
    console.log(baseCurrencyUs);
  }
   
  
  var converter = new Converter(baseCurrencyUs);
  console.log(converter.convertToUa(1000));
  console.log(converter.convertToUs(1000));
  
  
  
   console.log(f());
  
  









