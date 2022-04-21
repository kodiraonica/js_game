const scissorsBtn = document.getElementById("scissors");
const paperBtn = document.getElementById("paper");
const rockBtn = document.getElementById("rock");
const computerOptions = ['rock', 'paper', 'scissors'];

const userChoice = [scissorsBtn, paperBtn, rockBtn];

function onButtonClick() {
    userChoice.forEach(option => {
        option.addEventListener('click', () => {
            const choiceNumber = Math.floor(Math.random() * 3);
            const computerChoice = computerOptions[choiceNumber];
        });
    });
}