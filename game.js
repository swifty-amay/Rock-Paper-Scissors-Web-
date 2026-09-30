function getComputerChoice() {
    let choice = Math.floor(Math.random() * 10);
    switch (choice) {
        case 0:
            return "rock";
        case 2:
        case 4:
        case 6:
        case 8:
            return "paper";
        default:
            return "scissor";
    }
}

function getHumanChoice() {
    let userInput = prompt("Enter your choice(rock, paper or scissor): ");
    return userInput;
}

let humanScore = 0, computerScore = 0;

function playGame() {

    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();
        console.log("Computer's choice: " + computerChoice);
        console.log("Your choice: " + humanChoice);
        if (humanChoice == 'rock' && computerChoice == 'paper') {
            console.log("You lose! Paper beats rock.")
            computerScore += 1;
        }
        else if (humanChoice == 'paper' && computerChoice == 'rock') {
            console.log("You win!")
            humanScore += 1;
        }
        else if (humanChoice == 'paper' && computerChoice == 'scissor') {
            console.log("You lose! Scissor beats paper.")
            computerScore += 1;
        }
        else if (humanChoice == 'scissor' && computerChoice == 'paper') {
            console.log("You win!")
            humanScore += 1;
        }
        else if (humanChoice == 'scissor' && computerChoice == 'rock') {
            console.log("You lose! Rock beats scissors")
            computerScore += 1;
        }
        else {
            console.log("You win!")
            humanScore += 1;
        }

    }

    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection)
}

playGame()
playGame()
playGame()
playGame()
playGame()


if (humanScore > computerScore)
    console.log("You win the game! Congratulations🎉🎉🎉")
else
    console.log("You lose");
