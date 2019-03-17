var request = require('request');

request('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=3&fbclid=IwAR0__pQECzSU-WrckQqcQilKCJekyUNMjbtwVCXJZyllBSlZgE1M_RCKr8M', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body) // Show the HTML for the Google homepage.
  } else {
    console.warn(error);
  }
});

