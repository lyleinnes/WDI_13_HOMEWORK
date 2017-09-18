var words = ['motorbike', 'basketball', 'frisbee', 'genius', 'cake'];
var word = 'test';
var wordArray = word.split('');

var underscoreBuilder = function (array) {
  var length = array.length;
  var underArr = [];
  var underscore = '_';
  for (i = 0; i < length; i ++) {
    underArr.push(underscore);
  }
  return underArr
}

