 

<details>
  <summary>Add an input field (<input>) for the user to enter their guess</summary>

```html
<input type="number" id="guess">

```
</details>


<details>
  <summary>Add a button (<button>) to check their guess.</summary>
  
```html
<button class="checkGuess">Guess</button>

```
</details>

<details>
  <summary>Add another two buttons for "Show Number" and "Exit Game".</summary>
  
```html

  <button class="showNumber">Show Number</button>
  <button class="exitGame">Exit Game</button>

```
</details>


<details>
  <summary>Create an element that will display the messages</summary>
  
```html
  <p id="message"></p>

```
</details>


Create a new JavaScript file and link it using the <script> tag at the bottom of the <body> section.
In the JavaScript file, define variables for the input field, the message area, and the buttons.
<details>
  <summary>--></summary>
  
```js
const guessInput = document.getElementById('guess');
const message = document.getElementById('message');
let guess = document.querySelector('.checkGuess').addEventListener('click',checkGuess)
let showNum = document.querySelector('.showNumber').addEventListener('click',showNumber)
let exit = document.querySelector('.exitGame').addEventListener('click',exitGame)

```
</details>

Define variables for the: 
- random number (we will store our randomly generated number in case we will have to display it later on), 
- number of guesses (we will store here the number of times it took till the number was guessed and display it later on), 
- and a game over flag (this will be a boolean )
<details>
  <summary>--></summary>
  
```js

let randomNumber;
let guesses = 0;
let gameOver = false;

```
</details>


<details>
  <summary>Write a newGame() function to start a new game, which generates a random number between 1 and 100, resets the guess count, and sets the game over flag to false.</summary>
  
```js
function newGame() {
  randomNumber = Math.floor(Math.random() * 100) + 1;// Generate a random number between 1 and 100
  guesses = 0;
  gameOver = false;
  message.textContent = '';
}

```
</details>


<details>
  <summary>Write a checkGuess() function which is called when the user clicks the "Check Guess" button.
  - The function first checks if the game is over. If it is, then the function does nothing: </summary>
  
```js
if (gameOver) {
    return;
  }
```
</details>

<details>
  <summary>If the game is not over, the function gets the user's guess from the input field and checks if it is valid (i.e. it is a number between 1 and 100). </summary>
  
```js
  // Get the user's guess
  const guess = parseInt(guessInput.value);

  // Check if the guess is valid
  if (isNaN(guess) || guess < 1 || guess > 100) {
    message.textContent = 'Please enter a valid number.';
    return;
  }
```
</details>


<details>
  <summary>If the guess is valid, the function increments the guess count and checks if the guess is equal to the random number. If the guess is equal to the random number, the function displays a message in the message area congratulating the user on guessing the number and indicating the number of guesses they took. It also sets the gameOver flag to true.</summary>
  
```js
 guesses++;
   if (guess === randomNumber) {
    message.textContent = `Congratulations! You guessed the number in ${guesses} ${guesses === 1 ? 'guess' : 'guesses'}!`;
    gameOver = true;
```
</details>

<details>
  <summary>If the guess is not equal to the random number, the function displays a message in the message area indicating whether the guess is too high or too low.</summary>
  
```js
 } else if (guess < randomNumber) {
    message.textContent = 'Too low! Guess again.';
  } else {
    message.textContent = 'Too high! Guess again.';
  }
```
</details>


<details>
  <summary>The function then clears the input field by setting its value to an empty string.</summary>
  
```js
   guessInput.value = ''
}
```
</details>


<details>
  <summary>Write a reset() function to reset the game to the initial state, which calls the newGame() function, resets the input field</summary>
  
```js
 
```
</details>

<details>
  <summary>Write a showNumber() function to display the random number in the message area when the "Show Number" button is clicked.</summary>
  
```js
 function showNumber() {
    message.textContent = `The number was ${randomNumber}.`;
  }
```
</details>

<details>
  <summary>Write an exitGame() function to close the browser window when the "Exit Game" button is clicked.</summary>
  
```js
  function exitGame() {
    window.close();
  }
  
```
</details>
  
<details>
  <summary>Call the newGame() function to start a new game when the page loads.</summary>
  
```js
newGame();
  
```
</details>


Test the game in the browser to make sure it's working as expected.