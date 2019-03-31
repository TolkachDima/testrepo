var Converter = require("./converter");
var request = require("request")
var baseCurrencyUs= null;


function f (cb) {
  request('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=3&fbclid=IwAR0__pQECzSU-WrckQqcQilKCJekyUNMjbtwVCXJZyllBSlZgE1M_RCKr8M', function get(error, response, body, sum) {
    if (!error && response.statusCode == 200) {
  
      var data = JSON.parse(body);  
      baseCurrencyUs = +(data[2].buy);
      return cb(baseCurrencyUs);   
    } else {
      console.warn(error);
    }
  });
  }
  f(function (baseCurrencyUs) {
  
  var converter = new Converter(baseCurrencyUs);
console.log(converter.convertToUa(1000));
console.log(converter.convertToUs(1000));

});