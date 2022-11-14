//ELEMENTS

const mainBox = document.querySelector("#main");
const messageBox = document.querySelector("#message");
const scoreBox = document.querySelector("#score");
const againClicked = document.querySelector("#again");

// MESSAGES

const winMessage = "WOW! You guessed right! 🤯, You are lucky Person!";
const lowMessage = "Your guessed number is low📉";
const tooLowMessage = "Your guessed number is too low📉📉";
const highMessage = "Your guessed number is high📈";
const tooHighMessage = "Your guessed number is too high📈📈";
const outOfRangeMessage = "Please enter a number between 0 and 20";
const outOfGuessMessage = "You have run out of guesses";

//random lucky number
const luckyNumber = Math.floor(Math.random() * 21);

//input from user
const userInput = document.querySelector("#guessing");

//checking
const checkNumber = document.querySelector("#check");

//again
againClicked.addEventListener("click", () => {
    location.reload();
});

//score
let score = 10;

if (score == 0) {
    userInput.s;
}

//on "check" button click
checkNumber.addEventListener("click", () => {
    const userGuess = Number(userInput.value);

    console.log("user ", userGuess, " lucky: ", luckyNumber);

    if (userGuess > 20 || userGuess < 0) {
        messageBox.innerText = outOfRangeMessage;
        mainBox.style.backgroundColor = "red";
    } else {
        if (userGuess === luckyNumber) {
            messageBox.innerText = winMessage;
            mainBox.style.backgroundColor = "green";
        } else if (userGuess >= luckyNumber + 5) {
            //too high
            messageBox.innerText = tooHighMessage;
            mainBox.style.backgroundColor = "red";
            score = score - 1;
        } else if (userGuess <= luckyNumber - 5) {
            //too low
            messageBox.innerText = tooLowMessage;
            mainBox.style.backgroundColor = "red";
            score = score - 1;
        } else if (userGuess > luckyNumber) {
            //high
            messageBox.innerText = highMessage;
            mainBox.style.backgroundColor = "red";
            score = score - 1;
        } else if (userGuess < luckyNumber) {
            //low
            messageBox.innerText = lowMessage;
            mainBox.style.backgroundColor = "red";
            score = score - 1;
        }
    }
    scoreBox.textContent = score;
});
