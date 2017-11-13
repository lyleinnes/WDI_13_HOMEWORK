var express = require('express');
var app = express();
const PORT = 3000;
var http = require('http');


var bodyElem = document.getElementsByTagName("body")

var compliments = [
  "Your instructors love you",
  "High five = ^5",
  "Shut up and take my money",
  "It's almost beer o'clock",
  "The Force is strong with you"
]
var colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"]

var background = function() {

}
var compliment = function() {

}

var app = function(request, response) {
  response.write('<h1>"hey here is your response"</h1>')
  response.end()
} 

var server = http.createServer(app)
server.listen(PORT)