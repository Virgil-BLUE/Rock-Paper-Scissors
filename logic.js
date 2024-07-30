// Global Variables //

let ComputerChoice = undefined;

let HumanChoice = undefined;

let humanScore = 0;

let computerScore = 0;

let gameRounds = 0;

// Determines Computer Move

function getComputerChoice() {

    let random_num = Math.random();

    if (random_num < .33) {
        ComputerChoice = 'rock';
    } else if (random_num >= .33 && random_num < .66) {
        ComputerChoice = 'paper';
    } else  {
        ComputerChoice = 'scissors';
    }
}

// Prompts player for choice, corrects grammar to limit parameters.

function getHumanChoice() {
    
    HumanChoice = prompt('rock, paper, or scissors?');

    if (HumanChoice === 'rock' || HumanChoice === 'Rock' || HumanChoice === 'ROCK' ) {
        HumanChoice = 'rock'
    } else if (HumanChoice === 'paper' || HumanChoice === 'Paper' || HumanChoice === 'PAPER') {
        HumanChoice = 'paper'
    } else if (HumanChoice === 'scissors' || HumanChoice === 'Scissors' || HumanChoice === 'SCISSORS') {
        HumanChoice = 'scissors'
    } else {alert('Sorry, thats not a valid answer. Try again!')}

}

// Game logic and Score Adder

function playRound(HumanChoice, ComputerChoice) {
    
    if (HumanChoice === ComputerChoice) {
        alert('Draw!')
    } else if ((HumanChoice === 'rock' && ComputerChoice === 'scissors') || (HumanChoice === 'paper' && ComputerChoice === 'rock') || (HumanChoice === 'scissors' && ComputerChoice === 'paper')) {
        alert('Congratulations, you won that round. The computers choice was ' + ComputerChoice)
        humanScore++; 
    } else {
        alert('Sorry, You lost that round. The computers choice was ' + ComputerChoice)
        computerScore++;
    }
    
}

// Game Initialization and Score Logic 

function playGame() {

    getComputerChoice()
    getHumanChoice()
    playRound(HumanChoice, ComputerChoice)
    
}

// Game Looping Mechanic 

for (gameRounds; gameRounds < 5; gameRounds++) {
    
    playGame()
    console.log(humanScore)
    console.log(computerScore)
    
} 

// Game Results Decleration

if (computerScore > humanScore) {
    alert('Sorry, you lost!')
} else if (computerScore == humanScore) {
    alert('Its a draw!')
} else if (computerScore < humanScore) {
    alert ('Congratulations, you won!')
}

// Complete