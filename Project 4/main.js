let randomNumber = genRandNum();
let guesses = document.querySelector('.guesses');
let remaining = document.querySelector('.lastResult');
let submit = document.querySelector('.guessSubmit');
let result = document.querySelector('.lowOrHi');
let element = document.querySelector('.guessField');
let startOver = document.querySelector('.resultPara');
let p = document.createElement('p');

let noOfGuesses = 1;
let prevGuess = [];
let playGame = true;

if(playGame)
{
    submit.addEventListener('click',function(e)
    {  
        e.preventDefault();
        let userInput = parseInt(element.value);
        console.log(userInput);
        validateGuess(userInput);
    })
}


function genRandNum()
{
    let num = Math.random() * 100 + 1;
    let random = Math.round(num);
    return random;
}

function validateGuess(userInput)
{
    if(isNaN(userInput))
    {
         alert( `input the valid number ${userInput}`);
    }
    else if(userInput === 0)
    {
        alert(`input the number greater than ${userInput}`);
    }
    else if(userInput < 1)
    {
        alert(`input the positive number`);
    }
    
    else if(userInput > 100)
    {
        alert(`input the number less than ${userInput}`);
    }
    else
    {
        prevGuess.push(userInput)
        if(noOfGuesses === 10)
        {
            displayGuess(userInput);
            displayMessage(`Game Over Random number was ${randomNumber}`);
            endGame();
        }
        else
        {
            displayGuess(userInput);
            checkGuess(userInput);
        }
    }
}

function checkGuess(userInput)
{
    if(userInput < randomNumber)
    {
        displayMessage('Number is too low');
    }
    else if(userInput > randomNumber)
    {
        displayMessage('Number is too large');
    }
    else
    {
        displayMessage('You Guess It Right');
        endGame();  
    }
}

function displayGuess(userInput)
{
    element.value = '';
    guesses.innerHTML = guesses.innerHTML + `${userInput}, `;
    noOfGuesses++;
    remaining.innerHTML = `${11 - noOfGuesses}`;
}

function displayMessage(message)
{
    result.innerHTML = `<h3>${message}</h3>`;
}

function endGame()
{
    element.value = '';
    submit.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h3 id='newGame'>Start New Game</h3>`
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame()
{
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function (e) {
      randomNumber = genRandNum();
      prevGuess = [];
      noOfGuesses = 1;
      guesses.innerHTML = '';
      remaining.innerHTML = `${11 - noOfGuesses} `;
      result.innerHTML = '';
      submit.removeAttribute('disabled', '');
      startOver.removeChild(p);
  
      playGame = true;
    });
}




