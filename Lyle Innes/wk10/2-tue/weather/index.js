var request = require('request');


request('http://api.openweathermap.org/data/2.5/weather?id=2158177&APPID=d10ed7fa849100a3d43e443f9ba5b599&units=metric', function (error, response, body) {
  
  var temp = JSON.parse(body).main.temp
  console.log(temp)
});
