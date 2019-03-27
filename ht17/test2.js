var request = require('request');
var sum = 29;

function f (sum) {
request('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=3&fbclid=IwAR0__pQECzSU-WrckQqcQilKCJekyUNMjbtwVCXJZyllBSlZgE1M_RCKr8M', function get(error, response, body, sum) {
  if (!error && response.statusCode == 200) {

    var data = JSON.parse(body);  
    var a = +(data[2].buy);
    console.log(a) 
    return a;
    sum = a;








     
  } else {
    console.warn(error);
  }
});
}
f();



