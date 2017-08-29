console.log('js up and running');

// var name = prompt('type in your name');

// console.log(name);

var choice = prompt('What would you like to eat? steak, fruit salad, tofurkey or pork chops?')

if (choice == 'tofurkey' || choice == 'fruit salad') {
  alert('this cuisine is vegan friendly')

  } else if (choice == 'steak' || choice == 'pork chops') {
    alert('vegans beware!')
  
  }else {
  alert('thats not on the menu sorry')
}

