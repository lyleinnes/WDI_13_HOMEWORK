console.log("js on!")


// here we list out the variables we will be using (which reference the DOM)
var inputItems = document.getElementById("listInput");
var groupSize = document.getElementById("sizeInput");
var buildButton = document.getElementById("organizer");
var inputArray = [];
// we will assume that they are entering a list of items.


// this button click takes the input string, runs the listConverter function on the string to get an array, which we call localArray.
// it captures the group sizes specified by the user
// it runs a loop that pushes each value from the local array to inputArray which is global so that we can use it later. 

buildButton.addEventListener('click', function() {
  var inputString = inputItems.value;
  var localArray = listConverter(inputString);
  var inputSize = groupSize.value;

  for (var i = 0; i < localArray.length; i ++) {
    inputArray.push(localArray[i])  
  }
});


// this converts our string to an array, split at each space " "
var listConverter = function(list){
  var listArray = list.split(" ");
  shuffle(listArray);
  return listArray;
}

// this shuffles an arrays values
var shuffle = function(array) { 
    for (var i = array.length; i; i--) {
        var j = Math.floor(Math.random() * i);
        [array[i - 1], array[j]] = [array[j], array[i - 1]];
    }
}

/*
if ( listLength % groupSize === 0 ) {
  //this covers when the listLength divides evenly by the groupSize
  var numOfGroups = listLength / groupSize;

} else if ( listLength % groupSize === 1 ) {
  //this covers when we have one too many listArray values than we need for it to be divisible by groupSize
  var numOfGroups = ( listLength - 1 ) / groupSize;

} else if (groupSize % listLength === 1 ) {   
  //this covers when we have one less listArray value than we need for it to be divisible by groupSize
  var numOfGroups = ( listLength + 1 ) / groupSize;

} else {
  //this doesn't need any condition, the hard bit is finding out how many empty arrays to make before we add the values from listArray to them.
  //we need to figure out how to work out numOfGroups for this part, its where we got to;
}
*/