const scissorsBtn = document.getElementById("scissors");
const paperBtn = document.getElementById("paper");
const rockBtn = document.getElementById("rock");
const computerOptions = ['rock', 'paper', 'scissors'];
const userChoice = [scissorsBtn, paperBtn, rockBtn];
const computerScoreText = document.getElementById("computer-score");
const userScoreText = document.getElementById("user-score");

const status = document.getElementById("status");

let userScore = 0;
let computerScore = 0;

function onButtonClick() {
    userChoice.forEach(option => {
        option.addEventListener('click', (e) => {
            const choiceNumber = Math.floor(Math.random() * 3);
            const computerChoice = computerOptions[choiceNumber];
            const userSelection = e.target.getAttribute("id");
            checkWinner(userSelection, computerChoice);

        });
    });
}

function checkWinner(userChoice, computerChoice) {
    if (computerChoice == userChoice) {
        console.log("tie");
    }

    else if (userChoice == 'rock') {
        if (computerChoice == 'paper') {
            setComputerScore();
        } else {
            setUserScore();
        }
    }

    else if (userChoice == 'scissors') {
        if (computerChoice == 'rock') {
            setComputerScore();
        } else {
            setUserScore();
        }
    }

    else if (userChoice == 'paper') {
        if (computerChoice == 'scissors') {
            setComputerScore();
        } else {
            setUserScore();
        }
    }
}

function setComputerScore() {
    computerScore++;
    computerScoreText.innerHTML = ` ${computerScore}`;
    status.innerHTML = "Computer Won"
}

function setUserScore() {
    userScore++;
    userScoreText.innerHTML = ` ${userScore}`;
    status.innerHTML = "User Won"
}

onButtonClick();