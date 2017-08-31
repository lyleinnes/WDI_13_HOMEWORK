// //23 celsius

// //f = (c * (9 / 5)) + 32

// // var doSomething = function(arguments,arguments, ..) {
// // }

// var celsiusToFahrenheit = function(celsius) {
//   var fahrenheit = celsius * (9 / 5) + 32;
//   // console.log(fahrenheit);
//   // return fahrenheit;
//   tempArray.push(10);
// }

// var todaysTemp = 23;
// var tempArray = [23, 32, 33];
//                             //argument
// var f = celsiusToFahrenheit(tempArray);  //storing the redult in 'var f'

// var fahrenheit = 23 * (9 / 5) + 32;

// console.log('fahrenheit: ' + fahrenheit);

// // repeatability - reusable - flexible
// // readability
// // scalability

// THE AGE CALCULATOR

// // This function has been made to calculate only the ages (given the provided arguments)
// var calculateAge = function(birthYear) {
//   var posAgeOld = (new Date()).getFullYear() - birthYear;
//   var posAgeYoung = ((new Date()).getFullYear() - 1) - birthYear;
//   return [posAgeYoung, posAgeOld];
// }

// // This function has been made to display the ages that the first function has calculates.
// var displayAge = function(ages) {
//   return 'you are either ' + ages[0] + ' or ' + age[1];
// }

// // The 'ages' var has been created to so that we can pass it into the display age function.
// var ages = calculateAge(1960);
// displayAge(ages);


// // BY SEPARATING THE FUNCTIONS INTO SINGLE PURPOSE FUNCTIONS, IT MEANS THAT WHEN WE NEED TO EDIT OUR CODE TO SERVE A DIFFERENT PURPOSE, WE DONT NEED TO MODIFY THE FUNCTIONS.

// THE LIFETIME SUPPLY CALCULATOR

// var maxAge = 100;

// var calculateSupply = function(age, amountPerDay) {
//   var totalSnacks = (maxAge - age) * amountPerDay * 365;
//   return 'You will need ' + totalSnacks + ' to last you until the ripe old age of ' + maxAge;
// }

// console.log(calculateSupply(33,12));
// console.log(calculateSupply(34,18));
// console.log(calculateSupply(23,14));


// // THE GEOMETRIZER

// var calcCircumfrence = function(radius) {
//   var circumfrence = (2 * Math.PI) * radius;
//   return 'the circumfrence is ' + circumfrence + ' units.';
// }

// var calcArea = function(radius) {
//     var area = (Math.PI * (radius * radius))
//     return 'the area is ' + area;
// }

// // call the functions from the console and enter whatever radius you want as an argument for to get the output


// MORE FUNCTIONS

// 1.

// var namesArr = ['ben', 'stphen', 'mandy', 'priscilla', 'lee', 'gregory'];

// var lengths = function(stringArr) {
//   var nameLength = [];
//   for (i = 0; i < stringArr.length; i ++) {
//     nameLength.push(stringArr[i].length)
//   }
//   return nameLength;
// }

// 2.

// var transmogrifier = function(first,second,third) {
//   var combined = first + second;
//   return Math.pow(combined, third)
// }

// 3.

var sentence = ['big fat duck', 'purple people eater', 'zooming fast cars'];
var words = ('the function isnt working' )

var wordReverse = function(str) {
  var splitSent = str.split(' ');
  var revSplitSent = splitSent.reverse();
  var revSentence = revSplitSent.join(' ');
  return revSentence;
}

// var lengths = function(stringArr) {
//   var lengthsOfElms = [];

//   stringArr.forEach( function(elem) {  // this forEach method essentially iterates through the array elements
//     lengthsOfElms.push(elem.length);   // and applies the function to each element

//   }); 

var arrReverse = function(arr) {
  arr.forEach(function(elem) {
    console.log(wordReverse(elem));
  })  
}


// var arrayReverse = function(array) {
//   array.forEach (function(currentIt) {
//     console.log(wordReverse(currentIt));
//   })
// };

