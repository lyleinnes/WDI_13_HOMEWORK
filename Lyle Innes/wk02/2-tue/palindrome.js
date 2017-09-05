console.log('js go!');

var palDroTest = function (string) {
  var noPunctStr = string.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
  var stringArr = noPunctStr.split("");
  var revArr = stringArr.reverse();
  var revString = revArr.join("");
  var lowNoPunctStr = noPunctStr.toLowerCase();
  var lowRevString = revString.toLowerCase();
  var cleanStr = lowNoPunctStr.replace(/\s+/g, '');
  var cleanRev = lowRevString.replace(/\s+/g, '');

  if (cleanStr === cleanRev){
    return true
  } else {
    return false
  }
}
