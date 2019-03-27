let a = 0;

function d(callback){
    
    
return function () {
    a+=5;
    return a;
}
callback();
}
// function plus10() {
//     a+=10;
//     return a;
// }

d();

console.log(a);





// function f (callback) {
  
//   request('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=3&fbclid=IwAR0__pQECzSU-WrckQqcQilKCJekyUNMjbtwVCXJZyllBSlZgE1M_RCKr8M', function (error, response, body, a) {
//   if (!error && response.statusCode == 200) {
//       var data = JSON.parse(body);  
//            a = +(data[2].buy);
//           //console.log(a);
//           return a;
//            return data[2].buy;        
//     } else {
//       console.warn(error);
//       }
//     });
// } 
//   f();

//   console.log(f());
//   var converter = new Converter(baseCurrencyUs);
//   console.log(converter.convertToUa(1000));
//   console.log(converter.convertToUs(1000));
  