const paperBtn = document.getElementById("paper");
const rockBtn = document.getElementById("rock");
const scissorsBtn = document.getElementById("scissors");
const userChoice = [paperBtn, rockBtn, scissorsBtn];
const computerChoice = ["rock", "paper", "scissors"];

userChoice.forEach((option) => {
    option.addEventListener ("click", () => {
        const choiceNumber = Math.floor(Math.random() * 4);
        const computerChoice = computerOptions[choiceNumber];
        
    })
})