'use strict';

var currentScore = 0;
var scorePossible = 0;

function correctAnswer(questionNumber) {
  currentScore++;
  scorePossible++;
  alert('Correct! You have guessed ' + currentScore + ' out of ' + scorePossible + ' answers correctly');
  console.log('Question ' + questionNumber + ': Correct');
}

function incorrectAnswer(questionNumber) {
  scorePossible++;
  alert('Incorrect! You have guessed ' + currentScore + ' out of ' + scorePossible + ' answers correctly');
  console.log('Question ' + questionNumber + ': Incorrect');
}

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
