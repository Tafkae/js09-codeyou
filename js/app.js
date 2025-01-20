"use strict";

// DOM fields
const restartBtn = document.getElementById("restart-btn");
const submitBtn = document.getElementById("submit-btn");
const guessInputField = document.getElementById("guess-input");
const guessMessageField = document.getElementById("guess-message");
const currentGuessField = document.getElementById("current-guess");
const computerGuessField = document.getElementById("computer-guess");
const guessHistoryField = document.getElementById("guess-history");

// variables
let secret,
  guesses = 0,
  currentGuess,
  guessMessage;
let guessHistory = [];

// initialize game values
function initGame() {
  secret = generateSecretNumber();
  guesses = 0;
  currentGuess = null;
  guessMessage = "";
  guessInputField.value = "";
  submitBtn.disabled = false;
  restartBtn.disabled = true;
  guessHistory = [];
}
initGame();

// computer generates an integer between 1 and 10.
function generateSecretNumber() {
  return Math.floor(Math.random() * 10 + 1);
}

// read user input from number field
function getPlayerGuess() {
  let guess = parseInt(guessInputField.value);
  if (guess < 1) {
    guessInputField.value = 1;
    return 1;
  } else if (guess > 10) {
    guessInputField.value = 10;
    return 10;
  }
  return guess;
}

// check player guess against secret,
// returns what behavior to do
function compare(guess, secret) {
  if (guess === secret) {
    return playerWin;
  } else if (guesses >= 3) {
    return playerLose;
  } else if (guess > secret) {
    return () => "too high";
  } else {
    return () => "too low";
  }
}

// do this when game ends regardless of win or lose
function gameOver() {
  submitBtn.disabled = true;
  restartBtn.disabled = false;
}

// do this if the player wins
function playerWin() {
  gameOver();
  return "YOU'RE WINNER";
}

// do this if the player loses
function playerLose() {
  gameOver();
  return "you get nothing! you LOSE! good DAY sir";
}

// make a guess
function makeGuess() {
  currentGuess = getPlayerGuess();
  guesses++;
  guessHistory.push([guesses, currentGuess]);
  let doNext = compare(currentGuess, secret);
  guessMessage = doNext();
}

function render() {
  currentGuessField.innerText = currentGuess;
  computerGuessField.innerText = secret;
  guessMessageField.innerText = guessMessage;
  guessHistoryField.innerHTML = (function (arr) {
    let formattedHistory = `<ul class="guess-history">`;
    for (let entry of arr) {
      formattedHistory += `<li>Guess #${entry[0]}: ${entry[1]}</li>`;
    }
    formattedHistory += `</ul>`;
    return formattedHistory;
  })(guessHistory);
}

// === Event handlers ============

submitBtn.addEventListener("click", function () {
  makeGuess();
  render();
});

restartBtn.addEventListener("click", function () {
  initGame();
  render();
});
