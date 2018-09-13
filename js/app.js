'use strict';

var currentScore = 0;
var scorePossible = 0;
var username = prompt('Hello there! What is your name?');

function question1() {
  var questionOne = prompt('Am I over 6\'2"?');
  if(questionOne.toUpperCase() === 'YES' || questionOne.toUpperCase() === 'Y'){
    currentScore++;
    scorePossible++;
    alert('Correct! 6\'5" to be exact. You have guessed ' + currentScore + ' out of ' + scorePossible + ' answers correctly');
    console.log('Question 1: Correct');
  }
  else {
    scorePossible++;
    alert('Incorrect! You have guessed ' + currentScore + ' out of ' + scorePossible + ' answers correctly');
    console.log('Question 1: Incorrect');
  }
}

function question2 () {
  var questionTwo = prompt('Do I play video games?');
  if(questionTwo.toUpperCase() === 'YES' || questionTwo.toUpperCase() === 'Y'){
    currentScore++;
    scorePossible++;
    alert('Correct! I own more than I know what to do with. You have guessed ' + currentScore + ' out of ' + scorePossible + ' answers correctly');
    console.log('Question 2: Correct');
  }
  else {
    scorePossible++;
    alert('Incorrect! You have guessed ' + currentScore + ' out of ' + scorePossible + ' answers correctly');
    console.log('Question 2: Incorrect');
  }
}

function question3() {
  var questionThree = prompt('Am I over the age of 25?');
  if(questionThree.toUpperCase() === 'NO' || questionThree.toUpperCase() === 'N'){
    currentScore++;
    scorePossible++;
    alert('Correct! I am but only 21 years of age. You have guessed ' + currentScore + ' out of ' + scorePossible + ' answers correctly');
    console.log('Question 3: Correct');
  }
  else {
    scorePossible++;
    alert('Incorrect! You have guessed ' + currentScore + ' out of ' + scorePossible + ' answers correctly');
    console.log('Question 3: Incorrect');
  }
}

function question4() {
  var questionFour = prompt('Do I love dogs?');
  if(questionFour.toUpperCase() === 'YES' || questionFour.toUpperCase() === 'Y'){
    currentScore++;
    scorePossible++;
    alert('Correct! Who doesn\'t? You have guessed ' + currentScore + ' out of ' + scorePossible + ' answers correctly');
    console.log('Question 4: Correct');
  }
  else {
    scorePossible++;
    alert('Incorrect! You have guessed ' + currentScore + ' out of ' + scorePossible + ' answers correctly');
    console.log('Question 4: Incorrect');
  }
}

function question5() {
  var questionFive = prompt('Am I the oldest brother in my family?');
  if(questionFive.toUpperCase() === 'NO' || questionFive.toUpperCase() === 'N'){
    currentScore++;
    scorePossible++;
    alert('Correct! I am the middle of 3. You have guessed ' + currentScore + ' out of ' + scorePossible + ' answers correctly');
    console.log('Question 5: Correct');
  }
  else {
    scorePossible++;
    alert('Incorrect! You have guessed ' + currentScore + ' out of ' + scorePossible + ' answers correctly');
    console.log('Question 5: Incorrect');
  }
}

/* increment scorePossible before the question to avoid multiple increments within the loop. The loop will ask how many step-siblings
I have, giving the user 4 attempts to guess the right number */
function question6(){
  scorePossible++;
  var guesses = 1;
  while (guesses <= 4) {
    var questionSix = prompt('How many step-siblings do I have? You have used ' + (guesses - 1) + ' out of 4 guesses');
    if(questionSix < 8) {
      alert('Too Low, try again!');
      guesses++;
    }
    else if (questionSix > 8) {
      alert('Too high, try again!');
      guesses++;
    }
    else if (questionSix === '8') {
      currentScore++;
      alert('Correct, I have 8 step siblings!');
      console.log('Question 6: Correct in '+ (guesses) + ' tries');
      break;
    }
    else {
      alert('Sorry, I couldn\'t understand your answer. Please try again');
    }
  }
  if(guesses === 5) {
    console.log('Question 6: Incorrect');
  }

  alert('You have guessed ' + currentScore + ' out of ' + scorePossible + ' answers correctly');
}

//*Create a variable to track attempts while guessing through question 7. Each guess will run through all posibilities stored in the array of answers. If a guess is correct the number of attempts will be set so that upon breaking the from the for loop the while loop ends as well but still allows a console.log for the case in which the max amount of guesses have been used. */
function question7() {
  var attempts = 0;
  var statesVisited = ['Washington', 'Oregon', 'Florida', 'Texas', 'Oklahoma', 'California', 'Idaho', 'Montana', 'Alabama', 'Lousiana'];
  var statesAbbreviated = ['WA', 'OR', 'FL', 'TX', 'OK', 'CA', 'ID', 'MT', 'AL', 'LA'];
  var answers = '';
  scorePossible++;

  for(var i = 0; i < statesVisited.length; i++){
    answers += statesVisited[i] + ', ';
  }

  var isCorrect = false;

  while(attempts < 6) {
    var questionSeven = prompt('Guess a state I have visited before. You have used ' + attempts + ' of 6 guesses');

    for(i = 0; i < statesVisited.length; i++) {
      if(questionSeven.toUpperCase() === statesVisited[i].toUpperCase() || questionSeven.toUpperCase() === statesAbbreviated[i]) {
        currentScore++;
        alert('Correct! I have been to ' + answers);
        console.log('Question 7: Correct in ' + (attempts + 1) + ' tries');
        isCorrect = true;
        break;
      }
      else if(i === (statesVisited.length-1)) {
        alert('Nope! I have not been there before.');
        attempts++;
      }
    }

    if (isCorrect === true){
      break;
    }
  }
  if(attempts === 6) {
    alert('Sorry, I have visited ' + answers);
    console.log('Question 7: Incorrect');
  }
}

function finalResponse(){
  if(currentScore === 7) {
    alert('Amazing, ' + username + '! You got ' + currentScore + ' out of ' + scorePossible + ' answers right!');
  }
  else if (currentScore > 5) {
    alert('Well done ' + username + '! You got ' + currentScore + ' out of ' + scorePossible + ' answers right!');
  }
  else if (currentScore > 3) {
    alert('Hmm, ' + username + ' You got ' + currentScore + ' out of ' + scorePossible + ' answers right.');
  }
  else if (currentScore >= 0) {
    alert('Wow ' + username + '. You got ' + currentScore + ' out of ' + scorePossible + ' answers right. Maybe you should try talking to me first...');
  }
}

question1();
question2();
question3();
question4();
question5();
question6();
question7();
finalResponse();