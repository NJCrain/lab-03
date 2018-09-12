'use strict';

var currentScore = 0;
var scorePossible = 0;

var questionOne = prompt('Am I over 6\'2"?');
if(questionOne.toUpperCase() === 'YES' || questionOne.toUpperCase() === 'Y'){
  currentScore++;
  scorePossible++;
  alert('Correct! You have guessed ' + currentScore + ' out of ' + scorePossible + ' answers correctly');
  console.log('Question 1: Correct');
}
else {
  scorePossible++;
  alert('Incorrect! You have guessed ' + currentScore + ' out of ' + scorePossible + ' answers correctly');
  console.log('Question 1: Incorrect');
}

var questionTwo = prompt('Do I play video games?');
if(questionTwo.toUpperCase() === 'YES' || questionTwo.toUpperCase() === 'Y'){
  currentScore++;
  scorePossible++;
  alert('Correct! You have guessed ' + currentScore + ' out of ' + scorePossible + ' answers correctly');
  console.log('Question 2: Correct');
}
else {
  scorePossible++;
  alert('Incorrect! You have guessed ' + currentScore + ' out of ' + scorePossible + ' answers correctly');
  console.log('Question 2: Incorrect');
}

var questionThree = prompt('Am I over the age of 25?');
if(questionThree.toUpperCase() === 'NO' || questionThree.toUpperCase() === 'N'){
  currentScore++;
  scorePossible++;
  alert('Correct! You have guessed ' + currentScore + ' out of ' + scorePossible + ' answers correctly');
  console.log('Question 3: Correct');
}
else {
  scorePossible++;
  alert('Incorrect! You have guessed ' + currentScore + ' out of ' + scorePossible + ' answers correctly');
  console.log('Question 3: Incorrect');
}

var questionFour = prompt('Do I love dogs?');
if(questionFour.toUpperCase() === 'YES' || questionFour.toUpperCase() === 'Y'){
  currentScore++;
  scorePossible++;
  alert('Correct! You have guessed ' + currentScore + ' out of ' + scorePossible + ' answers correctly');
  console.log('Question 4: Correct');
}
else {
  scorePossible++;
  alert('Incorrect! You have guessed ' + currentScore + ' out of ' + scorePossible + ' answers correctly');
  console.log('Question 4: Incorrect');
}

var questionFive = prompt('Am I the oldest brother in my family?');
if(questionFive.toUpperCase() === 'NO' || questionFive.toUpperCase() === 'N'){
  currentScore++;
  scorePossible++;
  alert('Correct! You have guessed ' + currentScore + ' out of ' + scorePossible + ' answers correctly');
  console.log('Question 5: Correct');
}
else {
  scorePossible++;
  alert('Incorrect! You have guessed ' + currentScore + ' out of ' + scorePossible + ' answers correctly');
  console.log('Question 5: Incorrect');
}

/* increment scorePossible before the question to avoid multiple increments within the loop. The loop will ask how many step-siblings
I have, giving the user 4 attempts to guess the right number */
scorePossible++;
for (var i = 0; i < 4; i++) {
  var questionSix = prompt('How many step-siblings do I have? You have used ' + i + ' out of 4 guesses');
  if(questionSix < 8) {
    alert('Too Low, try again!');
  }
  else if (questionSix > 8) {
    alert('Too high, try again!');
  }
  else if (questionSix === '8') {
    currentScore++;
    alert('Correct, I have 8 step siblings!');
    console.log('Question 6: correct in '+ i + ' tries');
    break;
  }
  else {
    alert('Sorry, I couldn\'t understand your answer. Please try again');
  }
}
alert('You have guessed ' + currentScore + ' out of ' + scorePossible + ' answers correctly');
console.log('Question 6: Incorrect');


