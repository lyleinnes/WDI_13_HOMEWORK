// JS VARIABLES
var captain = "Jack";
var phrase = "Oh " + captain + ", my " + captain + "!"
// JS CONDITIONALS
var souls = 3;
var lifeRafts = 2;

if (souls < lifeRafts) {
  console.log("SOS!")
};
// DATA STRUCTURES - JS ARRAYS
var weekend = ['Saturday'];

weekend.push('Sunday');

weekend.unshift('Friday');

var day = weekend[1];

weekend.shift('Friday');
// DATA STRUCTURES - JS OBJECTS
var RectangleArea = function(length, width) {
  var area = length * width;
  return area;
}

var smallRect = RectangleArea(3,4);

/* the global variable fruits is an array which is a complex data type. when passing complex data types into functions, we are passing in a reference to the original variable, so the function modifies the original. the local variable 'arr' in this case is a reference to the variable 'fruits'. */

