var userName = prompt('what is your name? ');

var userGender = prompt('what is your gender? ');


if (userGender.toLowerCase() == 'male') {
  var userAge = prompt('what is your age? ');
  if (userAge > 0) {
    var confirmations = confirm('do you want to see the welcome message?');
    alert(`Hello Mr ${userName}`);
  }
  else {
    alert('Please enter a valid number !');

  }
} else if (userGender.toLowerCase() == 'female') {
  var userAge = prompt('what is your age? ');
  if (userAge > 0) {
    var confirmations = confirm('do you want to see the welcome message?');
    alert(`Hello Ms ${userName}`);
  }
  else {
    alert('Please enter a valid number !');

  }
} else {
  var userAge = prompt('what is your age? ');
  if (userAge > 0) {
    var confirmations = confirm('do you want to see the welcome message?');
    alert(`Hello ${userName}`);
  }
  else {
    alert('Please enter a valid number !');

  }
}