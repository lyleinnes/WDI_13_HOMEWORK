var fs = require('fs');
var http = require('http');


var csvJSON = function(csv) {
  var lines = csv.split("\n");
  var result = [];
  var headers = lines[0].split(",");

  for ( var i = 1 ; i < lines.length ; i++ ) {
    var obj = {};
    var currentLine = lines[i].replace(/"/g,'').split(",");

    for ( var j = 0 ; j < headers.length ; j++ ) {

      obj[headers[j]] = currentLine[j]
      // var text = currentLine[j].replace(/"/g,'').replace(/[\n\r]+/g, '');
      // var head = headers[j].replace(/"/g,'').replace(/[\n\r]+/g, '')
      // obj[head] = text
    }
    result.push(obj);
  }
  return JSON.stringify(result);
}

var app = function(request, response) {
  var path = request.url;
  if (path === '/postcodes') {
    fs.readFile('Australian_Post_Codes_Lat_Lon.csv', 'utf-8', function(error, data) {
      response.writeHead(200, {'Content-Type': 'application/json'});
      response.write(csvJSON(data));
      response.end();
    });
  } else {
    response.write(404)
    response.write('hello world');
    response.end();
  }
}

var server = http.createServer( app );
server.listen(8888);
