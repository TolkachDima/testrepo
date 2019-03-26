var Converter = require("./converter");
var request = require("request")
var baseCurrencyUs = 27;



request('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=3&fbclid=IwAR0__pQECzSU-WrckQqcQilKCJekyUNMjbtwVCXJZyllBSlZgE1M_RCKr8M', function (error, response, body) {
if (!error && response.statusCode == 200) {
    var data = JSON.parse(body);
        console.log(data[2].buy) // Show the HTML for the Google homepage.
        
  } else {
    console.warn(error);
  }
});
 


var converter = new Converter(baseCurrencyUs);
console.log(converter.convertToUa(1000));
console.log(converter.convertToUs(1000));

