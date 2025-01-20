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
  currentGuess;
let guessHistory = [];

// initialize game values
function initGame() {
  secret = generateSecretNumber();
  guesses = 0;
  guessInputField.value = "";
  submitBtn.disabled = false;
  restartBtn.disabled = true;
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

// check player guess agaisnt secret
function compare(guess, secret) {
  if (guess === secret) {
    return "correct";
  } else if (guess < secret) {
    return "too low";
  } else {
    return "too high";
  }
}

// do this if the player wins
function playerWin() {}

// do this if the player loses
function playerLose() {}

// make a guess
function makeGuess() {
  currentGuess = getPlayerGuess();
  guesses++;

}

function render() {
  currentGuessField.innerText = currentGuess;
  computerGuessField.innerText = secret;
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
