const scissorsBtn = document.getElementById("scissors");
const paperBtn = document.getElementById("paper");
const rockBtn = document.getElementById("rock");
const userChoice = [scissorsBtn, paperBtn, rockBtn];
const computerOptions = ['rock','paper','scissors'];
const computerChoiceText = document.getElementById("computer-choice");

const computerScoreText = document.getElementById("computer-score");
const userScoreText = document.getElementById("user-score");

const status = document.getElementById("status");

let userScore = 0;
let computerScore = 0;

function onButtonClick(){
    userChoice.forEach(option => {
        option.addEventListener('click',function(){
            const choiceNumber = Math.floor(Math.random()*3);
            const computerChoice = computerOptions[choiceNumber];
            computerChoiceText.innerHTML = ` ${computerChoice}`
            checkWinner(this.getAttribute("id"), computerChoice);
        });
    });
}


function checkWinner(userChoice, computerChoice) {
    if (computerChoice == userChoice) {
        status.innerHTML = "Tie";
    }

    else if (userChoice == 'rock'){
        if (computerChoice == 'paper'){
            setComputerScore();
        } else{
            setUserScore();
        }
    }

    else if (userChoice == 'scissors'){
        if (computerChoice == 'rock'){
            setComputerScore();
        } else{
            setUserScore();
        }
    }

    else if (userChoice == 'paper'){
        if (computerChoice == 'scissors'){
            setComputerScore();
        } else{
            setUserScore();
        }
    }
}

function setComputerScore() {
    computerScore++;
    computerScoreText.innerHTML  = ` ${computerScore}`;
    status.innerHTML = "Computer Won"
}

function setUserScore() {
    userScore++;
    userScoreText.innerHTML  = ` ${userScore}`;
    status.innerHTML = "You Won"
}

onButtonClick();