// setTimeout(funct, timerInMilliSec)       performs the function at specified time
// setInterval(funct, intervalInMilliSec)   performs the function repeatedly at 
//                                          specified time
// clearInterval(intervalRecpt#)            stops the interval that corresponds to
//                                          the interval receipt #

// window.innerWidth                        this is the window pixel size

var resetButton = document.getElementById('resetbutton');
var fasterButton = document.getElementById('fastbutton');
var startButton = document.getElementById('startbutton');
var stopButton = document.getElementById('stopbutton');
var winWidth = window.innerWidth;
var forward = true;
var catTimer = null;
var speed = 1;

var catWalk = function () {
  var img = document.querySelector('img');
  var currentLO = parseInt(img.style.left);
  if (currentLO < winWidth-img.width && forward === true) {
    img.style.left = (currentLO + speed) + 'px';
  } else {
    forward = false;
  }
  if (forward === false && currentLO > 0) {
    img.style.left = (currentLO - speed) + 'px';
  } else {
    forward = true;
  }
}
var startCatWalk = function () {
  catTimer = setInterval(catWalk, 10);
  startButton.disabled = true;
}

var stopCatWalk = function () {
  startbutton.disabled = false;
  clearInterval(catTimer);
}

var fasterCat = function () {
  speed = speed + 1;
}
var resetSpeed = function () {
  speed = 1;
}

startButton.addEventListener("click", startCatWalk);
stopButton.addEventListener("click", stopCatWalk);
fasterButton.addEventListener("click", fasterCat);
resetButton.addEventListener("click", resetSpeed);
window.onresize = function() {
  winWidth = window.innerWidth;
}
