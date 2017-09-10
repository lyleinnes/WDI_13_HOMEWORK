
var tails = [];
var heads = [];

var coinButton = document.querySelector('img');

var result = document.querySelector(".result");

var wincheck = function () {
  if (tails.length === 5) {
    // console.log('Tails wins!')
    result.textContent = "TAILS WINS!"
  } else if (heads.length === 5){
    // console.log('Heads wins!')
    result.textContent = "HEADS WINS!"
  } else {
  }
};

var coinFlip = function () {
  var max = 1;
  var min = 0;
  var flip =  Math.floor(Math.random() * (max - min +1)) + min
  if (flip === 1) {
      heads.push(flip);
      wincheck();
      document.querySelector('.headCount').textContent = heads.length;
      return 'heads'
  } else {
      tails.push(flip);
      wincheck();
      document.querySelector('.tailCount').textContent = tails.length;
    return 'tails'
  }
};

coinButton.addEventListener('click', coinFlip);

//  alternatively you could create a counter before your loop to count the results
//  of the flip. this needs 3 variables to work.

// var coin = ['tails', 'heads']
// var winningCount = 5;
// var headsCount = 0;
// var tailsCount = 0;

// for (var i=0; i<9; i++) {
//   var randCoin = coin[Math.round(Math.random())];
//   if (randCoin === 'heads') {
//     headsCount ++;
//   } else {
//     tailsCount ++;
//   }
//   if (headsCount === winningCount) {
//     console.log ('Heads wins!');
//     break;
//   } else (tailsCount === winningCount) {
//     console.log('Tails wins!');
//     break;
//   }
// }


