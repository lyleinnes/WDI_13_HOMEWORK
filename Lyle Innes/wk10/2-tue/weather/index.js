var request = require('request');


request('http://api.openweathermap.org/data/2.5/weather?id=2158177&APPID=d10ed7fa849100a3d43e443f9ba5b599&units=metric', function (error, response, body) {
  /*console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.*/
  var temp = JSON.parse(body).main.temp
  console.log(temp)
});
