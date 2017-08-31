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

var origin = 'melbourne central';
var destination = 'glen waverly';

// var alamein = ['flinders street', 'richmond', 'east richmod', 'burnley', 'hawthorn', 'glenferrie', 'alamein'];

var glenwaverly = ['flagstaff', 'melbourne central', 'parliament', 'richmond', 'kooyong', 'tooronga', 'glen waverly'];

// var sandringham = ['southern cross', 'richmond', 'south yarra', 'prahran', 'windsor', 'sandringham'];

var trip = [];

// trip.push(origin);
// trip.push(destination);

for (var i = 0; i < glenwaverly.length; i ++) {
  if (origin === glenwaverly[i]) {
    var start = glenwaverly.indexOf(glenwaverly[i]);
  }
}

for (var i = 0; i < glenwaverly.length; i ++) {
  if (destination === glenwaverly[i]) {
    var end = glenwaverly.indexOf(glenwaverly[i]);
  }
}

var slice = glenwaverly.slice(start, end += 1);

trip.push(slice);

var output = 'origin: ' + origin 
output += '\ndestination: ' + destination
output += '\n\n' + trip[0].join(' -----> ') + '\n\n'
output += trip[0].length + ' stops total'

console.log(output)

// var network = [
//   {
//   alamein = ['flinders street', 'richmond', 'east richmod', 'burnley', 'hawthorn', 'glenferrie', 'alamein']
//   },
//   {
//   glenwaverly = ['flagstaff', 'melbourne central', 'parliament', 'richmond', 'kooyong', 'tooronga', 'glen waverly']
//   },
//   {
//   sandringham = ['southern cross', 'richmond', 'south yarra', 'prahran', 'windsor', 'sandringham']
//   }
// ]

