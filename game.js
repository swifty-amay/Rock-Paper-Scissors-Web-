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

function startRound(humanChoice, computerChoice) {
    numberOfQuestions += 1;
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice == 'rock' && computerChoice == 'paper') {
        result = "You lose! Paper beats rock";
        computerScore += 1;
    }
    else if (humanChoice == 'paper' && computerChoice == 'rock') {
        result = "You win!";
        humanScore += 1;
    }
    else if (humanChoice == 'paper' && computerChoice == 'scissor') {
        result = "You lose! Scissor beats paper";
        computerScore += 1;
    }
    else if (humanChoice == 'scissor' && computerChoice == 'paper') {
        result = "You win!";
        humanScore += 1;
    }
    else if (humanChoice == 'scissor' && computerChoice == 'rock') {
        result = "You lose! Rock beats scissors";
        computerScore += 1;
    }
    else if (humanChoice == computerChoice) {
        result = "Wow! It's a draw...";
        humanScore += 1;
        computerScore += 1;
    }
    else {
        result = "You win!";
        humanScore += 1;
    }

    // DOM manipulation
    computerChoiceText.textContent = "Computer's Choice: " + computerChoice;
    humanChoiceText.textContent = "Your Choice: " + humanChoice;
    computerScoreText.textContent = "Computer's Score: " + computerScore;
    humanScoreText.textContent = "Your Score: " + humanScore;
    roundResult.textContent = result;
}

let humanScore = 0, computerScore = 0;
let result = "", resultMessage = "";
let numberOfQuestions = 0

function startGame(humanChoice, computerChoice) {
    startRound(humanChoice, computerChoice);
    if (numberOfQuestions >= 5) {
        if (humanScore > computerScore)
            alert(`You win! Your final score is ${humanScore}`)
        else
            alert(`You lose! Your final score is ${humanScore}`)
        numberOfQuestions = 0;
        humanScore = 0
        computerScore = 0
    }
}




const btn1 = document.querySelector("#rock")
const btn2 = document.querySelector("#paper")
const btn3 = document.querySelector("#scissor")

let humanChoice = "", computerChoice = "";



btn1.addEventListener('click', (e) => {
    humanChoice = "rock";
    computerChoice = getComputerChoice();
    startGame(humanChoice, computerChoice);

})

btn2.addEventListener('click', (e) => {
    humanChoice = "paper";
    computerChoice = getComputerChoice();
    startGame(humanChoice, computerChoice);
})

btn3.addEventListener('click', (e) => {
    humanChoice = "scissor";
    computerChoice = getComputerChoice();
    startGame(humanChoice, computerChoice);

})

const roundResult = document.querySelector("#round-result");

const computerChoiceText = document.querySelector("#c-choice");
const humanChoiceText = document.querySelector("#h-choice");
const computerScoreText = document.querySelector("#c-score");
const humanScoreText = document.querySelector("#h-score");
