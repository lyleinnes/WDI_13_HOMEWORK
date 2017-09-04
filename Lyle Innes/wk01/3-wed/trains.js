console.log('js ON')

// // RECIPE CARD 

// var favRecipe = {
//   title: 'mole',
//   servings: 2,
//   ingredients: ['cinnamon', 'cumin', 'cocoa']
// }
// // return to this soon <----

// console.log('title: ' + favRecipe.title);
// console.log(favRecipe['servings']);
// console.log(favRecipe.ingredients[0]);
// console.log(favRecipe.ingredients[1]);
// console.log(favRecipe.ingredients[2]);

// // THE READING LIST

// var readingList = [
//   {
//     title: 'harry potter',
//     author: 'j.k rowling',
//     alreadyRead: true
//   },
//   {
//     title: 'no country for old men',
//     author: 'cormac mccarthy',
//     alreadyRead: true
//   },
//   {
//     title: 'the winds of winter',
//     author: 'george rr martin',
//     alreadyRead: false
//   }
// ];

// for (var x = 0; x < readingList.length; x ++) {
//   var book = alreadyRead[x];
//   var desc = book.title + ' by ' + ' ' + book.author

//   if (readingList[x].alreadyRead/*=== true*/) {
//     console.log('you already read ' + readingList[x].title + ' by ' + readingList[x].author)
//   }
//   else {
//     console.log('you need to read ' + readingList[x].title + ' by ' + readingList[x].author)
//   }
// }

// // THE MOVIE DATABASE

// var favMovie = {
//   title: 'A Clockwork Orange',
//   duration: '2 hours, 16 minutes',
//   stars: ['Malcolm McDowell', 'Warren Clarke', 'Michael Bates', 'Patrick Magee']
// };

// var movieInfo = function(favMovie) {
//   return favMovie.title + ' is ' + favMovie.duration + ' long and stars ' + favMovie.stars
// }

// console.log(movieInfo(favMovie));



// PT PLANNER

var origin = prompt('Select an origin station: \n lines: \n sandringham: "southern cross", "richmond", "south yarra", "praran", "windsor"\n glenwaverly: "flagstaff", "melbourne central", "parliament", "richmond", "kooyong", "tooronga"\n alamein: "flinders street", "richmond", "east richmond", "burnley", "hawthorn", "glenferrie".');
var destination = prompt('Select an origin station: \n lines: \n sandringham: "southern cross", "richmond", "south yarra", "praran", "windsor"\n glenwaverly: "flagstaff", "melbourne central", "parliament", "richmond", "kooyong", "tooronga"\n alamein: "flinders street", "richmond", "east richmond", "burnley", "hawthorn", "glenferrie".');
var sandringham = ['southern cross', 'richmond', 'south yarra', 'prahran', 'windsor'];
var glenwaverly = ['flagstaff', 'melbourne central', 'parliament', 'richmond', 'kooyong', 'tooronga'];
var alamein = ['flinders street', 'richmond', 'east richmond', 'burnley', 'hawthorn', 'glenferrie'];
var transfer = 'richmond';

// this function checks to see if a given stop is on a line. it returns true/false. its the best.
var inArray = function(stop, line) {
    var length = line.length;
    for(var i = 0; i < length; i++) {
        if(line[i] === stop)
            return true;
    }
    return false;
}

// this checks all three lines for the origin and gives the correct line to startLine
if (inArray(origin, sandringham) === true) {
  var startLine = sandringham;
} else if (inArray(origin, glenwaverly) === true) {
  var startLine = glenwaverly;
} else {
  var startLine = alamein;
}

// this checks all three lines for the destination and gives the correct line to endLine
if (inArray(destination, sandringham) === true) {
  var endLine = sandringham;
} else if (inArray(destination, glenwaverly) === true) {
  var endLine = glenwaverly;
} else {
  var endLine = alamein
}

// here i am consensing some indexOf calls into variables that hold some important indexes
var origIndex = startLine.indexOf(origin);
var destIndex = endLine.indexOf(destination);
var richmondOne = startLine.indexOf(transfer);
var richmondTwo = endLine.indexOf(transfer);

// if the start & end lines are the same and the origin index is < dest index, create a slice. otherwise take a slice using the destination then origin (because slice needs the lower index first), then we flip it to get the actual trip.
if (startLine === endLine && origIndex < destIndex) {
  var trip = startLine.slice(origIndex, destIndex +1)
} else {
  var trip = startLine.slice(destIndex, origIndex +1);
  var trip = trip.reverse()
};

// if the startLine does not = the endLine, and the origin index < the transfer index, create a slice of the required stops and assign it to firstTrip array.
if (startLine !== endLine && origIndex < richmondOne) {
  var firstTrip = startLine.slice(origIndex, richmondOne +1)
} else {
  var firstTrip = startLine.slice(richmondOne, origIndex +1)
  var firstTrip = firstTrip.reverse();
}

// im trying to construct the second part of the journey here, hopefully its assigned to the variable secTrip which we can stitch to firstTrip! :)
if (startLine !== endLine && richmondTwo < destIndex) {
  var secTrip = endLine.slice(richmondTwo +1, destIndex +1)
} else {
  var secTrip = endLine.slice(destIndex, richmondTwo);
  var secTrip = secTrip.reverse();
}

// assigning the two possible arrays to strings for ease of use when outputting
var singleLine = trip;
var multiLine = firstTrip.concat(secTrip);

// output is dependant on whether the origin and destination are on the same line, and output accordingly!! :D
if (startLine === endLine) {
  var output = 'origin: ' + origin 
  output += '\ndestination: ' + destination
  output += '\n\n' + trip.join(' -----> ') + '\n\n'
  output += trip.length-1 + ' stops total'
  alert(output);
} else {
  var output = 'origin: ' + origin 
  output += '\ndestination: ' + destination
  output += '\n\n' + multiLine.join(' -----> ') + '\n\n'
  output += multiLine.length-1 + ' stops total'
  alert(output);
}




