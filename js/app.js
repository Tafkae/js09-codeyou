"use strict";

// DOM fields
const restartBtn = document.getElementById("restart-btn");
const submitBtn = document.getElementById("submit-btn");
const guessInputField = document.getElementById("guess-input");
const guessMessageField = document.getElementById("guess-message");
const currentGuessField = document.getElementById("current-guess");
const computerGuessField = document.getElementById("computer-guess");
const guessHistoryField = document.getElementById("guess-history");

// computer generates an integer between 1 and 10.
function generateSecretNumber() {
  return Math.floor(Math.random() * 10 + 1);
}

// read user input from number field
function getPlayerGuess() {
  return guessInputField.value || 0;
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

// === main gameplay loop ======
function play() {
  let secret = generateSecretNumber();
}

// reset game to original state
function restartGame() {}

function render() {
  currentGuessField.innerText = getPlayerGuess();
}

// === Event handlers ============

submitBtn.addEventListener("click", function () {
  render();
});

restartBtn.addEventListener("click", function () {
  restartGame();
});
