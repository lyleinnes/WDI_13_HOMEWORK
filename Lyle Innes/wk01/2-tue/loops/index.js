console.log('js online');

// THE ODD/EVEN REPORTER

var x;

for (x = 0; x <= 20; x += 1){
  if(x % 2 === 0){
    console.log(x + ' is even.')
  
  } else {
    console.log(x + ' is odd.')
  }
}
console.log('all done');

// MULTIPLICATION TABLES

var y;
var z;

for (y = 0; y <= 10; y += 1){
  for (z = 0; z <= 10; z += 1){
    console.log(y + " * " + z + " = " + (y * z))
  }
}

// TOP CHOICES

var topColours = ['blue', 'red', 'green', 'purple', 'burple'];

for (var i = 0; i < topColours.length; i++) {
  console.log('my #' + i + ' choice is ' + topColours[i])
}
