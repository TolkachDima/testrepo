var weather = require("weather-js");

module.exports.getWeather = function (cb){
weather.find({search: "49040", degreeType: "C"}, function (err, result) { 
    if(err) console.log(err);
 
    console.log(JSON.stringify(result, null, 2));
    
  });
}
