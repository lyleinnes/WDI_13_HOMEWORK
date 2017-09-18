// ------ savings account object ------
var savings = {
  balance: 0,
  deposit: function (amount) {
    savings.balance += amount;
  },
  withdraw: function (amount) {
    savings.balance -= amount;
  }
}
//------ cheque account object -------
var cheque = {
  balance: 0,
  deposit: function (amount) {
    cheque.balance += amount
  },
  withdraw: function (amount) {
    cheque.balance -= amount;
  }
}

//-------------------------------
// presentation functions
//-------------------------------

//these are the savings variables
var savBalDiv = document.querySelector('.sav-balance');
var savInput = document.querySelector('.sav-amount');
var savDepBtn = document.querySelector('.sav-deposit-btn');
var savWitBtn = document.querySelector('.sav-withdraw-btn');
var savPrompt = document.querySelector('.sav-prompt');

//these are the cheque variables
var chqBalDiv = document.querySelector('.chq-balance');
var chqInput = document.querySelector('.chq-amount');
var chqDepBtn = document.querySelector('.chq-deposit-btn');
var chqWitBtn = document.querySelector('.chq-withdraw-btn');
var chqPrompt = document.querySelector('.chq-prompt');


// ------- flash red: cant get this to work -------

var flashRed = function(promptElem) {
  promptElem.style.opacity = 1;
  setTimeout(function(){
    promptElem.style.opacity = 0;
  }, 1500);
}

// key functions for displaying to the browser 
var renderBalance = function () {
  savBalDiv.textContent = 'Balance: $' + savings.balance;
  chqBalDiv.textContent = 'Balance: $' + cheque.balance;
};
var clear = function(inputElem) {
  inputElem.value = "";
};

// ------------ savings button listeners -----------------
savDepBtn.addEventListener('click', function() {
  var amount = Number(savInput.value);
  savings.deposit(amount);
  renderBalance();
  clear(savInput);
});
savWitBtn.addEventListener('click', function() {
  var amount = Number(savInput.value);
  if (savings.balance > amount) {
    savings.withdraw(amount);
    renderBalance();
    clear(savInput);
  } else {
    flashRed(savPrompt);
  }
});

// ------------- cheque button listeners ------------------
chqDepBtn.addEventListener('click', function() {
  var amount = Number(chqInput.value);
  cheque.deposit(amount);
  renderBalance();
  clear(chqInput);
});
chqWitBtn.addEventListener('click', function() {
  var amount = Number(chqInput.value);
  if (cheque.balance > amount) {
    cheque.withdraw(amount);
    renderBalance();
    clear(chqInput);
  } else if (cheque.balance + savings.balance >= amount) {
    var diff = amount - cheque.balance;
    savings.withdraw(diff);
    cheque.balance = 0;
    renderBalance();
    clear(chqInput);
   } else {
    flashRed(chqPrompt);
  }
});


renderBalance();