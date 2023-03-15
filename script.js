

// Get references to the input and message elements
const guessInput = document.getElementById('guess');
const message = document.getElementById('message');
let guess = document.querySelector('.checkGuess').addEventListener('click',checkGuess)
let showNum = document.querySelector('.showNumber').addEventListener('click',showNumber)
let exit = document.querySelector('.exitGame').addEventListener('click',exitGame)

let randomNumber;
let guesses = 0;
let gameOver = false;


// Function to start a new game
function newGame() {
  // Generate a random number between 1 and 100
  randomNumber = Math.floor(Math.random() * 100) + 1;
  guesses = 0;
  gameOver = false;
  message.textContent = '';
}

// Function to check the user's guess
function checkGuess() {
  // If the game is over, do nothing
  if (gameOver) {
    return;
  }

  // Get the user's guess
  const guess = parseInt(guessInput.value);

  // Check if the guess is valid
  if (isNaN(guess) || guess < 1 || guess > 100) {
    message.textContent = 'Please enter a valid number.';
    return;
  }

  // Increment the number of guesses
  guesses++;

  // Check if the guess is correct
  if (guess === randomNumber) {
    message.textContent = `Congratulations! You guessed the number in ${guesses} ${guesses === 1 ? 'guess' : 'guesses'}!`;
    gameOver = true;
    playAgainButton.style.display = 'block';
  } else if (guess < randomNumber) {
    message.textContent = 'Too low! Guess again.';
  } else {
    message.textContent = 'Too high! Guess again.';
  }
  guessInput.value = ''
}


// Function to show the random number
function showNumber() {
    message.textContent = `The number was ${randomNumber}.`;
  }
  
  // Function to exit the game
  function exitGame() {
    window.close();
  }
  
// Start a new game when the page loads
newGame();
