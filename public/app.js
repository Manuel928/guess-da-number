let btn = document.getElementById('submit');
let guessInput = document.getElementById('guess-input');
let resultText = document.createElement('p');
let resultDiv = document.getElementById('result');
let secretNumber = Math.ceil(Math.random() * 10);
console.log(secretNumber);

let keepTryingArray = ['Almost there', 'Keep Trying', 'One little Push', "Don't give up yet", 'One more try', 'One more pinch', 'Almost got it']

function guess() {
    btn.addEventListener('click', () => {
        if (isNaN(guessInput.value) || guessInput.value < 0 || guessInput.value > 10) {
            resultText.innerText = 'Enter a valid number from 0 - 10';
            resultDiv.appendChild(resultText);
        }
        else if (guessInput.value != secretNumber) {
            for (let index = 0; index < 1; index++) {
                let randomSelection = Math.floor(Math.random() * keepTryingArray.length)
                resultText.innerText = (keepTryingArray[randomSelection])
                resultDiv.appendChild(resultText);
            }
        }
        else if (guessInput.value == secretNumber) {
            resultText.innerText = 'You Guessed Correctly';
            resultDiv.appendChild(resultText);
        }
        else if (guessInput.value > secretNumber) {
            resultText.innerText = `${guessInput.value} > than the secret number`;
            resultDiv.appendChild(resultText);
        }
        else if (guessInput.value < 0) {
            resultText.innerText = 'You cannot input a number less than 0';
            resultDiv.appendChild(resultText);
        }
    });
}

guess();