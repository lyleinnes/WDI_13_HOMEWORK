console.log('js is on')

var savInput = document.querySelector("#savInput");
var savDeposit = document.querySelector("#savDep");
var savWithdrawl = document.querySelector("#savWit");
var savBal = document.querySelector("#savBal");
var prompt = document.querySelector(".prompt");

var depositFunc = function(balance, deposit) {
  return balance + deposit;
};
var withdrawFunc = function(balance, withdrawl) {
  return balance - withdrawl;
};

savDeposit.addEventListener('click', function() {
  var bal = Number(savBal.innerHTML);
  var deposit = Number(savInput.value);
  savBal.textContent = depositFunc(bal, deposit).toFixed(2);
  setTimeout(clearText, 500)
});

savWithdrawl.addEventListener('click', function() {
  var bal = Number(savBal.innerHTML);
  var withdrawl = Number(savInput.value);
  if (bal >= withdrawl) {
    savBal.textContent = withdrawFunc(bal, withdrawl).toFixed(2);
    setTimeout(clearText, 500)
  } else {
    setTimeout(addRed, 0);
    setTimeout(removeRed, 1000);
    setTimeout(clearText, 500);
  }
});

var addRed = function() {
  prompt.classList.add("promptRed")
}
var removeRed = function () {
  prompt.classList.remove("promptRed")
}
var clearText = function () {
   savInput.value = "";
}










// var seeSavBal = document.querySelector('#savId');
// var inputAmount = document.querySelector('#amount');
// var depositButton = document.querySelector('#deposit');
// var withdrawButton = document.querySelector('#withdraw');

// var depositFunc = function(balance, deposit) {
//   return balance + deposit;
// };

// var withdrawFunc = function(balance, withdrawl) {
//   return balance - withdrawl;
// };

// depositButton.addEventListener('click', function () {
//   var bal = Number(dispBalance.textContent);
//   var deposit = Number(inputAmount.value);
//   dispBalance.textContent = depositFunc(bal, deposit).toFixed(2);
// })

// withdrawButton.addEventListener('click', function() {
//   if (Number(dispBalance.textContent) >= Number(inputAmount.value)) {
//     var bal = Number(dispBalance.textContent);
//     var withdraw = Number(inputAmount.value);
//     dispBalance.textContent = withdrawFunc(bal, withdraw).toFixed(2);
//   } else {
//     alert('insufficient funds')
//   }
// })

