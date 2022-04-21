const paperBtn = document.getElementById("paper");
const rockBtn = document.getElementById("rock");
const scissorsBtn = document.getElementById("scissors");
const userChoice = [paperBtn, rockBtn,scissorsBtn];
const computerOptions = ["rock", "paper", "scissors"];

function onButtonClick() {
    userChoice.forEach((option) => {
    option.addEventListener("click", (e) => {
        const choiceNumber = Math.floor(Math.random() *3);
        const computerChoice = computerOptions[choiceNumber];
        const userSelection = e.target.getAttribute("id"); 
        checkWinner(userSelection,computerChoice);
    })
})
}


function checkWinner(userChoice, computerChoice) {
    if(computerChoice == userChoice) {
        console.log("tie")
    } else if(userChoice == "rock") {
        if (computerChoice == "paper") {
            console.log("computer wins")
    } else {
        console.log("user wins")
    }
} else if (userChoice == "scissors") {
    if (computerChoice == "rock") {
        console.log("computer wins");
    }else {
        console.log("user wins");
    }
}
    else if (userChoice == "paper") {
        if (computerChoice == "scissors") {
            console.log("computer wins"); 
        }else {
            console.log("user wins");
        }
    }
}

onButtonClick();